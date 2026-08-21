/**
 * Schema for the "Apply to Become a FairNeuro Assessor" application.
 *
 * The application is long (17 sections) and several sections only apply to
 * certain assessors, so it is described as data and rendered generically by
 * `AssessorApplicationForm`. Conditional visibility is expressed with `showIf`,
 * which matches the selected values of an earlier choice field.
 */

export type FieldKind =
  | 'text'
  | 'email'
  | 'tel'
  | 'url'
  | 'date'
  | 'textarea'
  | 'radio'
  | 'checkboxes'
  | 'file'
  | 'note'
  | 'subheading';

export interface ShowIf {
  /** Name of an earlier radio/checkbox field. */
  field: string;
  /** Visible when any of these options is selected. */
  anyOf: string[];
  /** Alternatively visible when every one of these options is selected. */
  allOf?: string[];
}

export interface Field {
  kind: FieldKind;
  /** Omitted for `note` and `subheading`, which carry their copy in `text`. */
  name?: string;
  label?: string;
  text?: string;
  /** Bold lead-in shown before `text` on a note, e.g. "Important:". */
  lead?: string;
  required?: boolean;
  help?: string;
  /** Bulleted guidance shown beneath the label. */
  helpList?: string[];
  options?: string[];
  placeholder?: string;
  rows?: number;
  multiple?: boolean;
  accept?: string;
  autoComplete?: string;
  showIf?: ShowIf;
  /** Renders the field at half width on wider screens. */
  half?: boolean;
}

export interface Section {
  /** "SECTION 1" etc. — kept as its own field so the heading can be styled. */
  number: number;
  title: string;
  intro?: string;
  fields: Field[];
  showIf?: ShowIf;
}

const YES_NO_LIMITED = ['Yes', 'No', 'Limited experience'];
const SELECT_ALL = 'Select all that apply.';

/** Field name of the master "which assessments" question — drives sections 6–9. */
export const AREAS = 'assessment_areas';

export const ADHD = 'ADHD';
export const AUTISM = 'Autism';
export const DYSLEXIA = 'Dyslexia';
export const COMBINED = 'ADHD + Autism combined pathway';
export const OTHER_AREA = 'Other relevant neurodevelopmental or SpLD assessment';

function referenceFields(n: 1 | 2): Field[] {
  const p = `reference_${n}_`;
  return [
    { kind: 'subheading', text: `Professional Reference ${n}` },
    { kind: 'text', name: `${p}name`, label: 'Name', half: true },
    { kind: 'text', name: `${p}job_title`, label: 'Job title', half: true },
    { kind: 'text', name: `${p}organisation`, label: 'Organisation', half: true },
    {
      kind: 'text',
      name: `${p}relationship`,
      label: 'Professional relationship to you',
      half: true,
    },
    { kind: 'email', name: `${p}email`, label: 'Email', half: true },
    { kind: 'tel', name: `${p}phone`, label: 'Telephone', half: true },
  ];
}

