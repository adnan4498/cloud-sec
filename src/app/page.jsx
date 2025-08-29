import Image from "next/image";
import Head from "next/head";
import Navbar from "./Navbar";
import Hero from "../../Hero";

export default function Home() {
  return (
    <div className="bg-[#111111] relative">
      <Navbar />

      <Hero />
      {/* OUR MISSION SECTION */}
      <div className="px-[120px] py-[120px] flex flex-col gap-7">
        <div className="w-[273px] text-[16px] flex justify-center items-center h-[43px] border-1 text-[#DFDFDF] border-solid border-[#DFDFDF] rounded-[24px] ">
          <div>Our Mission</div>
        </div>
        <div className="w-[500px] text-[70px] font-thin text-[#ffffff] leading-[132%]">
          Our mission is simple yet powerful
        </div>
        <div className="flex gap-2">
          <div className="mt-7">
            <Image
              src="/images/ourmission.svg"
              width={"388"}
              height={"208"}
              className="w-[388px] h-[208px]"
              alt="Our Mission"
            />
          </div>
          <div className=" text-[20px] text-[#ffffff] font-normal w-[600px] flex justify-center items-center">
            <div className="w-[530px] h-[28px] leading-[132%]">
              To empower businesses by creating a safer, more compliant digital
              ecosystem—allowing you to focus on growth while we safeguard your
              data privacy and security.
            </div>
          </div>
        </div>
        <div className="absolute top-[1450px] left-[933px]">
          <Image
            src="/images/ourmission(2).svg"
            width={"454"}
            height={"240"}
            className="w-[454px] h-[240px]"
            alt="Our Mission (2)"
          />
        </div>
      </div>
      {/*OUR CORE VALUES SECTION */}
      <div className="flex gap-4 px-[120px] py-[100px]">
        <div className="flex flex-col gap-5">
          <div className="w-[503px] leading-[133%] text-[55px] font-normal text-[#ffffff]">
            Our Core Values
          </div>
          <div className="w-[400px] h-[78px] text-[20px] text-[#ffffff] leading-[132%] font-normal">
            At CLOUDSEC, our work is anchored in unwavering core values that
            shape every interaction and solution we deliver
          </div>
          <div className="px-5 py-5 w-[420px] h-[117px] border-1 border-[#ffffff] bg-[#202020] rounded-[10px] flex flex-col gap-2">
            <div className="flex justify-between w-full text-[#FFFFFF]">
              <div className="w-[135px] text-[20px] leading-[133%] font-normal">
                Commitment
              </div>
              <div className="w-[14px] h-[10px] text-center">_</div>
            </div>
            <div className="w-[420px] text-[16px] text-[#D9D9D9] leading-[133%] lowercase font-normal">
              We are dedicated to protecting your business and supporting your
              growth at every step
            </div>
          </div>
          <div className="w-[405px] h-[30px] flex justify-between item-center text-[#ffffff] px-4">
            <div className="w-[72px]  text-[20px] font-normal leading-[133%] ">
              Growth
            </div>
            <div className="w-[1px]">+</div>
          </div>
          <div className="w-[405px] h-[30px] flex justify-between item-center text-[#ffffff] px-4">
            <div className="w-[72px]  text-[20px] font-normal leading-[133%] ">
              Teamwork
            </div>
            <div className="w-[1px]">+</div>
          </div>
          <div className="w-[405px] h-[30px] flex justify-between item-center text-[#ffffff] px-4">
            <div className="w-[72px]  text-[20px] font-normal leading-[133%] ">
              Accountability
            </div>
            <div className="w-[1px]">+</div>
          </div>
          <div className="w-[405px] h-[30px] flex justify-between item-center text-[#ffffff] px-4">
            <div className="w-[72px]  text-[20px] font-normal leading-[133%] ">
              Integrity
            </div>
            <div className="w-[1px]">+</div>
          </div>
        </div>
        <div className="w-[745px] h-[500px] bg-[#202020] rounded-[40px]  px-[35px] py-[40px]">
          <div className="flex gap-9">
            <div className="flex justify-center flex-col h-[350px]  gap-3">
              <div className="w-[299px] text-[40px] leading-[133%] font-normal text-[#ffffff]">
                Commitment
              </div>
              <div className="w-[312px] h-[63px] text-[16px] leading-[133%] text-[#D9D9D9] font-normal">
                we are dedicated to protecting your business and supporting your
                growth at every step
              </div>
            </div>
            <div className="relative">
              <div>
                <Image
                  src="/images/commitment-img.svg"
                  width={"291"}
                  height={"420"}
                  className="w-[291px] h-[420px]"
                  alt="Commitment iamge"
                />
              </div>
              <div className="flex justify-center gap-5 items-center w-[168px] h-[40px] bg-[#ffffff] rounded-[24px] absolute top-[20px] left-[100px]">
                <div>
                  <Image
                    src="/images/infinity.svg"
                    width={"0"}
                    height={"0"}
                    className="w-[21px] h-[9px]"
                    alt="Work With Us iamge"
                  />
                </div>
                <div className="w-[101px] text-[16px] text-[#202020] leading-[133%]">
                  Work with Us
                </div>
              </div>
              <div className="flex flex-col absolute top-[260px] left-[25px]">
                <div className="w-[153px] h-[96px] bg-[#D9D9D9]  rounded-tl-[20px] rounded-tr-[20px]"></div>
                <div className="flex">
                  <div className="flex justify-center items-center gap-2 rounded-bl-[20px] bg-[#ffffff] w-[81px] h-[40px]">
                    <div>
                      <Image
                        src="/images/infinity.svg"
                        width={"0"}
                        height={"0"}
                        className="w-[11px] h-[5px]"
                        alt="Crew iamge"
                      />
                    </div>
                    <div className="w-[39px] text-[16px] text-[#202020] lowercase leading-[133%] font-normal">
                      crew
                    </div>
                  </div>
                  <div className="w-[73px] h-[40px] rounded-br-[20px] bg-zinc-600/50"></div>
                </div>
              </div>
            </div>
          </div>
       
          <div className="w-[156px] h-[40px] bg-[#ffffff] rounded-[24px] text-[16px] text-[#000] flex justify-center items-center text-center">
            <div>LEARN MORE</div>
          </div>
          
        </div>
      </div>
      {/* QUESSION SECTION */}
      <div className="px-4 sm:px-8 lg:px-[80px] py-[40px] flex flex-col gap-7">
        <div className="w-full max-w-[620px] text-[#ffffff] text-[32px] sm:text-[48px] lg:text-[74.56px] leading-tight">
          Frequently Asked Questions
        </div>
        <div className="w-full max-w-[558px]">
          <p className="text-[#ffffff] text-[16px] sm:text-[18px] lg:text-[20px]">
            Still have questions? We're happy to help—contact us anytime for
            personalized guidance.
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-[30px]">
          <div className="flex flex-col gap-2 w-full px-6 sm:px-9 py-5 sm:py-7 h-auto bg-[#050505] rounded-[30px] lg:rounded-[38.3px] border-2 border-solid border-[#D9D9D9]">
            <h1 className="w-full text-[#ffffff] font-bold text-[20px] sm:text-[26px] lg:text-[31px] leading-tight">
              Why Does My Organization Need Cybersecurity Consulting Services If
              We Haven't Had Any Issues?
            </h1>
            <p className="w-full text-[#D9D9D9] text-[14px] sm:text-[16px] lg:text-[18.64px] leading-relaxed">
              Cybersecurity is most effective when it's proactive, not reactive.
              Just because you haven't experienced a breach doesn't mean you're
              immune to threats. Our consulting services help you identify
              hidden vulnerabilities, strengthen your defenses, and ensure
              regulatory compliance—protecting your business before problems
              arise.
            </p>
          </div>
          <div className="w-full px-6 sm:px-9 py-5 sm:py-7 h-auto bg-[#050505] rounded-[30px] lg:rounded-[38.3px] border-2 border-solid border-[#D9D9D9]">
            <h1 className="text-[#ffffff] font-bold text-[20px] sm:text-[26px] lg:text-[31px]">
              Can you help redesign our website?
            </h1>
          </div>
          <div className="w-full px-6 sm:px-9 py-5 sm:py-7 h-auto bg-[#050505] rounded-[30px] lg:rounded-[38.3px] border-2 border-solid border-[#D9D9D9]">
            <h1 className="text-[#ffffff] font-bold text-[20px] sm:text-[26px] lg:text-[31px]">
              How long does a project take?
            </h1>
          </div>
        </div>
      </div>
      {/* FOOTER SECTION */}
      <div className="px-[80px] py-[80px]">
        <div className="flex  ">
          <div className="flex flex-col gap-9">
            <div className="w-[230px] flex justify-center items-center">
              <Image
                src="/images/cloudsec-logo.svg"
                width={194}
                height={68}
                alt="CLOUDSEC Logo"
                className="w-[194px] lg:w-[194px] h-auto  lg:mx-0"
              />
            </div>
            <div className="text-[19px] leading-[28px] font-normal text-[#FFFFFF] w-[360px]">
               Your trusted partner in cybersecurity, privacy, and compliance. 
            </div>
            <div className=" px-5 flex justify-between text-center items-center w-[358.78px] h-[63.91px] border-[0.79px] border-solid border-[#FFFFFF] rounded-[76px] bg-stone-500/25">
                <div className="w-[63px] h-[9px] text-[12px] text-[#FFFFFF]">
                  Email Here
                </div>
                <div className="w-[121.45px] h-[40px] flex justify-center items-center text-center rounded-[79.38px] border-[0.79px] border-solid border-[#FFFFFF] bg-neutral-500">

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
