import ScheduleButton from "./components/ScheduleButton";
import ServicesWidget from "./components/ServicesWidget";
import QuestionsAnswers from "./components/QuestionsAnswers";
import Image from "next/image";
import { iconSizes } from "../../constants";

export const metadata = {
  title: "Peak Digital | Hamilton Web Design & SEO",
  description:
    "Peak Digital builds high-converting websites for businesses in Hamilton. Web design, SEO, branding, and app development — all in one place.",
};

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-4  w-[90%] mx-auto">
        <h1 className="text-center text-3xl md:text-4xl lg:text-6xl font-bold">
          Turn Your Website Into a <span className="mt-2 block text-[var(--darkPurple)]">Sales-Generating Machine</span>
        </h1>
        <h2 className="text-sm lg:text-base text-center my-6 max-w-xl mx-auto">
          We specialize in crafting high-converting websites for growing businesses in Hamilton. From branding and
          content creation to SEO, we help you attract customers and operate stress free. Click below for a free
          consultation!!!
        </h2>
        <ScheduleButton />
        <div className="my-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image
            src="/hero-one.png"
            width={iconSizes.heroWidth}
            height={iconSizes.heroHeight}
            alt="Board Meeting with Laptops and People"
            className="mt-8"
          />
          <Image
            src="/hero-two.png"
            width={iconSizes.heroWidth}
            height={iconSizes.heroHeight}
            alt="Board Meeting with Laptops and People"
            className="mb-8"
          />
          <Image
            src="/hero-three.png"
            width={iconSizes.heroWidth}
            height={iconSizes.heroHeight}
            alt="Board Meeting with Laptops and People"
            className="mt-8"
          />
          <Image
            src="/hero-four.png"
            width={iconSizes.heroWidth}
            height={iconSizes.heroHeight}
            alt="Board Meeting with Laptops and People"
            className="mb-8"
          />
        </div>
      </div>
      <div className="bg-[var(--darkPurple)] py-24 text-center">
        <h3 className="text-center text-4xl font-bold text-[var(--white)]">Our One-stop Complete Services</h3>
        <h4 className="text-[var(--grey)] my-12">Simplify operations with our efficient, quality focused services</h4>
        <ul className="text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-[90%]">
          <li className="flex flex-col items-start bg-[var(--lightPurple)] rounded-3xl p-6">
            <Image
              src="/service-icon-one.png"
              height={iconSizes.serviceIcon}
              width={iconSizes.serviceIcon}
              alt="Connections icon"
              className="pb-6"
            />
            <h3 className="text-[var(--white)] font-bold text-2xl">A.I and Search</h3>
            <h4 className="text-[var(--grey)]">Content, SEO, and speed—optimized for search and AI.</h4>
          </li>
          <li className="flex flex-col items-start bg-[var(--lightPurple)] rounded-3xl p-6">
            <Image
              src="/service-icon-two.png"
              height={iconSizes.serviceIcon}
              width={iconSizes.serviceIcon}
              alt="Connections icon"
              className="pb-6"
            />
            <h3 className="text-[var(--white)] font-bold text-2xl">Lead Generation</h3>
            <h4 className="text-[var(--grey)]">
              Capture more leads with a clear message, smart layout, and strategic calls to action.
            </h4>
          </li>
          <li className="flex flex-col items-start bg-[var(--lightPurple)] rounded-3xl p-6">
            <Image
              src="/service-icon-three.png"
              height={iconSizes.serviceIcon}
              width={iconSizes.serviceIcon}
              alt="Connections icon"
              className="pb-6"
            />
            <h3 className="text-[var(--white)] font-bold text-2xl">Website Design</h3>
            <h4 className="text-[var(--grey)]">
              Modern, custom website designs that reflect your brand identity through focused analysis.
            </h4>
          </li>
          <li className="flex flex-col items-start bg-[var(--lightPurple)] rounded-3xl p-6">
            <Image
              src="/service-icon-four.png"
              height={iconSizes.serviceIcon}
              width={iconSizes.serviceIcon}
              alt="Connections icon"
              className="pb-6"
            />
            <h3 className="text-[var(--white)] font-bold text-2xl">Graphic Design</h3>
            <h4 className="text-[var(--grey)]">
              We design custom animations, logos, and graphics that reflect your brand’s unique style.
            </h4>
          </li>
          <li className="flex flex-col items-start bg-[var(--lightPurple)] rounded-3xl p-6">
            <Image
              src="/service-icon-five.png"
              height={iconSizes.serviceIcon}
              width={iconSizes.serviceIcon}
              alt="Connections icon"
              className="pb-6"
            />
            <h3 className="text-[var(--white)] font-bold text-2xl">Hosting & Upkeep</h3>
            <h4 className="text-[var(--grey)]">
              Reliable hosting and ongoing website care—so you can focus on running your business.
            </h4>
          </li>
          <li className="flex flex-col items-start bg-[var(--lightPurple)] rounded-3xl p-6">
            <Image
              src="/service-icon-six.png"
              height={iconSizes.serviceIcon}
              width={iconSizes.serviceIcon}
              alt="Connections icon"
              className="pb-6"
            />
            <h3 className="text-[var(--white)] font-bold text-2xl">App Development</h3>
            <h4 className="text-[var(--grey)]">
              Improve efficiency with custom tools that save time and reduce friction.
            </h4>
          </li>
        </ul>
      </div>
      <div className="py-24 mx-auto w-[85%] ">
        <h3 className="font-bold text-5xl mb-6">Our Values</h3>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <h3 className="text-[var(--darkGrey)] font-bold ">
              Our work is rooted in transparency, creativity, and a commitment to staying ahead in an ever-evolving
              online world.
            </h3>
            <div className="flex justify-center mt-4">
              <Image
                src="/values-smiling.png"
                height={iconSizes.womanHeight}
                width={iconSizes.womanWidth}
                alt="Woman Smiling while posing"
              />
            </div>
          </div>
          <div className="flex-1 border-b-3 border-[var(--black)] pr-8">
            <ul className="grid grid-cols-4 gap-y-2 mb-16">
              <li className="text-3xl col-span-1 font-bold flex items-center justify-center">01</li>
              <li className="col-span-3 text-3xl font-bold">Performance First</li>
              <li className="col-span-3 col-start-2 text-base">
                We build fast, functional, and scalable solutions that deliver strong user experiences.
              </li>
            </ul>
            <ul className="grid grid-cols-4 gap-y-2 mb-16">
              <li className="text-3xl col-span-1 font-bold flex items-center justify-center">02</li>
              <li className="col-span-3 text-3xl font-bold">Results Driven</li>
              <li className="col-span-3 col-start-2 text-base">
                We use data to drive decisions that lead to the most optimal outcomes for your business.
              </li>
            </ul>
            <ul className="grid grid-cols-4 gap-y-2 mb-16">
              <li className="text-3xl col-span-1 font-bold flex items-center justify-center">03</li>
              <li className="col-span-3 text-3xl font-bold">Integrity & Trust</li>
              <li className="col-span-3 col-start-2 text-base">
                We only recommend what works and treat your business like it’s our own.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ServicesWidget />
      <QuestionsAnswers />
    </>
  );
}
