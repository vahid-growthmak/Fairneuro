import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Line-icon set matching the design system: 24px grid, 1.6 stroke,
 * round caps/joins, no fills. Colour comes from `currentColor`.
 */
function Svg({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const Brain = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 5.6a3 3 0 0 0-5.1-1.1 2.6 2.6 0 0 0-2.6 3 2.7 2.7 0 0 0-1.1 4.3 2.7 2.7 0 0 0 1.6 3.8 2.7 2.7 0 0 0 3.6 2.5 2.6 2.6 0 0 0 3.6.5Z" />
    <path d="M12 5.6a3 3 0 0 1 5.1-1.1 2.6 2.6 0 0 1 2.6 3 2.7 2.7 0 0 1 1.1 4.3 2.7 2.7 0 0 1-1.6 3.8 2.7 2.7 0 0 1-3.6 2.5 2.6 2.6 0 0 1-3.6.5Z" />
    <path d="M12 5.6v13.5" />
    <path d="M8.8 9.2c-1.1.5-1.6 1.4-1.5 2.6M8 14.3c-.9.4-1.4 1-1.5 1.9M15.2 9.2c1.1.5 1.6 1.4 1.5 2.6M16 14.3c.9.4 1.4 1 1.5 1.9" />
  </Svg>
);

export const Person = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="7.6" r="3.9" />
    <path d="M4.6 20.4a7.4 7.4 0 0 1 14.8 0Z" />
  </Svg>
);

export const People = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="9" cy="8.5" r="2.8" />
    <circle cx="16.5" cy="10" r="2.2" />
    <path d="M3.5 18.5a5.5 5.5 0 0 1 11 0" />
    <path d="M15 15.2a4.6 4.6 0 0 1 5.5 3.3" />
  </Svg>
);

export const TwoHeads = (p: IconProps) => (
  <Svg {...p}>
    {/* left head, three-quarter view */}
    <circle cx="8.2" cy="8.4" r="3.4" />
    <path d="M3 19.8a5.2 5.2 0 0 1 10.4 0" />
    {/* right head, overlapping */}
    <circle cx="16.4" cy="9.6" r="3" />
    <path d="M12.6 19.8a4.6 4.6 0 0 1 8.8-1.9" />
  </Svg>
);

export const Book = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 7.2C10.1 5.6 7.6 4.9 4.3 5.2a.8.8 0 0 0-.7.8v10.6a.8.8 0 0 0 .9.8c3-.3 5.3.3 7.5 2" />
    <path d="M12 7.2c1.9-1.6 4.4-2.3 7.7-2a.8.8 0 0 1 .7.8v10.6a.8.8 0 0 1-.9.8c-3-.3-5.3.3-7.5 2" />
    <path d="M12 7.2v12.2" />
  </Svg>
);

export const Globe = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.2" />
    <path d="M3.8 12h16.4" />
    <path d="M12 3.8c2.1 2.2 3.2 5.1 3.2 8.2S14.1 18 12 20.2C9.9 18 8.8 15.1 8.8 12S9.9 6 12 3.8Z" />
  </Svg>
);

export const Star = (p: IconProps) => (
  <Svg {...p}>
    <path d="m12 4.2 2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.6-4.8 2.6.9-5.4-3.9-3.8 5.4-.8Z" />
  </Svg>
);

export const ShieldCheck = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.4 5.2 6v5.6c0 4 2.8 7.6 6.8 8.9 4-1.3 6.8-4.9 6.8-8.9V6Z" />
    <path d="m9.2 12.1 2 2 3.6-3.9" />
  </Svg>
);

export const ShieldLock = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.4 5.2 6v5.6c0 4 2.8 7.6 6.8 8.9 4-1.3 6.8-4.9 6.8-8.9V6Z" />
    <rect x="9.8" y="11.2" width="4.4" height="3.8" rx="0.8" />
    <path d="M10.7 11.2v-1a1.3 1.3 0 0 1 2.6 0v1" />
  </Svg>
);

export const Lock = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5.4" y="10.4" width="13.2" height="9.2" rx="2" />
    <path d="M8.4 10.4V7.9a3.6 3.6 0 0 1 7.2 0v2.5" />
    <path d="M12 14v2.2" />
  </Svg>
);

