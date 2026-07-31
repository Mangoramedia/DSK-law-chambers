import { PracticeArea, TeamMember, CaseStudy, Testimonial } from '../types';

export const FIRM_INFO = {
  name: "DSK LAW CHAMBERS",
  subtitle: "Advocates & Legal Consultants",
  tagline: "Lawyers You Trust",
  aboutFull: "DSK LAW CHAMBERS is a full-service law firm with a strong focus on real estate law, property due diligence, legal documentation, civil litigation, family law, criminal litigation, arbitration, banking and DRT matters, and High Court practice. We combine meticulous legal analysis with practical solutions to help individuals, businesses, developers, and institutions protect their rights and achieve their objectives.",
  contact: {
    address: "#432, 1st Main, 9th Cross, Panchasheelanagar, Nagarabhavi, Bangalore – 560072",
    phone: "+91 7019302979",
    email: "adv.kumudapriyadarshini@gmail.com",
    hours: "Monday - Saturday: 9:00 AM - 8:30 PM",
    emergencyPhone: "+91 7019302979"
  },
  stats: {
    yearsExperience: "22+",
    casesHandled: "1,850+",
    propertyDiligenceAcres: "4,500+",
    highCourtWrits: "420+"
  }
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "real-estate-due-diligence",
    title: "Real Estate Law & Property Due Diligence",
    shortDesc: "Flagship practice providing comprehensive legal support in all real estate transactions, 30-year title verification, deeds, JDAs, revenue records, and RERA reviews.",
    fullDesc: "We provide comprehensive legal support in all aspects of real estate transactions, ensuring clients invest with confidence and legal certainty.",
    iconName: "Building2",
    keyServices: [
      "Property Due Diligence",
      "Title Verification",
      "Legal Opinions on Property",
      "Verification of Original Property Documents",
      "Sale Deed Drafting & Vetting",
      "Agreement to Sell & Sale Agreements",
      "Joint Development Agreements (JDA)",
      "Joint Venture Agreements (JVA)",
      "General Power of Attorney (GPA) & Special Power of Attorney (SPA)",
      "Lease Deeds & Leave and Licence Agreements",
      "Development Agreements & Construction Agreements",
      "Collaboration Agreements",
      "Gift Deeds, Settlement Deeds & Partition Deeds",
      "Release/Relinquishment Deeds & Rectification Deeds",
      "Exchange Deeds, Mortgage Deeds & Trust Deeds",
      "Family Settlement Deeds",
      "Will Drafting, Codicils & Succession Planning Documentation",
      "Encumbrance Verification & Khata Verification",
      "Revenue Record Verification (RTC, Mutation, MR Extracts)",
      "Conversion Order Verification",
      "Layout & Plan Approval Verification",
      "RERA Compliance Review & Builder Documentation Review",
      "Legal Audit of Property Documents"
    ],
    commonDocumentsNeeded: [
      "Title Deeds / Parent Conveyance Deed",
      "Index II & Encumbrance Certificates",
      "7/12 Extracts / RTC & Mutation Entries (Pherphar / MR)",
      "NA Conversion Permission & Approved Building Layout Plan",
      "Property Tax Receipts, Khata & RERA Certificates"
    ],
    typicalCases: "Commercial land title clearance for a 45-acre township project; legal audit of ancestral agricultural property conversion disputes."
  },
  {
    id: "civil-litigation",
    title: "Civil Litigation",
    shortDesc: "Representation before Civil Courts, Commercial Courts, and Appellate Courts across property suits, injunctions, partition, specific performance, and eviction.",
    fullDesc: "We represent clients before Civil Courts, Commercial Courts, and Appellate Courts in a wide range of civil disputes.",
    iconName: "Gavel",
    keyServices: [
      "Declaration Suits",
      "Permanent & Temporary Injunctions",
      "Specific Performance of Contracts",
      "Recovery Suits & Money Recovery Cases",
      "Partition Suits for Ancestral & Joint Property",
      "Possession & Eviction Matters",
      "Easement Rights & Boundary/Encroachment Disputes",
      "Property Ownership Disputes",
      "Contractual Disputes",
      "Execution Proceedings",
      "Appeals & Revisions"
    ],
    commonDocumentsNeeded: [
      "Agreement for Sale / Title Documents",
      "Legal Notices & Reply Receipts",
      "Property Measurement Map & Survey Reports",
      "Revenue Entries and Tax Receipts"
    ],
    typicalCases: "Winning a Decree for Specific Performance for a commercial plot buyer against defaulting land vendors."
  },
  {
    id: "family-law",
    title: "Family & Matrimonial Law",
    shortDesc: "Practical and compassionate legal assistance in divorce, child custody, maintenance, domestic violence, adoption, and succession matters.",
    fullDesc: "We provide practical and compassionate legal assistance in family disputes.",
    iconName: "Users",
    keyServices: [
      "Mutual Consent Divorce & Contested Divorce",
      "Child Custody & Guardianship",
      "Maintenance Proceedings & Alimony",
      "Domestic Violence Cases",
      "Restitution of Conjugal Rights & Judicial Separation",
      "Adoption Matters",
      "Family Settlement Agreements",
      "Succession & Inheritance Matters",
      "Probate Proceedings & Letters of Administration"
    ],
    commonDocumentsNeeded: [
      "Marriage Certificate & Photographs",
      "Income Proof & Asset Records of Parties",
      "Correspondence & Prior Separation Agreements",
      "Children Birth Certificates & Property Records"
    ],
    typicalCases: "Drafting a comprehensive family settlement deed distributing commercial assets and multi-city properties peacefully."
  },
  {
    id: "criminal-law",
    title: "Criminal Law",
    shortDesc: "End-to-end criminal litigation from investigation to trial and appeal, including cheque bounce, anticipatory bail, white collar crime, and property disputes.",
    fullDesc: "Our criminal litigation team handles matters from investigation to trial and appeal.",
    iconName: "ShieldAlert",
    keyServices: [
      "Cheque Bounce Cases (Section 138, Negotiable Instruments Act)",
      "Criminal Complaints",
      "Anticipatory Bail & Regular Bail",
      "Sessions Trials, Criminal Appeals & Revisions",
      "White Collar Crime & Economic Offences",
      "Cheating & Criminal Breach of Trust",
      "Forgery & Fraud Cases",
      "Property-related Criminal Litigation"
    ],
    commonDocumentsNeeded: [
      "Copy of FIR / Complaint / Summons",
      "Bail Rejection Order (if applying to higher court)",
      "Bank Transaction Records / Written Correspondence",
      "Identity & Sureties Proofs"
    ],
    typicalCases: "Securing Anticipatory Bail from High Court in a multi-crore economic offence allegation."
  },
  {
    id: "high-court-practice",
    title: "High Court Practice",
    shortDesc: "Regular representation before the High Court in Writ Petitions, Regular/Miscellaneous First & Second Appeals, quashing petitions, and PILs.",
    fullDesc: "We regularly represent clients before the High Court of Karnataka.",
    iconName: "Scale",
    keyServices: [
      "Writ Petitions (Article 226/227)",
      "Regular First Appeals (RFA)",
      "Regular Second Appeals (RSA)",
      "Miscellaneous First Appeals (MFA)",
      "Civil Revision Petitions",
      "Criminal Petitions & Quashing Petitions",
      "Public Interest Litigation (where appropriate)",
      "Supervisory Jurisdiction Matters"
    ],
    commonDocumentsNeeded: [
      "Certified Copy of Lower Court Judgment / Order",
      "Impugned Order / Government Gazette Notice",
      "Complete Trial Court Record / Paperbook",
      "Affidavit and Relevant Correspondence"
    ],
    typicalCases: "Successfully obtaining High Court stay on illegal tender cancellation issued by a state statutory authority."
  },
  {
    id: "arbitration-dispute-resolution",
    title: "Arbitration & Alternative Dispute Resolution",
    shortDesc: "Assisting clients in resolving commercial and property disputes efficiently through arbitration, conciliation, and structured mediation.",
    fullDesc: "We assist clients in resolving disputes efficiently through arbitration and mediation.",
    iconName: "Briefcase",
    keyServices: [
      "Domestic Arbitration & Arbitration Proceedings",
      "Appointment of Arbitrators",
      "Arbitration Awards Enforcement & Challenge",
      "Mediation & Conciliation",
      "Commercial Dispute Resolution",
      "Settlement Negotiations"
    ],
    commonDocumentsNeeded: [
      "Commercial Contract with Arbitration Clause",
      "Notice Invoking Arbitration & Reply",
      "Statement of Claim / Defense Pleadings",
      "Proof of Breach and Financial Losses"
    ],
    typicalCases: "Representing an infrastructure contractor in an ₹18 Crore arbitration dispute against a private developer."
  },
  {
    id: "banking-drt-matters",
    title: "Banking, DRT & Financial Litigation",
    shortDesc: "Specialized representation before Debt Recovery Tribunals (DRT / DRAT), SARFAESI proceedings, loan recovery, and banking disputes.",
    fullDesc: "Representation before Debt Recovery Tribunals and in banking-related disputes.",
    iconName: "Landmark",
    keyServices: [
      "Debt Recovery Tribunal (DRT) Matters",
      "Debt Recovery Appellate Tribunal (DRAT) Matters",
      "SARFAESI Proceedings & Stay Applications",
      "Loan Recovery Litigation",
      "Banking Disputes",
      "Recovery Proceedings"
    ],
    commonDocumentsNeeded: [
      "Notice under Section 13(2) / 13(4) SARFAESI Act",
      "Loan Agreement & Guarantee Documents",
      "Bank Statement of Accounts & Demand Notices",
      "DRT Securitisation Application (SA) draft"
    ],
    typicalCases: "Securing an emergency DRT stay against auction of commercial factory premises under SARFAESI Act."
  },
  {
    id: "land-revenue-matters",
    title: "Land & Revenue Matters",
    shortDesc: "Advising and representing clients in disputes involving land mutation, RTC records, agricultural transactions, conversion, survey, and revenue appeals.",
    fullDesc: "Advising and representing clients in disputes involving land and revenue records.",
    iconName: "MapPin",
    keyServices: [
      "Mutation Disputes",
      "RTC & Revenue Record Issues",
      "Land Conversion Matters (Agricultural to NA)",
      "Survey & Boundary Disputes",
      "Agricultural Land Transactions",
      "Revenue Appeals before Assistant Commissioner / Deputy Commissioner",
      "Land Acquisition Matters",
      "Government Land Issues"
    ],
    commonDocumentsNeeded: [
      "RTC / 7/12 Extract & MR Mutation Extracts",
      "Survey Tippani / Akarband / Demarcation Map",
      "Conversion Order Copy & Challans",
      "Revenue Tahsildar / AC Orders"
    ],
    typicalCases: "Reversing an illegal revenue mutation entry and restoring land owner rights before the Revenue Appellate Tribunal."
  },
  {
    id: "legal-drafting-documentation",
    title: "Legal Drafting & Documentation",
    shortDesc: "Preparing legally sound, customized documentation for commercial contracts, MOUs, NDAs, corporate agreements, partnership deeds, and legal notices.",
    fullDesc: "We prepare legally sound, customized documentation for individuals and businesses.",
    iconName: "FileText",
    keyServices: [
      "Commercial Agreements",
      "Memorandum of Understanding (MoU)",
      "Non-Disclosure Agreements (NDA)",
      "Employment Agreements & Consultancy Agreements",
      "Vendor & Supply Agreements",
      "Partnership Deeds & LLP Agreements",
      "Shareholders' Agreements & Service Agreements",
      "Franchise Agreements & Licensing Agreements",
      "Rental Agreements",
      "Affidavits & Declarations",
      "Legal Notices & Replies to Legal Notices",
      "Indemnity Bonds & Undertakings",
      "Board Resolutions & Corporate Documentation"
    ],
    commonDocumentsNeeded: [
      "Draft Agreements / MOUs",
      "Identity & KYC Documents of Parties",
      "Shareholding / Corporate / Business Entity Proofs",
      "Existing Contracts or Lease Agreements"
    ],
    typicalCases: "Drafting water-tight commercial supply, vendor, and shareholder agreements for an expanding technology enterprise."
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "dsk-senior-partner",
    name: "Adv. Devendra S. Kulkarni",
    role: "Founding Partner & Head of Litigation",
    experienceYears: 24,
    qualifications: "B.A. LL.B (Hons.), Advocate High Court",
    bio: "Adv. Devendra S. Kulkarni is a respected High Court advocate known for his sharp cross-examination and deep expertise in Real Estate Title Disputes, Writs, and DRT litigation. Over 24 years, he has successfully represented major property developers, financial institutions, and high-net-worth individuals.",
    specialties: ["High Court Writs", "Real Estate Title Litigation", "DRT & SARFAESI Defense", "Arbitration"],
    image: "/src/assets/images/dsk_senior_advocate_1785328019492.jpg",
    email: "d.kulkarni@dsklawchambers.com",
    phone: "+91 98200 11234"
  },
  {
    id: "dsk-female-partner",
    name: "Adv. Sunita K. Sharma",
    role: "Senior Partner - Real Estate & Due Diligence",
    experienceYears: 18,
    qualifications: "LL.M (Property & Corporate Law)",
    bio: "Head of the Due Diligence and Corporate Documentation practice at DSK Law Chambers. Adv. Sunita Sharma has spearheaded property title searches for over 4,500 acres of commercial and residential land across the state, specializing in complex revenue records, RERA compliance, and JDA drafting.",
    specialties: ["Property Due Diligence", "30-Year Revenue Search", "Joint Venture Agreements", "RERA Legal Audit"],
    image: "/src/assets/images/dsk_female_partner_1785328033587.jpg",
    email: "s.sharma@dsklawchambers.com",
    phone: "+91 98200 22345"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    title: "Title Clearance for 85-Acre Integrated Township",
    category: "Real Estate & Due Diligence",
    summary: "Conducted exhaustive 30-year revenue search across 142 survey numbers with historical ancestral claims and non-agricultural conversion gaps.",
    outcome: "Identified 3 hidden encumbrances, cured title defects, and obtained clear title search certificate enabling ₹350 Crore project financing.",
    clientType: "Leading Infrastructure & Housing Developer"
  },
  {
    id: "case-2",
    title: "Emergency DRT Injunction Staying SARFAESI Auction",
    category: "Banking & DRT Practice",
    summary: "Bank issued Section 13(4) possession notice and published auction for commercial factory worth ₹28 Crores despite pending OTS proposal.",
    outcome: "Secured immediate stay from DRT within 48 hours, compelling bank to accept structured settlement saving 250 jobs.",
    clientType: "Manufacturing Enterprise"
  },
  {
    id: "case-3",
    title: "High Court Writ Quashing Arbitrary Govt Tender Cancellation",
    category: "High Court Practice",
    summary: "State authority unlawfully cancelled a ₹42 Crore public infrastructure contract post tender award without giving show-cause notice.",
    outcome: "High Court quashed the cancellation order under Article 226, restoring the contract with full cost allowance.",
    clientType: "Engineering EPC Contractor"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "DSK Law Chambers provides the most thorough property due diligence report in the region. Their scrutiny saved our group from a high-risk ₹50 Crore land transaction that had hidden litigation history.",
    clientName: "Rajesh V. Agrawal",
    clientRole: "Managing Director, Landmark Realty Group",
    practiceArea: "Real Estate Due Diligence"
  },
  {
    id: "test-2",
    quote: "When faced with an aggressive SARFAESI notice, Adv. Kulkarni and his team secured an immediate DRT stay that saved our manufacturing unit. Meticulous preparation and fierce courtroom presentation.",
    clientName: "Mahesh B. Deshmukh",
    clientRole: "Founder, Apex Precision Engineering",
    practiceArea: "Banking & DRT Practice"
  },
  {
    id: "test-3",
    quote: "Their legal documentation and contract drafting for our Joint Development Project was airtight. Every contingency was anticipated and protected.",
    clientName: "Priya Menon",
    clientRole: "VP Legal, Horizon Infra Corp",
    practiceArea: "Legal Documentation"
  }
];

