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

export default function Home() {
  let heading = "System and Organization Controls";
  let customWidth = "750";
  let paragraph =
    "SOC reports are intended to increase customer confidence, trust and can differentiate your business from your competitors. CyberData Pros has prepared hundreds of clients to sit for their SOC Report.";

  let paragraphTop = "lg:top-[500px]";
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
        Compliance frameworks like SOC (System and Organization Controls) can
        help your business to implement best practices that demonstrate your
        commitment to data privacy and to operating in an ethical and compliant
        manner. There are three common types of SOC compliance with different
        focuses/controls. Each of the three types outlines the various processes
        and systems in place to protect data. All three are intended to increase
        customer confidence and trust and can differentiate your business from
        your competitors.
      </div>
    </>
  );

  const items = [
    {
      key: "1",
      label: <div className="font-bold text-[16px]">Type 1</div>,
      children: (
        <div className="text-black">
          Focuses on controls relevant to financial reporting. If your
          organization provides services that could impact the financial
          statements of your clients (e.g., payroll processing), SOC 1 is
          typically applicable.
        </div>
      ),
    },
    {
      key: "2",
      label: <div className="font-bold text-[16px]">Type 2</div>,
      children: (
        <div className="text-black">
          Most popular one. Applicable to service organizations that handle
          sensitive information and are concerned with the security,
          availability, processing integrity, confidentiality, and privacy of
          data.
        </div>
      ),
    },
    {
      key: "3",
      label: <div className="font-bold text-[16px]">Type 3 </div>,
      children: (
        <div className="text-black">
          Similar to Type 2 but is less comprehensive. Certain details are
          excluded from the report which can make it suitable for marketing
          purposes.
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
