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
  let heading = "Policy Documents";
  let customWidth = "750";
  let paragraph =
    "Keeping your documentation current is essential so that critical pieces of the business are known to all. The worst thing that can happen is an employee walks out the door and nothing is documented. CyberData Pros will customize all of these policies to fit your business. Our certified consultants will work with your team to ensure you have the proper policies in place.";

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
        Documenting important processes for your business and employees is
        critical to the overall success of the business. This is no different
        than privacy and security documentation for your business. Having the
        proper documentation for your business will help with client/vendor
        questionnaires, insurance for your business, and knowing how secure data
        is.
      </div>

      <div className="mt-6">
        There are multiple pieces of data privacy and security documentation
        that your business needs. Documentation does differ from industry to
        industry, but many of the critical documents are universal across the
        board.
      </div>
      <div className="mt-6">
        Keeping your documentation current is essential so that critical pieces
        of the business are known to all. The worst thing that can happen is an
        employee walks out the door and nothing is documented.{" "}
      </div>
    </>
  );

  const items = [
    {
      key: "1",
      label: <div className="font-bold text-[16px]">IT Security Policy</div>,
      children: (
        <div className="text-black">
          This document lays out the internal security policies of how the
          business uses, stores, and processes data. May include other policies
          such as Clean Desk, Remote Working, Responsible Parties, etc.
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="font-bold text-[16px]">Disaster Recovery Plan</div>
      ),
      children: (
        <div className="text-black">
          Set of policies and procedures on how to enable the recovery of vital
          infrastructure and systems following a disaster. The important portion
          of this document should outline critical processes and how long each
          process can be down in order for your business to recover.
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="font-bold text-[16px]">Business Continuity Plan</div>
      ),
      children: (
        <div className="text-black">
          A documented plan and process of creating systems of prevention and
          recovery to deal with potential threats to a company. In addition to
          prevention, the goal is to enable ongoing operations during the
          execution of disaster recovery.
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div className="font-bold text-[16px]">Data Classification Policy</div>
      ),
      children: (
        <div className="text-black">
          The final phase of penetration testing involves documenting and
          communicating the findings to the relevant stakeholders. A
          comprehensive and well-structured report is crucial for understanding
          the security posture and making informed decisions for remediation.
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div className="font-bold text-[16px]">Incident Response Plan</div>
      ),
      children: (
        <div className="text-black">
          A planned set of instructions to help IT detect, respond to, and
          recover from data privacy or security incidents. These types of plans
          address issues like cyber crime, data loss, and service outages.
        </div>
      ),
    },
    {
      key: "6",
      label: (
        <div className="font-bold text-[16px]">Risk Management Policy</div>
      ),
      children: (
        <div className="text-black">
          This document aims to guide the management of risk to support the
          achievement of corporate objectives.
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
