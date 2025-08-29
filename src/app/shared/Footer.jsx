import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white py-10  px-24">
      <div className="max-w-[1920px] mx-auto flex flex-col xs:flex-row xs:justify-between xs:items-start gap-10">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4 xs:w-1/4">
          {/* <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-pink-500 rounded-full" />{" "}
                <span className="text-lg font-semibold">CLOUDSEC</span>
              </div> */}
          <div className="">
            <Image
              src="/images/footer-logo.svg"
              width={194}
              height={68}
              alt="CLOUDSEC Logo"
              className=""
            />
          </div>
          <p className="text-sm text-gray-400 w-[305px]">
            Your trusted partner in cybersecurity, privacy, and compliance.
          </p>
          {/* <div className="flex gap-2">
                <button className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded-full text-sm hover:bg-gray-700">
                  Enroll Here
                </button>
                <button className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded-full text-sm hover:bg-gray-700">
                  Sub Now
                </button>
              </div> */}

          <div className="flex items-center justify-center w-full">
            <div className="flex w-[500px] py-2 px-2 max-w-full items-center bg-[#343434] border border-gray-600 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Email Here"
                className="flex-1 bg-transparent text-[12px] text-white px-4 py-2 text-sm focus:outline-none"
              />
              <button className="bg-[#717171] text-[12px] text-white px-6 py-2 text-sm rounded-full transition">
                Subs Now
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3 xs:w-1/5">
          <h3 className="font-semibold text-lg">Quick Link</h3>
          <ul className="flex list-disc flex-col gap-4 pl-4 pt-4 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Services</li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="flex flex-col gap-4 xs:w-1/4">
          <h3 className="font-semibold text-lg">Our Services</h3>
          <p className="text-sm text-gray-400">Email: info@Cloudsec.com</p>
          <p className="text-sm text-gray-400">Phone: (888) 000 1101</p>
          <p className="text-sm text-gray-400">
            Address: 3333 Caldwell Ln, Plano,
          </p>
          <p className="text-sm text-gray-400">TX 6999 Your country</p>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col gap-3 xs:w-1/5">
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <div className="flex gap-3">
            <a className=" ">
              {/* <FacebookOutlined className="" /> */}
              <Image
                src="/images/fb-logo.svg"
                width={32}
                height={32}
                alt="Facebook"
              />
            </a>
            <a className=" ">
              {/* <FacebookOutlined className="" /> */}
              <Image
                src="/images/youtube-logo.svg"
                width={32}
                height={32}
                alt="Facebook"
              />
            </a>
            <a className=" ">
              {/* <FacebookOutlined className="" /> */}
              <Image
                src="/images/instagram-logo.svg"
                width={32}
                height={32}
                alt="Facebook"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-4 text-center text-gray-400 text-sm">
        © 2025 CLOUDSEC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
