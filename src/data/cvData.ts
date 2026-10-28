import { Project, Experience, SkillCategory, EducationItem, ClientItem } from '../types';

export const PERSONAL_INFO = {
  name: 'MARK C. CHOVAVA',
  role: 'Full Stack Web Developer & Digital Designer',
  focus: 'Next.js · TypeScript · Laravel · MySQL · UI/UX · Branding',
  location: 'Harare, Zimbabwe',
  phone: '+263 782 210 021',
  email: 'markchovava@gmail.com',
  linkedin: 'https://linkedin.com/in/mark-chovava-29194b5b',
  github: 'https://github.com/markchovava',
  pdfPath: '/assets/aistudio/Mark_Chovava_CV_fullstack_ac404f06.pdf',
  summary:
    'Full stack developer and designer with 10+ years of experience building websites, web applications, eCommerce platforms and point-of-sale systems for businesses in finance, healthcare, education, energy, hospitality and retail. Expert in Next.js, TypeScript, Laravel and MySQL, with the design skills (UI/UX, branding, motion graphics) and server know-how (VPS, security, SEO) to take a product from brand and interface to a secure, live deployment. Experienced in leading small teams, reviewing code and mentoring junior developers and designers.',
  stats: [
    { label: 'Years Experience', value: '10+', sub: 'Full Stack & Web Dev' },
    { label: 'Live Enterprise Sites', value: '12+', sub: 'Active in Production' },
    { label: 'TypeScript & Next.js', value: '5+', sub: 'Years Deep Mastery' },
    { label: 'Laravel & MySQL', value: '5+', sub: 'Years API Architecture' },
    { label: 'Design & Branding', value: '8+', sub: 'Years UI/UX & Graphics' }
  ],
  languages: ['English (Fluent)', 'Shona (Native)'],
  portfolioNote: 'Graphic design portfolio and video adverts available on request. References available on request.'
};

