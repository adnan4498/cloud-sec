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
  let heading = "Virtual Chief Information Security Officer (vCISO)";
  let customWidth = "750";
  let paragraph =
    "Our experts have served in a broad range of industries for companies of various sizes and know how to align security strategies with your company’s challenges.";

  let paragraphTop = "lg:top-[450px]";
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
        Your vCISO plays a critical role in IT security strategy design,
        implementation, assessment, and mitigation of potential cyber-security
        risks.
      </div>
      <div className="mt-6">
        Organizations can take advantage of this opportunity to utilize external
        expertise instead of maintaining a full-time, in-house position. As the
        expert in the latest cybersecurity and data privacy practices,
        responsibilities encompass staff training, leading client calls,
        conducting ongoing security and privacy audits to minimize gaps, and
        reviewing security questionnaires, client contracts, vendor paperwork,
        and other necessary documentation for business operations.
      </div>
    </>
  );

  const items = [
    {
      key: "1",
      label: (
        <div className="font-bold text-[16px]">Discovery and Integration</div>
      ),
      children: (
        <div className="text-black">
          Identify project stakeholders and key contacts, develop and define a
          communication plan, and establish a comprehensive understanding of
          infrastructure, systems, processes, etc., through initial interviews
          and documentation review. Additionally, articulate and define the
          criteria for success in the role.
        </div>
      ),
    },
    {
      key: "2",
      label: <div className="font-bold text-[16px]">Initial Assessment</div>,
      children: (
        <div className="text-black">
          Review all available information to identify security and privacy
          compliance gaps and assess overall maturity and develop and prioritize
          cybersecurity strategy and initiatives based on identified gaps.
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="font-bold text-[16px]">
          Remediation and Improvements
        </div>
      ),
      children: (
        <div className="text-black">
          Next, revise existing information security and data privacy policies
          and procedures, develop and provide additional information security
          and data privacy policies and documentation. Then partner with
          internal and external parties to follow through on remediation tasks
          and projects.
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div className="font-bold text-[16px]">
          Ongoing Tasks and Responsibilities
        </div>
      ),
      children: (
        <div className="text-black">
          Collaborating closely with internal teams, serve as the internal
          subject matter expert on regulations and frameworks, including GDPR,
          CPRA, ISO, SOC, NIST, etc. Additionally, continually monitor and
          evaluate both internal and external risk management, collaborate with
          third parties to align technical, administrative, and physical
          security controls, and provide assistance in negotiating and aligning
          contracts with the business's information security and privacy
          requirements.
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
