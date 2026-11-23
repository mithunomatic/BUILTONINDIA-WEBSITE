// Shared website copy and company information. Edit this file for text-only updates.
const photo = (id, width = 2200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=84`

export const company = {
  name: 'BUILTONINDIA',
  tagline: 'BUILDING WITH INTENT',
  email: 'contact@builtonindia.in',
  description: 'BUILTONINDIA is an integrated construction, interiors and project execution company delivering solutions across residential, commercial, retail, healthcare, hospitality and industrial environments.',
}

export const navigation = [
  ['Expertise', '#expertise'],
  ['Projects', '#projects'],
  ['Partnerships', '#partnerships'],
  ['About', '#about'],
]

export const heroContent = {
  heading: ['Building with Experience.', 'Delivering with Excellence.'],
  description: 'Integrated interiors, construction and project management solutions backed by professional experience since 2013.',
  expertiseCta: 'Explore Our Expertise',
  projectsCta: 'Discover Our Projects',
}

export const slides = [
  { id: 'interiors', label: 'Premium interiors', eyebrow: 'SPACES SHAPED WITH INTENTION', image: photo('photo-1600607687939-ce8a6c25118c'), alt: 'Refined modern interior opening onto a garden terrace' },
  { id: 'construction', label: 'Construction and architecture', eyebrow: 'BUILT WITH CLARITY', image: photo('photo-1486406146926-c627a92ad1ab'), alt: 'Contemporary commercial architecture rising against the sky' },
  { id: 'fitouts', label: 'Commercial and retail projects', eyebrow: 'MADE FOR THE WAY BUSINESS MOVES', image: photo('photo-1600210492486-724fe5c67fb0'), alt: 'Warm contemporary commercial interior with considered materials' },
  { id: 'engineering', label: 'Project management and engineering', eyebrow: 'EXPERTISE AT EVERY STAGE', image: photo('photo-1511818966892-d7d671e672a2'), alt: 'Sculptural concrete architecture viewed from below' },
]

export const experienceContent = {
  eyebrow: 'EXPERIENCE THAT BUILDS TRUST',
  heading: ['Experience earned.', 'A company established in 2021.'],
  description: 'BUILTONINDIA brings professional experience dating to 2013 together with an established company built to deliver integrated solutions.',
  facts: [
    { number: '13+', title: 'Years of professional experience', note: 'Professional journey since 2013', kind: 'experience' },
    { number: '2021', title: 'BUILTONINDIA established', note: 'Company established in 2021', kind: 'established' },
    { number: 'INTEGRATED', title: 'Expertise', note: 'Interiors, construction and project management', kind: 'integrated' },
    { number: 'NEXT', title: 'Chapter', note: 'Construction joint ventures and development partnerships', kind: 'partnership' },
  ],
}

export const servicesContent = {
  eyebrow: 'OUR EXPERTISE',
  heading: ['One vision.', 'Every discipline.'],
  description: 'From the initial brief through planning and execution, we bring disciplines together around the needs of your project.',
  services: [
    { title: 'Interior Design & Fit-outs', icon: 'interiors', description: 'Interior planning, design coordination, execution, finishes and modular furniture for commercial and residential spaces.' },
    { title: 'Construction & Civil Works', icon: 'construction', description: 'Residential and commercial construction, civil and structural works, building execution and turnkey projects.' },
    { title: 'Project Management Consultancy', icon: 'management', description: 'Project planning, coordination, scheduling, monitoring, quality, cost and execution management.' },
    { title: 'Design & Engineering Consultancy', icon: 'engineering', description: 'Feasibility, technical planning, design coordination, engineering consultancy and construction documentation.' },
    { title: 'MEP & Specialist Works', icon: 'systems', description: 'Electrical, HVAC, plumbing, fire safety systems, facade and related specialist execution.' },
    { title: 'Construction Joint Ventures', icon: 'partnerships', description: 'Landowner partnerships, development opportunities and strategic construction joint ventures.' },
  ],
}

export const serviceEnquiryFields = {
  'Interior Design & Fit-outs': [
    { label: 'Property type', type: 'select', options: ['Residential', 'Commercial', 'Retail', 'Hospitality', 'Healthcare', 'Other'] },
    { label: 'Approximate area in square feet', type: 'text' },
    { label: 'Type of interior work required', type: 'select', options: ['Design only', 'Fit-out execution', 'Design and execution', 'Renovation', 'Other'] },
    { label: 'Budget range', type: 'text' },
    { label: 'Expected completion date', type: 'date' },
  ],
  'Construction & Civil Works': [
    { label: 'Project type', type: 'select', options: ['Residential', 'Commercial', 'Industrial', 'Retail', 'Healthcare', 'Other'] },
    { label: 'Plot/building area', type: 'text' },
    { label: 'Construction scope', type: 'textarea' },
    { label: 'Approximate budget', type: 'text' },
    { label: 'Expected project timeline', type: 'text' },
  ],
  'Project Management Consultancy': [
    { label: 'Project type', type: 'text' },
    { label: 'Current project stage', type: 'select', options: ['Concept', 'Design development', 'Tendering', 'Construction', 'Closeout', 'Other'] },
    { label: 'Project duration', type: 'text' },
    { label: 'Services required', type: 'checkboxes', options: ['Planning', 'Scheduling', 'Procurement', 'Execution monitoring', 'Quality', 'Cost control', 'PMC', 'Other'] },
  ],
  'Design & Engineering Consultancy': [
    { label: 'Project type', type: 'text' },
    { label: 'Design/engineering services required', type: 'checkboxes', options: ['Architecture', 'Interior design', 'Structural engineering', 'MEP design', 'Quantity surveying', 'Other'] },
    { label: 'Drawings or approvals required', type: 'textarea' },
    { label: 'Project stage', type: 'select', options: ['Concept', 'Planning', 'Design development', 'Approvals', 'Construction', 'Other'] },
    { label: 'Expected timeline', type: 'text' },
  ],
  'MEP & Specialist Works': [
    { label: 'Project type', type: 'text' },
    { label: 'Approximate project area', type: 'text' },
    { label: 'Services required', type: 'checkboxes', options: ['Electrical', 'HVAC', 'Plumbing', 'Fire Fighting', 'Fire Alarm', 'ELV', 'Other'] },
    { label: 'Scope of work', type: 'textarea' },
    { label: 'Timeline', type: 'text' },
  ],
  'Construction Joint Ventures': [
    { label: 'Land area', type: 'text' },
    { label: 'Land ownership status', type: 'select', options: ['Sole ownership', 'Joint ownership', 'Family ownership', 'Company ownership', 'Other'] },
    { label: 'Proposed development', type: 'textarea' },
    { label: 'Type of JV/partnership opportunity', type: 'text' },
    { label: 'Project investment expectations', type: 'textarea' },
    { label: 'Additional details', type: 'textarea' },
  ],
}

export const portfolioContent = {
  eyebrow: 'SELECTED SECTORS',
  heading: ['Work shaped around', 'how people live and work.'],
  cta: 'Discuss a project',
  filterLabel: 'Explore our areas of expertise',
  note: 'Portfolio imagery is for visual direction. Project locations, scopes and dates will be added when confirmed project details are available.',
}

export const journey = [
  { year: '2013', label: 'Professional journey begins', note: 'The start of professional experience in the built environment.' },
  { year: '2021', label: 'BUILTONINDIA established', note: 'A company established on a foundation of industry experience.' },
  { year: '2021-2026', label: 'Capabilities continue to grow', note: 'Diversified capabilities across interiors, construction and project execution.' },
  { year: '2026', label: 'A new chapter in partnerships', note: 'Expanding toward construction joint ventures and development partnerships.' },
]

export const partnershipContent = {
  eyebrow: 'BUILTONINDIA PARTNERSHIPS',
  heading: ['Opportunity Built', 'on Partnership.'],
  description: 'BUILTONINDIA is expanding into strategic construction partnerships and development opportunities, bringing together execution expertise, project management and a collaborative approach to development.',
  audience: ['LANDOWNERS', 'INVESTORS', 'DEVELOPERS', 'STRATEGIC PARTNERS'],
  cta: 'Explore a Partnership',
  note: 'BUILT ON TRUST. SHAPED BY COLLABORATION.',
  enquiry: {
    eyebrow: "LET'S EXPLORE WHAT'S POSSIBLE",
    heading: ['Bring the right people', 'to the same table.'],
    description: 'For landowners, investors, developers and strategic partners considering a construction or development opportunity.',
    areasHeading: 'Areas for collaboration',
    opportunities: ['Landowner Joint Ventures', 'Construction Partnerships', 'Development Opportunities', 'Residential Development', 'Commercial Development', 'Project Planning', 'Feasibility & Costing', 'Construction Management', 'Execution & Delivery'],
    formKicker: 'PARTNERSHIP ENQUIRY',
    formDescription: 'Share a little about the opportunity and we will be in touch.',
  },
}

export const aboutContent = {
  eyebrow: 'ABOUT BUILTONINDIA',
  heading: ['Practical expertise.', 'Thoughtful execution.'],
  paragraphs: [
    company.description,
    'Built upon professional experience dating back to 2013 and established as a company in 2021, BUILTONINDIA brings together practical execution knowledge, engineering coordination, project management and a commitment to quality.',
    'Our approach is built around careful planning, transparent coordination, technical understanding and dependable delivery.',
  ],
  principles: [
    ['Our Vision', 'Contribute to a built environment shaped by thoughtful planning, capable execution and lasting value.'],
    ['Our Mission', 'Bring interiors, construction, engineering coordination and project management together around each brief.'],
    ['Our Approach', 'Plan carefully, coordinate transparently, understand the technical requirements and deliver dependably.'],
    ['Our Values', 'Experience, accountability, collaboration, quality and respect for the people who use every space.'],
  ],
}

export const differentiators = [
  ['Experience that matters', 'Professional experience since 2013 informs practical decisions from the first brief through execution.'],
  ['Integrated expertise', 'Interiors, construction, engineering coordination and project management come together under one approach.'],
  ['Execution-focused thinking', 'Plans are shaped with buildability, sequencing and delivery requirements in view.'],
  ['Quality in the details', 'Careful coordination and attention to finishes support a considered result.'],
  ['Collaborative partnerships', 'Open coordination helps clients, consultants and delivery teams work toward shared priorities.'],
  ['Professional project coordination', 'Clear communication and structured oversight help projects move forward with confidence.'],
]

export const whyContent = {
  eyebrow: 'WHY BUILTONINDIA',
  heading: ['Confidence in every', 'stage of the work.'],
  description: 'Experienced people, connected disciplines and a considered approach to getting the work done.',
}

export const contactContent = {
  eyebrow: 'YOUR NEXT PROJECT STARTS HERE',
  heading: ['Have a vision?', "Let's make it real."],
  description: 'Tell us what you are planning. We would love to hear about it.',
  emailLabel: 'EMAIL US',
  formKicker: 'PROJECT ENQUIRY',
  formDescription: 'Share a few details and start a conversation with our team.',
}

export const footerContent = {
  description: ['Integrated construction, interiors', 'and project execution.'],
  rights: 'BUILTONINDIA. ALL RIGHTS RESERVED.',
}

// Compatibility exports for small components that need just the email address.
export const contactEmail = company.email