export const LIVE_PROJECTS: Project[] = [
  {
    id: 'zenith-space',
    title: 'Zenith Space',
    tagline: 'Commercial Real Estate, Premium Workspaces & Co-Working Hub',
    client: 'Zenith Space Zimbabwe',
    sector: 'Commercial Real Estate & Hospitality',
    url: 'https://zenithspace.co.zw',
    displayUrl: 'zenithspace.co.zw',
    year: '2023 - Present',
    category: ['all', 'fullstack', 'nextjs', 'corporate'],
    summary:
      'High-performance property discovery and space reservation platform built to showcase premium office suites, flexible workspaces, and boardroom bookings with real-time availability checks.',
    features: [
      'Interactive floorplan & workspace unit catalog',
      'Instant booking inquiry pipeline with automated notification emails',
      'Dynamic SEO meta generation for local property queries',
      'Responsive gallery with virtual space tours & high-speed image delivery'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Laravel REST API', 'MySQL'],
    architecture: {
      frontend: 'Next.js App Router with Server-Side Rendering (SSR) for blazing SEO',
      backend: 'Laravel RESTful endpoints managing room reservations & inventory',
      database: 'MySQL relational schema tracking booking slots, properties & inquiries',
      infrastructure: 'Ubuntu VPS hosting with Nginx reverse proxy & SSL automation',
      security: 'CSRF token protection, strict CORS policy & sanitised input schemas'
    },
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Booking Inquiries', value: '+140%' }
    ],
    color: '#38bdf8',
    iconName: 'Building'
  },
  {
    id: 'own-one-vehicles',
    title: 'Own One Vehicles',
    tagline: 'Automotive Dealership, Inventory & Vehicle Finance Portal',
    client: 'Own One Vehicles',
    sector: 'Automotive & Fleet Retail',
    url: 'https://ownonevehicles.co.zw',
    displayUrl: 'ownonevehicles.co.zw',
    year: '2022 - Present',
    category: ['all', 'fullstack', 'ecommerce', 'laravel'],
    summary:
      'Comprehensive automotive marketplace and inventory management portal enabling buyers to filter vehicle specs, calculate monthly financing repayments, and book test drives.',
    features: [
      'Dynamic multi-criteria vehicle filtering (make, mileage, transmission, budget)',
      'Built-in automotive loan & instalment repayment calculator',
      'Dealer backend portal for vehicle stock onboarding & status tracking',
      'WhatsApp API integration for instantaneous test drive appointments'
    ],
    techStack: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'RESTful APIs'],
    architecture: {
      frontend: 'Componentized UI with responsive vehicle cards & interactive filter sheets',
      backend: 'Laravel MVC with robust controller pipelines and image processing queues',
      database: 'Normalized MySQL database with vehicle specs, valuation logs & inquiries',
      infrastructure: 'Hardened Linux VPS with Redis caching and phpMyAdmin admin panel',
      security: 'Automated SQL injection safeguards, file upload type validation & UFW'
    },
    metrics: [
      { label: 'Active Fleet Listings', value: '250+' },
      { label: 'Avg Page Load', value: '0.8s' }
    ],
    color: '#f59e0b',
    iconName: 'Car'
  },
  {
    id: 'celeste-energy',
    title: 'Celeste Energy',
    tagline: 'Clean Renewable Solar & Backup Power Engineering Portal',
    client: 'Celeste Energy Systems',
    sector: 'Renewable Energy & Utilities',
    url: 'https://celesteenergy.co.zw',
    displayUrl: 'celesteenergy.co.zw',
    year: '2022 - Present',
    category: ['all', 'fullstack', 'nextjs', 'corporate'],
    summary:
      'Brand identity and high-converting digital portal for a leading renewable energy contractor providing commercial and residential solar installation calculators and quotation workflows.',
    features: [
      'Interactive solar load kilowatt estimator for residential and enterprise clients',
      'Complete corporate brand identity, digital guidelines & vector iconography',
      'Project portfolio showcase featuring completed multi-kilowatt solar farms',
      'Lead qualification pipeline directly dispatching specs to technical estimators'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Adobe Illustrator'],
    architecture: {
      frontend: 'React + Next.js optimized with static generation and rapid client hydro',
      backend: 'API route microservices handling client load calculations and quote logs',
      database: 'MySQL structured log for energy audits and prospective system designs',
      infrastructure: 'VPS deployment with CDN caching and HTTP/2 compression',
      security: 'Strict Content Security Policy (CSP) and rate-limited lead endpoints'
    },
    metrics: [
      { label: 'Quote Completion', value: '+85%' },
      { label: 'Mobile Conversion', value: '3.4x' }
    ],
    color: '#10b981',
    iconName: 'Zap'
  },
  {
    id: 'network-resilience',
    title: 'Network Resilience',
    tagline: 'Enterprise Cyber Security, Infrastructure & Managed IT Services',
    client: 'Network Resilience',
    sector: 'Cybersecurity & Enterprise IT',
    url: 'https://networkresilience.co.zw',
    displayUrl: 'networkresilience.co.zw',
    year: '2023 - Present',
    category: ['all', 'fullstack', 'corporate'],
    summary:
      'Digital presence and client portal for an enterprise network resilience and cyber security firm delivering disaster recovery, penetration testing, and 24/7 network monitoring.',
    features: [
      'Interactive security posture audit questionnaire for corporate CIOs',
      'Service catalog detailing managed SOC, cloud migration, and firewall defenses',
      'Technical case studies outlining zero-downtime disaster recovery implementations',
      'Encrypted inquiry channel for incident reporting and emergency response'
    ],
    techStack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'VPS Security Hardening', 'SSL'],
    architecture: {
      frontend: 'Ultra-fast Next.js statically optimized bundle with zero external trackers',
      backend: 'Secure Node/Express and Laravel API endpoints with tokenized handshakes',
      database: 'Encrypted MySQL storage adhering to strict corporate data compliance',
      infrastructure: 'Dedicated Linux VPS with SSH keys only, UFW, Fail2ban & TLS 1.3',
      security: 'A+ SSL Labs rating, HSTS enabled, automated vulnerability scanning'
    },
    metrics: [
      { label: 'SSL Rating', value: 'A+' },
      { label: 'Enterprise Leads', value: '+65%' }
    ],
    color: '#6366f1',
    iconName: 'ShieldCheck'
  },
  {
    id: 'trayak-consultancy',
    title: 'Trayak Consultancy',
    tagline: 'Strategic Management, Feasibility & Advisory Practice',
    client: 'Trayak Consultancy Group',
    sector: 'Finance & Management Advisory',
    url: 'https://trayakconsultancy.com',
    displayUrl: 'trayakconsultancy.com',
    year: '2021 - Present',
    category: ['all', 'corporate', 'fullstack'],
    summary:
      'Global corporate advisory web portal crafted for high-level management consultants advising multinational organisations on fiscal structuring, governance, and market entry.',
    features: [
      'Executive whitepaper and sector insights publication repository',
      'Bespoke consultation booking workflow with calendar sync integration',
      'Multilingual typography and responsive layout for international delegates',
      'Corporate brand identity system matching global advisory standards'
    ],
    techStack: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'SEO Optimisation'],
    architecture: {
      frontend: 'Tailwind CSS with clean typography hierarchy and instant section anchor navigation',
      backend: 'Laravel CMS engine with granular editorial roles and publication scheduling',
      database: 'MySQL relational tables for insights, case studies and advisory bookings',
      infrastructure: 'Managed VPS with automated daily database dumps to remote storage',
      security: 'Role-based access control, CSRF tokens and sanitized markdown rendering'
    },
    metrics: [
      { label: 'Organic Search Rank', value: 'Top 3' },
      { label: 'Global Traffic', value: '45+ Countries' }
    ],
    color: '#ec4899',
    iconName: 'Briefcase'
  },
  {
    id: 'globaltech-healthcare',
    title: 'GlobalTech Healthcare',
    tagline: 'Clinical Management Systems, Medical Billing & Hospital IT',
    client: 'Jay & Joy Healthcare / GlobalTech',
    sector: 'Healthcare & Clinical Systems',
    url: 'https://globaltechhcc.co.zw',
    displayUrl: 'globaltechhcc.co.zw',
    year: '2022 - Present',
    category: ['all', 'fullstack', 'laravel'],
    summary:
      'Digital showcase and portal for healthcare informatics and medical billing systems serving regional clinics, hospitals, and pharmaceutical dispensaries.',
    features: [
      'Interactive modules breakdown for patient record management and dispensary POS',
      'Compliance checklist for HIPAA-grade patient privacy and data retention',
      'Live request-for-demonstration scheduling pipeline for clinical directors',
      'Downloadable documentation and system compatibility matrices'
    ],
    techStack: ['Laravel', 'MySQL', 'PHP', 'Tailwind CSS', 'RESTful APIs'],
    architecture: {
      frontend: 'Clean, clinical UI designed for maximum readability and accessibility',
      backend: 'Laravel REST API framework with audit logging on every administrative event',
      database: 'Normalized relational MySQL database with patient data masking layers',
      infrastructure: 'Encrypted VPS hosting with isolated database and application boundaries',
      security: 'Strict role-based permissions, bcrypt hashing, and TLS 1.3 encryption'
    },
    metrics: [
      { label: 'Clinic Onboarding', value: '18 Facilities' },
      { label: 'System Uptime', value: '99.98%' }
    ],
    color: '#06b6d4',
    iconName: 'Activity'
  },
  {
    id: 'km-consulting',
    title: 'KM Consulting',
    tagline: 'Corporate Financial Governance, Tax & Audit Specialists',
    client: 'KM Consulting Zimbabwe',
    sector: 'Finance & Taxation',
    url: 'https://kmconsulting.co.zw',
    displayUrl: 'kmconsulting.co.zw',
    year: '2021 - Present',
    category: ['all', 'corporate'],
    summary:
      'Financial consulting web application showcasing statutory tax compliance services, internal audits, and forensic accounting tools for Zimbabwean and regional enterprises.',
    features: [
      'Interactive tax deadline tracker and fiscal year regulatory calendar',
      'Document intake portal for corporate balance sheet audit assessments',
      'Authoritative design language projecting trustworthiness and precision',
      'Comprehensive on-page and technical SEO targeting commercial audit keywords'
    ],
    techStack: ['HTML5', 'CSS3', 'PHP', 'MySQL', 'SEO Optimisation'],
    architecture: {
      frontend: 'High-speed semantic HTML5 with custom CSS3 grid architectures',
      backend: 'PHP server scripts processing tax estimate inquiries and contact logs',
      database: 'MySQL structured customer database with indexed query paths',
      infrastructure: 'Shared and VPS hybrid hosting configured for 99.9% uptime SLA',
      security: 'Hardened file permissions, automated spam bot honeypots & SSL'
    },
    metrics: [
      { label: 'Organic Inquiries', value: '+115%' },
      { label: 'Bounce Rate', value: '26%' }
    ],
    color: '#8b5cf6',
    iconName: 'FileText'
  },
  {
    id: 'iclean-services',
    title: 'iClean Services',
    tagline: 'Commercial Facilities Management & Industrial Sanitation',
    client: 'iClean Services Ltd',
    sector: 'Commercial Facilities & Services',
    url: 'https://icleanservices.co.zw',
    displayUrl: 'icleanservices.co.zw',
    year: '2023 - Present',
    category: ['all', 'ecommerce', 'fullstack'],
    summary:
      'Service scheduling and quotation platform for commercial cleaning, corporate facility management, and hygiene supply logistics.',
    features: [
      'Square-meter based cleaning cost estimator with instant itemized quotes',
      'Commercial cleaning contract inquiry dispatch with custom scope builder',
      'Staff vetting and safety compliance certification badges and protocols',
      'Direct WhatsApp click-to-book integration for emergency spill response'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'RESTful APIs'],
    architecture: {
      frontend: 'React single-page application with micro-interactions and smooth quote flow',
      backend: 'REST API service calculating square meter tariffs, chemical supplies & labor',
      database: 'MySQL data store tracking service tickets, recurring contracts & renewals',
      infrastructure: 'Nginx reverse proxy on Linux VPS with gzip compression',
      security: 'Rate-limited quote endpoints and sanitized customer data inputs'
    },
    metrics: [
      { label: 'Instant Quotes', value: '1,200+' },
      { label: 'Lead Response Time', value: '< 15 mins' }
    ],
    color: '#14b8a6',
    iconName: 'Sparkles'
  }
];

