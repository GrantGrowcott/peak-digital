import Image from "next/image";
import { iconSizes } from "../../../constants";
import Link from "next/link";

const ScheduleButton = () => {
  return (
      <Link href= "https://calendly.com/admin-peakdigital/30min" className="flex gap-4 bg-[var(--darkPurple)] py-3 px-5 rounded-2xl">
        <h3 className="text-[var(--white)] font-bold">SCHEDULE A CALL</h3>
        <Image src= "/white-arrow.png" height={iconSizes.scheduleArrowHeight} width={iconSizes.scheduleArrowWidth} alt="white arrow"/>
      </Link>
  ); 
};

export default ScheduleButton;
