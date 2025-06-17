const ContactLandscape = () => {
  return (
    <div className=" bg-[var(--white)] flex flex-col lg:flex-row">
      <div className="lg:w-1/2 bg-gray-50 p-10 flex flex-col justify-start item-start">
        <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
        <p className="text-gray-600 mb-6">
          If you have questions or you would like further details, feel free to fill out the following form. We will get
          back to you as soon as we can.
        </p>
        <div className="text-gray-700 space-y-4">
          <div className="flex items-start gap-3"></div>
          <div className="flex items-center gap-3">
            <span>📞</span>
            <p>+1 (905) 517-0696</p>
          </div>
          <div className="flex items-center gap-3">
            <span>✉️</span>
            <p>admin@peakdigital.ca</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 p-10">
        <form action="https://formspree.io/f/mwpbqlyw" method="POST" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
              <input
                type="text"
                name="firstName"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="First name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
              <input
                type="text"
                name="lastName"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
            <input
              type="tel"
              name="phone"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="(555) 234-5678"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows={4}
              name="message"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Your message"
              required
            />
          </div>
          <div className="text-right">
            <button type="submit" className="bg-[var(--darkPurple)] text-white font-semibold px-6 py-2 rounded-md cursor-pointer">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactLandscape;
