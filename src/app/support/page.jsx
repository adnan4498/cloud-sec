import React from "react";
import Navbar from "../shared/Navbar";
import Image from "next/image";
import Hero from "../../../Hero";
import SmoothScrollProvider from "../components/smooth-scroll-provider";
import Footer from "../shared/Footer";
import FAQ from "../ourComponents/FAQ";

export default function Home() {
  let heading = "ISO 27001 Certification Support";

  return (
    <SmoothScrollProvider>
      <div className="bg-[#111111] relative">
        <Navbar />
        <Hero heading={heading} />
        <div className="2xl:px-[80px] 2xl:py-[300px] xl:px-[50px] xl:py-[180px] 1080:py-[150px] ">
          <div className="flex justify-center 2xl:gap-18 xl:gap-18 1080:gap-20">
            <div className="flex flex-col gap-[50px]">
              <div className="2xl:w-[539px] xl:w-[300px] 1080:w-[250px] xl:text-[48px] 1080:text-[48px] 2xl:text-[55px] leading-[133%] font-normal text-[#FFFFFF]">
                Simplifying ISO 27001 Compliance
              </div>
              <div className=" w-[182px] border-1 h-[43px] flex justify-center items-center border-solid bg-[#ffffff]  cursor-pointer z-50 hover:bg-black hover:text-black transition-all duration-100 ease-in-out  rounded-[24px] text-center text-[#000000] text-[16px] mx-auto lg:mx-0">
                <div>View All</div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className=" 2xl:w-[467px] 2xl:h-[30px] xl:h-[10px]"></div>
              <div className="2xl:w-[400px] xl:w-[400px] 1080:w-[350px] xl:leading-[25px] xl:text-[18px] leading-[133%] lowercase 2xl:text-[16px] font-normal text-[#D9D9D9]">
                Adopting a recognized compliance framework like ISO 27001 not
                only reduces the risks of data breaches and operational
                disruptions but also builds trust with clients and stakeholders.
                Certification can help your business:
              </div>
              <div className="2xl:w-[467px] leading-[133%] 1080:w-[380px] xl:w-[460px] xl:text-[18px] lowercase text-[16px] font-normal text-[#D9D9D9]">
                <ol className="list-disc">
                  <li> increase customer confidence </li>
                  <li>win rfps and competitive birds</li>
                  <li>
                    ensure data confidentiality,integrity, and availability
                  </li>
                  <li>
                    align with global best practices, especially for
                    international operations
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* OUR PROVEN SECTION */}
        <div className="xl:px-[100px] px-[50px] xl:py-[30px] py-[100px] 1080:py-[50px]">
          <div className="flex flex-col gap-[90px]">
            <div className="flex flex-col gap-7 justify-center items-center">
              <div className="text-[20px] leading-[20px] font-semibold text-[#FFFFFF]">
                Our Process
              </div>
              <div className="font-Rethink leading-[64px] uppercase 2xl:text-[64px] xl:text-[50px] text-[45px] text-[#FFFFFF]">
                Our Proven ISO 27001 Process
              </div>
            </div>
            <div className="flex justify-between 2xl:gap-[80px] 1080:justify-evenly">
              <div className="xl:w-[200px] 2xl:w-[350px] 2xl:h-[280px] 1080:h-[200px] 1080:w-[250px] xl:h-[200px] flex  justify-center items-center 2xl:leading-[32px] 2xl:text-[32px] 1080:text-[30px] text-[#FFFFFF] xl:text-[30px] uppercase font-normal xl:leading-[52px]">
                <div>Planning & program scoping</div>
              </div>
              <div>
                <Image
                  src="/images/stakeholder-img.svg"
                  width={"0"}
                  height={"0"}
                  alt="Stackholder"
                  className=" 2xl:w-[401px] 1080:w-[350px] xl:w-[380px]  h-auto"
                />
              </div>
              <div className="flex flex-col ">
                <div className=" 2xl:w-[300px] 2xl:h-[90px] xl:w-[250px] xl:h-[5px]"></div>
                <div className="2xl:w-[340px]  xl:w-[250px] xl:leading-[32px] 1080:w-[200px] text-[16px] 2xl:leading-[20px] font-normal text-[#FFFFFF]">
                  We begin by identifying key stakeholders, defining
                  communication protocols, setting program priorities, and
                  determining system scope and certification objectives—laying
                  the foundation for a successful compliance journey.
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col 3xl:items-center 2xl:px-0 xl:px-[20px]  2xl:gap-[50px] xl:gap-[30px] 1080:gap-[30px] 1080:px-[40px] ">
                <div className="2xl:w-[1240px] h-[1px] text-[#FFFFFF] bg-[#FFFFFF] 1080:w-[900px] xl:w-[1020px]"></div>
                <div className="flex justify-between items-center px-2 2xl:w-[1240px]  1080:w-[900px] xl:w-[1020px]">
                  <div className="2xl:text-[32px] 2xl:leading-[32px] xl:text-[24px] uppercase font-normal text-[#FFFFFF]">
                    Current State Assessment
                  </div>
                  <div>
                    <Image
                      src="/images/union.svg"
                      width={"0"}
                      height={"0"}
                      alt="Union"
                      className="w-[30px] h-[30px] "
                    />
                  </div>
                </div>
                <div className="2xl:w-[1240px] h-[1px] text-[#FFFFFF] bg-[#FFFFFF]  1080:w-[900px] xl:w-[1020px]"></div>

                <div className="flex justify-between items-center px-2 1080:w-[900px] 2xl:w-[1240px] xl:w-[1020px] ">
                  <div className="2xl:text-[32px] 2xl:leading-[32px] xl:text-[24px]  uppercase font-normal text-[#FFFFFF]">
                    Remediation Roadmap
                  </div>
                  <div>
                    <Image
                      src="/images/union.svg"
                      width={"0"}
                      height={"0"}
                      alt="Union"
                      className="w-[30px] h-[30px] "
                    />
                  </div>
                </div>
                <div className="2xl:w-[1240px] h-[1px] text-[#FFFFFF] bg-[#FFFFFF]  1080:w-[900px] xl:w-[1020px]"></div>
                <div className="flex justify-between items-center px-2 1080:w-[900px] 2xl:w-[1240px] xl:w-[1020px]">
                  <div className="2xl:text-[32px] 2xl:leading-[32px] xl:text-[24px] uppercase font-normal text-[#FFFFFF]">
                    Program Implementation & Support
                  </div>
                  <div>
                    <Image
                      src="/images/union.svg"
                      width={"0"}
                      height={"0"}
                      alt="Union"
                      className="w-[30px] h-[30px] "
                    />
                  </div>
                </div>
                <div className="2xl:w-[1240px] h-[1px] text-[#FFFFFF] bg-[#FFFFFF]  1080:w-[900px] xl:w-[1020px]"></div>
                <div className="flex justify-between items-center px-2 1080:w-[900px] 2xl:w-[1240px] xl:w-[1020px]">
                  <div className="2xl:text-[32px] 2xl:leading-[32px] xl:text-[24px] uppercase font-normal text-[#FFFFFF]">
                    Ongoing Maintenance & Continuous Improvement
                  </div>
                  <div>
                    <Image
                      src="/images/union.svg"
                      width={"0"}
                      height={"0"}
                      alt="Union"
                      className="w-[30px] h-[30px] "
                    />
                  </div>
                </div>
                <div className="2xl:w-[1240px] h-[1px] text-[#FFFFFF] bg-[#FFFFFF] 1080:w-[900px] xl:w-[1020px]"></div>
                <div className="flex justify-between items-center px-2 1080:w-[900px] 2xl:w-[1240px]  xl:w-[1020px]">
                  <div className="2xl:text-[32px] 2xl:leading-[32px] xl:text-[24px] uppercase font-normal text-[#FFFFFF]">
                    Assessment Preparation & Support
                  </div>
                  <div>
                    <Image
                      src="/images/union.svg"
                      width={"0"}
                      height={"0"}
                      alt="Union"
                      className="w-[30px] h-[30px] "
                    />
                  </div>
                </div>
                <div className="2xl:w-[1240px] h-[1px] text-[#FFFFFF] bg-[#FFFFFF] 1080:w-[900px] xl:w-[1020px]"></div>
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
