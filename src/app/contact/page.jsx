import React from "react";
import Navbar from "../shared/Navbar";
import Image from "next/image";
import SmoothScrollProvider from "../components/smooth-scroll-provider";
import Footer from "../shared/Footer";
import FAQ from "../ourComponents/FAQ";
import Hero from "../../../Hero";

export default function Contact() {

  let heading = "Get In Touch";
  let customWidth = "608";
  let paragraph = "Ready to secure your business? Contact our team of cybersecurity experts today. We're here to help you navigate the complex world of data privacy, compliance, and security with personalized solutions tailored to your needs."

  return (
    <SmoothScrollProvider>
      <div className="bg-[#111111] relative">
        <Navbar />
        <Hero heading={heading} customWidth={customWidth} paragraph={paragraph} />

        {/* CONTACT FORM SECTION */}
        <div className="px-4 sm:px-8 lg:px-[110px] py-8 sm:py-16">
          <div className="flex flex-col justify-center gap-5">
            <div className="text-center">
              <h1 className="text-[32px] sm:text-[44px] lg:text-[55px] text-[#ffffff] font-poppin">
                Contact Our Team
              </h1>
            </div>

            <div className="flex justify-center item-center text-center w-[1260px] text-[20px] text-[#DFDFDF] leading-[133%] font-normal">
              <div className="w-[735px]">
                Have questions about our services or need expert guidance on your
                cybersecurity and compliance needs? Reach out to us and let's discuss
                how we can help protect your business.
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-8 mt-12">
            {/* CONTACT FORM */}
            <div className="flex-1">
              <div className="w-full max-w-[745px] bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[30px] p-5 lg:pt-9">
                <div className="flex flex-col gap-7">
                  <div className="text-[24px] sm:text-[32px] text-[#ffffff]">
                    Send us a Message
                  </div>

                  <form className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[#DFDFDF] text-[16px]">First Name</label>
                        <input
                          type="text"
                          className="bg-[#1a1a1a] border border-[#333333] rounded-[8px] px-4 py-3 text-[#ffffff] focus:outline-none focus:border-[#ffffff]"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[#DFDFDF] text-[16px]">Last Name</label>
                        <input
                          type="text"
                          className="bg-[#1a1a1a] border border-[#333333] rounded-[8px] px-4 py-3 text-[#ffffff] focus:outline-none focus:border-[#ffffff]"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[#DFDFDF] text-[16px]">Email Address</label>
                      <input
                        type="email"
                        className="bg-[#1a1a1a] border border-[#333333] rounded-[8px] px-4 py-3 text-[#ffffff] focus:outline-none focus:border-[#ffffff]"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[#DFDFDF] text-[16px]">Company</label>
                      <input
                        type="text"
                        className="bg-[#1a1a1a] border border-[#333333] rounded-[8px] px-4 py-3 text-[#ffffff] focus:outline-none focus:border-[#ffffff]"
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[#DFDFDF] text-[16px]">Service of Interest</label>
                      <select className="bg-[#1a1a1a] border border-[#333333] rounded-[8px] px-4 py-3 text-[#ffffff] focus:outline-none focus:border-[#ffffff]">
                        <option value="">Select a service</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="privacy">Privacy</option>
                        <option value="compliance">Compliance</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[#DFDFDF] text-[16px]">Message</label>
                      <textarea
                        rows={6}
                        className="bg-[#1a1a1a] border border-[#333333] rounded-[8px] px-4 py-3 text-[#ffffff] focus:outline-none focus:border-[#ffffff] resize-none"
                        placeholder="Tell us about your project or questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#ffffff] text-[#000000] py-3 px-6 rounded-[24px] font-semibold hover:bg-[#e0e0e0] transition-colors duration-200"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="w-full max-w-[525px] xl:max-w-none xl:w-[525px]">
              <div className="flex flex-col gap-7">
                <div className="text-[24px] sm:text-[32px] text-[#ffffff]">
                  Contact Information
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#202020] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#ffffff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[#ffffff] font-semibold text-[18px]">Email Us</div>
                      <div className="text-[#DFDFDF] text-[16px]">info@cloudsec.com</div>
                      <div className="text-[#DFDFDF] text-[14px] mt-1">We'll respond within 24 hours</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#202020] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#ffffff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[#ffffff] font-semibold text-[18px]">Call Us</div>
                      <div className="text-[#DFDFDF] text-[16px]">(888) 000 1101</div>
                      <div className="text-[#DFDFDF] text-[14px] mt-1">Mon-Fri 9AM-6PM EST</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#202020] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#ffffff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[#ffffff] font-semibold text-[18px]">Visit Us</div>
                      <div className="text-[#DFDFDF] text-[16px]">3333 Caldwell Ln<br />Plano, TX 6999</div>
                      <div className="text-[#DFDFDF] text-[14px] mt-1">United States</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[20px] p-6">
                  <div className="text-[#ffffff] font-semibold text-[18px] mb-3">Why Choose CLOUDSEC?</div>
                  <ul className="text-[#DFDFDF] text-[14px] space-y-2">
                    <li>• Certified cybersecurity experts</li>
                    <li>• 100% audit success rate</li>
                    <li>• Tailored solutions for your industry</li>
                    <li>• Ongoing support and compliance monitoring</li>
                    <li>• Global experience across multiple sectors</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FAQ />
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}