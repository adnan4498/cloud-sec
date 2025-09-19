"use client";

import Image from "next/image";
import Head from "next/head";
import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Navbar from "../../../shared/Navbar";
import Hero from "../../../../../../../Hero";
import SmoothScrollProvider from "../../../components/smooth-scroll-provider";
import Footer from "../../../shared/Footer";
import FAQ from "../../../ourComponents/FAQ";
import CollapseSection from "@/app/components/CollapseSection";

export default function Home() {
  let heading = "ISO 27701";
  let customWidth = "750";
  let paragraph =
    "We have a 100% audit success rate with all of our clients. Demonstrate that Your business takes Cybersecurity and Data Privacy seriously. This service focuses on implementing and managing a Privacy Information Management System (PIMS) to enhance privacy practices and protect personal information.";

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
        ISO/IEC 27701, known as the Privacy Information Management System
        (PIMS), is an international standard that provides a framework for
        organizations to establish, implement, maintain, and continually improve
        a robust and effective privacy management system. This standard builds
        upon the foundation of ISO/IEC 27001, the widely recognized information
        security management standard, and extends its principles to specifically
        address privacy concerns.
      </div>
      <div className="mt-6">
        ISO 27701 outlines guidelines and best practices for managing personally
        identifiable information (PII) in a privacy-centric manner. It assists
        organizations in demonstrating their commitment to privacy, fostering a
        transparent approach to handling personal information. The standard
        offers a systematic and risk-based approach to privacy management,
        encompassing aspects such as data protection policies, legal compliance,
        consent management, and ongoing monitoring and improvement.
      </div>
      <div className="mt-6">
        By aligning with ISO 27701, organizations can enhance their privacy
        posture, build trust with stakeholders, and navigate the complex
        landscape of privacy regulations and expectations. This standard is
        particularly valuable for entities seeking to demonstrate compliance
        with various privacy laws, standards, and frameworks globally.
      </div>
    </>
  );

  const items = [
    {
      key: "1",
      label: <div className="font-bold text-[16px]">Planning</div>,
      children: (
        <div className="text-black">
          Identify project stakeholders and key contacts & develop communication
          plan. Define program priorities and system scope and applicability.
          Establish and define what success looks like. Determine organization's
          role as either a Controller, Processor, or both.
        </div>
      ),
    },
    {
      key: "2",
      label: <div className="font-bold text-[16px]">Gap Assessment</div>,
      children: (
        <div className="text-black">
          Conduct communication programme to suppliers and other stakeholders.
          Define roles and responsibilities. Identify applicable privacy
          legislation. Appoint representative(s) in other countries & Data
          Protection Officer (if required). Conduct competence and training
          needs assessment. Perform privacy-related training, information
          security awareness training and familiarization.
        </div>
      ),
    },
    {
      key: "3",
      label: <div className="font-bold text-[16px]">PII Mapping</div>,
      children: (
        <div className="text-black">
          Conduct initial PII information gathering exercise & perform audit of
          PII by business area. Identify lawful basis for processing PII in each
          case. Conduct legitimate interest assessments where required.
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div className="font-bold text-[16px]">
          Policies, Notices, and Rights
        </div>
      ),
      children: (
        <div className="text-black">
          Create and implement PII principal request procedures & define PII
          retention and protection policy. Create or amend existing privacy
          notices. Develop and implement PIMS extensions to the existing ISMS.
          Review and amend consent methods and procedures. Also update contracts
          with controllers to be compliant. Address employee confidentiality
          requirements.
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div className="font-bold text-[16px]">Privacy Impact Assessment</div>
      ),
      children: (
        <div className="text-black">
          Define privacy impact assessment process & perform initial PIA.
          Identify international transfers of PII. Assess legality of existing
          international transfers.
        </div>
      ),
    },
    {
      key: "6",
      label: <div className="font-bold text-[16px]">PII Breach Management</div>,
      children: (
        <div className="text-black">
          Create information security incident management & PII breach
          notification procedure. Conduct information security incident
          management training. Test incident management and breach notification
          procedures.
        </div>
      ),
    },
    {
      key: "7",
      label: (
        <div className="font-bold text-[16px]">
          Continuous Improvement and Ongoing Maintenance
        </div>
      ),
      children: (
        <div className="text-black">
          Resolve any nonconformity's identified during the audit and achieve
          certification. Ensure planning and adherence to all recurring
          requirements for Year 2 and Year 3. Work alongside staff to continue
          providing ongoing guidance, direction, and support in the above
          capacities through each surveillance audit.
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
