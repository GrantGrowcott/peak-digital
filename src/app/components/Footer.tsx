import Image from "next/image";
import { iconSizes } from "../../../constants";

const Footer = () => {
  return (
    <footer className="grid grid-cols-5  px-6 pb-6 border-t-[1px] border-black">
      <div className="col-span-5 lg:col-span-1 flex flex-col justify-between text-center lg:text-left gap-4">
        <div className="flex justify-center">
          <Image src="/logo.svg" width={iconSizes.logoWidth} height={iconSizes.logoHeight} alt="Peak Digital Logo" />
        </div>
        <h3>Making the world a better place through constructing elegant hierarchies.</h3>
        <h4>admin@peakdigital.ca</h4>
        <h5>(905) 517-0696</h5>
      </div>
      <div className="col-span-5 lg:col-span-2 text-center lg:text-left">
        <h3 className="font-bold my-8">Pages</h3>
        <ul className="grid grid-cols-2 gap-12 justify-items-center lg:justify-items-start">
          {["Home", "About", "Services", "Contact", "Hamilton Web"].map((label) => (
            <li key={label}>
              <button className="text-left cursor-pointer">{label}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-5 lg:col-span-2 text-center lg:text-left">
        <h3 className="font-bold my-8">Products</h3>
        <ul className="grid grid-cols-2 gap-12">
          <li>Website Design</li>
          <li>Search Engine Optimization</li>
          <li>Web Applications</li>
          <li>Graphic Design</li>
          <li>Paid Advertising</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
