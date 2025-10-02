import React from "react";
import Navbar from "../shared/Navbar";
import Image from "next/image";
import SmoothScrollProvider from "../components/smooth-scroll-provider";
import Footer from "../shared/Footer";
import FAQ from "../ourComponents/FAQ";
import Hero from "../../../Hero";

export default function About() {

  let heading = "About CLOUDSEC";
  let customWidth = "608";
  let paragraph = "Founded with a vision to make cybersecurity accessible and effective for businesses of all sizes, CLOUDSEC has grown into a trusted partner for organizations seeking comprehensive data privacy and security solutions."

  return (
    <SmoothScrollProvider>
      <div className="bg-[#111111] relative">
        <Navbar />
        <Hero heading={heading} customWidth={customWidth} paragraph={paragraph} />

        {/* OUR STORY SECTION */}
        <div className="px-4 sm:px-8 lg:px-[110px] py-8 sm:py-16">
          <div className="flex flex-col justify-center gap-5">
            <div className="text-center">
              <h1 className="text-[32px] sm:text-[44px] lg:text-[55px] text-[#ffffff] font-poppin">
                Our Story
              </h1>
            </div>

            <div className="flex justify-center item-center text-center w-[1260px] text-[20px] text-[#DFDFDF] leading-[133%] font-normal">
              <div className="w-[735px]">
                What started as a small team of passionate cybersecurity experts has evolved
                into a comprehensive consulting firm dedicated to protecting businesses in
                an increasingly complex digital landscape.
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-8 mt-12">
            {/* STORY CONTENT */}
            <div className="flex-1">
              <div className="space-y-8">
                <div className="bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[30px] p-8">
                  <h2 className="text-[28px] sm:text-[36px] text-[#ffffff] font-semibold mb-6">
                    The Beginning
                  </h2>
                  <p className="text-[#DFDFDF] text-[16px] leading-[150%] mb-6">
                    CLOUDSEC was founded in 2020 by a group of cybersecurity veterans who recognized
                    a critical gap in the market. While large enterprises had access to comprehensive
                    security solutions, small and medium-sized businesses were often left vulnerable
                    due to complex, expensive, and inaccessible security frameworks.
                  </p>
                  <p className="text-[#DFDFDF] text-[16px] leading-[150%]">
                    Our founders believed that every business, regardless of size, deserves the
                    freedom to focus on growth without the constant worry of data breaches or
                    regulatory non-compliance. This belief became the foundation of our mission.
                  </p>
                </div>

                <div className="bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[30px] p-8">
                  <h2 className="text-[28px] sm:text-[36px] text-[#ffffff] font-semibold mb-6">
                    Our Mission
                  </h2>
                  <p className="text-[#DFDFDF] text-[16px] leading-[150%] mb-6">
                    To empower businesses by creating a safer, more compliant digital ecosystem—allowing
                    you to focus on growth while we safeguard your data privacy and security.
                  </p>
                  <p className="text-[#DFDFDF] text-[16px] leading-[150%]">
                    We achieve this through personalized consulting, comprehensive compliance support,
                    and cutting-edge cybersecurity solutions tailored to your unique business needs.
                  </p>
                </div>
              </div>
            </div>

            {/* STATS AND ACHIEVEMENTS */}
            <div className="w-full max-w-[525px] xl:max-w-none xl:w-[525px]">
              <div className="space-y-6">
                <div className="bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[30px] p-8">
                  <h3 className="text-[24px] text-[#ffffff] font-semibold mb-6 text-center">
                    By the Numbers
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-[36px] sm:text-[48px] text-[#ffffff] font-bold">500+</div>
                      <div className="text-[#DFDFDF] text-[14px]">Businesses Protected</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[36px] sm:text-[48px] text-[#ffffff] font-bold">100%</div>
                      <div className="text-[#DFDFDF] text-[14px]">Audit Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[36px] sm:text-[48px] text-[#ffffff] font-bold">50+</div>
                      <div className="text-[#DFDFDF] text-[14px]">Certifications Earned</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[36px] sm:text-[48px] text-[#ffffff] font-bold">24/7</div>
                      <div className="text-[#DFDFDF] text-[14px]">Support Available</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[30px] p-8">
                  <h3 className="text-[24px] text-[#ffffff] font-semibold mb-6">
                    Our Values
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#ffffff] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-[#ffffff] font-semibold text-[16px]">Commitment</div>
                        <div className="text-[#DFDFDF] text-[14px]">Dedicated to protecting your business at every step</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#ffffff] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-[#ffffff] font-semibold text-[16px]">Excellence</div>
                        <div className="text-[#DFDFDF] text-[14px]">Delivering exceptional results through expertise and innovation</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#ffffff] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-[#ffffff] font-semibold text-[16px]">Integrity</div>
                        <div className="text-[#DFDFDF] text-[14px]">Building trust through transparency and ethical practices</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#ffffff] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-[#ffffff] font-semibold text-[16px]">Partnership</div>
                        <div className="text-[#DFDFDF] text-[14px]">Working alongside you as trusted advisors and collaborators</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OUR TEAM SECTION */}
        <div className="px-4 sm:px-8 lg:px-[110px] py-8 sm:py-16 bg-[#0a0a0a]">
          <div className="text-center mb-12">
            <h2 className="text-[32px] sm:text-[44px] lg:text-[55px] text-[#ffffff] font-poppin mb-6">
              Meet Our Team
            </h2>
            <p className="text-[#DFDFDF] text-[18px] max-w-[800px] mx-auto">
              Our diverse team of cybersecurity experts, compliance specialists, and consultants
              brings decades of combined experience from Fortune 500 companies, government agencies,
              and leading security firms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[30px] p-8 text-center">
              <div className="w-24 h-24 bg-[#333333] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-[#ffffff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-[20px] text-[#ffffff] font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-[#DFDFDF] text-[14px] mb-4">Chief Executive Officer</p>
              <p className="text-[#DFDFDF] text-[14px]">
                Former CISO at Fortune 500 company with 15+ years in cybersecurity leadership.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[30px] p-8 text-center">
              <div className="w-24 h-24 bg-[#333333] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-[#ffffff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-[20px] text-[#ffffff] font-semibold mb-2">Michael Chen</h3>
              <p className="text-[#DFDFDF] text-[14px] mb-4">Chief Technology Officer</p>
              <p className="text-[#DFDFDF] text-[14px]">
                Cybersecurity architect with expertise in cloud security and compliance frameworks.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[30px] p-8 text-center">
              <div className="w-24 h-24 bg-[#333333] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-[#ffffff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-[20px] text-[#ffffff] font-semibold mb-2">Dr. Emily Rodriguez</h3>
              <p className="text-[#DFDFDF] text-[14px] mb-4">Head of Compliance</p>
              <p className="text-[#DFDFDF] text-[14px]">
                Privacy and compliance expert with PhD in Information Security and certifications in multiple frameworks.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-[#DFDFDF] text-[16px] mb-6">
              Our team continues to grow with talented professionals who share our passion for
              cybersecurity excellence and commitment to client success.
            </p>
            <div className="w-[182px] h-[43px] bg-[#ffffff] rounded-[24px] text-[#000000] text-center flex justify-center items-center mx-auto cursor-pointer hover:bg-[#e0e0e0] transition-colors">
              <div>Join Our Team</div>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US SECTION */}
        <div className="px-4 sm:px-8 lg:px-[110px] py-8 sm:py-16">
          <div className="text-center mb-12">
            <h2 className="text-[32px] sm:text-[44px] lg:text-[55px] text-[#ffffff] font-poppin mb-6">
              Why Choose CLOUDSEC?
            </h2>
            <p className="text-[#DFDFDF] text-[18px] max-w-[800px] mx-auto">
              What sets us apart in the cybersecurity consulting landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[30px] p-8">
              <div className="w-16 h-16 bg-[#ffffff] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[20px] text-[#ffffff] font-semibold mb-4">Proven Track Record</h3>
              <p className="text-[#DFDFDF] text-[14px] leading-[150%]">
                100% success rate in compliance audits and certifications across multiple frameworks including ISO 27001, CMMC, and SOC 2.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[30px] p-8">
              <div className="w-16 h-16 bg-[#ffffff] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-[20px] text-[#ffffff] font-semibold mb-4">Tailored Solutions</h3>
              <p className="text-[#DFDFDF] text-[14px] leading-[150%]">
                Every business is unique. We don't offer cookie-cutter solutions—instead, we craft customized security strategies that fit your specific needs and budget.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[30px] p-8">
              <div className="w-16 h-16 bg-[#ffffff] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-[20px] text-[#ffffff] font-semibold mb-4">Expert Team</h3>
              <p className="text-[#DFDFDF] text-[14px] leading-[150%]">
                Our consultants bring decades of experience from leading organizations, ensuring you receive world-class expertise and insights.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[30px] p-8">
              <div className="w-16 h-16 bg-[#ffffff] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-[20px] text-[#ffffff] font-semibold mb-4">Cost Effective</h3>
              <p className="text-[#DFDFDF] text-[14px] leading-[150%]">
                We provide enterprise-level security solutions at prices that make sense for businesses of all sizes, maximizing your ROI on security investments.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[30px] p-8">
              <div className="w-16 h-16 bg-[#ffffff] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-[20px] text-[#ffffff] font-semibold mb-4">Client Focused</h3>
              <p className="text-[#DFDFDF] text-[14px] leading-[150%]">
                Your success is our success. We build long-term partnerships, not just one-time transactions, ensuring ongoing support and growth.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[30px] p-8">
              <div className="w-16 h-16 bg-[#ffffff] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-[20px] text-[#ffffff] font-semibold mb-4">Continuous Innovation</h3>
              <p className="text-[#DFDFDF] text-[14px] leading-[150%]">
                The cybersecurity landscape evolves rapidly. We stay ahead of emerging threats and compliance requirements to keep you protected.
              </p>
            </div>
          </div>
        </div>

        <FAQ />
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}