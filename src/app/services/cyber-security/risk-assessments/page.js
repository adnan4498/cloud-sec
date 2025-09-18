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
  let heading = "Risk Assessments";
  let customWidth = "750";
  let paragraph =
    "While risk assessments are phenomenal for newer businesses just getting started on building their cybersecurity infrastructure, they are also incredibly important for established security teams as well. CyberData Pros conducts regular risk assessments, allowing your company to track progress, quantify improvements made, and continue to identify new opportunities for improvement as you change and grow.";

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
        Do you need that expensive IPS your IT manager asked for? Regular risk
        assessments allow your company to track progress, quantify improvements
        made, and continue to identify new opportunities for improvement as you
        change and grow.
      </div>

      <div className="mt-6">
        This ensures that as new clients join, or new services are offered, you
        can maintain a comfortable footing within your risk management
        structure, as well as a potential competitive advantage over others in
        your space.
      </div>

      <div className="mt-6">
        As the data privacy and security requirements for the biggest companies
        in the world continue to grow, due diligence and proactive tactics that
        show your organization is committed to handling their data responsibly
        and securely can make all the difference when they are deciding who gets
        that next big contract.
      </div>
    </>
  );

  const items = [
    {
      key: "1",
      label: (
        <div className="font-bold text-[16px]">
          Scope Definition and Asset Identification
        </div>
      ),
      children: (
        <div className="text-black">
          In conducting a risk assessment, the initial step involves clearly
          defining the scope of the assessment and specifying the systems,
          processes, or assets to be evaluated. Simultaneously, a comprehensive
          inventory is compiled, encompassing hardware, software, data,
          personnel, and other resources within the identified scope.
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="font-bold text-[16px]">Threat and Risk Analysis</div>
      ),
      children: (
        <div className="text-black">
          Following this, the assessment delves into the identification of
          potential threats and vulnerabilities that could impact the assets in
          question. The subsequent evaluation assesses the likelihood and
          potential impact of each identified threat, considering the existing
          vulnerabilities and the efficacy of current security controls.
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="font-bold text-[16px]">
          Risk Evaluation and Mitigation Planning
        </div>
      ),
      children: (
        <div className="text-black">
          Upon completing the risk analysis, the next critical phase is the
          assignment of a risk level to each identified threat, taking into
          account factors such as likelihood, impact, and the effectiveness of
          current controls. Concurrently, strategies and action plans are
          developed to mitigate or manage the identified risks, with
          prioritization based on their severity.
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div className="font-bold text-[16px]">
          Implementation of Controls and Monitoring
        </div>
      ),
      children: (
        <div className="text-black">
          The implementation of security controls is the subsequent step,
          involving the application of measures to mitigate or reduce the
          identified risks. This may include technological enhancements, policy
          updates, or other appropriate means. To ensure ongoing effectiveness,
          regular monitoring of implemented controls and periodic reviews of the
          risk landscape are conducted to identify any changes that may impact
          the organization's risk profile. Throughout the entire process,
          meticulous documentation is maintained, encompassing the identified
          risks, mitigation strategies, and any changes made to the security
          posture.
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
