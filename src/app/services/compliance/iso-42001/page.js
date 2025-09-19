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
  let heading = "ISO 42001";
  let customWidth = "750";
  let paragraph =
    "The ISO 42001 certification can demonstrate to clients, prospects, and partners that your business not only takes AI responsible use and fairness seriously, but that your business is a mature AI organization. CyberData Pros can help your business achieve this certification to ensure confidence and recognition in your business’s AI systems.";

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
        Artificial Intelligence (AI) is shaking the industry with its innovation
        and boundless potential for integration into business systems. Many
        questions arise with the introduction of AI: what is AI capable of,
        where is AI taking us, and how can we control AI use? Global and
        national leaders are striving toward trustworthy and responsible AI
        regulations with respect to humans at its core. ISO 42001 was introduced
        as the first and only global standard for AI management. ISO 42001
        provides the framework for organizations that are thinking about or
        currently using AI in any capacity.
      </div>
      <div className="mt-6">
        This framework promotes governance, responsible use, fairness, and
        security in a business’s AI implementation. ISO 42001 certification can
        demonstrate to clients, prospects, and partners that your business not
        only takes AI responsible use and fairness seriously, but that your
        business is a mature AI organization
      </div>
    </>
  );

  const items = [
    {
      key: "1",
      label: <div className="font-bold text-[16px]">Planning</div>,
      children: (
        <div className="text-black">
          In the implementation of AI, the organization determines its context
          of use, identifies project stakeholders and key contacts, develops a
          comprehensive communication plan, defines program priorities, outlines
          the system scope and applicability, and establishes clear criteria for
          what success looks like.
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
          This involves conducting discovery interviews, gathering
          organizational specifics and documentation, reviewing all available
          information to identify security and privacy compliance gaps,
          assessing overall maturity, and finally, providing a formal internal
          audit report. This report includes identified findings, associated
          risks, impact on compliance requirements, as well as detailed
          recommendations and remediation steps.
        </div>
      ),
    },
    {
      key: "3",
      label: <div className="font-bold text-[16px]">Remediation Roadmap</div>,
      children: (
        <div className="text-black">
          The Remediation Roadmap entails evaluating findings and gaps based on
          severity, formalizing a project plan with prioritization of the most
          critical tasks, and identifying specific owners with proposed
          timelines for remediation.{" "}
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div className="font-bold text-[16px]">Program Implementation</div>
      ),
      children: (
        <div className="text-black">
          During Program Implementation, the process involves aiding and
          assisting in ongoing consulting and project management, revising
          existing information security policies and procedures, developing
          additional information security management system policies,
          establishing a formal risk management program with a deliverable risk
          assessment, and actively participating in communications with external
          auditors, providing guidance throughout the formal ISO 42001 audit
          process.
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div className="font-bold text-[16px]">
          Continuous Improvement and Ongoing Maintainance
        </div>
      ),
      children: (
        <div className="text-black">
          During continuous improvement and ongoing Maintenance, the focus is on
          resolving any identified nonconformity's during the audit to achieve
          certification. Additionally, there is an emphasis on planning and
          adherence to all recurring requirements for Year 2 and Year 3, with
          ongoing collaboration with staff to provide continuous guidance,
          direction, and support throughout each surveillance audit in the
          mentioned capacities.
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
