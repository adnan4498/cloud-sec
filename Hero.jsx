import { SparklesCore } from "@/app/components/ui/sparkles";
import Image from "next/image";
import React from "react";

const Hero = ({heading, customWidth="608"}) => {
  return (
    <>
      <div className="bg-[#050505] rounded-[30px] lg:rounded-[50px] relative min-h-[800px] lg:h-[1087px] font-poppin mx-2 lg:mx-0">
        {/* VECTORS 1 SECTION */}

        <div className="absolute top-[-150px] z-30 left-1/2 -translate-x-1/2">
          <Image
            src="/images/hero-elipse.svg"
            width={0}
            height={0}
            alt="CLOUDSEC Logo"
            className="w-[1200px]"
          />

          <div className="w-full absolute top-[150px]">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
        </div>
        <div className="hidden lg:flex justify-between">
          <div className="relative">
            <div>
              <Image
                src="/images/Vector 1.svg"
                width={"0"}
                height={"0"}
                className="w-full h-full"
                alt="Vector"
              />
            </div>
            <div className="absolute top-[50px] left-[190px]">
              <Image
                src="/images/insignity.svg"
                width={"0"}
                height={"0"}
                className="w-full h-full"
                alt="Insignity"
              />
            </div>
            <div className="absolute top-[135px] left-[60px]">
              <Image
                src="/images/informatix.svg"
                width={"0"}
                height={"0"}
                className="w-full h-full"
                alt="Informatix"
              />
            </div>
          </div>
          <div className="relative">
            <div>
              <Image
                src="/images/Vector 2.svg"
                width={"0"}
                height={"0"}
                className="w-full h-full"
                alt="Vector"
              />
            </div>
            <div className="absolute top-[50px] left-[100px]">
              <Image
                src="/images/automation.svg"
                width={"0"}
                height={"0"}
                className="w-full h-full"
                alt="Automation"
              />
            </div>
            <div className="absolute top-[135px] left-[230px]">
              <Image
                src="/images/interaction.svg"
                width={"0"}
                height={"0"}
                className="w-full h-full"
                alt="Interaction"
              />
            </div>
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="flex flex-col gap-7 justify-center items-center px-4 py-8 lg:py-0">
          {/* <div className="w-auto lg:w-[273px] h-[43px] font-poppin text-center text-[#DFDFDF] pt-[5px] tracking-[1px] rounded-[24px] border-2 border-solid border-[#DFDFDF] lg:absolute lg:top-[200px] px-6">
            Track Performance
          </div> */}

          <div className="w-[273px] cursor-pointer hover:bg-white hover:text-black transition-all duration-200 z-50 text-[16px] flex justify-center items-center h-[43px] border-1 text-[#DFDFDF] border-solid border-[#DFDFDF] rounded-[24px] lg:absolute lg:top-[200px]">
            <div>Track Performance</div>
          </div>

          <div className={`text-[32px] sm:text-[48px] lg:text-[64px] text-[#ffffff] font-poppins w-full  max-w-[${customWidth}px] lg:absolute lg:top-[280px] text-center leading-tight`}>
            {/* Simplifying Data Privacy & Security */}
            {heading}
          </div>
          <div className="lg:absolute lg:top-[490px] leading-[133%] font-normal  sm:text-[18px] lg:text-[20px] w-full max-w-[729px] max-h-[135px] flex justify-center items-center text-center text-[#DFDFDF]">
            <div className="text-center">
              At CLOUDSEC, we recognize the challenges businesses face in
              navigating evolving data security and compliance regulations. Our
              expert team is dedicated to identifying vulnerabilities and
              implementing effective solutions, ensuring your organization
              remains secure and compliant in an ever-changing threat landscape.
            </div>
          </div>

          <div className="lg:absolute cursor-pointer z-50 hover:bg-[#141414] hover:text-white transition-all duration-100 ease-in-out lg:top-[700px] w-[182px] h-[43px] bg-[#ffffff] rounded-[24px] text-[#000000] text-center text-[16px] flex justify-center items-center">
            <div>Get Started</div>
          </div>
        </div>

        {/* VECTORS 2 SECTION */}
        <div className="hidden lg:flex justify-between absolute lg:top-[770px] w-full">
          <div className="relative">
            <div>
              <Image
                src="/images/Vector 3.svg"
                width={"0"}
                height={"0"}
                className="w-full h-full"
                alt="Vector"
              />
            </div>
            <div className="absolute top-[50px] left-[60px]">
              <Image
                src="/images/forecasting.svg"
                width={"0"}
                height={"0"}
                className="w-full h-full"
                alt="Forecasting"
              />
            </div>
            <div className="absolute top-[135px] left-[190px]">
              <Image
                src="/images/informatix.svg"
                width={"0"}
                height={"0"}
                className="w-full h-full"
                alt="Informatix"
              />
            </div>
          </div>
          <div className="relative">
            <div>
              <Image
                src="/images/Vector 4.svg"
                width={"0"}
                height={"0"}
                className="w-full h-full"
                alt="Vector"
              />
            </div>
            <div className="absolute top-[50px] left-[230px]">
              <Image
                src="/images/exploration.svg"
                width={"0"}
                height={"0"}
                className="w-full h-full"
                alt="Exploration"
              />
            </div>
            <div className="absolute top-[135px] left-[100px]">
              <Image
                src="/images/visualization.svg"
                width={"0"}
                height={"0"}
                className="w-full h-full"
                alt="Visualization"
              />
            </div>
          </div>
        </div>

        <div className="absolute top-[400px] z-20 left-1/2 -translate-x-1/2">
          <Image
            src="/images/hero-elipse2.svg"
            width={0}
            height={0}
            alt="CLOUDSEC Logo"
            className="w-[1200px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
