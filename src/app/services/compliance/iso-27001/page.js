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
  let heading = "ISO 27001";
  let customWidth = "750";
  let paragraph =
    "CyberData Pros has successfully helped businesses – some of whom had not even started their compliance journey – achieve certification. We have a 100% audit success rate with all of our clients. Demonstrate that Your business takes cybersecurity and data privacy seriously.";

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
        Compliance frameworks can be an effective way to increase customer
        confidence and reduce your overall costs and risks of data breaches or
        incidents. Win RFPs and stand out from your competitors.
      </div>
      <div className="mt-6">
        Attaining ISO 27001 certification proves to be a valuable asset for
        attracting and retaining clients, especially those on an international
        scale. This certification guarantees the confidentiality, availability,
        and integrity of data.
      </div>
      <div className="mt-6 pl-4 ">
        <ul style={{ listStyleType: "disc" }} className="gap-3 flex flex-col">
          <li>Win RFPs and stand out from your competitors.</li>
          <li>
            Helps ensure that data is kept confidential, available and
            unaltered.
          </li>
          <li>
            Achieving certification can be beneficial for organizations that
            operate globally to commit to international best practices.
          </li>
        </ul>
      </div>
    </>
  );

  const items = [
    {
      key: "1",
      label: <div className="font-bold text-[16px]">Planning</div>,
      children: (
        <div className="text-black">
          ISO 27001 involves identifying project stakeholders and key contacts,
          developing and defining a communication plan, establishing program
          priorities, and determining the system scope and applicability, all
          while establishing and defining the criteria for success.
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="font-bold text-[16px]">Current State Assessment</div>
      ),
      children: (
        <div className="text-black">
          The process entails conducting discovery interviews to gather
          organizational specifics and documentation, reviewing all available
          information to identify security and privacy compliance gaps,
          assessing overall maturity, and ultimately delivering a formal
          internal audit report. This report includes identified findings,
          associated risks, impact on compliance requirements, as well as
          detailed recommendations and remediation steps.
        </div>
      ),
    },
    {
      key: "3",
      label: <div className="font-bold text-[16px]">Remediation Roadmap</div>,
      children: (
        <div className="text-black">
          Assessing findings and gaps based on severity, a project plan is
          formalized with prioritization of the most critical tasks, along with
          the identification of specific owners and proposed timelines for
          remediation.
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
        <div className="font-bold text-[16px]">Program Implementation</div>
      ),
      children: (
        <div className="text-black">
          Providing ongoing support in consulting and project management, the
          tasks include revising existing information security policies and
          procedures, developing additional information security management
          system policies, establishing a formal risk management program with a
          deliverable risk assessment, and actively participating in
          communications with external auditors, offering guidance throughout
          the formal ISO 27001 audit process.
        </div>
      ),
    },
    {
      key: "6",
      label: (
        <div className="font-bold text-[16px]">
          Continuous Improvement and Ongoing Maintainance
        </div>
      ),
      children: (
        <div className="text-black">
          The objective is to resolve any nonconformity's identified during the
          audit and attain certification, ensuring meticulous planning and
          adherence to all recurring requirements for Year 2 and Year 3.
          Additionally, work collaboratively with staff to maintain continuous
          guidance, direction, and support throughout each surveillance audit in
          the mentioned capacities.
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
