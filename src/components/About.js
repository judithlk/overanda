import Card from "./Card";

import { BsPeople } from "react-icons/bs";
import { SlStar, SlHeart } from "react-icons/sl";
import { PiStar } from "react-icons/pi";
import { MdOutlineEditCalendar } from "react-icons/md";
import { LuCalendarFold } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCalendar2Day } from "react-icons/bs";
import { HiMiniCalendar } from "react-icons/hi2";
import { PiHeartStraightBold, PiStarBold } from "react-icons/pi";
import { MdOutlinePeopleAlt } from "react-icons/md";

export default function About() {
  const services = [
    {
      logo: PiHeartStraightBold,
      title: "Wedding Planning",
      description:
        "Complete wedding coordination from intimate ceremonies to grand celebrations, ensuring your special day is flawlessly executed.",
    },
    {
      logo: PiStarBold,
      title: "Corporate Events",
      description:
        "Professional event management for conferences, galas, and corporate gatherings that leave lasting impressions.",
    },
    {
      logo: MdOutlinePeopleAlt,
      title: "Social Celebrations",
      description:
        "Birthday parties, anniversaries, and milestone celebrations designed to create unforgettable memories.",
    },
    {
      logo: HiMiniCalendar,
      title: "Event Coordination",
      description:
        "Full-service event coordination including venue selection, vendor management, and day-of execution.",
    },
  ];
  return (
    <div
      id="about"
      className="relative w-full bg-gradient-to-t from-purple-soft via-purple-soft/50 to-white pb-25 pt-20"
    >
      <div className="relative z-10 container mx-auto px-6 text-center pt-0 mb-5">
        <h1 className="font-[playFair] text-3xl md:text-4xl lg:text-6xl font-bold text-purple-deep mb-6">
          About Over &amp; A Event Management
        </h1>
        <div className="max-w-3xl mx-auto font-[montserrat]">
          <p className="text-lg text-gray-500 leading-relaxed mb-6 font-[500]">
            With over a decade of experience in luxury event planning, we
            specialize in creating extraordinary celebrations that reflect your
            unique vision and style.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed font-[500]">
            Our passion lies in transforming dreams into reality, paying
            attention to every detail to ensure your event is not just
            memorable, but truly magical.
          </p>
        </div>
      </div>

      <div id="services" className="relative pt-20">
        <h1 className="font-[playFair] text-4xl md:text-5xl font-bold text-purple-deep mb-5 text-center">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-2 p-3">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="group p-5 shadow-sm rounded-xl bg-white hover:outline outline-purple-light/30 transition-colors flex flex-col items-center justify-center space-y-3"
              >
                <div>
                  <service.logo className="size-11  text-purple-mid/80 group-hover:text-purple-light/80" />
                </div>
                <h2 className="text-lg md:text-2xl text-purple-deep font-[playfair] font-bold">
                  {service.title}
                </h2>
                <p className="font-[montserrat] text-gray-500 font-[500] text-center">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
