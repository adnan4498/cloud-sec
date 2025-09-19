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
  let heading = "Business Continuity Plan";
  let customWidth = "750";
  let paragraph =
    "Protect your operations with a Business Continuity Plan. Navigate disruptions seamlessly, ensuring your business remains resilient and functional during unforeseen challenges.";

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
        There are a variety of emergencies or disruptions – natural disasters,
        power or equipment failure, staff departure – that could impact your
        day-to-day operations. Insurance is great, but the benefits may come too
        late to save your business. It’s important to consider how your business
        would recover before these events occur.
      </div>
      <div className="mt-6">
        By considering potential risks and their impact and having a documented
        plan in place to prevent disruption and recover from it, you can design
        your processes and systems in a way that will enable operations to
        continue during disaster recovery.
      </div>
      <div className="mt-6">
        Once defined, recovery strategies, roles and responsibilities, and
        communication plans must be trained and tested. Reviewing, testing, and
        updating the plan at least once a year (or more depending on your needs)
        is key.
      </div>
    </>
  );

  const items = [
    {
      key: "1",
      label: (
        <div className="font-bold text-[16px]">
          Identify and Assess Your Risks
        </div>
      ),
      children: (
        <div className="text-black">
          Identify and prioritize risks to your operations.
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="font-bold text-[16px]">
          Identify Critical Elements of Your Organization
        </div>
      ),
      children: (
        <div className="text-black">
          Identify the tools, systems, and skills that are essential to your
          operations.
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="font-bold text-[16px]">
          Identify Ways to Mitigate Risks
        </div>
      ),
      children: (
        <div className="text-black">
          Identify mitigation strategies for the risks facing your organization.
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div className="font-bold text-[16px]">
          Define Recovery Measures and Procedures
        </div>
      ),
      children: (
        <div className="text-black">
          Identify preparedness strategies for the loss of critical roles,
          systems, and skills at your organization.
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div className="font-bold text-[16px]">
          Prepare for How You Will Respond After a Crisis
        </div>
      ),
      children: (
        <div className="text-black">
          Create a recovery team that will initiate recovery actions after a
          crisis.
        </div>
      ),
    },
    {
      key: "6",
      label: (
        <div className="font-bold text-[16px]">Keep Your Plan Up to Date</div>
      ),
      children: (
        <div className="text-black">
          Update your business continuity plan as threats and your company needs
          evolve.
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
