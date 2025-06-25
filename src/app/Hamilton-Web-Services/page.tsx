import GetStarted from "../components/GetStarted";
import Image from "next/image";

const HamiltonWebDesign = () => {
  return (
    <div className="w-[90%] mx-auto pt-[100px]">
      <div className="flex flex-col justify-center items-center text-center ">
        <h1 className="text-[var(--black)] text-3xl font-bold ">
          <span className="block font-bold text-[var(--lightPurple)] pb-8">
            LOCAL BUSINESSES, SERVICE PROVIDERS, & ENTREPRENEURS:
          </span>
          Get a Website That Attracts Real Customers.
          <span className="block text-[var(--lightPurple)] pt-8">GUARANTEED.</span>
        </h1>
        <h2 className="py-8 border-b-4 border-black">If your website doesn’t bring in leads—we don’t charge you</h2>
        <h3 className="py-8 text-3xl font-bold">
          <span className="text-[var(--lightPurple)]">Step 1 of 2:</span> Watch Video
        </h3>
        <div className="w-[90%] mx-auto max-w-[700px] ">
          <div className="aspect-w-16 h-[400px] w-full">
            <iframe
              className="rounded-lg w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Placeholder Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <h4 className="py-8 text-3xl font-bold">
          <span className="text-[var(--lightPurple)]">Step 2 of 2:</span> Click On The Link Below To Book Your Free
          Strategy
        </h4>
        <GetStarted />
        <div className="w-full border-y-2 py-4">
          <h5 className="font-bold text-3xl text-center ">What You Will Learn on Your Free Strategy Call</h5>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 mt-10 gap-4">
        <div className="bg-[var(--lightPurple)] flex-1 text-center flex flex-col items-center p-12 rounded-xl">
          <Image src="/icon-one.png" width={90} height={126} alt="Digital Gear Art" />
          <h3 className="font-bold text-xl my-6">Clarity & Performance Over Flash</h3>
          <h4 className="text-[var(--white)] text-sm">
            We don’t just make beautiful websites — we build websites that clearly communicate your value and load
            lightning fast to convert more customers.
          </h4>
        </div>
        <div className="bg-[var(--lightPurple)] flex-1 text-center flex flex-col items-center  p-12 rounded-xl">
          <Image src="/icon-two.png" width={90} height={126} alt="Digital Folder Art" />
          <h3 className="font-bold text-xl my-6">SEO & Strategy Built In</h3>
          <h4 className="text-[var(--white)] text-sm">
            No cookie-cutter themes here. Every site is uniquely crafted to reflect your brand and help your business
            stand out.
          </h4>
        </div>
        <div className="bg-[var(--lightPurple)] flex-1 text-center flex flex-col items-center  p-12 rounded-xl">
          <Image src="/icon-three.png" width={90} height={126} alt="Digital People Art" />
          <h3 className="font-bold text-xl my-6">Local Partnership Mindset</h3>
          <h4 className="text-[var(--white)] text-sm">
            As a Hamilton-based agency, we care about our community. We build long-term relationships, not one-off
            transactions — you get a partner, not just a provider.
          </h4>
        </div>
      </div>
      <h3 className="text-center font-bold text-3xl my-16">
        If You’re Not Getting Results Online, These Might Be the Reasons
      </h3>
      <div className="flex mt-12 gap-4 flex-col lg:flex-row text-center lg:text-left">
        <div className="flex-1 mb-6 md:mb-0">
          <h3 className="text-[var(--lightPurple)] text-2xl font-bold">
            What’s Getting in the Way of Growing Your Business Online?
          </h3>
          <GetStarted />
        </div>
        <div className="flex-1">
          <ul className="flex flex-col items-start justify-start mx-auto gap-4">
            <li>
              <h3 className="text-[var(--lightPurple)] text-lg font-bold mb-2">Your Website Isn’t Showing Up in Search</h3>
              <h4 className="text-base">
                If you’re not ranking locally on Google, your competitors are getting the clicks — not you.
              </h4>
            </li>
            <li>
              <h3 className="text-[var(--lightPurple)] text-lg font-bold mb-2">Visitors Don’t Trust What They See</h3>
              <h4 className="text-base">
                A slow, outdated, or unclear website makes potential customers bounce before they ever contact you.
              </h4>
            </li>
            <li>
              <h3 className="text-[var(--lightPurple)] text-lg font-bold mb-2">Your Website Isn’t Built to Convert</h3>
              <h4 className="text-base">
                Without clear messaging, calls-to-action, and structure, even the best-looking website can fail to turn
                visitors into paying customers.
              </h4>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[var(--darkPurple)] text-center mt-12 p-6 md:p-20 rounded-xl">
        <div className="flex gap-8 justify-center mb-6">
          <Image src="/guide-one.png" width={150} height={150} alt="Digital Person with Gear" />
          <Image src="/guide-two.png" width={150} height={150} alt="Digital Magnifying Glass" />
          <Image src="/guide-three.png" width={150} height={126} alt="Digital Person with Columns" />
        </div>
        <h3 className="text-[var(--white)] text-xl md:text-5xl mb-12 max-w-2xl mx-auto font-bold">
          Your Guide to Growing Online with Confidence
        </h3>
        <h4 className="text-[var(--lightGrey)] text-base md:text-xl max-w-2xl mx-auto mb-12">
          I know what it’s like to pour everything into a business and still feel invisible online. Like you, I’ve had
          to figure out how to stand out, build trust, and win clients in a competitive market. That’s why I care about
          helping local business owners in Hamilton succeed — not just with great-looking websites, but with clear
          messaging, smart SEO, and real results. You’re not just hiring a designer — you’re getting a partner who
          understands what’s at stake and knows how to help you grow. You can trust me to handle the tech, the strategy,
          and the design — so you can focus on running your business.
        </h4>
      </div>
      <h3 className="text-[var(--lightPurple)] text-center text-5xl my-24 font-bold">Our 5 Step Plan for Success!!</h3>
      <div className="grid grid-cols-5 gap-4 items-center">
        <div className="col-span-5 lg:col-span-2 flex justify-center">
          <Image src="/step-1.svg" width={300} height={300} alt="Programmer at Computer" />
        </div>
        <div className="col-span-5 lg:col-span-3">
          <h3 className="text-[var(--lightPurple)] font-bold mb-4">Step 1: Planning Stage</h3>
          <h4>
            Our process kicks off with a discovery call and stakeholder interviews to define your objectives and
            challenges, followed by a kickoff meeting to determine key milestones, iterative revisions to refine the
            solution, and finally the contract signing with first payment to formally launch the project.
          </h4>
        </div>
        <div className="col-span-5 lg:col-span-2 flex justify-center">
          <Image src="/step-2.svg" width={300} height={300} alt="Programmer Making a Website" />
        </div>
        <div className="col-span-5 lg:col-span-3">
          <h3 className="text-[var(--lightPurple)]  font-bold mb-4">Step 2: Content Stage</h3>
          <h4>
            We continue with a website audit, SEO keyword research, and a comprehensive project brief—followed by
            sitemap creation, navigation wireframes, and a design survey—to ensure your site is strategically
            structured, search-friendly, and aligned with your brand from the ground up.
          </h4>
        </div>
        <div className="col-span-5 lg:col-span-2 flex justify-center">
          <Image src="/step-3.svg" width={300} height={300} alt="Wireframe Diagram" />
        </div>
        <div className="col-span-5 lg:col-span-3">
          <h3 className="text-[var(--lightPurple)] font-bold mb-4">Step 3: Design Stage</h3>
          <h4>
            We begin by understanding your business goals and collecting your branding assets to ensure everything
            aligns with your vision. Then, we explore design directions through moodboards, allowing you to select the
            style that fits best. From there, we create full website design comps and work with your feedback to refine
            the final look before development begins.
          </h4>
        </div>
        <div className="col-span-5 lg:col-span-2 flex justify-center">
          <Image src="/step-4.svg" width={300} height={300} alt="Three People Working on Designing a Website" />
        </div>
        <div className="col-span-5 lg:col-span-3">
          <h3 className="text-[var(--lightPurple)] font-bold mb-4">Step 4: Build Stage</h3>
          <h4>
            Once the design is approved, we build out the pages, set up site navigation, and prototype any complex
            features. We test across browsers, integrate your content, and refine the site based on your feedback until
            it&apos;s ready to launch.
          </h4>
        </div>
        <div className="col-span-5 lg:col-span-2 flex justify-center">
          <Image src="/step-5.svg" width={300} height={300} alt="Launch Rocket Icon of a Website " />
        </div>
        <div className=" col-span-5 lg:col-span-3">
          <h3 className="text-[var(--lightPurple)] font-bold mb-4">Step 5: Launch Stage</h3>
          <h4>
            After launch, we provide a live Q&A training webinar to walk you through your new website and ensure
            you&apos;re confident using it. We finalize the project with your approval, issue the final invoice, and
            offer a warranty period along with optional ongoing support and marketing services to help your business
            grow.
          </h4>
        </div>
      </div>
      <div className="bg-[var(--darkPurple)] p-8 md:p-24 rounded-2xl my-12">
        <h3 className="text-center text-5xl mb-12 font-bold">Our Promise to You</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-center">
          <div className="col-span-1 flex flex-col items-center">
            <Image src="/promise-one.png" width={100} height={100} alt="Dollar Sign" />
            <h3 className="text-lg md:text-2xl my-6 font-bold">Complete Coverage</h3>
            <h4 className="text-[var(--white)] ">
              Your website deserves full-circle care—from branding and design to hosting and copywriting. I deliver
              custom websites that reflect your unique business and work seamlessly to attract and convert customers. No
              corners cut, just end-to-end solutions built for growth.
            </h4>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <Image src="/promise-two.png" width={100} height={100} alt="Ribbon" />
            <h3 className=" text-lg md:text-2xl my-6 font-bold">Tailored Designs</h3>
            <h4 className="text-[var(--white)] ">
              Your business is one of a kind—your website should be too. We design and develop custom websites that are
              fully tailored to your brand, helping you stand out and connect with your audience authentically. No
              templates, just strategic design built to drive results.
            </h4>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <Image src="/promise-three.png" width={100} height={100} alt="Line Graph" />
            <h3 className="text-lg md:text-2xl my-6 font-bold">Data Driven Decisions</h3>
            <h4 className="text-[var(--white)] ">
              We don’t just build beautiful websites — we make sure they work hard for your business. By integrating
              advanced analytics and tracking tools, you gain clear insights into how visitors interact with your site.
              This data lets you measure success, understand customer behavior, and make informed, data-driven decisions
              to continually improve your online presence and boost your results.
            </h4>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <Image src="/promise-four.png" width={100} height={100} alt="Lock Icon" />
            <h3 className=" text-lg md:text-2xl my-6 font-bold">Fluid Process</h3>
            <h4 className="text-[var(--white)] ">
              Hosting, maintenance, and updates are often overlooked but critical for a successful website. We take care
              of everything behind the scenes—ensuring your site stays secure from threats, loads quickly for every
              visitor, and is always running the latest software and features. You can focus on your business while we
              handle the technical upkeep, so your website remains reliable and performs at its best 24/7.
            </h4>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row mx-auto max-w-6xl">
        <div className="flex-1">
          <h3 className="text-[var(--lightPurple)] text-3xl mb-6">Here’s what you get:</h3>
          <ul className=" space-y-6 list-disc">
            <li>One one One communication with our team of expert developers and content creators</li>
            <li>Custom designs that you are proud to show off to the world</li>
            <li>Modern day SEO and A.I strategies to outperform your competition</li>
            <li>An assurance of 20% increase in net traffic within 6 months</li>
          </ul>
          <h4 className="mt-6 mr-12 font-bold">
            You get all this, plus the confidence you’re living your best life when you partner with Peak Digital today!
          </h4>
        </div>
        <div className="flex-1">
          <Image src="/excited.png" alt="Two People Celebrating the Launch of a website" width={500} height={500} />
        </div>
      </div>
      <div className="flex justify-center my-24">
        <GetStarted/>
      </div>
    </div>
  );
};

export default HamiltonWebDesign;
