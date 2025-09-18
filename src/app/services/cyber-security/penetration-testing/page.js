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
  let heading = "Penetration Testing";
  let customWidth = "750";
  let paragraph =
    "Penetration testing, often referred to as ethical hacking, is a manual approach by attempting to actively exploit any weaknesses that exist, in order to simulate what damage could be done by a real attacker. CyberData Pros has a very thorough approach to identifying exploits and weaknesses within the network, application, or business.";

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
        The goal of a penetration test is to think like the “bad guys”, they are
        significantly more detailed and thus require substantially more time and
        effort. Because of the thorough and in-depth nature, a penetration test
        takes days to weeks to complete. Naturally, the cost associated with a
        penetration test is higher than a vulnerability scan, but it’s worth
        noting that a retest is frequently included in the cost. Additionally,
        they do not need to be conducted as frequently as vulnerability
        scanning; annually is the most common interval Reconnaissance
      </div>
    </>
  );

  const items = [
    {
      key: "1",
      label: <div className="font-bold text-[16px]">Enumeration</div>,
      children: (
        <div className="text-black">
          Enumeration is a crucial phase in penetration testing where the tester
          actively gathers information about the target network, systems, and
          services. The goal is to identify and extract valuable data that can
          be used in subsequent phases, such as vulnerability analysis and
          exploitation.
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="font-bold text-[16px]">Vulnerability Analysis</div>
      ),
      children: (
        <div className="text-black">
          After completing the reconnaissance phase, the next step is
          vulnerability analysis. This involves a thorough examination of the
          identified systems and applications to pinpoint vulnerabilities that
          could be exploited by attackers. The goal is to assess the weaknesses
          in the security posture of the target.
        </div>
      ),
    },
    {
      key: "3",
      label: <div className="font-bold text-[16px]">Exploitation</div>,
      children: (
        <div className="text-black">
          Once vulnerabilities are identified and prioritized, the penetration
          tester moves on to the exploitation phase. This involves attempting to
          exploit the vulnerabilities to simulate how a real attacker might
          compromise the system.
        </div>
      ),
    },
    {
      key: "4",
      label: <div className="font-bold text-[16px]">Reporting</div>,
      children: (
        <div className="text-black">
          The final phase of penetration testing involves documenting and
          communicating the findings to the relevant stakeholders. A
          comprehensive and well-structured report is crucial for understanding
          the security posture and making informed decisions for remediation.
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
