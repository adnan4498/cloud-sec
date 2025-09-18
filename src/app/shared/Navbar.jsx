"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dropdown } from "antd";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "" },
    { name: "Driven", href: "/driven" },
    { name: "Support", href: "/support" },
    { name: "Cyber Security", href: "/cybersecurity" },
  ];

  // Services dropdown items
  const serviceCategories = [
    {
      title: "Cybersecurity",
      items: [
        { name: "Endpoint Security", href: "/services/cybersecurity/endpoint" },
        { name: "Network Security", href: "/services/cybersecurity/network" },
      ],
    },
    {
      title: "Privacy",
      items: [
        {
          name: "Privacy Impact Assessments",
          href: "/services/privacy/privacy-impact-assessments",
        },
        { name: "Privacy Policies", href: "/services/privacy/privacy-policies" },
        { name: "Cookie Compliance", href: "/services/privacy/cookie-compliance" },
      ],
    },
    {
      title: "Compliance",
      items: [
        { name: "iso-27001", href: "/services/compliance/iso-27001" },
        { name: "iso-27701", href: "/services/compliance/iso-27701" },
        { name: "iso-42001", href: "/services/compliance/iso-42001" },
        { name: "fed-ramp", href: "/services/compliance/fed-ramp" },
        { name: "cmmc", href: "/services/compliance/cmmc" },
        { name: "soc", href: "/services/compliance/soc" },
      ],
    },
    {
      title: "Consulting",
      items: [
        { name: "Disaster Recovery Plan", href: "/services/consulting/disaster-recovery" },
        { name: "Business Continuity Plan", href: "/services/consulting/business-continuity" },
        { name: "Policy Documents", href: "/services/consulting/policy-documents" },
        { name: "Cloud Infrastructure", href: "/services/consulting/cloud-infrastructure" },
        { name: "Security Questionnaires", href: "/services/consulting/security-questionnaires" },
      ],
    },
  ];

  const dropdownContent = (
    <div className="bg-[#050505] border border-[#333333] rounded-[16px] p-6 w-[480px] shadow-2xl">
      <div className="grid grid-cols-2 gap-6">
        {serviceCategories.map((category, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-white font-semibold text-[16px] mb-3 border-b border-[#333333] pb-2">
              {category.title}
            </h3>
            <div className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  href={item.href}
                  className="block !text-[#cccccc] hover:text-black bg-white hover:bg-white px-3 py-2 rounded-[8px] text-[14px] transition-all duration-200"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#111111] relative">
      <div className="h-[119px] px-8 xl:px-16 2xl:px-24">
        <div className="flex justify-between items-center h-full max-w-[1920px] mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0 pt-5">
            <Image
              src="/images/footer-logo.svg"
              width={290}
              height={40}
              alt="CLOUDSEC Logo"
              className="w-[240px] xl:w-[270px] 2xl:w-[290px] h-auto"
            />
          </div>

          {/* Nav Links */}
          <div className="flex-1 max-w-[550px] mx-8 xl:mx-12 2xl:mx-16 z-50">
            <div className="w-full cursor-pointer h-[45px] bg-[#050505] rounded-[24px] flex justify-between items-center px-4 py-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                if (item.name === "Services") {
                  return (
                    <Dropdown
                      key={item.href}
                      overlay={dropdownContent}
                      open={open}
                      onOpenChange={setOpen}
                      placement="bottomLeft"
                      trigger={["hover"]}
                      overlayClassName="services-dropdown"
                      getPopupContainer={() => document.body}
                    >
                      <div
                        className={`w-[92px] h-[32px] flex justify-center items-center rounded-[24px] text-[14px] transition-colors duration-100 cursor-pointer
                        ${
                          isActive || open
                            ? "bg-[#ffffff] text-[#000000]"
                            : "text-[#ffffff] hover:bg-[#1a1a1a]"
                        }`}
                      >
                        {item.name}
                      </div>
                    </Dropdown>
                  );
                }
                return (
                  <Link key={item.href} href={item.href}>
                    <div
                      className={`w-[92px] h-[32px] flex justify-center items-center rounded-[24px] text-[14px] transition-colors
                        ${
                          isActive
                            ? "bg-[#ffffff] text-[#000000]"
                            : "text-[#ffffff] "
                        }`}
                    >
                      {item.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Icons and Contact */}
          <div className="flex items-center gap-4 xl:gap-6">
            <div>
              <Image
                src="/images/Icon Background.svg"
                width={40}
                height={40}
                alt="Icon"
                className="w-[40px] xl:w-[44px] 2xl:w-[48px] h-auto"
              />
            </div>
            <div>
              <Image
                src="/images/Icon Background (1).svg"
                width={40}
                height={40}
                alt="Icon"
                className="w-[40px] xl:w-[44px] 2xl:w-[48px] h-auto"
              />
            </div>
            <div className="w-[116px] xl:w-[126px] 2xl:w-[136px] h-[39px] text-[#fff] text-[14px] rounded-[24px] bg-[#050505] flex justify-center items-center hover:bg-[#1a1a1a] transition-colors cursor-pointer">
              <div>Contact Us</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for dropdown */}
      <style jsx global>{`
        .services-dropdown .ant-dropdown {
          padding: 0;
        }

        .services-dropdown .ant-dropdown-menu {
          padding: 0;
          background: transparent;
          box-shadow: none;
          border: none;
        }

        .services-dropdown .ant-dropdown-menu-item {
          padding: 0;
        }
      `}</style>
    </div>
  );
}
