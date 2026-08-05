// Verified content for Vivarch Hospital. Do not add unverified facts
// (awards, accreditations, patient counts, etc.) — only confirmed details go here.

export const hospital = {
  companyName: "Vivarch Healthcare Private Limited",
  brand: "Vivarch Hospital",
  registeredOn: "24 January 2025",
  address: {
    line1: "6VV6+G68",
    line2: "SV Rd, Parbat Nagar",
    area: "Borivali",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400068",
    full: "6VV6+G68, SV Rd, Parbat Nagar, Borivali, Mumbai, Maharashtra 400068",
  },
  // Decoded from the official Plus Code (6VV6+G68, Mumbai) via Google's
  // Open Location Code algorithm — not an estimate.
  geo: { lat: 19.2438, lng: 72.8606 },
  emergencyPhone: "+91 93248 48801",
  emergencyPhoneHref: "tel:+919324848801",
  whatsappHref: "https://wa.me/919324848801",
  email: "vivarchhealthcare@gmail.com",
} as const;

export const departments = [
  {
    name: "Oncology & Hematology",
    slug: "oncology-hematology",
    description:
      "Comprehensive cancer and blood disorder care spanning diagnosis, chemotherapy and long-term management.",
    longDescription:
      "Oncology covers the diagnosis and treatment of cancer, while hematology focuses on disorders of the blood, bone marrow and lymphatic system. Care in this department typically spans diagnostic work-up, chemotherapy and immunotherapy planning, and coordinated long-term follow-up. At Vivarch Hospital, this department is led by our Medical Director, an oncologist with close to two decades of clinical experience.",
    icon: "Microscope",
  },
  {
    name: "Neurology",
    slug: "neurology",
    description:
      "Diagnosis and treatment of stroke, epilepsy and disorders of the brain and nervous system.",
    longDescription:
      "Neurology addresses conditions affecting the brain, spinal cord and nervous system, including stroke, seizure disorders and neuro-critical emergencies. Timely evaluation is important for conditions like stroke, where early treatment materially affects outcomes. Vivarch Hospital's neurological services are led by a neurologist with fellowship training in epilepsy surgery.",
    icon: "Brain",
  },
  {
    name: "Epilepsy Care",
    slug: "epilepsy-care",
    description:
      "Specialised evaluation and long-term management for epilepsy and seizure disorders.",
    longDescription:
      "Epilepsy care involves the evaluation, diagnosis and ongoing management of seizure disorders, often requiring sustained follow-up to tailor treatment over time. Our neurology team includes fellowship training specific to epilepsy, supporting structured, long-term care for patients living with seizure disorders.",
    icon: "Zap",
  },
  {
    name: "Cardiology",
    slug: "cardiology",
    description:
      "Heart care including angiography, angioplasty and management of cardiac emergencies.",
    longDescription:
      "Cardiology covers the diagnosis and treatment of heart and blood vessel conditions, including procedures such as angiography and angioplasty, and the management of hypertension, heart failure and cardiac emergencies. Vivarch Hospital's cardiology services are led by a cardiologist with over 14 years of clinical experience.",
    icon: "HeartPulse",
  },
  {
    name: "Internal Medicine",
    slug: "internal-medicine",
    description:
      "General adult medicine for acute illness, chronic disease and preventive care.",
    longDescription:
      "Internal medicine covers the prevention, diagnosis and treatment of adult illness — from acute infections to the ongoing management of chronic conditions such as diabetes and hypertension. It's often the first point of contact for adult patients and a coordinating point for referrals to other specialities.",
    icon: "Stethoscope",
  },
  {
    name: "General & Laparoscopic Surgery",
    slug: "laparoscopic-surgery",
    description:
      "Minimally invasive and general surgical procedures for faster recovery.",
    longDescription:
      "General surgery covers a broad range of surgical procedures, while laparoscopic (minimally invasive) techniques use small incisions and specialised instruments, often associated with less post-operative pain and faster recovery compared with open surgery.",
    icon: "Scissors",
  },
  {
    name: "Emergency Care",
    slug: "emergency-care",
    description: "Round-the-clock emergency medical response and stabilisation.",
    longDescription:
      "The emergency department at Vivarch Hospital is staffed and available 24 hours a day, every day of the year, for the rapid assessment and stabilisation of medical emergencies. Call our emergency line directly for urgent situations.",
    icon: "Siren",
  },
  {
    name: "ICU",
    slug: "icu",
    description: "Critical care monitoring and management for serious and post-operative patients.",
    longDescription:
      "The Intensive Care Unit provides close monitoring and specialised support for critically ill patients and those recovering from major surgery, with continuous observation of vital signs and rapid response to changes in condition.",
    icon: "Activity",
  },
  {
    name: "Diagnostics",
    slug: "diagnostics",
    description: "Integrated diagnostic services supporting accurate, timely clinical decisions.",
    longDescription:
      "Accurate diagnosis underpins effective treatment. Vivarch Hospital's diagnostic services bring together imaging, laboratory testing and pathology in-house, helping shorten the time between a patient's first consultation and a confirmed diagnosis.",
    icon: "ScanSearch",
  },
  {
    name: "Pharmacy",
    slug: "pharmacy",
    description: "In-house pharmacy for prescribed medication and patient convenience.",
    longDescription:
      "Our in-house pharmacy dispenses prescribed medication on-site, reducing the need for patients and families to travel elsewhere after a consultation, admission or discharge.",
    icon: "Pill",
  },
  {
    name: "Pathology",
    slug: "pathology",
    description: "Laboratory testing and pathological analysis for accurate diagnosis.",
    longDescription:
      "Pathology involves the laboratory analysis of blood, tissue and other samples to diagnose disease and guide treatment decisions. In-house pathology services help keep turnaround times short for both routine and urgent tests.",
    icon: "TestTube",
  },
  {
    name: "Radiology & Imaging",
    slug: "radiology",
    description: "USG, sonography and digital X-ray services for precise imaging.",
    longDescription:
      "Radiology and imaging services — including ultrasonography (USG), sonography and digital X-ray — give clinicians a non-invasive view inside the body, supporting diagnosis across nearly every department in the hospital.",
    icon: "Radar",
  },
  {
    name: "Preventive Health Checkups",
    slug: "preventive-checkups",
    description: "Structured health screening packages for early detection and prevention.",
    longDescription:
      "Preventive health checkups combine relevant screening tests into a structured package, aimed at catching potential health issues early — often before symptoms appear — when they tend to be easier to manage.",
    icon: "ShieldCheck",
  },
] as const;

