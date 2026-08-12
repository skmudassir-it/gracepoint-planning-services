export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  icon: string;
  features: string[];
  outcomes: string[];
  stat: { value: string; label: string };
};

export const services: Service[] = [
  {
    slug: "pre-need-funeral-planning",
    title: "Pre-Need Funeral Planning",
    short: "Thoughtful, detailed funeral planning done now — so your family never has to guess later.",
    description:
      "Pre-need planning is one of the most caring gifts you can give your family. We sit with you, at your pace, and document every preference that matters: service style, music, readings, casket or urn choices, and the people you want involved. When the time comes, your family follows a plan you wrote — not a stressful decision under pressure.",
    image: "/images/service-preneed.jpg",
    icon: "fa-solid fa-scroll",
    features: [
      "Personal planning sessions at your home or our office",
      "Detailed service, music & reading preferences",
      "Casket, urn and floral selection guidance",
      "Digital plan library your family can access anytime",
      "Free plan updates as your wishes change",
    ],
    outcomes: [
      "Your family never has to make hard choices alone",
      "A complete, written plan honored exactly as you wrote it",
      "One less burden during a difficult time",
    ],
    stat: { value: "4.9★", label: "average family rating for pre-need plans" },
  },
  {
    slug: "cremation-planning",
    title: "Cremation Planning",
    short: "Simple, dignified cremation arrangements planned in advance — with every option explained plainly.",
    description:
      "Cremation is now the most chosen option in America, yet most families have never talked through the choices it involves. We walk you through direct cremation, cremation with a memorial service, urn selection, keepsakes and scattering ceremonies — with honest pricing for every path, locked in when you plan.",
    image: "/images/service-cremation.jpg",
    icon: "fa-solid fa-dove",
    features: [
      "Direct cremation & cremation-with-service options",
      "Urn, keepsake and jewelry selection guidance",
      "Scattering ceremony coordination",
      "Transparent, itemized pricing — no surprises",
      "Transport and documentation handled for you",
    ],
    outcomes: [
      "The cremation path that fits your values and budget",
      "Pricing locked at today's rates",
      "Arrangements handled with quiet dignity",
    ],
    stat: { value: "60%+", label: "of American families now choose cremation" },
  },
  {
    slug: "burial-cemetery-arrangements",
    title: "Burial & Cemetery Arrangements",
    short: "Cemetery plots, headstones and burial details arranged with care — long before they're needed.",
    description:
      "Cemetery decisions are often made in a hurry, at the worst possible moment. We help you evaluate cemeteries, select and secure plots, choose headstones or markers, and understand interment rules — so your burial wishes are settled, documented and paid for in advance.",
    image: "/images/service-burial.jpg",
    icon: "fa-solid fa-tree",
    features: [
      "Cemetery comparison & plot selection tours",
      "Headstone, marker and inscription design",
      "Vault and interment arrangement coordination",
      "Perpetual care and ownership paperwork",
      "Multi-generation family plot planning",
    ],
    outcomes: [
      "The right cemetery, secured at today's prices",
      "Headstone wishes documented for your family",
      "No rushed cemetery decisions ever again",
    ],
    stat: { value: "3×", label: "less costly when planned in advance" },
  },
  {
    slug: "memorial-services",
    title: "Memorial Services",
    short: "Meaningful memorials and celebrations of life, designed around the person you loved.",
    description:
      "A memorial should reflect a life — not a catalog. Whether you're planning ahead or need help now, our coordinators design services around the stories, music, photos and people that mattered most. From intimate gatherings to large celebrations of life, we handle the logistics so you can be present.",
    image: "/images/service-memorial.jpg",
    icon: "fa-solid fa-hand-holding-heart",
    features: [
      "Personalized celebration-of-life design",
      "Venue, catering and AV coordination",
      "Photo tributes, memory tables & guest books",
      "Officiant and clergy coordination",
      "Livestream options for distant family",
    ],
    outcomes: [
      "A service that truly honors your loved one",
      "Logistics handled by one caring coordinator",
      "Family free to grieve, not to organize",
    ],
    stat: { value: "100%", label: "of memorials personalized to the person" },
  },
  {
    slug: "veterans-benefits-planning",
    title: "Veterans' Benefits Planning",
    short: "Honoring those who served — with burial benefits and honors secured for every eligible veteran.",
    description:
      "Veterans and their spouses may be entitled to burial in national cemeteries, a grave marker at no cost, burial allowances, and military funeral honors. Many families miss these benefits simply because nobody walked them through the paperwork. We verify eligibility and handle every form — at no cost to you.",
    image: "/images/service-veterans.jpg",
    icon: "fa-solid fa-medal",
    features: [
      "Eligibility verification for VA burial benefits",
      "National cemetery burial arrangements",
      "Free grave marker & burial allowance filing",
      "Military funeral honors coordination",
      "Surviving-spouse benefit guidance",
    ],
    outcomes: [
      "Every earned benefit claimed — at zero cost",
      "Honors and flag ceremonies arranged",
      "Paperwork completed correctly the first time",
    ],
    stat: { value: "$800+", label: "average VA burial allowance secured per family" },
  },
  {
    slug: "prepaid-plan-management",
    title: "Prepaid Plan Management",
    short: "Your prepaid funds protected, tracked and ready — so the plan is honored exactly as agreed.",
    description:
      "A prepaid funeral plan is only as good as the promise behind it. We help you understand how your funds are held — trust accounts, insurance-backed plans or state-regulated programs — and monitor every plan we create, confirming annually that your arrangements and price guarantees remain intact.",
    image: "/images/service-prepaid.jpg",
    icon: "fa-solid fa-file-invoice-dollar",
    features: [
      "Trust & insurance-backed funding options",
      "Annual plan protection reviews",
      "Price-guarantee verification & tracking",
      "Portable plans honored across states",
      "Family notification & document vault",
    ],
    outcomes: [
      "Your funds held safely and transparently",
      "Locked pricing honored when the plan is used",
      "One annual check-in, forever",
    ],
    stat: { value: "$0", label: "extra cost to manage your prepaid plan" },
  },
  {
    slug: "grief-support-resources",
    title: "Grief Support Resources",
    short: "Compassionate grief resources and support groups — because care doesn't end at the service.",
    description:
      "Grief has no timeline, and you shouldn't have to walk it alone. GracePoint connects families with local support groups, grief counselors, reading lists and seasonal remembrance events — at no charge, for as long as you need them. Our care continues long after the final goodbyes.",
    image: "/images/service-grief.jpg",
    icon: "fa-solid fa-shield-heart",
    features: [
      "Local grief support group referrals",
      "Individual counseling connections",
      "Seasonal remembrance & candlelight events",
      "Grief reading library & guided resources",
      "Annual family check-in calls",
    ],
    outcomes: [
      "Support that continues long after the service",
      "A caring community that understands",
      "You are never left to grieve alone",
    ],
    stat: { value: "12 mo", label: "of follow-up support included with every plan" },
  },
];