export const Heart = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 19.6S4.4 15.3 4.4 10a3.9 3.9 0 0 1 7.6-1.3A3.9 3.9 0 0 1 19.6 10c0 5.3-7.6 9.6-7.6 9.6Z" />
  </Svg>
);

export const HeartHand = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 11.4S8.2 9 8.2 6.4A2 2 0 0 1 12 5.6a2 2 0 0 1 3.8.8c0 2.6-3.8 5-3.8 5Z" />
    <path d="M3.6 14.6h3l2.6 1.8h3.2a1.2 1.2 0 0 1 0 2.4h-2" />
    <path d="M9.2 16.4h3.6l5-2.6a1.4 1.4 0 0 1 1.6 2.3l-4.6 3.4a3 3 0 0 1-1.8.6H6.6l-3-1.6" />
  </Svg>
);

export const Leaf = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 19c0-7 4.4-11.2 14-11.4C19 15.2 14.6 19.2 8 19Z" />
    <path d="M5.4 19.6C7.8 15.4 11 12.4 15 10.6" />
  </Svg>
);

export const Chat = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.4 16.6V7.6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8.4Z" />
    <path d="M8.6 9.6h6.8M8.6 12.4h4.4" />
  </Svg>
);

export const Chats = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.6 14.4V7a1.8 1.8 0 0 1 1.8-1.8h8.4A1.8 1.8 0 0 1 15.6 7v4.6a1.8 1.8 0 0 1-1.8 1.8H6.8Z" />
    <path d="M8.6 16.2v.8a1.8 1.8 0 0 0 1.8 1.8h6.2l2.8 2.2v-7a1.8 1.8 0 0 0-1.8-1.8h-1.6" />
  </Svg>
);

export const Clipboard = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5.6" y="4.8" width="12.8" height="15" rx="2" />
    <path d="M9.4 4.8V3.6h5.2v1.2" />
    <path d="M9 10.2h6M9 13.4h6M9 16.4h3.6" />
  </Svg>
);

export const ClipboardCheck = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5.6" y="4.8" width="12.8" height="15" rx="2" />
    <path d="M9.4 4.8V3.6h5.2v1.2" />
    <path d="m9.2 12.4 1.8 1.8 3.8-4" />
  </Svg>
);

export const Document = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14 3.8H7.4a1.8 1.8 0 0 0-1.8 1.8v12.8a1.8 1.8 0 0 0 1.8 1.8h9.2a1.8 1.8 0 0 0 1.8-1.8V8.2Z" />
    <path d="M14 3.8v4.4h4.4" />
    <path d="M9 13h6M9 16h4" />
  </Svg>
);

export const Calendar = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4.2" y="5.6" width="15.6" height="14" rx="2" />
    <path d="M4.2 9.8h15.6M8.6 3.8v3.4M15.4 3.8v3.4" />
    <path d="M8.4 13h1.6M14 13h1.6M8.4 16.2h1.6M14 16.2h1.6" />
  </Svg>
);

export const CalendarCheck = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4.2" y="5.6" width="15.6" height="14" rx="2" />
    <path d="M4.2 9.8h15.6M8.6 3.8v3.4M15.4 3.8v3.4" />
    <path d="m9.2 14 1.8 1.8 3.8-3.8" />
  </Svg>
);

export const Clock = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.2" />
    <path d="M12 7.4V12l3 1.8" />
  </Svg>
);

export const Target = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="7.6" />
    <circle cx="12" cy="12" r="3.4" />
    <path d="m14.8 9.2 4-4M16.4 5.6V9h3.4" />
  </Svg>
);

export const Bulb = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9.4 16.6a5.4 5.4 0 1 1 5.2 0v1.6a1.4 1.4 0 0 1-1.4 1.4h-2.4a1.4 1.4 0 0 1-1.4-1.4Z" />
    <path d="M9.8 19.6h4.4" />
  </Svg>
);

export const Chart = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.6 19.4h14.8" />
    <rect x="6.4" y="12.4" width="3" height="7" rx="0.9" />
    <rect x="11" y="8.4" width="3" height="11" rx="0.9" />
    <rect x="15.6" y="5.4" width="3" height="14" rx="0.9" />
  </Svg>
);

