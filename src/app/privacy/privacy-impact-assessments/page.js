"use client";

import Image from "next/image";
import Head from "next/head";
import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Navbar from "../../shared/Navbar";
import Hero from "../../../../Hero";
import SmoothScrollProvider from "../../components/smooth-scroll-provider";
import Footer from "../../shared/Footer";
import FAQ from "../../ourComponents/FAQ";
import CollapseSection from "@/app/components/CollapseSection";

export default function Home() {
  let heading = "Privacy Impact Assessments";
  let customWidth = "750";
  let paragraph =
    "Explore the benefits of our Privacy Impact Assessment service, a powerful tool designed to help organizations identify, categorize, and address privacy risks within their data systems in alignment with applicable legislative standards. Our assessments aim to verify privacy compliance with organizational and legal requirements, identify existing privacy risks, and propose effective solutions for risk mitigation.";

  let paragraphTop = "top-[490px]";
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
        A Privacy Impact Assessment is a tool that enables
        organizations to identify, categorize, and ultimately
        remediate privacy risks present in their data systems per
        relevant legislative standards. The objectives of these
        assessments are a few: to verify the data system's privacy
        conformity with organizational and legal requirements, to
        determine the privacy risks present in the data system, and to
        evaluate solutions to mitigate identified risks.
      </div>
      <div className="mt-6">
        Understanding what constitutes a PIA and its goals, a natural
        follow-up question would be who needs one. The necessity of
        one largely depends on the requirements of whatever
        regulations your business must abide by – different frameworks
        require these assessments at different stages of data
        handling. Odds are, however, that if you are bound to privacy
        legislation and handle customer Personally Identifiable
        Information (PII) you will at minimum be required to conduct a
        PIA when said data is newly processed or sold. Additionally,
        whenever significant changes/additions are made to the data
        system's structure or its processes, then a PIA is typically
        highly advised, if not required outright.
      </div>
    </>
  );

  const items = [
    {
      key: "1",
      label: <div className="font-bold text-[16px]">Initiation</div>,
      children: (
        <div className="text-black">
          The Privacy Impact Assessment (PIA) process begins with the initiation
          phase, where the purpose and scope of the assessment are clearly
          defined, specifying the project, system, or process under examination
          for its impact on privacy.
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="font-bold text-[16px]">
          Data Mapping and Risk Identification
        </div>
      ),
      children: (
        <div className="text-black">
          In the data mapping and risk identification step, a comprehensive
          inventory and mapping of the personal data involved in the project are
          conducted. Simultaneously, potential privacy risks associated with the
          collection, use, and handling of personal information are identified
          and assessed, taking into account factors such as sensitivity,
          purpose, and potential impact on individuals.
        </div>
      ),
    },
    {
      key: "3",
      label: <div className="font-bold text-[16px]">Privacy Compliance</div>,
      children: (
        <div className="text-black">
          The project is evaluated against relevant privacy laws, regulations,
          and organizational policies. This step ensures compliance with privacy
          principles, and privacy safeguards and controls are developed and
          implemented to mitigate identified risks. These safeguards may include
          technical measures, policies, and procedures.
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div className="font-bold text-[16px]">
          Stakeholder Consultation, Documentation, and Implementation
        </div>
      ),
      children: (
        <div className="text-black">
          The final step encompasses stakeholder consultation, documentation,
          and implementation. Relevant stakeholders, including individuals whose
          data will be processed, are engaged to gather input and address
          privacy concerns. The findings of the Privacy Impact Assessment,
          including identified risks, privacy safeguards, and compliance
          measures, are documented. Necessary approvals are then obtained before
          implementing the project, ensuring that recommended privacy rules are
          integrated into the design and operations.
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