export const testimonials = [
  {
    quote:
      "Mom planned everything with GracePoint two years before she passed. When the time came, all we had to do was make one phone call. They honored every single wish she wrote down.",
    name: "Rebecca Torres",
    role: "Daughter of a pre-need client",
    initials: "RT",
  },
  {
    quote:
      "They walked us through cremation options with patience and zero pressure. Everything was itemized, nothing was upsold. We locked today's prices for peace of mind.",
    name: "Harold Simmons",
    role: "Pre-need client, Austin",
    initials: "HS",
  },
  {
    quote:
      "Dad served in Vietnam for 22 years. GracePoint secured his national cemetery burial, his marker, and a full military honor ceremony — and handled every form for free.",
    name: "Marcus Webb",
    role: "Son of a veteran",
    initials: "MW",
  },
  {
    quote:
      "Planning ahead felt strange at first, but our counselor made it warm and even comforting. We laughed, we remembered, and we left with a plan our kids will never have to figure out.",
    name: "Eleanor & Frank Grant",
    role: "Pre-need clients",
    initials: "EG",
  },
  {
    quote:
      "After my husband died, GracePoint coordinated the entire memorial — the venue, the music, the photo tribute. I just had to show up and grieve. I'll never forget that kindness.",
    name: "Diane Kowalski",
    role: "Memorial services client",
    initials: "DK",
  },
  {
    quote:
      "Their grief support group quite literally carried me through the hardest year of my life. A year later, they still call to check in. This is what compassion looks like.",
    name: "Aisha Rahman",
    role: "Grief support participant",
    initials: "AR",
  },
];

