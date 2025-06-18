import Image from "next/image";
import GetStarted from "../components/GetStarted";
import ContactLandscape from "../components/ContactLandscape";
import { iconSizes } from "../../../constants";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Peak Digital</title>
        <meta
          name="description"
          content="Learn about Peak Digital, a Hamilton-based web design company focused on creating high-performance websites that drive results. Led by founder Grant Growcott."
        />
      </Head>
      <div className="mt-40 mx-auto w-[80%]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-4xl font-bold">About Us</h1>
          <h2 className="text-center text-[var(--darkGrey)] mx-auto max-w-2xl mt-6">
            We specialize in creating high-performance websites and digital solutions that help businesses attract more
            customers, generate quality leads, and grow with confidence in the digital age.
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-center my-24 gap-4">
            <div className="flex-1">
              <Image
                src="/grant-profile.png"
                width={iconSizes.grant}
                height={iconSizes.grant}
                alt="Founder Grant Growcott"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-[var(--darkPurple)]">Peak Digital</h3>
              <h4 className="py-6 text-xl">Helping to make the world a better place through design</h4>
              <p className="text-[var(--darkGrey)]">
                My name is Grant Growcott, founder of Peak Digital. I’m a natural problem solver with a passion for
                improving business websites to drive real results. With a background in the medical field, I bring a
                strong focus on customer care—taking the time to understand each client&apos;s unique needs. After years
                of refining my craft, I&apos;ve developed proven methods for building high-performing websites and
                applications that not only look great, but are built to generate leads, increase sales, and help
                businesses grow.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-2xl">
          <h3 className="text-3xl font-bold">Why Choose Us</h3>
          <h4 className="my-6 text[var(--darkGrey)]">
            We combine technical expertise with personalized service to deliver custom websites that drive real results.
            From lead generation to sales optimization, we focus on what matters most—helping your business grow online.
          </h4>
          <Image
            src="/computer-work.png"
            width={iconSizes.aboutWidth}
            height={iconSizes.aboutHeight}
            alt="Person Taking Notes and Working at a Computer"
          />
          <p className="my-6 text[var(--darkGrey)]">
            {" "}
            At Peak Digital, we don’t just build websites—we craft tailored digital experiences designed to convert
            visitors into customers. Every business is unique, which is why we take the time to understand your goals,
            audience, and challenges. Whether you&apos;re looking to increase traffic, generate qualified leads, or
            boost online sales, our team blends strategic design, custom development, and SEO best practices to deliver
            measurable growth. We&apos;re committed to being more than just a service provider—we&apos;re your digital
            partner for long-term success.
          </p>
          <GetStarted />
        </div>
        <ContactLandscape />
      </div>
    </>
  );
};

export default About;
