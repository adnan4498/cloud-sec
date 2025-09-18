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
  let heading = "Vulnerability Scanning";
  let customWidth = "750";
  let paragraph =
    "CyberData Pros uses our unique tool set to discover vulnerabilities within your network or application. Once we discover and document our findings, our team of certified experts will work with you to correct each vulnerability and make your business more secure.";

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
        Vulnerability scanning is a vital process that utilizes automated tools
        to uncover and identify known vulnerabilities across an organization's
        devices, systems, and networks. This systematic approach actively seeks
        out potential weaknesses, allowing for the timely detection and
        remediation of security risks. Regular vulnerability scanning is a
        fundamental practice to ensure the security and stability of your
        organization's systems, reducing the chances of exploitation by
        malicious entities.
      </div>

      <div>
        Regularly incorporating vulnerability scanning into your security
        practices is a foundational step to upholding the integrity of your
        organization's systems, diminishing the risk of exploitation by
        malicious entities. By systematically identifying vulnerabilities, you
        empower your team to proactively address and enhance the security
        posture of your digital infrastructure.
      </div>
    </>
  );

const items = [
  {
    key: "1",
    label: <div className="font-bold text-[16px]">Planning and Scope Definition</div>,
    children: (
      <div className="text-black">
        The vulnerability scanning process begins with a thorough planning and scope definition phase. 
        Specific systems, networks, and applications to be assessed are clearly identified. 
        A regular scanning schedule is established, and the desired level of detail for scan reports 
        is determined to ensure consistency and completeness.
      </div>
    ),
  },
  {
    key: "2",
    label: <div className="font-bold text-[16px]">Asset Identification and Network Discovery</div>,
    children: (
      <div className="text-black">
        The next step is asset identification, which involves compiling a complete inventory of devices, 
        systems, networks, and applications within the defined scope. At the same time, network discovery 
        is performed using scanning tools to map the organization’s network, identify devices, 
        and understand how they interconnect.
      </div>
    ),
  },
  {
    key: "3",
    label: <div className="font-bold text-[16px]">Vulnerability Detection and Analysis</div>,
    children: (
      <div className="text-black">
        Automated scanning tools are used to detect known vulnerabilities in the targeted assets. 
        This includes comparing system configurations and software versions against databases of known 
        vulnerabilities. The scan results are then analyzed to prioritize vulnerabilities based on 
        severity, potential impact, exploitability, and the criticality of the affected systems.
      </div>
    ),
  },
  {
    key: "4",
    label: <div className="font-bold text-[16px]">Reporting and Remediation Planning</div>,
    children: (
      <div className="text-black">
        Comprehensive reports are generated that detail identified vulnerabilities, their associated 
        risks, and recommended remediation steps. A remediation plan is then created, outlining actions 
        to address and mitigate the vulnerabilities, with prioritization based on severity and potential 
        business impact.
      </div>
    ),
  },
  {
    key: "5",
    label: <div className="font-bold text-[16px]">Implementation of Fixes, Rescanning, and Documentation</div>,
    children: (
      <div className="text-black">
        In the final phase, the remediation plan is executed through the application of patches, updates, 
        or configuration changes to eliminate or reduce vulnerabilities. Follow-up rescans are conducted 
        to verify successful remediation. Throughout the entire process, meticulous documentation is 
        maintained, covering scan results, remediation actions, and any changes made to strengthen security.
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
