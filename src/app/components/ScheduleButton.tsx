import Image from "next/image";

const ScheduleButton = () => {
  return (
      <button className="flex gap-4 bg-[var(--darkPurple)] py-3 px-5 rounded-2xl">
        <h3 className="text-[var(--white)] font-bold">SCHEDULE A CALL</h3>
        <Image src= "/white-arrow.png" height={16} width={26} alt="white arrow"/>
      </button>
  ); 
};

export default ScheduleButton;
