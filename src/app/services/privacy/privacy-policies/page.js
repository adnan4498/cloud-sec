// app/privacy-policies/page.js
"use client";

import CollapseSection from "@/app/components/CollapseSection";
// import Head from "next/head";
// import Navbar from "../components/shared/Navbar";
// import Hero from "../components/shared/Hero";
// import SmoothScrollProvider from "../components/smooth-scroll-provider";
// import Footer from "../components/shared/Footer";
// import FAQ from "../../components/ourComponents/FAQ";
// import CollapseSection from "../components/shared/CollapseSection";
import FAQ from "@/app/ourComponents/FAQ";
import Hero from "../../../../Hero";
import Navbar from "@/app/shared/Navbar";
import SmoothScrollProvider from "@/app/components/smooth-scroll-provider";
import Head from "next/head";
import Footer from "@/app/shared/Footer";

export default function Home() {
  // Hero section data
  let heading = "Privacy Policies";
  let customWidth = "750";
  let paragraph =
    "A privacy policy should be specifically crafted for your company. CyberData Pros has worked with hundreds of clients to help generate these policies. Let us customize a Privacy Policy that fits your business.";
  let paragraphTop = "lg:top-[390px]";
  let tabText = "Contact Us";

  // Collapse section data
  const collapseTitle = "We Make It Simple.";
  const collapseDescription = (
    <>
      <div>
        Privacy Policy is a legal document that details the information you
        collect on users, the purpose and methods of that collection, and how
        that information will be processed or sold. What constitutes "personal"
        information varies by regulation, but a nice rule-of-thumb is that if
        the data can be used to personally identify an individual (things like
        names, addresses, emails, or age) it's safe to consider it personal.
      </div>
      <div className="mt-6">
        In terms of purpose, these policies primarily exist to protect customer
        privacy rights and to encourage transparency and consumer trust in
        businesses. Past these conceptual benefits lies one critical, tangible
        one for businesses – reducing legal liability in an increasingly
        privacy-concerned world. Crucial in seeing those benefits, however, is
        the comprehensiveness of the policy. A privacy policy should be
        specifically crafted for your company. It should be an intricate and
        intentional guide for how you agree to not only protect your clients but
        ultimately how you will protect your company as well.
      </div>
    </>
  );

  // Collapse items
  const items = [
    {
      key: "1",
      label: (
        <div className="font-bold text-[16px]">Data inventory and purpose</div>
      ),
      children: (
        <div className="text-black">
          Identify and document the types of personal information your website
          collects. Clearly define the purpose for collecting each type of data,
          specifying how it will be used.
        </div>
      ),
    },
    {
      key: "2",
      label: <div className="font-bold text-[16px]">Legal compliance and User Rights</div>,
      children: (
        <div className="text-black">
          Ensure compliance with relevant data protection laws and clearly state
          the legal basis for processing personal data. Outline user rights
          regarding their information, providing details on how users can
          exercise these rights.
        </div>
      ),
    },
    {
      key: "3",
      label: <div className="font-bold text-[16px]">Data Sharing, Security, And Retention</div>,
      children: (
        <div className="text-black">
          Specify if and how user data is shared with third parties. Describe
          the security measures in place to protect user data and outline the
          data retention policy.
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div className="font-bold text-[16px]">
          Contact information and Accessibility
        </div>
      ),
      children: (
        <div className="text-black">
          Include contact details for privacy-related inquiries. Ensure the
          privacy policy is easily accessible on the website, with a direct link
          in the footer or navigation menu, and consider presenting key points
          in a user-friendly format.
        </div>
      ),
    },
  ];

  return (
    <SmoothScrollProvider>
      <div className="bg-[#111111] relative">
        <Head>
          <title>Privacy Policies | CyberData Pros</title>
          <meta
            name="description"
            content="Custom privacy policies tailored for your business needs. Ensure compliance and build trust with your customers."
          />
        </Head>

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
