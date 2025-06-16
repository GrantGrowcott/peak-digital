import Image from "next/image";

const Services = () => {
  return (
    <div className="mt-40 mx-auto w-[90%]">
      <h1 className="font-bold text-4xl text-center">Services</h1>
      <h2 className="text-[var(--darkGrey)] text-center max-w-2xl mx-auto">
        Helping businesses grow with tailored digital solutions — from custom websites and SEO to branding, design, and
        hosting.
      </h2>
      <div className="flex items-start justify-center my-24">
        <div className="flex-1">
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
            {" "}
            Built to engage your audience, load fast, and grow with your business.
          </h4>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