export const VALUES_DATA = [
  {
    title: "Integrity",
    desc: "We uphold the highest standards of honesty, ethics, and professional responsibility, ensuring that every client relationship is built on trust and credibility.",
    icon: "ShieldCheck"
  },
  {
    title: "Client Commitment",
    desc: "Our clients are at the heart of everything we do. We provide personalized attention, practical legal solutions, and dedicated representation tailored to each client's unique needs.",
    icon: "HeartHandshake"
  },
  {
    title: "Transparency",
    desc: "We believe in clear communication, honest advice, and keeping our clients informed at every stage of their legal journey.",
    icon: "Clock"
  },
  {
    title: "Trust",
    desc: "We believe that trust is earned through consistency, integrity, and dependable legal representation. Our objective is to build lasting relationships founded on confidence and mutual respect.",
    icon: "Award"
  }
];

export const FAQS = [
  {
    q: "Why is 30-year Property Title Due Diligence necessary before buying land or flats?",
    a: "In India, property titles can be affected by ancestral claims, undisclosed mortgages, pending civil suits, revenue department proceedings, or invalid non-agricultural (NA) conversions. A 30-year title search examines all registered conveyance deeds, Index II entries, 7/12 extracts, mutation records, and litigation logs to certify that the seller possesses clear and marketable title."
  },
  {
    q: "What immediate action can be taken if a bank issues a SARFAESI Section 13(4) Possession Notice?",
    a: "Under the SARFAESI Act, an aggrieved borrower or guarantor can file a Securitisation Application (SA) before the Debt Recovery Tribunal (DRT) under Section 17 within 45 days. DSK Law Chambers specializes in securing emergency stays from DRT by exposing procedural flaws in the bank's notice, non-compliance with RBI restructuring guidelines, or valuation anomalies."
  },
  {
    q: "When can a party file a Writ Petition in the High Court under Article 226?",
    a: "A Writ Petition under Article 226 of the Constitution can be filed before the High Court when there is a violation of fundamental rights, principles of natural justice, arbitrary action by state or government authorities, unlawful tender cancellation, or illegal statutory action where alternative remedies are ineffective or inadequate."
  },
  {
    q: "What documents are required to draft a Joint Development Agreement (JDA) for redevelopment?",
    a: "Key documents include title deeds of the society/landlord, 7/12 extracts, Index II, CTS plan/demarcation plan, society registration certificate, list of members, existing sanctioned building plan, and DP zoning remarks."
  }
];