type Doctor = {
  name: string;
  role: string;
  slug: string;
  photo: string | null;
  qualifications: string[];
  experience: string | null;
  specializations: string[];
  affiliations: string[];
  achievement: string | null;
  registrationNumber: string | null;
  department: string;
  departmentSlug: string;
};

export const doctors: Doctor[] = [
  {
    name: "Dr. Vijay Vilasrao Sharnangat",
    role: "Medical Director & Lead Oncologist",
    slug: "dr-vijay-vilasrao-sharnangat",
    photo: "/images/doctors/dr-vijay-vilasrao-sharnangat.jpg",
    qualifications: ["MBBS", "MD Internal Medicine", "DM Medical Oncology"],
    experience: "~20 years experience",
    specializations: [
      "Chemotherapy",
      "Immunotherapy",
      "Targeted Therapy",
      "Hormone Therapy",
      "Bone Marrow Transplant",
      "Cancer Care",
    ],
    affiliations: ["HCG Cancer Centre Borivali", "Thunga Hospital"],
    achievement: "50,000+ chemotherapy cycles administered",
    registrationNumber: null,
    department: "Oncology & Hematology",
    departmentSlug: "oncology-hematology",
  },
  {
    name: "Dr. Rahil Rauf Ansari",
    role: "Director of Neurological Services",
    slug: "dr-rahil-rauf-ansari",
    photo: "/images/doctors/dr-rahil-rauf-ansari.jpg",
    qualifications: [
      "MBBS",
      "MD",
      "DNB Neurology",
      "DM Neurology",
      "Fellowship in Epilepsy Surgery",
    ],
    experience: "10+ years experience",
    specializations: ["Stroke", "Epilepsy", "Brain Disorders", "Neuro Critical Care"],
    affiliations: ["Ex Assistant Professor of Neurology, Seth GSMC & KEM Hospital, Mumbai"],
    achievement: null,
    registrationNumber: "MMC 2018010175",
    department: "Neurology",
    departmentSlug: "neurology",
  },
  {
    name: "Dr. Chandrashekhar Ramdavar Yadav",
    role: "Director of Cardiology",
    slug: "dr-chandrashekhar-ramdavar-yadav",
    photo: "/images/doctors/dr-chandrashekhar-ramdavar-yadav.jpg",
    qualifications: ["MBBS", "MD Medicine", "DM Cardiology"],
    experience: "14+ years experience",
    specializations: [
      "Angiography",
      "Angioplasty",
      "Heart Failure",
      "Hypertension",
      "Cardiac Emergencies",
    ],
    affiliations: [],
    achievement: null,
    registrationNumber: null,
    department: "Cardiology",
    departmentSlug: "cardiology",
  },
];