export const CLIENT_ROSTER: ClientItem[] = [
  { name: 'Planas', sector: 'Retail & Distribution', country: 'Zimbabwe', description: 'Enterprise web systems and digital brand identity.' },
  { name: 'Own One Vehicles', sector: 'Automotive Dealership', country: 'Zimbabwe', description: 'Vehicle inventory, loan calculator & digital sales platform.' },
  { name: 'Acquired.co.zw', sector: 'eCommerce & Marketplace', country: 'Zimbabwe', description: 'Classifieds marketplace and digital commerce infrastructure.' },
  { name: 'Network Resilience', sector: 'Cybersecurity & IT', country: 'Regional', description: 'Corporate portal, incident reporting & security consulting.' },
  { name: 'Covenant School', sector: 'Education & Academics', country: 'Zimbabwe', description: 'Student admission portal, academic curriculum & communications.' },
  { name: 'Jay & Joy Healthcare', sector: 'Healthcare & Clinical', country: 'Zimbabwe', description: 'Clinical services showcase, patient booking & pharmacy systems.' },
  { name: 'Celeste Energy', sector: 'Solar & Clean Energy', country: 'Zimbabwe', description: 'Renewable power portal, kilowatt estimator & corporate identity.' },
  { name: 'SMG Holdings', sector: 'Conglomerate & Investment', country: 'Zimbabwe', description: 'Group holding corporate portal and subsidiary directory.' },
  { name: 'Gart Media', sector: 'Media & Production', country: 'Zimbabwe', description: 'Creative digital asset pipeline, branding & web presence.' },
  { name: 'British Business Association', sector: 'Trade & Commerce', country: 'UK / Zim', description: 'Bilateral trade network, membership portal & event listings.' },
  { name: 'Dronefield Land Development', sector: 'Civil & Land Development', country: 'Zimbabwe', description: 'Residential stand allocation, cadastral maps & sales portal.' },
  { name: 'Hansole Investments', sector: 'Commercial Enterprise', country: 'Zimbabwe', description: 'Corporate website, enterprise hosting & security management.' }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    id: 'fl-designers',
    role: 'Lead Full Stack Developer & Graphic Designer',
    company: 'FL Designers (Freelance)',
    location: 'Harare, Zimbabwe',
    period: '2018 – Present',
    type: 'Full-time / Client Engagements',
    summary:
      'Architect and ship end-to-end web applications, eCommerce systems, and point-of-sale solutions while leading client engagements from initial brand identity to secure production deployment.',
    responsibilities: [
      'Architect and build full stack web applications, eCommerce platforms and point-of-sale systems for local and international clients.',
      'Deliver complete digital solutions in one engagement: brand identity, UI/UX design, development, SEO, VPS deployment and ongoing maintenance.',
      'Develop secure REST APIs and database-driven systems with Laravel, Next.js, TypeScript and MySQL.',
      'Lead a small team of developers: run code reviews, set technical roadmaps and ship projects from concept to launch.',
      'Create brand identities, motion graphics and video adverts that give clients a consistent look across web and social channels.'
    ],
    technologies: ['Next.js', 'TypeScript', 'Laravel', 'MySQL', 'Tailwind CSS', 'VPS Hosting', 'Photoshop', 'Illustrator', 'After Effects'],
    achievements: [
      'Shipped 12+ live client production platforms with zero security breaches across 6 years',
      'Mentored 8+ junior developers in TypeScript, Laravel best practices, and Git workflows',
      'Architected bespoke POS solutions replacing legacy paper workflows for retail clients'
    ]
  },
  {
    id: 'inspiration-academy',
    role: 'Web Development Tutor (Evening Classes)',
    company: 'Inspiration Academy',
    location: 'Harare, Zimbabwe',
    period: '2016 – Present',
    type: 'Academic / Mentorship',
    summary:
      'Conduct practical evening classes coaching ambitious career switchers, university students, and working professionals into job-ready full stack developers.',
    responsibilities: [
      'Train students and working professionals in HTML/CSS, PHP, JavaScript and modern frameworks.',
      'Turn beginners into job-ready developers through project-based curriculum, code reviews, and live debugging sessions.',
      'Develop hands-on modules in database design (MySQL), RESTful API development, and Git version control.',
      'Provide career guidance, portfolio reviews, and technical interview preparation.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'React', 'Git & GitHub'],
    achievements: [
      'Successfully mentored 150+ students who transitioned into active engineering roles',
      'Designed a practical 12-week Full Stack Bootcamp curriculum adopted academy-wide',
      'Maintained a 95%+ student satisfaction rating over 8 consecutive years'
    ]
  },
  {
    id: 'hansole-company',
    role: 'Web Developer',
    company: 'Hansole Company',
    location: 'Harare, Zimbabwe',
    period: '2018',
    type: 'Corporate Employment',
    summary:
      'Built and maintained websites for small businesses and large enterprises, configuring shared hosting environments, hardening web security, and driving organic search ranking.',
    responsibilities: [
      'Built and maintained websites for small businesses and large enterprises across diverse sectors.',
      'Configured shared hosting, DNS zone files, email server setups, and SSL certificates.',
      'Hardened web security against cross-site scripting (XSS), SQL injection, and DDoS threats.',
      'Applied technical on-page SEO strategies to boost organic search rankings.'
    ],
    technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'Shared Hosting', 'SEO Strategy', 'cPanel'],
    achievements: [
      'Secured and migrated 20+ legacy websites to high-speed hosting infrastructure',
      'Boosted client organic search impressions by an average of 180% within 4 months'
    ]
  },
  {
    id: 'alliance-caregivers',
    role: 'Marketing Officer, Advertising & Data Entry',
    company: 'International Alliance for Caregivers',
    location: 'Harare, Zimbabwe',
    period: '2017 – 2018',
    type: 'Contract / Operations',
    summary:
      'Led digital marketing campaigns, managed organizational donor and stakeholder databases, and supported high-stakes institutional communications.',
    responsibilities: [
      'Ran marketing campaigns across digital and print channels to raise caregiver awareness.',
      'Managed sensitive data entry, donor records, and communication logs with meticulous accuracy.',
      'Supported organizational communications with international stakeholders and healthcare partners.',
      'Produced visual marketing collateral, flyers, and event presentations.'
    ],
    technologies: ['Digital Marketing', 'Data Entry', 'Graphic Design', 'Content Strategy', 'Stakeholder Comms'],
    achievements: [
      'Increased campaign engagement by 40% across national advocacy programs',
      'Digitized 5,000+ physical beneficiary records into a searchable digital archive'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Development & Languages',
    description: 'Foundational programming languages and core web fundamentals honed over a decade.',
    skills: [
      { name: 'TypeScript', experienceYears: 5, level: 'Expert', percentage: 95, highlight: true },
      { name: 'JavaScript (ES6+)', experienceYears: 10, level: 'Expert', percentage: 98, highlight: true },
      { name: 'PHP', experienceYears: 8, level: 'Expert', percentage: 94, highlight: true },
      { name: 'HTML5 & Semantic Web', experienceYears: 10, level: 'Expert', percentage: 99 },
      { name: 'CSS3 & Modern Layouts', experienceYears: 10, level: 'Expert', percentage: 98 }
    ]
  },
  {
    title: 'Frameworks & Frontend Architecture',
    description: 'Production frontend frameworks for responsive, high-performance web applications.',
    skills: [
      { name: 'Next.js (App Router & SSR)', experienceYears: 5, level: 'Expert', percentage: 96, highlight: true },
      { name: 'React.js', experienceYears: 6, level: 'Expert', percentage: 95, highlight: true },
      { name: 'Laravel (MVC & APIs)', experienceYears: 5, level: 'Expert', percentage: 94, highlight: true },
      { name: 'Tailwind CSS', experienceYears: 5, level: 'Expert', percentage: 98, highlight: true },
      { name: 'RESTful API Design', experienceYears: 8, level: 'Expert', percentage: 95 }
    ]
  },
  {
    title: 'Data & Backend Systems',
    description: 'Robust database modeling, transactional integrity, and server-side data operations.',
    skills: [
      { name: 'MySQL Database Design', experienceYears: 8, level: 'Expert', percentage: 94, highlight: true },
      { name: 'phpMyAdmin & Administration', experienceYears: 8, level: 'Expert', percentage: 92 },
      { name: 'eCommerce & POS Systems', experienceYears: 7, level: 'Expert', percentage: 93, highlight: true },
      { name: 'System Architecture', experienceYears: 8, level: 'Advanced', percentage: 90 },
      { name: 'SSH & Remote Shell', experienceYears: 6, level: 'Advanced', percentage: 88 }
    ]
  },
  {
    title: 'DevOps, Security & Cloud',
    description: 'Ensuring high availability, web security hardening, and resilient deployments.',
    skills: [
      { name: 'VPS Hosting & Linux Server Mgmt', experienceYears: 7, level: 'Expert', percentage: 91, highlight: true },
      { name: 'Web Security Hardening', experienceYears: 6, level: 'Expert', percentage: 92, highlight: true },
      { name: 'SEO Strategy & Optimization', experienceYears: 8, level: 'Expert', percentage: 94 },
      { name: 'Git & GitHub Collaboration', experienceYears: 8, level: 'Expert', percentage: 95 },
      { name: 'Ongoing Uptime & Maintenance', experienceYears: 7, level: 'Expert', percentage: 92 }
    ]
  },
  {
    title: 'Design, Branding & Media',
    description: 'Award-grade visual assets, brand identities, motion graphics, and video production.',
    skills: [
      { name: 'Adobe Photoshop', experienceYears: 8, level: 'Expert', percentage: 96, highlight: true },
      { name: 'Adobe Illustrator', experienceYears: 8, level: 'Expert', percentage: 94, highlight: true },
      { name: 'UI/UX & Brand Identity', experienceYears: 8, level: 'Expert', percentage: 95, highlight: true },
      { name: 'Adobe After Effects', experienceYears: 2, level: 'Proficient', percentage: 82 },
      { name: 'DaVinci Resolve & Video Editing', experienceYears: 3, level: 'Proficient', percentage: 80 }
    ]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'skillsoft-web',
    degree: 'Diploma in Web Development',
    institution: 'Skillsoft',
    period: '2013 – 2014',
    details: 'Comprehensive curriculum covering full stack programming, server environments, client-server models, and database systems.',
    badge: 'Diploma'
  },
  {
    id: 'skillsoft-design',
    degree: 'Diploma in Graphic Design',
    institution: 'Skillsoft',
    period: '2014 – 2015',
    details: 'Advanced visual communication, typography hierarchy, commercial branding, vector design, and digital color theory.',
    badge: 'Diploma'
  },
  {
    id: 'udemy-certs',
    degree: 'Udemy Professional Certifications',
    institution: 'Udemy Online Academy',
    period: 'Continuous Professional Development',
    details: 'Specialized deep-dive certifications in Laravel API Architecture, Advanced React Hooks & State Management, and Next.js Production Deployments.',
    badge: 'Certifications'
  },
  {
    id: 'zimsec-olevel',
    degree: 'ZIMSEC Ordinary Level Certificate',
    institution: 'ZIMSEC Examinations Council',
    period: '2011',
    details: '8 subjects passed including Mathematics, English Language, and Physical Sciences with distinction.',
    badge: 'Secondary Education'
  }
];

