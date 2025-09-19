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
  let heading = "Cybersecurity Maturity Model Certification (CMMC)";
  let customWidth = "750";
  let paragraph =
    "Obtaining the (CMMC) certificate is crucial for businesses to secure sensitive information and comply with government contracts. At CyberData Pros, we specialize in guiding businesses through the CMMC certification process, ensuring they meet the necessary standards and secure sensitive data effectively.";
  let paragraphTop = "lg:top-[550px]";
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
        CMMC is a program made by the US Department of Defense. This
        certification is designed to enforce protection of unclassified
        information that is shared by the Department with its contractors and
        subcontractors.
      </div>
      <div className="mt-6">
        By working with the government, contractors handle sensitive information
        that is valuable to cyber attackers. CyberData Pros helps businesses
        that are trying to acquire government contracts with their CMMC. While
        CMMC is not required to work with the government at this time, it is
        expected to be required by government contractors and subcontractors in
        the next few years.
      </div>
    </>
  );

  const items = [
    {
      key: "1",
      label: <div className="font-bold text-[16px]">Planning</div>,
      children: (
        <div className="text-black">
          During the planning phase, the project initiates by determining key
          project stakeholders and establishing contact points. Following this,
          project priorities are set, and the scope is defined to outline the
          project's objectives. Subsequently, a comprehensive timeline is
          created to map out the project's progression, and significant
          milestones are identified to mark key achievements and progress
          points.
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="font-bold text-[16px]">Gap Assessment</div>
      ),
      children: (
        <div className="text-black">
          In the Gap Assessment phase, the process begins with the collection of
          relevant data, documents, and information about the organization. This
          is followed by a review of existing documentation and the conduct of
          interviews. The next step involves a thorough comparison of the
          current state of the organization against the Cybersecurity Maturity
          Model Certification (CMMC) standards. The outcome is the
          identification of gaps in processes, controls, resources, or other
          pertinent areas that may require attention and improvement.
        </div>
      ),
    },
    {
      key: "3",
      label: <div className="font-bold text-[16px]">Plan of Action and Milestones</div>,
      children: (
        <div className="text-black">
          Following the identification of gaps from the assessment, the next
          step involves categorizing these gaps. Subsequently, a detailed action
          plan is created to address each identified gap, outlining
          responsibilities, timelines, and the resources needed for implementing
          the necessary changes. The execution of these action plans ensues,
          with thorough documentation of milestones achieved throughout the
          process. Continuous monitoring of progress is conducted, and
          adjustments are made as needed to ensure the effective implementation
          of the action plans.
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div className="font-bold text-[16px]">System Security Plan</div>
      ),
      children: (
        <div className="text-black">
          This process entails synthesizing the organizational scope,
          configuration, and security controls into a central document. This
          document describes the security controls that the organization intends
          to implement to achieve compliance. Additionally, comprehensive plans
          for monitoring and maintaining compliance continually are documented
          to ensure ongoing adherence to established standards and requirements.
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div className="font-bold text-[16px]">Self-Assessment</div>
      ),
      children: (
        <div className="text-black">
          In the Self-Assessment phase, the process involves measuring
          organizational systems against the Cybersecurity Maturity Model
          Certification (CMMC) controls. This includes a comprehensive
          evaluation of the efficacy of progress made and the identification of
          opportunities for improvement within the organization's cybersecurity
          practices.
        </div>
      ),
    },
    {
      key: "6",
      label: (
        <div className="font-bold text-[16px]">
          Assessment Preparation and Assistance
        </div>
      ),
      children: (
        <div className="text-black">
          Lastly, the process includes identifying and gathering evidence
          necessary for assessment by the CMMC (Cybersecurity Maturity Model
          Certification) 3rd Party Assessor Organization. This involves
          evaluating the effectiveness of documentation. Subsequently, approved
          evidence, a System Security Plan (SSP), and other relevant
          documentation are prepared for the assessment. The final step involves
          actively participating in the assessment alongside the organization
          and the assessor, providing support throughout the assessment process.
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