export const corporateLeadership = [
  { name: "Vaishali Jahangir Satpudke", role: "Corporate Director" },
  { name: "Vimalkant Ramakant Yadav", role: "Corporate Director" },
  { name: "Abhay Pundlik Pawar", role: "Corporate Director" },
] as const;

export const trustPoints = [
  "MCA Registered Company",
  "24×7 Emergency Care",
  "Qualified & Experienced Doctors",
  "Multi-Specialty Care Under One Roof",
  "Modern Diagnostic Facilities",
  "Patient-First Philosophy",
] as const;

export const whyChooseUs = [
  {
    title: "Expert Specialists",
    description:
      "A leadership team of experienced doctors across oncology, neurology and cardiology.",
    icon: "GraduationCap",
  },
  {
    title: "Modern Diagnostics",
    description: "In-house USG, sonography and digital X-ray for fast, accurate diagnosis.",
    icon: "ScanSearch",
  },
  {
    title: "Compassionate Care",
    description: "Every patient is treated with dignity, empathy and clear communication.",
    icon: "HeartHandshake",
  },
  {
    title: "24×7 Emergency",
    description: "Emergency services and critical care available around the clock.",
    icon: "Siren",
  },
  {
    title: "Multi-Specialty Expertise",
    description: "Oncology, neurology, cardiology, surgery and internal medicine under one roof.",
    icon: "Layers",
  },
  {
    title: "Patient-First Philosophy",
    description: "Treatment plans built around the patient, not around convenience.",
    icon: "Users",
  },
] as const;

export const technologyFeatures = [
  {
    title: "Digital Health Records",
    description: "Patient information organised digitally for continuity of care.",
    icon: "FileDigit",
  },
  {
    title: "Modern Diagnostics",
    description: "USG, sonography and digital X-ray for precise clinical insight.",
    icon: "ScanSearch",
  },
  {
    title: "Advanced Imaging",
    description: "Digital imaging infrastructure supporting faster, clearer diagnosis.",
    icon: "Aperture",
  },
  {
    title: "Patient Management",
    description: "Streamlined admission, treatment and discharge workflows.",
    icon: "ClipboardList",
  },
  {
    title: "Online Appointments",
    description: "Book consultations with our specialists ahead of your visit.",
    icon: "CalendarCheck",
  },
  {
    title: "Future-Ready Infrastructure",
    description: "A hospital built to expand its technology and specialities over time.",
    icon: "Building2",
  },
] as const;

export const patientJourney = [
  {
    step: "01",
    title: "Book Appointment",
    description: "Schedule a consultation online or call our team directly.",
    icon: "CalendarCheck",
  },
  {
    step: "02",
    title: "Visit Hospital",
    description: "Arrive at Vivarch Hospital, Borivali for your scheduled consultation.",
    icon: "MapPin",
  },
  {
    step: "03",
    title: "Diagnosis",
    description: "Our specialists evaluate your condition using in-house diagnostics.",
    icon: "ScanSearch",
  },
  {
    step: "04",
    title: "Treatment",
    description: "A personalised treatment plan is carried out by your care team.",
    icon: "Stethoscope",
  },
  {
    step: "05",
    title: "Recovery",
    description: "Supportive, monitored recovery with our nursing and clinical staff.",
    icon: "HeartPulse",
  },
  {
    step: "06",
    title: "Follow-up",
    description: "Ongoing follow-up to track progress and long-term wellbeing.",
    icon: "Repeat",
  },
] as const;

export const faqs = [
  {
    question: "Where is Vivarch Hospital located?",
    answer:
      "Vivarch Hospital is located at Shiv Parbat Building, SV Road, Parbat Nagar, Borivali, Mumbai, Maharashtra 400068.",
  },
  {
    question: "Is emergency care available 24×7?",
    answer:
      "Yes. Our emergency department is available 24 hours a day, 7 days a week. For emergencies, call +91 93248 48801.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment using the 'Book Appointment' button on this website, by calling us, or by messaging us on WhatsApp.",
  },
  {
    question: "What specialities does Vivarch Hospital offer?",
    answer:
      "We offer Oncology & Hematology, Neurology, Epilepsy Care, Cardiology, Internal Medicine, General & Laparoscopic Surgery, Emergency Care, ICU, Diagnostics, Pharmacy, Pathology and Radiology & Imaging (USG, Sonography, Digital X-Ray).",
  },
  {
    question: "Does the hospital have in-house diagnostic facilities?",
    answer:
      "Yes, Vivarch Hospital offers in-house diagnostics including USG, sonography, digital X-ray and pathology services.",
  },
  {
    question: "How can I contact the hospital for queries?",
    answer:
      "You can reach us by phone at +91 93248 48801, by email at vivarchhealthcare@gmail.com, or by visiting us at our Borivali location.",
  },
] as const;
