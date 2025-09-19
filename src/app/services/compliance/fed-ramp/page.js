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
  let heading = "FedRAMP";
  let customWidth = "750";
  let paragraph =
    "CyberData Pros can help you to achieve FedRAMP Ready status and prepare you to receive an authorization to operate (ATO) if you don’t already have an agency sponsor. Having FedRAMP Ready status will allow you to demonstrate FedRAMP equivalency for other frameworks that rely on FedRAMP authorized CSO’s.";

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
        FedRAMP is a government wide compliance program for cloud services. The
        federal Risk and authorization Management Program (FedRAMP) was founded
        in 2011 to standardize security requirements and processes for cloud
        Service Offerings (CSO) across the federal government. Any cloud service
        provider who wishes to do business with the United States federal
        government will need to get their CSOs FedRAMP authorized, due to the
        requirement all cloud services that hold federal data must be FedRAMP
        authorized.
      </div>
      <div className="mt-6">
        Having FedRAMP ready status will allow you to demonstrate FedRAMP
        equivalency for other frameworks that rely on FedRAMP authorized CSOs.
        FedRAMP Ready can even prioritize your CSO for authorization by the
        Joint Authorization Board (JAB).
      </div>
    </>
  );

  const items = [
    {
      key: "1",
      label: <div className="font-bold text-[16px]">Planning</div>,
      children: (
        <div className="text-black">
          In the planning phase, the project involves determining project
          stakeholders and establishing contact points, setting project
          priorities, defining the scope, and creating a timeline with
          identified significant milestones.
        </div>
      ),
    },
    {
      key: "2",
      label: <div className="font-bold text-[16px]">Gap Assessment</div>,
      children: (
        <div className="text-black">
          The Gap Assessment process involves assessing the current state of
          Chief Security Officer (CSO) and Cloud Service Provider (CSP) against
          FedRAMP controls. The outcome is the delivery of a comprehensive Gap
          Assessment report that identifies gaps and weaknesses. Subsequently, a
          strategy is developed to achieve FedRAMP compliance.
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="font-bold text-[16px]">
          Policy Development and Review
        </div>
      ),
      children: (
        <div className="text-black">
          This process includes reviewing existing policies, documenting
          procedures, and formulating new policies to align with FedRAMP
          compliance. The outcome involves delivering updated, enhanced, or
          newly developed policies to the organization, with further
          collaboration to ensure implementation and compliance with these
          customized policies.
        </div>
      ),
    },
    {
      key: "4",
      label: <div className="font-bold text-[16px]">System Security Plan</div>,
      children: (
        <div className="text-black">
          Synthesize the organizational scope, configuration, and security
          controls into a central document, outlining the security controls that
          the organization intends to implement for compliance. Additionally,
          document comprehensive plans for monitoring and maintaining compliance
          on a continual basis.
        </div>
      ),
    },
    {
      key: "5",
      label: <div className="font-bold text-[16px]">Readiness Assessment</div>,
      children: (
        <div className="text-black">
          In the Readiness Assessment phase, this process involves assisting in
          the completion of a preliminary assessment to evaluate the
          organization's preparedness for the Third-Party Assessment
          Organization (3PAO). The outcome includes delivering a preliminary
          Readiness Assessment report to stakeholders and providing advice on
          recommendations to ensure the Chief Security Officer (CSO) achieves
          ready status.
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
          This involves identifying and gathering evidence required for
          assessment by the FedRAMP 3rd Party assessor organization. This
          includes evaluating the effectiveness of documentation. Subsequently,
          approved evidence, System Security Plan (SSP), and other relevant
          documentation are prepared for the assessment. The final step involves
          actively participating in the assessment alongside the organization
          and the assessor, providing support throughout the assessment process.{" "}
        </div>
      ),
    },
    {
      key: "7",
      label: <div className="font-bold text-[16px]">Continous Monitoring</div>,
      children: (
        <div className="text-black">
          Lastly, we assist in the remediation of Plans of Action and Milestones
          (POAMS) after the initial authorization assessment, along with the
          maintenance of documentation for remediation. It also includes the
          ongoing task of maintaining and updating policies and the System
          Security Plan (SSP) to ensure continuous FedRAMP compliance and meet
          Continuous Monitoring requirements. Additionally, the responsibility
          encompasses preparing Monthly continuous monitoring summaries for both
          the Third-Party Assessment Organization (3PAO) and Authorizing
          Officials. Furthermore, assistance is provided to the Cloud Service
          Provider (CSP) in completing Significant Change requests when
          implementing significant changes to the Chief Security Officer (CSO)
          or onboarding new features.{" "}
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
