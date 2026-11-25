
import Link from "next/link";
import Image from "next/image";
import { iconSizes } from "../../../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const pages = [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "Services", href: "/Services" },
    { label: "Contact", href: "/Contact" },
    { label: "Hamilton Web", href: "/Hamilton-Web" },
  ];

  const services = [
    "Website Design",
    "Search Engine Optimization",
    "Web Applications",
    "Graphic Design",
    "Paid Advertising",
  ];

  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">

          {/* Brand and Contact */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <Link href="/" className="inline-flex">
              <Image
                src="/logo.svg"
                width={iconSizes.logoWidth}
                height={iconSizes.logoHeight}
                alt="Peak Digital Logo"
                className="w-[155px] h-auto object-contain"
              />
            </Link>

            <p className="text-slate-400 text-sm leading-7 max-w-sm">
              Helping businesses grow through thoughtful digital experiences,
              professional websites, and innovative technology.
            </p>

            <div className="flex flex-col gap-3 mt-1">
              <a
                href="mailto:hello@peakdigital.ca"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                hello@peakdigital.ca
              </a>

              <a
                href="tel:+19055170696"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                (905) 517-0696
              </a>
            </div>
          </div>

          {/* Pages */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white mb-6">
              Explore
            </h3>

            <ul className="flex flex-col gap-4">
              {pages.map((page) => (
                <li key={page.label}>
                  <Link
                    href={page.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white mb-6">
              Our Services
            </h3>

            <ul className="flex flex-col gap-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-slate-400"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-7 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {currentYear} Peak Digital. All rights reserved.
          </p>

          <p className="text-xs text-slate-500">
            Designed to help your business grow.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