export const sections: Section[] = [
  {
    number: 1,
    title: 'Your Details',
    fields: [
      {
        kind: 'text',
        name: 'full_name',
        label: 'Full name',
        required: true,
        autoComplete: 'name',
        half: true,
      },
      {
        kind: 'email',
        name: 'email',
        label: 'Email address',
        required: true,
        autoComplete: 'email',
        half: true,
      },
      {
        kind: 'tel',
        name: 'telephone',
        label: 'Telephone number',
        required: true,
        autoComplete: 'tel',
        half: true,
      },
      {
        kind: 'text',
        name: 'job_title',
        label: 'Current professional/job title',
        required: true,
        half: true,
        help: 'Example: Clinical Psychologist, Consultant Psychiatrist, Specialist Nurse, Specialist Teacher/Assessor, Educational Psychologist.',
      },
      {
        kind: 'text',
        name: 'location',
        label: 'Where are you based?',
        required: true,
        half: true,
        help: 'Town/city and region only.',
      },
      {
        kind: 'radio',
        name: 'uk_eligibility',
        label: 'Are you currently eligible to work professionally in the UK?',
        required: true,
        options: ['Yes', 'No', 'Please discuss with me'],
      },
      {
        kind: 'url',
        name: 'linkedin',
        label: 'LinkedIn profile',
        half: true,
        placeholder: 'Optional',
      },
      {
        kind: 'url',
        name: 'website',
        label: 'Professional website/profile',
        half: true,
        placeholder: 'Optional',
      },
    ],
  },

  {
    number: 2,
    title: 'Assessment Areas',
    fields: [
      {
        kind: 'checkboxes',
        name: AREAS,
        label:
          'Which assessments are you professionally qualified and experienced to undertake?',
        required: true,
        help: SELECT_ALL,
        options: [ADHD, AUTISM, DYSLEXIA, COMBINED, OTHER_AREA],
      },
      {
        kind: 'text',
        name: 'assessment_areas_other',
        label: 'If Other, please specify:',
        showIf: { field: AREAS, anyOf: [OTHER_AREA] },
      },
      {
        kind: 'checkboxes',
        name: 'age_groups',
        label: 'Which age groups do you currently assess?',
        required: true,
        help: SELECT_ALL,
        options: [
          'Children under 12',
          'Young people aged 12–17',
          'Adults aged 18+',
          'I work across all age groups',
        ],
      },
      {
        kind: 'checkboxes',
        name: 'delivery_preference',
        label: 'How would you prefer to deliver assessments?',
        required: true,
        help: SELECT_ALL,
        options: ['Online', 'Face-to-face', 'Hybrid', 'Flexible depending on the assessment'],
      },
    ],
  },

  {
    number: 3,
    title: 'Professional Qualifications',
    fields: [
      {
        kind: 'textarea',
        name: 'qualifications',
        label: 'Please list your relevant professional qualifications.',
        required: true,
        help: 'Include:',
        helpList: [
          'qualification',
          'institution',
          'year completed',
          'level of qualification where relevant',
        ],
        rows: 6,
      },
      {
        kind: 'radio',
        name: 'highest_qualification',
        label: 'What is your highest relevant professional qualification?',
        required: true,
        options: [
          'Undergraduate degree',
          'Postgraduate Certificate',
          'Postgraduate Diploma',
          "Master's degree",
          'Doctorate',
          'Medical qualification',
          'Level 7 specialist assessment qualification',
          'Other',
        ],
      },
      {
        kind: 'text',
        name: 'highest_qualification_other',
        label: 'If Other:',
        showIf: { field: 'highest_qualification', anyOf: ['Other'] },
      },
      {
        kind: 'radio',
        name: 'registration_held',
        label:
          'Do you currently hold professional registration, accreditation or certification relevant to the assessments you undertake?',
        required: true,
        options: ['Yes', 'No', 'In progress', 'Not applicable to my professional route'],
      },
      {
        kind: 'checkboxes',
        name: 'professional_body',
        label: 'Professional body / regulator',
        help: SELECT_ALL,
        options: [
          'GMC',
          'HCPC',
          'NMC',
          'BDA',
          'SASC / current APC',
          'PATOSS',
          'Dyslexia Guild',
          'Other relevant professional body',
          'Not applicable',
        ],
      },
      {
        kind: 'text',
        name: 'registration_number',
        label: 'Professional registration / membership number',
        half: true,
      },
      {
        kind: 'date',
        name: 'registration_expiry',
        label: 'Expiry / renewal date, where applicable',
        half: true,
      },
      {
        kind: 'file',
        name: 'registration_evidence',
        label:
          'Please upload evidence of your relevant professional registration, accreditation or certification.',
        help: 'Accepted formats: PDF, JPG, PNG.',
        accept: '.pdf,.jpg,.jpeg,.png',
      },
    ],
  },

  {
    number: 4,
    title: 'Professional Experience',
    fields: [
      {
        kind: 'radio',
        name: 'years_experience',
        label: 'How many years of relevant professional experience do you have?',
        required: true,
        options: ['Less than 1 year', '1–2 years', '3–5 years', '6–10 years', 'More than 10 years'],
      },
      {
        kind: 'radio',
        name: 'assessments_completed',
        label:
          'Approximately how many diagnostic or specialist assessments have you personally completed?',
        required: true,
        options: [
          'Fewer than 25',
          '25–49',
          '50–99',
          '100–249',
          '250–499',
          '500+',
          'I am newly qualified in diagnostic assessment',
        ],
      },
      {
        kind: 'textarea',
        name: 'experience_summary',
        label: 'Please briefly describe your experience assessing neurodivergent individuals.',
        required: true,
        help: 'You may wish to include the settings you have worked in, populations you assess and the types of cases you routinely manage.',
        rows: 6,
      },
      {
        kind: 'checkboxes',
        name: 'settings',
        label: 'Which settings have you previously worked in?',
        help: SELECT_ALL,
        options: [
          'NHS',
          'Private healthcare',
          'Independent assessment service',
          'Education',
          'CAMHS',
          'Adult mental health',
          'Paediatrics',
          'Community services',
          'University / higher education',
          'Occupational health / workplace',
          'Independent practice',
          'Other',
        ],
      },
    ],
  },

  {
    number: 5,
    title: 'Your Assessment Practice',
    fields: [
      {
        kind: 'textarea',
        name: 'practice_process',
        label:
          'Please describe your usual assessment process from referral through to outcome and report.',
        required: true,
        rows: 6,
      },
      {
        kind: 'textarea',
        name: 'practice_complex_cases',
        label:
          'How do you approach cases where information is complex, conflicting or insufficient to support a clear diagnostic conclusion?',
        required: true,
        rows: 5,
      },
      {
        kind: 'textarea',
        name: 'practice_differentials',
        label:
          'How do you consider alternative explanations and co-occurring conditions during an assessment?',
        required: true,
        rows: 5,
      },
      {
        kind: 'textarea',
        name: 'practice_person_centred',
        label: 'How do you ensure your assessments are person-centred and neurodiversity-affirming?',
        required: true,
        rows: 5,
      },
      {
        kind: 'textarea',
        name: 'practice_adjustments',
        label:
          'How do you adapt your approach for individuals with different communication, sensory, cultural or accessibility needs?',
        required: true,
        rows: 5,
      },
      {
        kind: 'textarea',
        name: 'practice_no_diagnosis',
        label: 'How do you communicate an outcome where diagnostic criteria are not met?',
        required: true,
        rows: 5,
      },
    ],
  },

  {
    number: 6,
    title: 'ADHD Assessors',
    showIf: { field: AREAS, anyOf: [ADHD, COMBINED] },
    fields: [
      {
        kind: 'text',
        name: 'adhd_primary_qualification',
        label:
          'What is your primary professional qualification permitting you to undertake ADHD diagnostic assessment?',
        required: true,
      },
      {
        kind: 'textarea',
        name: 'adhd_training',
        label: 'Please describe your specialist training in ADHD diagnosis and assessment.',
        required: true,
        help: 'Include course/provider and year where possible.',
        rows: 5,
      },
      {
        kind: 'checkboxes',
        name: 'adhd_tools',
        label:
          'Which ADHD diagnostic frameworks, interviews or assessment tools are you trained and competent to use?',
        help: SELECT_ALL,
        options: [
          'DIVA-5',
          'ACE / ACE+',
          'DSM-based diagnostic interview',
          'Conners measures',
          'ASRS',
          'QbTest / QbCheck where relevant',
          'Other',
        ],
      },
      {
        kind: 'text',
        name: 'adhd_tools_other',
        label: 'If Other:',
        showIf: { field: 'adhd_tools', anyOf: ['Other'] },
      },
      {
        kind: 'radio',
        name: 'adhd_collateral',
        label:
          'Are you experienced in obtaining and interpreting developmental and collateral/informant information as part of ADHD assessment?',
        required: true,
        options: YES_NO_LIMITED,
      },
      {
        kind: 'radio',
        name: 'adhd_differentials',
        label:
          'Are you experienced in assessing differential diagnoses and commonly co-occurring presentations alongside ADHD?',
        required: true,
        options: YES_NO_LIMITED,
      },
      {
        kind: 'radio',
        name: 'adhd_age_groups',
        label: 'Do you currently assess:',
        options: ['Adults with ADHD', 'Children/young people with ADHD', 'Both'],
      },
      {
        kind: 'radio',
        name: 'adhd_independent_conclusion',
        label:
          'Are you able to independently reach and document an ADHD diagnostic conclusion within the scope of your professional competence?',
        required: true,
        options: ['Yes', 'No', 'Only as part of a wider clinical team'],
      },
      {
        kind: 'textarea',
        name: 'adhd_recent_experience',
        label: 'Please describe your recent ADHD assessment experience.',
        required: true,
        rows: 5,
      },
    ],
  },

  {
    number: 7,
    title: 'Autism Assessors',
    showIf: { field: AREAS, anyOf: [AUTISM, COMBINED] },
    fields: [
      {
        kind: 'text',
        name: 'autism_primary_qualification',
        label:
          'What is your primary professional qualification relevant to autism diagnostic assessment?',
        required: true,
      },
      {
        kind: 'textarea',
        name: 'autism_training',
        label:
          'Please describe your specialist training and experience in autism diagnosis and assessment.',
        required: true,
        rows: 5,
      },
      {
        kind: 'checkboxes',
        name: 'autism_tools',
        label:
          'Which autism assessment tools, interviews or frameworks are you formally trained and competent to use?',
        help: SELECT_ALL,
        options: [
          'ADOS-2',
          'ADI-R',
          'DISCO',
          '3Di',
          'Developmental diagnostic interview',
          'Other recognised assessment tool/framework',
        ],
      },
      {
        kind: 'text',
        name: 'autism_tools_other',
        label: 'If Other:',
        showIf: { field: 'autism_tools', anyOf: ['Other recognised assessment tool/framework'] },
      },
      {
        kind: 'radio',
        name: 'autism_developmental_history',
        label:
          'Do you have experience gathering developmental history and collateral/informant information as part of autism assessment?',
        required: true,
        options: YES_NO_LIMITED,
      },
      {
        kind: 'radio',
        name: 'autism_masking',
        label:
          'Do you have experience considering masking, sensory differences and presentations that may be less readily recognised?',
        required: true,
        options: YES_NO_LIMITED,
      },
      {
        kind: 'radio',
        name: 'autism_age_groups',
        label: 'Do you currently assess:',
        options: ['Autistic adults', 'Autistic children/young people', 'Both'],
      },
      {
        kind: 'radio',
        name: 'autism_working_model',
        label: 'Do you currently undertake autism diagnostic assessments:',
        options: [
          'Independently within my professional scope',
          'As part of a multidisciplinary team',
          'Both',
          'Other',
        ],
      },
      {
        kind: 'textarea',
        name: 'autism_recent_experience',
        label: 'Please describe your recent autism diagnostic assessment experience.',
        required: true,
        rows: 5,
      },
    ],
  },

  {
    number: 8,
    title: 'Dyslexia Assessors',
    showIf: { field: AREAS, anyOf: [DYSLEXIA] },
    fields: [
      {
        kind: 'checkboxes',
        name: 'dyslexia_route',
        label: 'Which route qualifies you to undertake diagnostic dyslexia assessment?',
        required: true,
        help: SELECT_ALL,
        options: [
          'Current Assessment Practising Certificate (APC)',
          'AMBDA',
          'AMBDA FE/HE',
          'Relevant Level 7 SpLD assessment qualification',
          'HCPC-registered psychologist with relevant SpLD expertise',
          'PATOSS recognised route',
          'Dyslexia Guild recognised route',
          'Other',
        ],
      },
      {
        kind: 'text',
        name: 'dyslexia_route_other',
        label: 'If Other:',
        showIf: { field: 'dyslexia_route', anyOf: ['Other'] },
      },
      {
        kind: 'radio',
        name: 'dyslexia_apc',
        label: 'Do you currently hold a valid Assessment Practising Certificate (APC)?',
        options: [
          'Yes',
          'No',
          'Application/renewal in progress',
          'Not applicable to my professional route',
        ],
      },
      {
        kind: 'text',
        name: 'dyslexia_apc_number',
        label: 'APC number',
        half: true,
        showIf: { field: 'dyslexia_apc', anyOf: ['Yes', 'Application/renewal in progress'] },
      },
      {
        kind: 'date',
        name: 'dyslexia_apc_expiry',
        label: 'APC expiry date',
        half: true,
        showIf: { field: 'dyslexia_apc', anyOf: ['Yes', 'Application/renewal in progress'] },
      },
      {
        kind: 'textarea',
        name: 'dyslexia_training',
        label:
          'Please describe your training in diagnostic assessment for dyslexia / specific learning differences.',
        required: true,
        rows: 5,
      },
      {
        kind: 'textarea',
        name: 'dyslexia_tools',
        label:
          'Which standardised assessment tools are you currently trained, competent and appropriately authorised to administer and interpret?',
        required: true,
        help: 'Please list the principal assessment batteries/tests you use.',
        rows: 5,
      },
      {
        kind: 'radio',
        name: 'dyslexia_age_groups',
        label: 'Do you currently assess:',
        options: ['Adults', 'Children/young people', 'FE/HE students', 'All of the above'],
      },
      {
        kind: 'radio',
        name: 'dyslexia_report_suitability',
        label:
          'Are your reports currently suitable for the settings in which you practise, including education or DSA-related purposes where applicable?',
        options: ['Yes', 'No', 'Not applicable', 'Please discuss with me'],
      },
      {
        kind: 'textarea',
        name: 'dyslexia_recent_experience',
        label: 'Please describe your recent dyslexia diagnostic assessment experience.',
        required: true,
        rows: 5,
      },
    ],
  },

  {
    number: 9,
    title: 'Combined ADHD + Autism Assessors',
    showIf: { field: AREAS, anyOf: [COMBINED], allOf: [ADHD, AUTISM] },
    fields: [
      {
        kind: 'radio',
        name: 'combined_experience',
        label:
          'Do you have experience assessing people where both ADHD and autism are being considered?',
        required: true,
        options: ['Yes, regularly', 'Yes, occasionally', 'Limited experience', 'No'],
      },
      {
        kind: 'radio',
        name: 'combined_competence',
        label: 'Are you professionally competent to contribute to both diagnostic pathways?',
        required: true,
        options: [
          'Yes',
          'No',
          'I contribute to one pathway and work alongside another professional for the other',
        ],
      },
      {
        kind: 'textarea',
        name: 'combined_summary',
        label:
          'Please briefly explain your experience with combined or overlapping ADHD/autism presentations.',
        rows: 5,
      },
    ],
  },

  {
    number: 10,
    title: 'Report Writing',
    fields: [
      {
        kind: 'radio',
        name: 'report_confidence',
        label:
          'Are you confident producing comprehensive professional diagnostic assessment reports?',
        required: true,
        options: ['Yes', 'No', 'With supervision'],
      },
      {
        kind: 'radio',
        name: 'report_turnaround',
        label:
          'Approximately how long does it usually take you to complete a report following an assessment?',
        required: true,
        options: [
          'Same day',
          '1–3 working days',
          '4–5 working days',
          '6–10 working days',
          'More than 10 working days',
        ],
      },
      {
        kind: 'textarea',
        name: 'report_quality',
        label: 'What do you consider essential in a high-quality diagnostic assessment report?',
        required: true,
        rows: 5,
      },
      {
        kind: 'file',
        name: 'report_sample',
        label: 'Please upload ONE anonymised example of a recent assessment report.',
      },
      {
        kind: 'note',
        lead: 'Important:',
        text: 'The report must be fully anonymised and must contain no identifiable client or patient information.',
      },
      {
        kind: 'radio',
        name: 'report_templates',
        label:
          'Would you be comfortable working to FairNeuro report templates and quality standards while maintaining your professional independence?',
        required: true,
        options: ['Yes', 'No', 'I would like to discuss this'],
      },
    ],
  },

  {
    number: 11,
    title: 'Safeguarding, Governance & Professional Practice',
    fields: [
      {
        kind: 'radio',
        name: 'indemnity_insurance',
        label:
          'Do you currently hold appropriate professional indemnity insurance for your assessment work?',
        required: true,
        options: ['Yes', 'No', 'In progress'],
      },
      { kind: 'text', name: 'insurer', label: 'Insurer / policy provider', half: true },
      {
        kind: 'date',
        name: 'indemnity_expiry',
        label: 'Professional indemnity expiry date',
        half: true,
      },
      {
        kind: 'radio',
        name: 'dbs',
        label: 'Do you currently hold an Enhanced DBS certificate?',
        required: true,
        options: ['Yes', 'No', 'In progress', 'Not applicable to my current client group'],
      },
      {
        kind: 'radio',
        name: 'dbs_update_service',
        label: 'Is your DBS registered with the Update Service?',
        options: ['Yes', 'No', 'Not applicable'],
      },
      {
        kind: 'radio',
        name: 'safeguarding_training',
        label: 'Have you completed safeguarding training relevant to your professional role?',
        required: true,
        options: ['Yes', 'No', 'Training due for renewal'],
      },
      {
        kind: 'date',
        name: 'safeguarding_training_date',
        label: 'Most recent safeguarding training date',
        half: true,
      },
      {
        kind: 'radio',
        name: 'policies',
        label: 'Are you comfortable working in accordance with FairNeuro policies relating to:',
        helpList: [
          'Safeguarding',
          'Confidentiality',
          'Data protection',
          'Clinical governance',
          'Equality and inclusion',
          'Professional boundaries',
          'Complaints and incident management',
        ],
        options: ['Yes', 'No', 'I would like further information'],
      },
      {
        kind: 'radio',
        name: 'practice_restrictions',
        label:
          'Are there currently any restrictions, conditions or ongoing investigations relating to your professional registration or ability to practise that FairNeuro would need to consider?',
        options: ['No', 'Yes'],
      },
      {
        kind: 'textarea',
        name: 'practice_restrictions_detail',
        label: 'If Yes: please provide relevant details.',
        help: 'Treated in confidence.',
        rows: 5,
        showIf: { field: 'practice_restrictions', anyOf: ['Yes'] },
      },
    ],
  },

  {
    number: 12,
    title: 'Capacity & Availability',
    fields: [
      {
        kind: 'radio',
        name: 'weekly_capacity',
        label:
          'Approximately how many assessments could you reliably complete per week, including the associated reports?',
        required: true,
        options: ['1', '2', '3', '4', '5', '6–10', '10+'],
      },
      {
        kind: 'checkboxes',
        name: 'available_days',
        label: 'Which days are you generally available?',
        options: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
      },
      {
        kind: 'checkboxes',
        name: 'available_times',
        label: 'What times are you generally available?',
        help: SELECT_ALL,
        options: ['Mornings', 'Afternoons', 'Evenings', 'Weekends', 'Flexible'],
      },
      {
        kind: 'radio',
        name: 'online_assessments',
        label:
          'Are you able to offer online assessments using secure video consultation technology?',
        required: true,
        options: ['Yes', 'No', 'Where clinically appropriate'],
      },
      {
        kind: 'radio',
        name: 'start_availability',
        label: 'How soon could you potentially begin accepting referrals?',
        required: true,
        options: [
          'Immediately',
          'Within 2 weeks',
          'Within 1 month',
          'Within 2–3 months',
          'Other',
        ],
      },
    ],
  },

  {
    number: 13,
    title: 'Working With FairNeuro',
    fields: [
      {
        kind: 'textarea',
        name: 'why_fairneuro',
        label: 'Why would you like to work with FairNeuro?',
        required: true,
        rows: 5,
      },
      {
        kind: 'textarea',
        name: 'excellent_experience',
        label:
          'What do you believe makes an excellent neurodevelopmental or SpLD assessment experience for a client?',
        required: true,
        rows: 5,
      },
      {
        kind: 'textarea',
        name: 'communication_style',
        label:
          'How would you describe your communication style when explaining an assessment outcome to a client or family?',
        required: true,
        rows: 5,
      },
      {
        kind: 'radio',
        name: 'onward_support',
        label:
          'Are you comfortable working within a service where clients may be referred onwards for appropriate coaching, education, workplace or other post-assessment support?',
        required: true,
        options: ['Yes', 'No', 'I would like more information'],
      },
      {
        kind: 'radio',
        name: 'quality_assurance',
        label:
          'Would you be willing to participate in appropriate quality assurance, peer review, supervision or CPD processes where required by FairNeuro?',
        required: true,
        options: ['Yes', 'No', 'I would like to discuss this'],
      },
    ],
  },

  {
    number: 14,
    title: 'References',
    fields: [
      ...referenceFields(1),
      ...referenceFields(2),
      {
        kind: 'note',
        text: 'References should only be contacted once the applicant reaches the appropriate stage of recruitment.',
      },
    ],
  },

  {
    number: 15,
    title: 'Documents',
    fields: [
      { kind: 'file', name: 'cv', label: 'Please upload your CV.', required: true },
      {
        kind: 'file',
        name: 'qualification_certificates',
        label: 'Relevant qualification certificates',
        multiple: true,
      },
      {
        kind: 'file',
        name: 'registration_accreditation_evidence',
        label: 'Professional registration / accreditation evidence',
        multiple: true,
      },
      { kind: 'file', name: 'indemnity_evidence', label: 'Professional indemnity evidence' },
      {
        kind: 'file',
        name: 'dbs_evidence',
        label: 'DBS evidence',
        help: 'Optional — we can request this later where you would prefer.',
      },
      {
        kind: 'file',
        name: 'training_certificates',
        label: 'Relevant specialist assessment training certificates',
        multiple: true,
      },
      {
        kind: 'file',
        name: 'sample_report',
        label: 'Fully anonymised sample assessment report',
      },
    ],
  },

  {
    number: 16,
    title: 'Recruitment Adjustments',
    fields: [
      {
        kind: 'radio',
        name: 'adjustments',
        label:
          'Do you require any reasonable adjustments during the recruitment or onboarding process?',
        options: ['No', 'Yes'],
      },
      {
        kind: 'text',
        name: 'adjustments_detail',
        label: 'If Yes: please tell us how we can support you.',
        showIf: { field: 'adjustments', anyOf: ['Yes'] },
      },
      {
        kind: 'note',
        text: 'This information is used only to arrange appropriate support during recruitment.',
      },
    ],
  },
];

