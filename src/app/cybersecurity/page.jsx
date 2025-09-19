import React from "react";
import Navbar from "../shared/Navbar";
import Image from "next/image";
import SmoothScrollProvider from "../components/smooth-scroll-provider";
import Footer from "../shared/Footer";
import FAQ from "../ourComponents/FAQ";
import Hero from "../../../Hero";

export default function Home() {

  let heading = "Cybersecurity Maturity Model Certification"
  let customWidth = "750"
  let paragraph = "Achieving CMMC certification is critical for businesses seeking to work with the U.S. Department of Defense (DoD) and other government agencies.CLOUDSEC specializes in guiding organizations through the CMMC process, helping you secure sensitive information, meet compliance requirements, and position your business for success in federal contracting."

  return ( 
    <SmoothScrollProvider>
      <div className="bg-[#111111] relative"> 
        <Navbar />
        <Hero heading={heading} customWidth={customWidth} paragraph={paragraph} />
        {/* SIMPLIFYING SECTION */}
        <div className=" 2xl:py-[180px] 2xl:px-[100px] xl:px-[80px] xl:py-[150px] 1080:py-[150px] 1080:px-[80px]">
          <div className="flex justify-center">
            <div className="flex flex-col justify-center 2xl:h-[500px] gap-[50px]">
              <div className="2xl:w-[559px] xl:w-[450px] 1080:w-[350px] text-[55px] leading-[133%] font-normal text-[#ffffff]">
                Simplifying CMMC Compliance
              </div>
              <div className=" w-[182px] border-1 h-[43px] flex justify-center items-center border-solid bg-[#ffffff]  cursor-pointer z-50 hover:bg-black hover:text-black transition-all duration-100 ease-in-out  rounded-[24px] text-center text-[#000000] text-[16px] mx-auto lg:mx-0">
                <div>View All</div>
              </div>
            </div>
            <div className="2xl:w-[727px] 2xl:h-[477px]  xl:w-[650px] xl:h-[490px] rounded-[30px] bg-black px-[80px] py-[60px]">
              <div className="grid  2xl:grid-cols-4 xl:grid-cols-2 gap-9">
                <div className="2xl:w-30% "></div>
                <div className="col-span-2 w-[447px]   text-[#D9D9D9] text-[16px] lowercase">
                  The Cybersecurity Maturity Model Certification (CMMC),
                  established by the U.S. Department of Defense, sets the
                  standard for safeguarding Controlled Unclassified Information
                  (CUI) and Federal Contract Information (FCI) within the
                  defense supply chain. CMMC is designed to ensure defense
                  contractors and subcontractors implement cybersecurity
                  practices that protect sensitive data from evolving cyber
                  threats.
                </div>
                
                <div className="w-[467px] col-span-2  text-[#D9D9D9] text-[16px] lowercase">
                  At CLOUDSEC, we help businesses at every stage of their CMMC
                  journey, from initial assessment to final certification. While
                  CMMC is being phased into federal contracts, it is expected to
                  become a mandatory requirement in the near future. Preparing
                  now ensures your business remains competitive in government
                  contracting opportunities.
                </div>
                <div className=" 2xl:w-20% "></div>
              </div>
            </div>
          </div>
        </div>

        {/* OUR PROCESS SECTION */}
        <div className="xl:px-[100px] px-[50px] xl:py-[0px] py-[100px] 1080:py-[20px]">
          <div className="flex flex-col gap-[90px]">
            <div className="flex flex-col gap-7 justify-center items-center">
              <div className="text-[20px] leading-[20px] font-semibold text-[#FFFFFF]">
                Our Process
              </div>
              <div className="font-Rethink leading-[64px] uppercase 2xl:text-[64px] xl:text-[50px] text-[45px] text-[#FFFFFF]">
                Our CMMC Certification Process
              </div>
            </div>
            <div className="flex justify-between 2xl:gap-[80px] 1080:justify-evenly">
              <div className="xl:w-[200px] 2xl:w-[350px] 2xl:h-[280px] 1080:h-[200px] 1080:w-[250px] xl:h-[200px] flex  justify-center items-center 2xl:leading-[32px] 2xl:text-[32px] 1080:text-[30px] text-[#FFFFFF] xl:text-[30px] uppercase font-normal xl:leading-[52px]">
                <div>Planning & Scope Definition</div>
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
                  We begin by identifying key stakeholders, establishing project
                  priorities, defining the scope of CMMC compliance, and setting
                  a clear roadmap with milestones and timelines to guide your
                  organization through certification.
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col 3xl:items-center 2xl:px-0 xl:px-[20px]  2xl:gap-[50px] xl:gap-[30px] 1080:gap-[30px] 1080:px-[40px] ">
                <div className="2xl:w-[1240px] h-[1px] text-[#FFFFFF] bg-[#FFFFFF] 1080:w-[900px] xl:w-[1020px]"></div>
                <div className="flex justify-between items-center px-2 2xl:w-[1240px]  1080:w-[900px] xl:w-[1020px]">
                  <div className="2xl:text-[32px] 2xl:leading-[32px] xl:text-[24px] uppercase font-normal text-[#FFFFFF]">
                    Gap Assessment
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
                    Plan of Action and Milestones (POA&M)
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
                    System Security Plan (SSP)
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
                    Internal Self-Assessment
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