export const TrendUp = (p: IconProps) => (
  <Svg {...p}>
    <path d="m4.6 16.4 4.6-4.8 3.2 3.2 6.6-7" />
    <path d="M15 7.8h4v4" />
  </Svg>
);

export const Briefcase = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.6" y="7.6" width="16.8" height="11.6" rx="2" />
    <path d="M9 7.6V6.2a1.6 1.6 0 0 1 1.6-1.6h2.8A1.6 1.6 0 0 1 15 6.2v1.4" />
    <path d="M3.6 12.4h16.8" />
  </Svg>
);

export const GradCap = (p: IconProps) => (
  <Svg {...p}>
    <path d="m12 5-8.4 3.8L12 12.6l8.4-3.8Z" />
    <path d="M7.2 10.6v4.2c0 1.4 2.2 2.6 4.8 2.6s4.8-1.2 4.8-2.6v-4.2" />
    <path d="M20.4 8.8v5" />
  </Svg>
);

export const School = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.4 19.4V9.6L12 5l7.6 4.6v9.8Z" />
    <path d="M9.6 19.4v-5.2h4.8v5.2" />
    <path d="M10.4 10.4h3.2" />
  </Svg>
);

export const Laptop = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5" y="6" width="14" height="9.4" rx="1.6" />
    <path d="M3.2 18.4h17.6" />
  </Svg>
);

export const Puzzle = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9.6 4.8h4.8v2a1.7 1.7 0 1 0 2.6 1.4v3h2a1.7 1.7 0 1 1-1.4 2.6h-.6v4.8H9.6v-2a1.7 1.7 0 1 1-2.6-1.4H4.8V9.6h2A1.7 1.7 0 1 0 9.6 6.8Z" />
  </Svg>
);

export const Infinity = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9 12a3 3 0 1 1-3 3c0-2 1.6-3 3-3 2.8 0 3.2 6 6 6a3 3 0 1 0-3-3c0 2-1.6 3-3 3" />
  </Svg>
);

export const Handshake = (p: IconProps) => (
  <Svg {...p}>
    <path d="m11.4 8.4-2 2a1.5 1.5 0 0 0 2.1 2.1l1.1-1.1 3 3a1.5 1.5 0 0 1-2.1 2.1" />
    <path d="m13.5 16.5-.9-.9M9.6 6.6h4.8l5 5-2.4 2.4" />
    <path d="M9.6 6.6 4.6 9.4l2.8 3" />
  </Svg>
);

export const Headset = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 14.4v-2a7 7 0 0 1 14 0v2" />
    <rect x="3.4" y="13.4" width="3.4" height="5.2" rx="1.5" />
    <rect x="17.2" y="13.4" width="3.4" height="5.2" rx="1.5" />
    <path d="M18.9 18.6v.6a2 2 0 0 1-2 2h-2.4" />
  </Svg>
);

export const Question = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.4" />
    <path d="M9.8 9.6a2.2 2.2 0 1 1 3 2.1v1.4" />
    <path d="M12.8 16.4h-.02" />
  </Svg>
);

export const CheckCircle = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.4" />
    <path d="m8.6 12.2 2.3 2.3 4.5-4.8" />
  </Svg>
);

export const Check = (p: IconProps) => (
  <Svg {...p}>
    <path d="m5 12.6 4.4 4.4L19 7.4" />
  </Svg>
);

export const ArrowRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.5 12h15M13.4 6l6 6-6 6" />
  </Svg>
);

export const ChevronRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />
  </Svg>
);

export const ChevronDown = (p: IconProps) => (
  <Svg {...p}>
    <path d="m5.5 9 6.5 6.5L18.5 9" />
  </Svg>
);

export const PlayCircle = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.4" />
    <path d="m10.4 9.2 4.6 2.8-4.6 2.8Z" />
  </Svg>
);

export const Phone = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 3.8 9.4 4l1.4 3.4-1.9 1.4a11 11 0 0 0 5.3 5.3l1.4-1.9 3.4 1.4.2 2.4a1.7 1.7 0 0 1-1.8 1.8A15.4 15.4 0 0 1 5.2 5.6 1.7 1.7 0 0 1 7 3.8Z" />
  </Svg>
);

