import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { name: "Instagram", icon: "/Icons/social/instagram.svg" },
  { name: "Twitter/X", icon: "/Icons/social/twitter-x.svg" },
  { name: "LinkedIn", icon: "/Icons/social/linkedin.svg" },
  { name: "Facebook", icon: "/Icons/social/facebook.svg" },
  { name: "YouTube", icon: "/Icons/social/youtube.svg" },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      "About us",
      "Careers",
      "Security",
      "Status",
      "Terms & privacy",
      "Your privacy rights",
    ],
  },
  {
    title: "Download",
    links: ["iOS & Android", "Mac & Windows", "Calendar", "Web Clipper"],
  },
  {
    title: "Resources",
    links: [
      "Help center",
      "Pricing",
      "Blog",
      "Community",
      "Integrations",
      "Templates",
      "Affiliates",
    ],
  },
  {
    title: "Notion for",
    links: ["Enterprise", "Small business", "Personal"],
    specialLink: "Explore more →",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5">
          {/* Column 1: Logo and Socials */}
          <div>
            <Link href="/" className="mb-6 flex items-center">
              <Image
                src="/Icons/notion-logo.svg"
                alt="Notion Logo"
                width={24}
                height={24}
              />
              <span className="ml-2 text-lg font-semibold">Notion</span>
            </Link>
            <div className="mb-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                  />
                </a>
              ))}
            </div>
            <button className="mb-4 flex items-center text-sm text-gray-500">
              <Image
                src="/Icons/globe.svg"
                alt="Globe"
                width={16}
                height={16}
                className="mr-2"
              />
              English (US)
            </button>
            <p className="mb-2 text-sm text-gray-500">Cookie settings</p>
            <p className="text-sm text-gray-500">
              &copy; 2025 Notion Labs, Inc.
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 font-bold text-gray-800">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      {link}
                    </a>
                  </li>
                ))}
                {column.specialLink && (
                  <li className="mt-4">
                    <a
                      href="#"
                      className="text-sm font-bold text-gray-800 hover:text-gray-900"
                    >
                      {column.specialLink}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
