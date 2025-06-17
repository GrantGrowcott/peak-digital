import Link from "next/link";

const ContactButton = () => {
  return (
    <Link href="https://calendly.com/admin-peakdigital/30min" className="my-8 inline-block">
      <h3 className="text-2xl text-[var(--white)] border px-6 py-2 rounded-2xl">
        Get Started
      </h3>
    </Link>
  );
};

export default ContactButton;