export const Mail = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.4" y="5.6" width="17.2" height="12.8" rx="2" />
    <path d="m3.9 7 8.1 5.8L20.1 7" />
  </Svg>
);

export const Pin = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 20.6s6.4-5.6 6.4-10.2a6.4 6.4 0 1 0-12.8 0C5.6 15 12 20.6 12 20.6Z" />
    <circle cx="12" cy="10.2" r="2.4" />
  </Svg>
);

export const Search = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="10.8" cy="10.8" r="6.2" />
    <path d="m15.4 15.4 4.2 4.2" />
  </Svg>
);

export const Sliders = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.4 8h5.2M13.6 8h6M4.4 16h6M14.4 16h5.2" />
    <circle cx="11.6" cy="8" r="2" />
    <circle cx="12.4" cy="16" r="2" />
  </Svg>
);

export const Gear = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="2.9" />
    <path d="M12 3.6v2.2M12 18.2v2.2M20.4 12h-2.2M5.8 12H3.6M18 6l-1.6 1.6M7.6 16.4 6 18M18 18l-1.6-1.6M7.6 7.6 6 6" />
  </Svg>
);

export const Waves = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.6 9.4c1.5-1.6 3-1.6 4.5 0s3 1.6 4.5 0 3-1.6 4.5 0 2.3 1.4 3.3.6" />
    <path d="M3.6 14.6c1.5-1.6 3-1.6 4.5 0s3 1.6 4.5 0 3-1.6 4.5 0 2.3 1.4 3.3.6" />
  </Svg>
);

export const Alarm = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="13.2" r="6.6" />
    <path d="M12 10v3.2l2.2 1.4" />
    <path d="m4.6 5.6 2.6-2M19.4 5.6l-2.6-2" />
  </Svg>
);

export const Cloud = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7.4 17.6a3.8 3.8 0 0 1-.4-7.6 5 5 0 0 1 9.6-1 3.9 3.9 0 0 1 .2 8.6Z" />
  </Svg>
);

export const Head = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14.8 19.6v-2.4h1.6a1.4 1.4 0 0 0 1.4-1.4v-2l1.6-1-1.9-3.4A7 7 0 0 0 5.6 12c0 2 .9 3.4 1.8 4.4v3.2" />
    <circle cx="13.4" cy="11.4" r="1" />
  </Svg>
);

export const HeadHeart = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14.8 19.6v-2.4h1.6a1.4 1.4 0 0 0 1.4-1.4v-2l1.6-1-1.9-3.4A7 7 0 0 0 5.6 12c0 2 .9 3.4 1.8 4.4v3.2" />
    <path d="M12.6 13.4s-2.2-1.3-2.2-2.7a1.15 1.15 0 0 1 2.2-.4 1.15 1.15 0 0 1 2.2.4c0 1.4-2.2 2.7-2.2 2.7Z" />
  </Svg>
);

export const Rosette = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="9.4" r="5.2" />
    <path d="m9.2 13.8-1.4 6 4.2-2.2 4.2 2.2-1.4-6" />
    <path d="m11.2 7.6.8-1.6.8 1.6 1.8.3-1.3 1.3.3 1.8-1.6-.9-1.6.9.3-1.8-1.3-1.3Z" />
  </Svg>
);

export const Network = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="5.4" r="2.2" />
    <circle cx="5.8" cy="17.4" r="2.2" />
    <circle cx="18.2" cy="17.4" r="2.2" />
    <path d="m10.6 7.4-3.4 8M13.4 7.4l3.4 8M8 17.4h8" />
  </Svg>
);

export const Steps = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.6 19.4h4.2v-4h4.2v-4h4.2v-4h4.2" />
  </Svg>
);

export const Signpost = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.6v16.8" />
    <path d="M12 6h6.2l2 2.2-2 2.2H12Z" />
    <path d="M12 13h-6.2l-2 2.2 2 2.2H12Z" />
  </Svg>
);

export const Folder = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.8 18.4V6.6a1.4 1.4 0 0 1 1.4-1.4h3.9l2 2.4h7.7a1.4 1.4 0 0 1 1.4 1.4v9.4a1.4 1.4 0 0 1-1.4 1.4H5.2a1.4 1.4 0 0 1-1.4-1.4Z" />
  </Svg>
);