/** Section 17 — each statement must be individually confirmed. */
export const declarations = [
  'The information provided in this application is accurate to the best of my knowledge.',
  'I understand that FairNeuro may verify relevant qualifications, professional registration and accreditation.',
  'I confirm that any sample report uploaded has been fully anonymised and contains no identifiable patient/client information.',
  'I understand that appointment is subject to appropriate qualification, registration, reference and compliance checks.',
  'I agree to FairNeuro processing the information in this application for recruitment and onboarding purposes in accordance with its privacy notice.',
];

/**
 * Format rules, shared by the form and the API route so the two cannot drift.
 *
 * The patterns are written to be valid in an HTML `pattern` attribute (which is
 * implicitly anchored) and are anchored explicitly when used in JavaScript.
 */
export const EMAIL_PATTERN = "[^@\\s]+@[^@\\s]+\\.[A-Za-z]{2,}";

/** Digits, spaces and the usual punctuation; digit count is checked separately. */
// Escaped for the `v` regex flag that browsers compile `pattern` with, where
// ( ) / and - are reserved inside a character class. An uncompilable pattern
// is silently ignored, so an unescaped one validates nothing at all.
export const PHONE_PATTERN = "[+\\(]?[0-9][0-9 \\(\\)\\.\\/+\\-]{7,19}";

export const EMAIL_HINT = 'Enter an email address, for example name@example.com';
export const PHONE_HINT =
  'Enter a phone number, for example 07700 900123 or +44 7700 900123';
export const URL_HINT = 'Enter a full web address, including https://';

export function isEmail(value: string): boolean {
  return new RegExp(`^${EMAIL_PATTERN}$`).test(value.trim());
}

export function isPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!new RegExp(`^${PHONE_PATTERN}$`).test(trimmed)) return false;
  // E.164 allows at most 15 digits; UK numbers are 10-11 without a country code.
  const digits = trimmed.replace(/\D/g, '').length;
  return digits >= 9 && digits <= 15;
}

export function isUrl(value: string): boolean {
  try {
    const url = new URL(value.trim());
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}
