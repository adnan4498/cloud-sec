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
  let heading = "Tabletop Exercises";
  let customWidth = "750";
  let paragraph =
    "CyberData Pros always custom design each tabletop exercise for our clients and make sure we also throw in some fun! We take extra time to understand your business and how the tabletop exercise can provide benefits to your organization.";

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
        A tabletop exercise is an informal, discussion-based session in which a
        team discusses their roles and responses during an emergency, walking
        through one or more example scenarios. The atmosphere is collegial and
        exploratory and is not meant to put participants in the mindset they’d
        have during a disaster. Tabletop exercises are used to prepare for all
        sorts of crises, but cybersecurity and disaster recovery are common
        areas of focus. Tabletop exercises are designed to expose weaknesses in
        organizational structures and to make sure that people follow protocols
        and best practices. After all, the best-laid plans often fall apart when
        real-world humans have to implement them. While there are plenty of ways
        to test the technical aspects, a tabletop exercise tests the human and
        organizational factors that are just as important for cybersecurity.
      </div>

      <div>
        Let CyberData Pros custom design and execute a tabletop exercise for
        your business today!
      </div>
    </>
  );

const items = [
  {
    key: "1",
    label: <div className="font-bold text-[16px]">Design</div>,
    children: (
      <div className="text-black">
        Each exercise is specifically designed for your business and stakeholders. 
        We fully customize the process and clearly define the objectives and outcomes 
        with all participants to ensure alignment and relevance.
      </div>
    ),
  },
  {
    key: "2",
    label: <div className="font-bold text-[16px]">Engage</div>,
    children: (
      <div className="text-black">
        We create an interactive and supportive environment that encourages questions 
        and learning from mistakes. Our certified consultants introduce challenging 
        scenarios, roadblocks, and probing questions to keep participants focused 
        and engaged.
      </div>
    ),
  },
  {
    key: "3",
    label: <div className="font-bold text-[16px]">Learn</div>,
    children: (
      <div className="text-black">
        The primary goal of a tabletop exercise is to uncover knowledge gaps and 
        improve preparedness. We provide clear outcomes and actionable next steps 
        so your business knows exactly how to move forward after the exercise.
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
