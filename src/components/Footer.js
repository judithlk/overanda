import Link from "next/link";

import { MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";
import { LuPhone, LuFacebook, LuInstagram } from "react-icons/lu";
import { FaCircleChevronUp, FaAnglesUp } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-purple-deep text-gray-accent py-16 space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-3 md:mx-5 md:px-5 border-b border-purple-mid/60 pb-10">
        <div className="px-2 space-y-5">
          <h1 className="font-[playfair] font-semibold text-gold-accent text-2xl md:text-4xl leading-none">
            Over &amp; A Event Management
          </h1>
          <p className="font-[montserrat] text-gray-accent font-[500]">
            Creating timeless events with elegance and sophistication. Your
            dream celebration awaits.
          </p>
          <div className="flex space-x-4">
            <Link
              href={"#"}
              className="group p-3 bg-purple-light rounded-full hover:bg-purple-mid/80 transition-colors"
            >
              <MdOutlineMail className="size-5 fill-white group-hover:fill-gold-accent transition-colors" />
            </Link>
            <Link
              href={"#"}
              className="group block p-3 bg-purple-light hover:bg-purple-mid/80 transition-colors rounded-full"
            >
              <LuFacebook className="size-5 stroke-white group-hover:stroke-gold-accent" />
            </Link>
            <Link
              href={"#"}
              className="group block p-3 bg-purple-light rounded-full hover:bg-purple-mid/80 transition-colors"
            >
              <LuInstagram className="size-5 stroke-white group-hover:stroke-gold-accent" />
            </Link>
          </div>
        </div>
        <div className="px-2 space-y-2 grid grid-cols-2 gap-3">
          <div className="px-2">
            <h3 className="font-[playfair] font-semibold text-gold-accent text-lg md:text-2xl">
              Book your appointment today!
            </h3>
            <div className="flex space-x-1 items-center">
              <div className="p-1">
                <LuPhone className="size-5 stroke-purple-light" />
              </div>

              <h3 className="font-[montserrat] font-[500] text-gray-accent">
                +2349 000 000 21
              </h3>
            </div>
            <div className="flex space-x-1 items-center">
              <div className="p-1">
                <MdOutlineMail className="size-5 fill-purple-light" />
              </div>

              <h3 className="font-[montserrat] font-[500] text-gray-accent">
                overandaevents@gmai.com
              </h3>
            </div>
            <div className="flex space-x-1 items-center">
              <h3 className="font-[montserrat] font-[500] text-gray-accent">
                Jos, Plateau State
              </h3>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link href={"#hero"} className="block">
              <FaAnglesUp className="size-10 animate-bounce fill-purple-mid" />
            </Link>
            <h4 className="font-[montserrat] font-[600]">Back to top</h4>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <h2 className="text-sm font-[montserrat] font-[500]">&copy; 2025 Over &amp; A Event Management. All rights reserved.</h2>
      </div>
    </div>
  );
}
