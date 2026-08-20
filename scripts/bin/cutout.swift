import Foundation
import Vision
import CoreImage

// Person cut-out using Vision's segmentation model (macOS 12+).
// usage: cutout <input> <output.png>
let args = CommandLine.arguments
guard args.count == 3 else { FileHandle.standardError.write("usage: cutout <in> <out.png>\n".data(using:.utf8)!); exit(2) }
let inURL = URL(fileURLWithPath: args[1])
let outURL = URL(fileURLWithPath: args[2])

guard let image = CIImage(contentsOf: inURL) else {
    FileHandle.standardError.write("cannot read \(args[1])\n".data(using:.utf8)!); exit(1)
}

let request = VNGeneratePersonSegmentationRequest()
request.qualityLevel = .accurate
request.outputPixelFormat = kCVPixelFormatType_OneComponent8

let handler = VNImageRequestHandler(ciImage: image, options: [:])
do { try handler.perform([request]) } catch {
    FileHandle.standardError.write("vision failed: \(error)\n".data(using:.utf8)!); exit(1)
}

guard let observation = request.results?.first else {
    FileHandle.standardError.write("no person found\n".data(using:.utf8)!); exit(3)
}

// Face geometry, used by the caller to reject crops that cut the head off or
// leave the subject too small in frame. Vision's origin is bottom-left.
var faceCount = 0
var faceHeight = 0.0
var faceTop = 1.0      // distance from the top of the frame, 0 = touching it
var faceInset = 1.0    // smallest distance to any frame edge
let faceRequest = VNDetectFaceRectanglesRequest()
if (try? VNImageRequestHandler(ciImage: image, options: [:]).perform([faceRequest])) != nil,
   let faces = faceRequest.results {
    faceCount = faces.count
    for f in faces {
        let b = f.boundingBox
        if Double(b.height) > faceHeight {
            faceHeight = Double(b.height)
            faceTop = 1.0 - Double(b.maxY)
            faceInset = min(min(Double(b.minX), 1.0 - Double(b.maxX)),
                            min(Double(b.minY), 1.0 - Double(b.maxY)))
        }
    }
}

var mask = CIImage(cvPixelBuffer: observation.pixelBuffer)
mask = mask.transformed(by: CGAffineTransform(
    scaleX: image.extent.width / mask.extent.width,
    y: image.extent.height / mask.extent.height))

// Soften the mask edge a touch so hair and shoulders don't look die-cut.
mask = mask.applyingFilter("CIGaussianBlur", parameters: [kCIInputRadiusKey: 1.2]).cropped(to: image.extent)

guard let blended = CIFilter(name: "CIBlendWithMask", parameters: [
    kCIInputImageKey: image,
    kCIInputBackgroundImageKey: CIImage.empty(),
    kCIInputMaskImageKey: mask,
])?.outputImage?.cropped(to: image.extent) else {
    FileHandle.standardError.write("blend failed\n".data(using:.utf8)!); exit(1)
}

let ctx = CIContext(options: [.workingColorSpace: CGColorSpaceCreateDeviceRGB()])
do {
    try ctx.writePNGRepresentation(of: blended, to: outURL,
        format: .RGBA8, colorSpace: CGColorSpaceCreateDeviceRGB())
    print("{\"faces\": \(faceCount), \"faceHeight\": \(faceHeight), \"faceTop\": \(faceTop), \"faceInset\": \(faceInset)}")
} catch {
    FileHandle.standardError.write("write failed: \(error)\n".data(using:.utf8)!); exit(1)
}
