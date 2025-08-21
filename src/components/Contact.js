"use client";
import { useState } from "react";
import Link from "next/link";

import { MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";
import { LuPhone, LuFacebook, LuInstagram } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // do your form logic here (e.g. send data, validation, etc.)
    window.alert("Thank you for your message! We will be in touch shortly.")
    setSubmitted(true);

    // scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
    e.target.reset();
  };
  return (
    <div
      id="contact"
      className="relative w-full bg-gradient-to-t from-purple-soft via-purple-soft/50 to-white pb-20 pt-20"
    >
      <div className="relative z-10 container mx-auto px-6 text-center pt-0 mb-10 flex flex-col items-center justify-center">
        <h1 className="font-[playFair] text-3xl md:text-4xl lg:text-6xl font-bold text-purple-deep mb-5">
          Let's Make Magic Together
        </h1>
        <div className="md:w-[55%]">
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-6 font-[montserrat] font-[500]">
            Ready to start planning your dream event? Get in touch and let's
            discuss how we can make your vision come to life.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-8 md:px-25">
        <div className="rounded-xl p-8 bg-white shadow-sm">
          <h1 className="text-xl md:text-3xl font-[playfair] text-purple-deep font-semibold">
            Send Us a Message
          </h1>
          <form onSubmit={handleSubmit} className="w-full mt-6 space-y-7">
            <input
              type="text"
              className="py-2 px-3 outline outline-purple-soft rounded-lg font-[montserrat] text-sm font-[500] w-[100%]"
              placeholder="Your Name *"
              required
            ></input>
            <input
              type="text"
              className="py-2 px-3 outline outline-purple-soft rounded-lg font-[montserrat] text-sm font-[500] w-[100%]"
              placeholder="Your Email *"
              required
            ></input>
            <input
              type="text"
              className="py-2 px-3 outline outline-purple-soft rounded-lg font-[montserrat] text-sm font-[500] w-[100%]"
              placeholder="Your Phone number"
            ></input>
            <textarea
              rows={5}
              className="py-2 px-3 outline outline-purple-soft rounded-lg font-[montserrat] text-sm font-[500] w-[100%] resize-none"
              placeholder="Tell us about your event"
            ></textarea>
            <button className="w-[100%] bg-purple-light text-gold-accent font-[montserrat] font-[600] text-sm py-2 rounded-lg cursor-pointer hover:bg-purple-mid/80">
              Send Message
            </button>
          </form>
        </div>
        <div className="space-y-8">
          <div className="rounded-xl bg-white shadow-sm p-8 space-y-5">
            <h1 className="text-xl md:text-3xl font-[playfair] text-purple-deep font-semibold">
              Get in Touch
            </h1>
            <div className="space-y-5">
              <div className="flex space-x-3">
                <div className="p-3 bg-purple-light/10 rounded-full">
                  <MdOutlineMail className="size-6 fill-purple-light" />
                </div>
                <div>
                  <h3 className="font-[montserrat] font-[600] text-purple-deep">
                    Email
                  </h3>
                  <h3 className="font-[montserrat] font-[500] text-gray-500">
                    overandaevents@gmail.com
                  </h3>
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="p-3 bg-purple-light/10 rounded-full">
                  <LuPhone className="size-6 stroke-purple-light" />
                </div>
                <div>
                  <h3 className="font-[montserrat] font-[600] text-purple-deep">
                    Phone
                  </h3>
                  <h3 className="font-[montserrat] font-[500] text-gray-500">
                    +2349 000 000 21
                  </h3>
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="p-3 bg-purple-light/10 rounded-full">
                  <GrLocation className="size-6 stroke-purple-light" />
                </div>
                <div>
                  <h3 className="font-[montserrat] font-[600] text-purple-deep">
                    Location
                  </h3>
                  <h3 className="font-[montserrat] font-[500] text-gray-500">
                    Jos, Plateau State
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-8 bg-white shadow-sm space-y-5">
            <h1 className="text-xl md:text-3xl font-[playfair] text-purple-deep font-semibold">
              Follow Us
            </h1>
            <div className="flex space-x-4">
              <Link
                href={"#"}
                className="group block p-3 bg-purple-light hover:bg-purple-mid/80 transition-colors rounded-full"
              >
                <LuFacebook className="size-6 stroke-white group-hover:stroke-gold-accent" />
              </Link>
              <Link
                href={"#"}
                className="group block p-3 bg-purple-light hover:bg-purple-mid/80 transition-colors rounded-full"
              >
                <LuInstagram className="size-6 stroke-white group-hover:stroke-gold-accent" />
              </Link>
              <Link
                href={"#"}
                className="group p-3 bg-purple-light hover:bg-purple-mid/80 transition-colors rounded-full flex items-center"
              >
                <FaXTwitter className="size-5 fill-white mx-0.5 group-hover:fill-gold-accent" />
              </Link>
            </div>
            <p className="text-gray-500 font-[montserrat] font-[500]">
              Follow our pages for inspiration and behind-the-scenes glimpses of
              our latest events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