export const Pencil = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.6 19.4h3.2L19 8.2a1.9 1.9 0 0 0-2.7-2.7L5.1 16.7Z" />
    <path d="m14.9 6.9 2.7 2.7" />
  </Svg>
);

export const Numbers = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6.4 9.6 8 8.4v7.2M13.4 9.2a2 2 0 1 1 3.4 1.5l-3.6 4.9h4" />
  </Svg>
);

export const Balance = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 4.4v15.2M7.2 19.6h9.6" />
    <path d="M4 9.6h16M4 9.6 6.4 15h-4.8ZM20 9.6 22.4 15h-4.8Z" />
  </Svg>
);

export const Battery = (p: IconProps) => (
  <Svg {...p}>
    <rect x="7.6" y="5.4" width="8.8" height="14.2" rx="2" />
    <path d="M10.4 5.4V3.8h3.2v1.6" />
    <path d="M10 15.6h4" />
  </Svg>
);

export const Running = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="14.4" cy="5.2" r="1.8" />
    <path d="m8.2 20 2.8-4.4-2-2.6 1.4-3.8 3.4-1 2.6 2.4 2.8.8" />
    <path d="m11 15.6 3 1.4 1.4 3.6M9.4 9.2 6 10.4" />
  </Svg>
);

export const Pills = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.4" y="10" width="10.4" height="6.2" rx="3.1" transform="rotate(-38 3.4 10)" />
    <circle cx="16.6" cy="16" r="4.2" />
    <path d="M13.7 13.1 19.5 19" />
  </Svg>
);

export const Stethoscope = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 3.8v5a3.6 3.6 0 0 0 7.2 0v-5" />
    <path d="M4.4 3.8h3.2M11.6 3.8h3.2" />
    <path d="M9.6 12.4v2a4.4 4.4 0 0 0 8.8 0v-1.2" />
    <circle cx="18.4" cy="10.8" r="2" />
  </Svg>
);

export const Rx = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4.4" y="3.8" width="15.2" height="16.4" rx="2" />
    <path d="M8.6 16.6V8.4h2.6a2.1 2.1 0 0 1 0 4.2H8.6l4.4 4M14.4 12.4l4 4.2M18.4 12.4l-4 4.2" />
  </Svg>
);

export const Sparkle = (p: IconProps) => (
  <Svg {...p}>
    <path d="m12 3.8 1.9 4.9 4.9 1.9-4.9 1.9L12 17.4l-1.9-4.9-4.9-1.9 4.9-1.9Z" />
    <path d="M18.6 16.2 19.4 18l1.8.8-1.8.8-.8 1.8-.8-1.8-1.8-.8 1.8-.8Z" />
  </Svg>
);

export const Quote = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M9.6 5.4c-3 1.5-4.8 4-4.8 7.6v5.6h6.4v-6.4H8.4c0-2.1.8-3.6 2.6-4.7Zm9.6 0c-3 1.5-4.8 4-4.8 7.6v5.6h6.4v-6.4H18c0-2.1.8-3.6 2.6-4.7Z" />
  </svg>
);

export const StarFilled = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="m12 3.6 2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 10l6-.9Z" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const Close = (p: IconProps) => (
  <Svg {...p}>
    <path d="m6.4 6.4 11.2 11.2M17.6 6.4 6.4 17.6" />
  </Svg>
);

export const Instagram = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4" y="4" width="16" height="16" rx="4.4" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" stroke="none" />
  </Svg>
);

export const Facebook = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14.4 8.2h2V5.4h-2.2a3.3 3.3 0 0 0-3.3 3.3v2H9v2.8h1.9v6.1h2.9v-6.1h2l.4-2.8h-2.4v-1.6a.9.9 0 0 1 .6-.9Z" />
  </Svg>
);

export const LinkedIn = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4" y="4" width="16" height="16" rx="3.4" />
    <path d="M8 10.8v5.4M8 8.1v.02" />
    <path d="M11.6 16.2v-5.4M11.6 12.6a2 2 0 0 1 4 0v3.6" />
  </Svg>
);

export const YouTube = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="6.4" width="18" height="11.2" rx="3.2" />
    <path d="m10.6 9.8 4.6 2.6-4.6 2.6Z" />
  </Svg>
);
