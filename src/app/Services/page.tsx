import Image from "next/image";
import ServicesWidget from "../components/ServicesWidget";

const Services = () => {
  return (
    <>
    <div className="mt-40 mx-auto w-[90%]">
      <h1 className="font-bold text-4xl text-center">Services</h1>
      <h2 className="text-[var(--darkGrey)] text-center max-w-2xl mx-auto">
        Helping businesses grow with tailored digital solutions — from custom websites and SEO to branding, design, and
        hosting.
      </h2>
      <div className="flex flex-col lg:flex-row  items-center lg:items-start justify-center my-24 gap-6">
        <div className="flex-1 ">
          <Image
            src="/service-one.png"
            width={530}
            height={400}
            alt="Group of people sitting on chairs in front of a computer"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-[var(--darkPurple)]">Elevate Your Business with Expert Web Design</h3>
          <h4 className="text-[var(--darkGrey)] my-6">
            Built to engage your audience, load fast, and grow with your business.
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="grid grid-cols-2 items-start gap-4">
              <div className="flex flex-row items-center col-span-2 gap-6">
                <Image src="/check-circle.png" width={30} height={30} alt="Check Mark" />
                <h3 className="font-bold text-2xl text-center">Hand Written Content</h3>
              </div>
              <p className="col-span-2 self-center">All code and content is unique to showcase your brand identity</p>
            </li>
            <li className="grid grid-cols-2 items-start gap-4">
              <div className="flex flex-row items-center col-span-2 gap-6">
                <Image src="/check-circle.png" width={30} height={30} alt="Check Mark" />
                <h3 className="font-bold text-2xl  text-center">Adaptable to all frameworks</h3>
              </div>
              <p className="col-span-2 self-center">
                We ensure flexibility, scalability, and seamless integration with your business goals.
              </p>
            </li>
            <li className="grid grid-cols-2 items-start gap-4">
              <div className="flex flex-row items-center col-span-2 gap-6">
                <Image src="/check-circle.png" width={30} height={30} alt="Check Mark" />
                <h3 className="font-bold text-2xl  text-center">Unlimited Edits</h3>
              </div>
              <p className="col-span-2 self-center">
                We can make anything that you can think of. You are only limited by your imagination.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center my-24 gap-6">
        <div className="flex-1">
          <h3 className="text-3xl text-[var(--darkPurple)] font-bold">Proficiency Through SEO and AIEO</h3>
          <h4 className="font-bold my-6">
            To ensure your website ranks highly on major search engines, we combine proven SEO strategies with
            AI-powered optimization tools — driving targeted traffic and improving visibility on search results.
          </h4>
          <h5 className=" text-2xl font-bold">These Techniques Include:</h5>
          <ul className="grid grid-cols-2 mt-4 gap-4">
            <li className="grid col-span-2 md:col-span-1">
              <div className="flex gap-2 items-center">
                <Image src="/check-circle.png" width={30} height={30} alt="Check Mark" />
                <h3>Key Word Research</h3>
              </div>
            </li>
            <li className="grid col-span-2 md:col-span-1">
              <div className="flex gap-2 items-center">
                <Image src="/check-circle.png" width={30} height={30} alt="Check Mark" />
                <h3>On-Page Optimization</h3>
              </div>
            </li>
            <li className="grid col-span-2 md:col-span-1">
              <div className="flex gap-2 items-center">
                <Image src="/check-circle.png" width={30} height={30} alt="Check Mark" />
                <h3>Link Building</h3>
              </div>
            </li>
            <li className="grid col-span-2 md:col-span-1">
              <div className="flex gap-2 items-center">
                <Image src="/check-circle.png" width={30} height={30} alt="Check Mark" />
                <h3>Speed Optimization</h3>
              </div>
            </li>
            <li className="grid col-span-2 md:col-span-1">
              <div className="flex gap-2 items-center">
                <Image src="/check-circle.png" width={30} height={30} alt="Check Mark" />
                <h3>Predictive Analytics</h3>
              </div>
            </li>
            <li className="grid col-span-2 md:col-span-1">
              <div className="flex gap-2 items-center">
                <Image src="/check-circle.png" width={30} height={30} alt="Check Mark" />
                <h3>Content Suggestions</h3>
              </div>
            </li>
            <li className="grid col-span-2 md:col-span-1">
              <div className="flex gap-2 items-center">
                <Image src="/check-circle.png" width={30} height={30} alt="Check Mark" />
                <h3>User Behavour Insights</h3>
              </div>
            </li>
            <li className="grid col-span-1">
              <div className="flex gap-2 items-center">
                <Image src="/check-circle.png" width={30} height={30} alt="Check Mark" />
                <h3>Competitor Ranking</h3>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <Image
            src="/service-two.png"
            width={530}
            height={400}
            alt="Group of people sitting on chairs in front of a computer"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  items-center lg:items-start justify-center my-24 gap-6">
        <div className="flex-1 ">
          <Image
            src="/service-three.png"
            width={530}
            height={400}
            alt="Group of people sitting on chairs in front of a computer"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-[var(--darkPurple)]">Graphics, Animations, Logos and Design</h3>
          <h4 className="text-[var(--darkGrey)] my-6">
            Whether you need a moving animation, new logo or touch ups of existing designs, we are dedicated to showing
            off your brand vision.
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="grid grid-cols-2 items-start gap-4">
              <div className="flex flex-row items-center col-span-2 gap-6">
                <Image src="/check-circle.png" width={30} height={30} alt="Check Mark" />
                <h3 className="font-bold text-2xl text-center">Digital Artwork</h3>
              </div>
              <p className="col-span-2 self-center">
                For many purposes including brochures, website graphics and more!
              </p>
            </li>
            <li className="grid grid-cols-2 items-start gap-4">
              <div className="flex flex-row items-center col-span-2 gap-6">
                <Image src="/check-circle.png" width={30} height={30} alt="Check Mark" />
                <h3 className="font-bold text-2xl  text-center">Animations</h3>
              </div>
              <p className="col-span-2 self-center">
                Customizable unique digital animations that are performative on all platforms
              </p>
            </li>
            <li className="grid grid-cols-2 items-start gap-4">
              <div className="flex flex-row items-center col-span-2 gap-6">
                <Image src="/check-circle.png" width={30} height={30} alt="Check Mark" />
                <h3 className="font-bold text-2xl  text-center">Logos</h3>
              </div>
              <p className="col-span-2 self-center">
                Tailored to your vision and purpose as an organization based on our unique questionaire.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="text-center text-3xl text-[var(--darkPurple)] font-bold max-w-2xl mx-auto">
          Ongoing Improvements and Updates for Your Web Presence
        </h3>
        <div className="grid grid-cols-2 mx-auto max-w-2xl my-16 gap-4">
          <div>
            <Image src="/analytics.png" width={75} height={75} alt="Black Bar Chart" />
            <h3 className="font-bold text-2xl my-4">Website Redesign</h3>
            <h4 className="text-[var(--darkGrey)]">
              Tired of your current design, contact us to give it a fresh new look.
            </h4>
          </div>
          <div>
            <Image src="/wheelchair.png" width={75} height={75} alt="Black Bar Chart" />
            <h3 className="font-bold text-2xl my-4">Web Accessibility</h3>
            <h4 className="text-[var(--darkGrey)]">
              We follow WCAG guidelines to ensure your content is accessible to everyone!
            </h4>
          </div>
          <div>
            <Image src="/key.png" width={75} height={75} alt="Black Bar Chart" />
            <h3 className="font-bold text-2xl my-4">Search Engine Updates</h3>
            <h4 className="text-[var(--darkGrey)]">
              Your website will stay up to date with A.I and modern search guidelines for ranking.
            </h4>
          </div>
          <div>
            <Image src="/google.png" width={75} height={75} alt="Black Bar Chart" />
            <h3 className="font-bold text-2xl my-4">Google Business Profile</h3>
            <h4 className="text-[var(--darkGrey)]">
              Tired of your current design, contact us to give it a fresh new look.
            </h4>
          </div>
        </div>
      </div>
    </div>
    <ServicesWidget/>
    </>
  );
};

export default Services;
