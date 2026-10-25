import Link from "next/link";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

import { contactInfo, contactExCom } from "@/utils";

const Contact = () => {
  return (
    <section
      className="flex flex-col items-center justify-center my-20 md:px-0 px-6"
      id="contact-us"
    >
      <div className="md:max-w-[950px] max-w-full">
        <h5 className="text-secondary-blue font-medium flex gap-2 items-center">
          <div className="w-6 h-[2px] bg-secondary-blue" />
          Get in Touch
        </h5>

        <div className="border-b-2 border-primary-blue pb-12 pt-6">
          <p className="md:text-3xl text-lg font-medium text-secondary-blue">
            Connect with the IEEE Student Branch of UCSC - your gateway to
            professional growth, technical innovation, and meaningful networking
            opportunities in the field of engineering and computing. We&apos;re here
            to support your journey and welcome your inquiries.
          </p>
          <div className="flex flex-col md:flex-row md:gap-0 gap-2 justify-between my-8 text-secondary-blue font-medium">
            <span className="flex gap-2">
              <MdLocationOn className="translate-y-1" />
              IEEE Student Branch of UCSC, <br />
              University of Colombo School of Computing,
              <br />
              35, Reid Avenue,
              <br />
              Colombo 7.
            </span>

            <Link
              href={`mailto:${contactInfo.email}`}
              className="flex gap-2 hover:text-primary-blue duration-300 hover:opacity-90  transition-all ease-in-out"
            >
              <IoMdMail className="translate-y-1" />
              {contactInfo.email}
            </Link>

            <Link
              className="flex gap-2 hover:text-primary-blue duration-300 hover:opacity-90  transition-all ease-in-out"
              href={`tel:${contactInfo.contactNo.replace(/[\s()-]/g, "")}`}
            >
              <IoMdCall className="translate-y-1" />
              {contactInfo.contactNo}
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-0 gap-2 justify-between my-6">
          {contactExCom.map(({ name, position, email }, index) => (
            <div
              key={index}
              className="flex flex-col text-sm text-secondary-blue"
            >
              <span className="font-medium">{name}</span>
              <span>{position}</span>
              <Link
                href={`mailto:${email}`}
                className=" hover:text-primary-blue duration-300 hover:opacity-90  transition-all ease-in-out"
              >
                {email}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
