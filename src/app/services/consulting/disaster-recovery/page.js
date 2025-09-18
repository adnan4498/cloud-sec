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
  let heading = "Disaster Recovery Plan";
  let customWidth = "750";
  let paragraph =
    "Shield your business against unexpected setbacks with a Disaster Recovery Plan. We help you bounce back swiftly by protecting crucial systems and infrastructure, minimizing downtime.";

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
        Many privacy laws require having a disaster recovery plan. Not only is a
        DR plan important to maintain compliance and avoid fines, the risks of
        not having a plan can include data loss, reduced productivity, unplanned
        expenses, damage to your business’s reputation and loss of customers and
        revenue.
      </div>
      <div className="mt-6">
        After any type of event that stops daily operations, reducing the damage
        and disruption to quickly restore business operations is critical.
      </div>
      <div className="mt-6">
        A DR plan is often part of your overall business continuity plan and
        consists of policies and procedures to enable the recovery of critical
        infrastructure and systems following a disaster. An important component
        of the plan is outlining critical processes and the maximum time each
        can be down in order for your business to recover.
      </div>
    </>
  );

  const items = [
    {
      key: "1",
      label: (
        <div className="font-bold text-[16px]">Define Objective and Scope</div>
      ),
      children: (
        <div className="text-black">
          Define the objectives of your disaster recovery plan.
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="font-bold text-[16px]">Perform a Risk Assessment</div>
      ),
      children: (
        <div className="text-black">
          Identify potential risks and vulnerabilities that could lead to a
          disaster.
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="font-bold text-[16px]">
          Perform a Business Impact Analysis
        </div>
      ),
      children: (
        <div className="text-black">
          Determine the business functions, processes, systems, and data that
          are essential for your organization's operations.
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
          Define the appropriate measures and step-by-step procedures for
          disaster recovery based on the risks and business impact you
          identified.
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div className="font-bold text-[16px]">
          Conduct Testing and Training Regularly
        </div>
      ),
      children: (
        <div className="text-black">
          Regularly test the disaster recovery plan and conduct training
          sessions for employees.
        </div>
      ),
    },
    {
      key: "6",
      label: (
        <div className="font-bold text-[16px]">
          Review and Update the Plan Regularly
        </div>
      ),
      children: (
        <div className="text-black">
          Review and update the disaster recovery plan periodically to
          incorporate changes in technology, business operations, and potential
          risks.
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
