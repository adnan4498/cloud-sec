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
  let heading = "Cloud Infrastructure";
  let customWidth = "750";
  let paragraph =
    "As businesses continue to move more into the cloud, the associated risks keep growing and the costs keep climbing. CyberData Pros can help you maintain a clean, secure, and cost effective environment with our industry leading Cloud Infrastructure.";

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
        We can identify gaps and weaknesses in the security and configurations
        of your cloud environment, analyze the design of your environment to
        identify potential cost savings and increase efficiency, as well provide
        critical insights on cloud-native risks to your business. The complexity
        of managing a full cloud infrastructure can be daunting, but CyberData
        Pros can help you stay organized, cost-effective, and secure.
      </div>
    </>
  );

  const items = [
    {
      key: "1",
      label: <div className="font-bold text-[16px]">Security</div>,
      children: (
        <div className="text-black">
          Security in the cloud is always a top priority, but things can get
          messy over time. A CIA can help you better understand your attack
          surface, uncover long-forgotten configuration errors, and risky
          default settings, and help regain control over your IAM/AD
          environment.
          <br />
          <br />
          <span className="font-semibold">Services include:</span> attack
          surface mapping and evaluation, encryption settings, network/firewall
          configurations, IAM/AD policies.
        </div>
      ),
    },
    {
      key: "2",
      label: <div className="font-bold text-[16px]">Cloud Sprawl Analysis</div>,
      children: (
        <div className="text-black">
          Monthly cloud costs have continued to steadily rise over the years,
          and businesses across all industries are feeling it. Our CIA can help
          identify outdated, inefficient, and underutilized resources to reduce
          your cloud environment’s complexity, increase efficiency, and even
          potentially lower costs.
          <br />
          <br />
          <span className="font-semibold">Services include:</span> Identifying
          potential inefficiencies, legacy components/processes, and
          orphaned/underutilized resources.
        </div>
      ),
    },
    {
      key: "3",
      label: <div className="font-bold text-[16px]">Cloud Risk Report</div>,
      children: (
        <div className="text-black">
          We take a holistic approach to identifying and analyzing risks, to
          ensure your organization spends its time and money focusing on what
          matters most — protecting your clients, partners, and customers. This
          report provides invaluable feedback on your environment designed to
          help your environment work more effectively and safely, in ways that
          make sense for your business.
          <br />
          <br />
          <span className="font-semibold">Includes:</span> A holistic analysis
          of top cloud native risks, security by design, backup policy and
          strategy analysis.
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
