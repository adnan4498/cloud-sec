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
  let heading = "Security Questionnaires";
  let customWidth = "750";
  let paragraph =
    "At CyberData Pros, we guide you through the process, making sure your business meets top-notch security standards, fostering trust among your stakeholders.";

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
        A typical security questionnaire is going to cover areas of your
        business that range from documentation of disaster recovery to physical
        security mechanisms in your business. On average, these questionnaires
        can be hundreds of questions long! Yes, you read that right, and many of
        these require answers within a few weeks.
      </div>

      <div className="mt-6">
        The team at CyberData Pros has years of experience filling these out and
        working alongside our clients to help get these completed. We will work
        to get these completed on your behalf so you can focus on running your
        business!
      </div>
    </>
  );

  const items = [
    {
      key: "1",
      label: (
        <div className="font-bold text-[16px]">
          Initial Assessment and Information Gathering
        </div>
      ),
      children: (
        <div className="text-black">
          Understanding the organization's security posture, policies,
          procedures, and the specific requirements of the questionnaire.
          Conduct a meeting to understand the organization’s security
          infrastructure & collect all relevant documentation, including
          previous security assessments, policies, and any compliance reports.
          Review the questionnaire to identify any gaps in information or areas
          that require detailed technical responses.
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="font-bold text-[16px]">
          Drafting and Reviewing Responses
        </div>
      ),
      children: (
        <div className="text-black">
          Prepare comprehensive and accurate responses to the questionnaire that
          reflect the organization’s security posture and compliance status.
          Draft responses to each question, using the collected policies,
          procedures, and any other relevant information to the questionnaire.
          Engage with matter experts within the organization for technical
          details or clarification as needed & review drafted answers with the
          organization to ensure completeness of the information provided.
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="font-bold text-[16px]">Finalization and Submission</div>
      ),
      children: (
        <div className="text-black">
          Ensure the final response is complete, accurate, and ready for
          submission to the requested party. Conduct a final review of the
          questionnaire with the client/organization, addressing any remaining
          concerns or questions. Finalize the document, making sure it is
          professionally formatted and meets any submission requirements. Assist
          the client with the submission process, if necessary.
        </div>
      ),
    },
    {
      key: "4",
      label: <div className="font-bold text-[16px]">Ongoing Support</div>,
      children: (
        <div className="text-black">
          Provide ongoing support after the questionnaire submission to address
          any follow-up questions or assist with implementing any recommended
          security improvements. Offer any assistance in responding to any
          clarifications or additional information from the questionnaire
          issuer. Provide consultant services for any implementation the
          organization may need to help with their security posture. Schedule
          follow-up meetings to review the implementation progress and update
          any security documentation as necessary.
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