export type Project = {
  name: string;
  industry: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
};

export const projects: Project[] = [
  {
    name: "The Whitfield Legacy Plan",
    industry: "Family Pre-Need Planning",
    image: "/images/project-1.jpg",
    challenge:
      "Three generations of the Whitfield family shared a family plot but had never documented any arrangements. When matriarch Ruth passed suddenly, her children faced every decision — casket, service, cemetery rules — in a single stressful week.",
    solution:
      "GracePoint worked with Ruth's children to reconstruct her wishes from letters and family stories, secured the existing plot's ownership paperwork, and built a complete pre-need plan for both surviving parents so no future generation would ever face that week.",
    results: [
      "Full plan documented in under three weeks",
      "Family plot ownership resolved & secured",
      "Both parents' pre-need plans now locked in",
    ],
  },
  {
    name: "The Okafor Veterans Project",
    industry: "Veterans' Benefits",
    image: "/images/project-2.jpg",
    challenge:
      "Chief Okafor, a 24-year Navy veteran, passed without any paperwork for his burial benefits. His family didn't know a national cemetery, a free marker and a burial allowance were all available to them.",
    solution:
      "Our veterans' benefits team verified eligibility, completed the VA forms with the family, arranged burial at a national cemetery with full military honors, and filed for the burial allowance on their behalf — at no cost.",
    results: [
      "National cemetery burial with full honors",
      "$1,100 burial allowance recovered",
      "All paperwork completed in one visit",
    ],
  },
  {
    name: "The Delgado Cremation & Memorial Plan",
    industry: "Cremation & Memorial Services",
    image: "/images/project-3.jpg",
    challenge:
      "The Delgado family wanted cremation but disagreed on everything else — urn, keepsakes, whether to hold a service at all. They were avoiding the conversation entirely.",
    solution:
      "One guided session with a GracePoint counselor turned the disagreement into a plan: direct cremation, keepsake jewelry for each child, and a sunset scattering ceremony on the family ranch — all priced and locked in advance.",
    results: [
      "Family consensus reached in one session",
      "Full plan locked at today's pricing",
      "A ceremony that honored their father perfectly",
    ],
  },
];

export const faqs = [
  {
    question: "What exactly is funeral pre-planning?",
    answer:
      "Pre-planning means documenting your funeral, cremation or burial wishes in advance — the service style, music, readings, casket or urn, cemetery and more — and, if you choose, funding those arrangements at today's prices. Your family receives a complete written plan, so when the time comes they follow your wishes instead of making rushed decisions under pressure.",
  },
  {
    question: "Why should I plan and pay in advance?",
    answer:
      "Three reasons. First, your family is spared difficult, expensive decisions at the worst possible moment. Second, prepaid plans lock in today's prices — funeral costs rise with inflation, and a plan funded now is guaranteed at the agreed amount. Third, prepaid funds are held in protected trusts or insurance-backed accounts, so your money is safe and used only as intended.",
  },
  {
    question: "Is pre-planning only for older people?",
    answer:
      "Not at all. We work with people in their thirties through their nineties. Younger planners often choose cremation or prepaid arrangements to spare their partners and children the burden — and to lock in lower current pricing. There is no wrong age to make these decisions.",
  },
  {
    question: "What does a plan cost to create?",
    answer:
      "Creating your plan is completely free. There is no charge for planning sessions, documentation or plan updates. If you choose to prepay your arrangements, you fund only the services and merchandise you select — and those funds are protected in trust or insurance-backed accounts. Our veterans' benefits guidance is also free, always.",
  },
  {
    question: "What happens to my prepaid funds?",
    answer:
      "Prepaid funds are held in state-regulated trust accounts or insurance-backed pre-need contracts, depending on your state and the plan you choose. We explain exactly how your funds are protected before you commit, and we review your plan every year to confirm the protection and the price guarantee remain intact.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes — as often as you like, at no cost. Life changes, and your plan should change with it. A simple phone call updates your wishes, and your family always sees the most current version through our secure plan library.",
  },
  {
    question: "Do you only serve people who plan in advance?",
    answer:
      "No. About a third of the families we serve come to us at the time of need, often referred by a funeral home or hospital. We coordinate at-need arrangements with the same compassion, transparency and attention to detail as pre-need plans.",
  },
  {
    question: "Is the plan honored in other states?",
    answer:
      "In most cases, yes. Our prepaid plans are portable: if you move, we coordinate with a local partner funeral home so your locked pricing and documented wishes transfer. We'll confirm portability for the specific plan you choose before you fund it.",
  },
];

