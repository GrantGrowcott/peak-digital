import Image from "next/image";
import ContactButton from "./ContactButton";
import { iconSizes } from "../../../constants";
const ServicesWidget = () => {
  return (
    <div className="bg-[var(--darkPurple)] text-center py-24">
      <h3 className="text-[var(--grey)] font-bold">Our Services</h3>
      <h4 className="text-[var(--white)] text-5xl font-bold py-6">Services That Adapt to Your Business</h4>
      <h5 className="text-[var(--grey)] font-bold pb-6">
        From startup to scale-up, our services are tailored to fuel your growth
      </h5>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto w-[90%]">
        <div className="col-span-1 bg-[var(--lightPurple)] text-center py-8 rounded-4xl">
          <h3 className="font-bold text-[var(--white)] text-3xl ">SEO Services</h3>
          <h4 className="text-[var(--grey)] pb-12">Essential for growing your business</h4>
          <div className="flex justify-center">
            <ul className="flex flex-col items-start gap-4 ">
              <li className="flex flex-row items-center gap-3">
                <Image src="/check.png" width={iconSizes.check} height={iconSizes.check} alt="Check Mark" />
                <h3 className="font-bold text-[var(--white)]">Keyword Research</h3>
              </li>
              <li className="flex flex-row items-center gap-3">
                <Image src="/check.png" width={iconSizes.check} height={iconSizes.check} alt="Check Mark" />
                <h3 className="font-bold text-[var(--white)]">Business Profile Optimized</h3>
              </li>
              <li className="flex flex-row items-center gap-3">
                <Image src="/check.png" width={iconSizes.check} height={iconSizes.check} alt="Check Mark" />
                <h3 className="font-bold text-[var(--white)]">Content Strategy</h3>
              </li>
              <li className="flex flex-row items-center gap-3">
                <Image src="/check.png" width={iconSizes.check} height={iconSizes.check} alt="Check Mark" />
                <h3 className="font-bold text-[var(--white)]">On-Page SEO</h3>
              </li>
              <li className="flex flex-row items-center gap-3">
                <Image src="/check.png" width={iconSizes.check} height={iconSizes.check} alt="Check Mark" />
                <h3 className="font-bold text-[var(--white)]">Site Speed</h3>
              </li>
              <li className="flex flex-row items-center gap-3">
                <Image src="/check.png" width={iconSizes.check} height={iconSizes.check} alt="Check Mark" />
                <h3 className="font-bold text-[var(--white)]">Content Refresh</h3>
              </li>
            </ul>
          </div>
          <ContactButton />
        </div>
        <div className="col-span-1 bg-[var(--lightPurple)] text-center py-8 rounded-4xl">
          <h3 className="font-bold text-[var(--white)] text-3xl ">Websites</h3>
          <h4 className="text-[var(--grey)] pb-12">Redesign, Optimization, Branding</h4>
          <div className="flex justify-center">
            <ul className="flex flex-col items-start gap-4 ">
              <li className="flex flex-row items-center gap-3">
                <Image src="/check.png" width={iconSizes.check} height={iconSizes.check} alt="Check Mark" />
                <h3 className="font-bold text-[var(--white)]">Custom Design</h3>
              </li>
              <li className="flex flex-row items-center gap-3">
                <Image src="/check.png" width={iconSizes.check} height={iconSizes.check} alt="Check Mark" />
                <h3 className="font-bold text-[var(--white)]">Mobile Friendly</h3>
              </li>
              <li className="flex flex-row items-center gap-3">
                <Image src="/check.png" width={iconSizes.check} height={iconSizes.check} alt="Check Mark" />
                <h3 className="font-bold text-[var(--white)]">Blog Creation</h3>
              </li>
              <li className="flex flex-row items-center gap-3">
                <Image src="/check.png" width={iconSizes.check} height={iconSizes.check} alt="Check Mark" />
                <h3 className="font-bold text-[var(--white)]">CMS Setup</h3>
              </li>
              <li className="flex flex-row items-center gap-3">
                <Image src="/check.png" width={iconSizes.check} height={iconSizes.check} alt="Check Mark" />
                <h3 className="font-bold text-[var(--white)]">On-going Support</h3>
              </li>
              <li className="flex flex-row items-center gap-3">
                <Image src="/check.png" width={iconSizes.check} height={iconSizes.check} alt="Check Mark" />
                <h3 className="font-bold text-[var(--white)]">Analytics Setup</h3>
              </li>
            </ul>
          </div>
          <ContactButton />
        </div>
        <div className="col-span-1 bg-[var(--lightPurple)] text-center py-8 rounded-4xl">
          <h3 className="font-bold text-[var(--white)] text-3xl ">Logo/Graphics</h3>
          <h4 className="text-[var(--grey)] pb-12">Reflect your business brand</h4>
          <div className="flex justify-center">
            <ul className="flex flex-col items-start gap-4 ">
              <li className="flex flex-row items-center gap-3">
                <Image src="/check.png" width={iconSizes.check} height={iconSizes.check} alt="Check Mark" />
                <h3 className="font-bold text-[var(--white)]">Rebranding Services</h3>
              </li>
              <li className="flex flex-row items-center gap-3">
                <Image src="/check.png" width={iconSizes.check} height={iconSizes.check} alt="Check Mark" />
                <h3 className="font-bold text-[var(--white)]">Mood Boards</h3>
              </li>
              <li className="flex flex-row items-center gap-3">
                <Image src="/check.png" width={iconSizes.check} height={iconSizes.check} alt="Check Mark" />
                <h3 className="font-bold text-[var(--white)]">Ad Creatives</h3>
              </li>
              <li className="flex flex-row items-center gap-3">
                <Image src="/check.png" width={iconSizes.check} height={iconSizes.check} alt="Check Mark" />
                <h3 className="font-bold text-[var(--white)]">On-Page SEO</h3>
              </li>
              <li className="flex flex-row items-center gap-3">
                <Image src="/check.png" width={iconSizes.check} height={iconSizes.check} alt="Check Mark" />
                <h3 className="font-bold text-[var(--white)]">Animations</h3>
              </li>
              <li className="flex flex-row items-center gap-3">
                <Image src="/check.png" width={iconSizes.check} height={iconSizes.check} alt="Check Mark" />
                <h3 className="font-bold text-[var(--white)]">All File Formats</h3>
              </li>
            </ul>
          </div>
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

export default ServicesWidget;