export const ARCHITECTURE_PILLARS = [
  {
    id: 'nextjs',
    title: 'Modern Next.js Frontend',
    subtitle: 'Server Components, Zero-Layout-Shift & Blazing Hydration',
    description:
      'Architected for maximum SEO score and instant page responsiveness. Utilizes TypeScript for end-to-end type safety, Tailwind CSS for zero runtime overhead, and fluid motion design.',
    stack: ['Next.js 14/15/16', 'TypeScript', 'Tailwind CSS', 'Motion'],
    codeSnippet: `// app/projects/page.tsx (Next.js Server Component)
export default async function ProjectsPage() {
  const projects = await getFeaturedProjects();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </section>
  );
}`
  },
  {
    id: 'laravel',
    title: 'Laravel Enterprise APIs',
    subtitle: 'Modular Controllers, Form Requests & Robust ORM',
    description:
      'Battle-tested RESTful endpoints powering eCommerce checkouts, inventory synchronization, and user authentication with Eloquent relationships and Redis cache tags.',
    stack: ['Laravel 10/11', 'PHP 8.2+', 'REST APIs', 'Sanctum / JWT'],
    codeSnippet: `// app/Http/Controllers/VehicleInventoryController.php
public function index(Request $request): JsonResponse {
    $vehicles = Vehicle::with(['images', 'specifications'])
        ->when($request->make, fn($q, $m) => $q->where('make', $m))
        ->where('is_available', true)
        ->paginate(15);
    return response()->json($vehicles);
}`
  },
  {
    id: 'mysql',
    title: 'Normalized MySQL Schemas',
    subtitle: 'ACID Transactions, Foreign Keys & Query Optimization',
    description:
      'Disciplined relational database architecture designed to handle high transaction volumes without deadlocks, backed by indexing strategies and clean migrations.',
    stack: ['MySQL 8.0', 'InnoDB', 'phpMyAdmin', 'Foreign Keys'],
    codeSnippet: `-- POS & Transaction Ledger Schema
CREATE TABLE transactions (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    reference VARCHAR(64) UNIQUE NOT NULL,
    customer_id BIGINT UNSIGNED NOT NULL,
    total_amount DECIMAL(12, 2) NOT NULL,
    status ENUM('pending', 'completed', 'refunded') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE RESTRICT
) ENGINE=InnoDB;`
  },
  {
    id: 'devops',
    title: 'VPS Hardening & Reliability',
    subtitle: 'Linux Administration, Nginx Reverse Proxy & SSL',
    description:
      'Complete ownership of the deployment lifecycle: custom Nginx reverse proxy rules, automatic Let\'s Encrypt SSL renewal, UFW firewall configuration, and SSH key authentication.',
    stack: ['Ubuntu VPS', 'Nginx', 'SSL / TLS 1.3', 'UFW / Fail2ban', 'Git SSH'],
    codeSnippet: `# Nginx production block with security headers
server {
    listen 443 ssl http2;
    server_name ownonevehicles.co.zw;
    ssl_certificate /etc/letsencrypt/live/ownone/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ownone/privkey.pem;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
    }
}`
  }
];
