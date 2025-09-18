"use client";

import Image from "next/image";
import Head from "next/head";
import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Navbar from "../../../shared/Navbar";
import Hero from "../../../../../Hero";
import SmoothScrollProvider from "../../../components/smooth-scroll-provider";
import Footer from "../../../shared/Footer";
import FAQ from "../../../ourComponents/FAQ";
import CollapseSection from "@/app/components/CollapseSection";

export default function CookieCompilance() {
  let heading = "Cookie Compliance";
  let customWidth = "750";
  let paragraph =
    "Maintaining cookie compliance is vital for businesses to respect user privacy and meet regulatory standards. CyberData Pros specializes in providing practical guidance, helping businesses implement clear and user-friendly cookie policies. Our expertise minimizes legal risks and establishes trust with customers.";

  let paragraphTop = "lg:top-[490px]";
  let tabText = "Contact Us";

  // Collapse section data
  const collapseTitle = (
    <>
      <span className="">We Make It </span>
      <span className="">Simple.</span>
    </>
  );

  const collapseDescription = (
    <>
      <div>
        When it comes to cookies, cookie compliance is the act of complying with
        privacy laws for the usage of cookies on a website. The regulations lay
        out the best practices for deploying cookies that a website is liable to
        adopt.
      </div>
      <div className="mt-6">
        You should obtain consent by giving the user specific separate
        information about what they are being asked to agree to and providing
        them with a way to accept by means of a positive action to opt-in.
      </div>
    </>
  );

  const items = [
    {
      key: "1",
      label: (
        <div className="font-bold text-[16px]">
          Audit Your Website's Use of Cookies
        </div>
      ),
      children: (
        <div className="text-black">
          Identify all cookies your website uses, including first-party and
          third-party cookies, and understand the purpose of each cookie and the
          data it collects or processes.
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="font-bold text-[16px]">Create a Cookie Policy</div>
      ),
      children: (
        <div className="text-black">
          Draft a comprehensive Cookie Policy that clearly explains what cookies
          are, how they are used on your website, and the purpose of each type
          of cookie, while also including information on how users can manage
          their cookie preferences and provide consent.
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="font-bold text-[16px]">
          Implement Cookie Consent Banner or Pop-up
        </div>
      ),
      children: (
        <div className="text-black">
          Design and implement a cookie consent banner or pop-up that informs
          users about the use of cookies on your website, including options for
          users to accept or reject cookies, and provide a link to your Cookie
          Policy for more information, ensuring that the banner is non-intrusive
          but still noticeable.
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div className="font-bold text-[16px]">Obtain Explicit Consent</div>
      ),
      children: (
        <div className="text-black">
          Ensure that users have the option to provide explicit consent before
          cookies are set, especially for non-essential cookies and tracking
          technologies, by not using pre-checked checkboxes for cookie consent
          and allowing users to withdraw their consent and change their cookie
          preferences easily.
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div className="font-bold text-[16px]">Configure Cookie Settings</div>
      ),
      children: (
        <div className="text-black">
          Implement mechanisms to allow users to customize their cookie
          preferences, such as selecting specific types of cookies to accept or
          reject, providing granular control over cookie settings to empower
          users to make informed choices about their data privacy.
        </div>
      ),
    },
  ];

  return (
    <SmoothScrollProvider>
      <div className="bg-[#111111] relative">
        <Navbar />

        <Hero
          heading={heading}
          customWidth={customWidth}
          paragraph={paragraph}
          tabText={tabText}
          paragraphTop={paragraphTop}
        />

        <CollapseSection
          items={items}
          title={collapseTitle}
          description={collapseDescription}
        />

        <FAQ />
        <Footer />

        <style jsx global>{`
          .custom-collapse .ant-collapse-item {
            background: white !important;
            border: none !important;
            border-radius: 8px !important;
            margin-bottom: 8px !important;
          }

          .custom-collapse .ant-collapse-header {
            color: #000000 !important;
            font-weight: 500 !important;
            padding: 16px 20px !important;
          }

          .custom-collapse .ant-collapse-content {
            background: transparent !important;
            border: none !important;
          }

          .custom-collapse .ant-collapse-content-box {
            padding: 0 20px 16px 20px !important;
            color: #ffffff !important;
          }

          .custom-collapse .ant-collapse-item:last-child {
            border-radius: 8px !important;
          }
        `}</style>
      </div>
    </SmoothScrollProvider>
  );
}
