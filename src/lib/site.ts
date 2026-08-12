export const siteConfig = {
  name: "GracePoint Planning Services",
  legalName: "GracePoint Planning Services, LLC",
  tagline: "Compassionate funeral pre-planning for life's quietest decisions",
  description:
    "GracePoint Planning Services - compassionate funeral pre-planning website (Next.js 16 glassmorphism). GracePoint helps families plan meaningful, affordable funeral and memorial arrangements in advance — with locked-in pricing, licensed counselors and year-round support.",
  url: "https://gracepoint-planning-services.amsitservices.com",
  phone: "+1 (555) 016-7712",
  email: "hello@gracepointplanning.com",
  address: {
    street: "412 Willow Bend Lane, Suite 200",
    city: "Austin",
    region: "TX",
    postalCode: "78746",
    country: "US",
  },
  socials: [
    { label: "Facebook", icon: "fa-brands fa-facebook-f", href: "https://www.facebook.com" },
    { label: "Instagram", icon: "fa-brands fa-instagram", href: "https://www.instagram.com" },
    { label: "LinkedIn", icon: "fa-brands fa-linkedin-in", href: "https://www.linkedin.com" },
    { label: "X", icon: "fa-brands fa-x-twitter", href: "https://x.com" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;
