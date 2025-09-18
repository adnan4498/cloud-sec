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
  let heading = "Security Audits";
  let customWidth = "750";
  let paragraph =
    "Being fully compliant with data security regulations depends on your industry. It also depends on the types of sensitive data you're collecting and how that data is being handled. The best way to handle incidents is to take measures to avoid them entirely, and these measures are directed by audits.";

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
        The best way to prevent security incidents is through proactive measures
        guided by audits. Understanding the specific types of sensitive
        information your organization deals with is crucial. By conducting
        thorough audits, you can identify and address vulnerabilities,
        bolstering your overall security stance. These audits act as a proactive
        tool, offering insights to tackle security concerns before they become
        major issues.
      </div>
      <div className="mt-6">
        Securing compliance with data security regulations involves a unique
        approach, taking into account the requirements of your industry and the
        nuances of handling sensitive data within your organization. The
        effectiveness of your security measures is closely tied to a
        comprehensive understanding of the types of sensitive information you
        deal with. To proactively manage potential security risks, conducting
        regular audits becomes a key practice.
      </div>
      <div className="mt-6">
        Audits serve as a proactive checkpoint, allowing you to pinpoint
        vulnerabilities, assess your security standing, and implement preventive
        strategies. By delving into the specifics of your data processes through
        these audits, you empower your team to address and mitigate potential
        security threats before they escalate, fostering a resilient and secure
        environment for your organization.
      </div>
    </>
  );

const items = [
  {
    key: "1",
    label: <div className="font-bold text-[16px]">Audit</div>,
    children: (
      <div className="text-black">
        A single audit might not always detect all risks present – some issues only
        become apparent in trends between multiple audits. A continual audit process
        ensures that most every detectable risk present in a system is identified,
        not just those apparent at a single point in time.
      </div>
    ),
  },
  {
    key: "2",
    label: <div className="font-bold text-[16px]">Remediation</div>,
    children: (
      <div className="text-black">
        Next is addressing the identified risks. A common issue with said process is
        that the remediation efforts are not always fully effective, leaving the
        organization exposed still to a risk they believe is mitigated. Subsequent
        audits will review remediation efforts to assess their efficacy and provide
        guidance on how to improve them.
      </div>
    ),
  },
  {
    key: "3",
    label: <div className="font-bold text-[16px]">Compliance</div>,
    children: (
      <div className="text-black">
        More frequent audits mean less room exists in-between for organizations to
        unknowingly diverge from emerging regulations and best practices. This not
        only simplifies the maintenance of compliance by way of lending more time to
        react to and prepare for new requirements, but also lends a competitive edge
        by allowing for quick adoption of new security and privacy best practices.
      </div>
    ),
  },
  {
    key: "4",
    label: <div className="font-bold text-[16px]">Value</div>,
    children: (
      <div className="text-black">
        Externally it’s often found that potential partners or clients only accept
        audits from the last year or six months, with more recency generally
        preferred. Internally, timely findings in developing systems are oftentimes
        extremely beneficial, as it’s far easier to adjust for security early in
        that system’s implementation than attempting to retrofit it far afterward.
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