export const pricingPlans = [
  {
    name: "Graceful",
    priceMonthly: 0,
    priceAnnual: 0,
    tagline: "Free forever. Plan creation, documentation and updates at no cost.",
    features: [
      "Personal pre-need planning sessions",
      "Complete written plan & digital library",
      "Free plan updates, anytime",
      "Grief support resources & groups",
      "Veterans' benefits guidance",
    ],
    cta: "Start free planning",
    popular: false,
  },
  {
    name: "Legacy",
    priceMonthly: 25,
    priceAnnual: 20,
    tagline: "Prepaid arrangements with locked pricing and annual protection reviews.",
    features: [
      "Everything in Graceful",
      "Prepaid plan with locked-in pricing",
      "Trust-protected or insurance-backed funding",
      "Annual plan protection reviews",
      "Prepaid plan management & tracking",
      "Priority planning support",
    ],
    cta: "Choose Legacy",
    popular: true,
  },
  {
    name: "Family Trust",
    priceMonthly: null,
    priceAnnual: null,
    tagline: "Multi-generation planning for families who want everything settled.",
    features: [
      "Everything in Legacy",
      "Plans for multiple family members",
      "Family plot & cemetery coordination",
      "Dedicated family counselor",
      "Estate & will coordination",
      "Annual family check-in calls",
    ],
    cta: "Talk to a Counselor",
    popular: false,
  },
];

export const stats = [
  { value: "25+", label: "Years of compassionate service" },
  { value: "10,000+", label: "Families guided with care" },
  { value: "100%", label: "Price guarantee on prepaid plans" },
  { value: "98%", label: "Families who recommend us" },
];

export const features = [
  {
    title: "Compassionate Guidance",
    description: "Licensed counselors who listen first and plan second — never pressure, never rush.",
    icon: "fa-solid fa-hands-holding-circle",
  },
  {
    title: "Transparent Pricing",
    description: "Itemized, honest pricing for every option. What we quote is what your family pays.",
    icon: "fa-solid fa-receipt",
  },
  {
    title: "Locked-In Pricing",
    description: "Prepaid plans hold today's rates, so inflation never inflates your family's burden.",
    icon: "fa-solid fa-lock",
  },
  {
    title: "Family-First Approach",
    description: "Every plan is built around your family's traditions, values and wishes — not a template.",
    icon: "fa-solid fa-people-roof",
  },
  {
    title: "Veterans' Benefits Advocacy",
    description: "We secure every earned benefit for veterans and their spouses — at no cost, ever.",
    icon: "fa-solid fa-medal",
  },
  {
    title: "Care That Continues",
    description: "Grief support, remembrance events and check-in calls — long after the final service.",
    icon: "fa-solid fa-hand-holding-heart",
  },
];

export const values = [
  {
    title: "Compassion Always",
    description: "Every conversation starts with empathy. We move at your pace and honor your feelings.",
    icon: "fa-solid fa-heart",
  },
  {
    title: "Clarity & Transparency",
    description: "Plain language, itemized pricing and no hidden fees. You'll always know exactly what you're choosing.",
    icon: "fa-solid fa-lightbulb",
  },
  {
    title: "Dignity in Every Detail",
    description: "From the first meeting to the final service, every arrangement is handled with respect.",
    icon: "fa-solid fa-handshake",
  },
  {
    title: "Peace of Mind",
    description: "The quiet confidence of knowing everything is planned, funded and protected.",
    icon: "fa-solid fa-peace",
  },
];
