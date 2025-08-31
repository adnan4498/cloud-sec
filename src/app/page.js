import Image from "next/image";
import Head from "next/head";
import Navbar from "./shared/Navbar";
import Hero from "../../Hero";
import { FacebookOutlined } from "@ant-design/icons";
import { SparklesCore } from "./components/ui/sparkles";
import SmoothScrollProvider from "./components/smooth-scroll-provider";
import Footer from "./shared/Footer";
import FAQ from "./ourComponents/FAQ";

export default function Home() {

  let heading = `Simplifying Data Privacy & Security`;
  let customWidth = "608"
  let paragraph = "At CLOUDSEC we believe every business deserves the freedom to focus on growth—without worrying about data breaches or regulatory risks. Our team delivers expert guidance in data privacy, cybersecurity, and compliance so you can confidently scale your operations in a secure environment."

  return (
    <>
      <SmoothScrollProvider>
        <div className="bg-[#111111] min-h-screen">
          <Head>
            <title>CLOUDSEC</title>
            <meta
              name="description"
              content="Simplifying Data Privacy & Security"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <div className="bg-[#111111] relative">
            <Navbar />

            <Hero heading={heading} customWidth={customWidth} paragraph={paragraph}/>

            <div className="px-4 sm:px-8 lg:px-[110px] py-8 sm:py-16 overflow-hidden">
              <div className="flex flex-col justify-center gap-5">
                <div className="text-center">
                  <h1 className="text-[32px] sm:text-[44px] lg:text-[55px] text-[#ffffff] font-poppin">
                    Explore Our Services
                  </h1>
                </div>

                <div className="flex justify-center item-center text-center w-[1260px] text-[20px]  text-[#DFDFDF] leading-[133%] font-normal">
                  <div className="w-[735px]">
                    No matter the size of your business or its location—whether
                    in the U.S. or internationally—our tailored approach ensures
                    your security needs are fully addressed with solutions
                    customized to your specific requirements.
                  </div>
                </div>
              </div>

              <div className="">
                <div className="flex flex-col xl:flex-row pt-[40px] lg:pt-[80px] pb-[20px] gap-7">
                  <div className="flex-1">
                    <div className="w-full max-w-[745px] 1280:max-w-[600px] 2xl:max-w-[745px] 1680:max-w-[1200px] 3xl:max-w-[1100px] h-auto bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[30px] p-5 lg:pt-9">
                      <div className="flex flex-col gap-7 overflow-hidden">
                        <div className="flex flex-col sm:flex-row gap-5 lg:gap-7">
                          <div className="flex-shrink-0 ">
                            <Image
                              src="/images/cybersecurity.svg"
                              width={100}
                              height={85}
                              alt="Cybersecurity"
                              className="w-[50px] sm:w-[67px] 3xl:w-[100px] h-auto"
                            />
                          </div>
                          <div className="flex flex-col gap-3">
                            <div className="text-[20px] sm:text-[24px] 3xl:text-[32px] text-[#ffffff]">
                              Cybersecurity
                            </div>
                            <div className="w-full max-w-[545px] 3xl:max-w-[800px]">
                              <p className="text-[#D9D9D9] text-[14px] sm:text-[16px] 3xl:text-[22px]">
                                We provide a structured framework for your
                                organization's information security management
                                system, ensuring your data is safeguarded both
                                in transit and at rest.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-3">
                          <div className="w-full lg:w-[458px] 1280:h-fit 2xl:lg:h-[284px] 3xl:w-[700px] 3xl:h-[400px] rounded-[30px] bg-[#202020] p-5 lg:p-0">
                            <div className="flex gap-5 lg:gap-7 lg:px-5 lg:pt-7">
                              <div className="mt-3 flex-shrink-0">
                                <Image
                                  src="/images/cyber-img-2.svg"
                                  width={70}
                                  height={60}
                                  alt="Cyber"
                                  className="w-[35px] lg:w-[45px] 3xl:w-[70px] h-auto"
                                />
                              </div>
                              <div className="">
                                <Image
                                  src="/images/cyber-text-img.svg"
                                  width={220}
                                  height={90}
                                  alt="Cyber Text"
                                  className="w-[120px] lg:w-[150px] 3xl:w-[220px] h-auto "
                                />
                              </div>
                            </div>
                            <div className="mt-5 lg:mt-7 ">
                              <Image
                                src="/images/cyber-vector-img.svg"
                                width={700}
                                height={260}
                                alt="Cyber Vector"
                                className="w-full h-auto rounded-[30px]"
                              />
                            </div>
                          </div>
                          <div className="w-full lg:w-[241px] 1280:h-fit 2xl:lg:h-[284px] 3xl:w-[350px] 1680:w-[380px] 3xl:h-[400px] bg-[#202020] rounded-[20px] p-5 lg:p-0 ">
                            <div className="flex gap-5 lg:gap-7 lg:px-5 lg:pt-7">
                              <div className="mt-3 flex-shrink-0">
                                <Image
                                  src="/images/cyber-img-2.svg"
                                  width={70}
                                  height={60}
                                  alt="Cyber"
                                  className="w-[35px] lg:w-[45px] 3xl:w-[70px] h-auto "
                                />
                              </div>
                              <div>
                                <Image
                                  src="/images/cyber-text (2).svg"
                                  width={160}
                                  height={90}
                                  alt="Cyber Text"
                                  className="w-[90px] lg:w-[109px] 3xl:w-[160px] h-auto "
                                />
                              </div>
                            </div>
                            <div className="mt-8 lg:mt-[55px] 3xl:mt-[70px]">
                              <Image
                                src="/images/cyber-vector-2-img.svg"
                                width={350}
                                height={210}
                                alt="Cyber Vector"
                                className="w-full rounded-[15px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full max-w-[525px] xl:max-w-none xl:w-[525px] 3xl:w-[750px] h-auto rounded-[30px] bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] pt-7 mx-auto xl:mx-0">
                    <div className="flex flex-col sm:flex-row gap-5 px-5">
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/cybersecurity.svg"
                          width={100}
                          height={85}
                          alt="Privacy"
                          className="w-[50px] sm:w-[67px] 3xl:w-[100px] h-auto"
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="text-[20px] sm:text-[24px] 3xl:text-[32px] text-[#ffffff]">
                          Privacy
                        </div>
                        <div className="w-full max-w-[370px] 3xl:max-w-[550px]">
                          <p className="text-[#D9D9D9] text-[14px] sm:text-[16px] 3xl:text-[22px]">
                            In today's digital environment, privacy is more
                            critical than ever. We empower individuals and
                            organizations with the tools, knowledge, and
                            strategies necessary to defend against cyber threats
                            while upholding privacy rights.
                          </p>
                        </div>
                        <div className="relative w-full max-w-[200px] h-[150px] 3xl:max-w-[300px] 3xl:h-[225px] mt-4">
                          <div>
                            <Image
                              src="/images/Rectangle 10.svg"
                              width={300}
                              height={225}
                              alt="Rectangle"
                              className="w-full h-auto"
                            />
                          </div>
                          <div className="absolute top-[30px] left-[25px] 3xl:top-[45px] 3xl:left-[38px]">
                            <Image
                              src="/images/Rectangle 11.svg"
                              width={225}
                              height={150}
                              alt="Rectangle"
                              className="w-[150px] 3xl:w-[225px] h-auto"
                            />
                          </div>
                          <div className="absolute top-[57px] left-[60px] 3xl:top-[85px] 3xl:left-[90px]">
                            <Image
                              src="/images/privacy-img.svg"
                              width={120}
                              height={120}
                              alt="Privacy"
                              className="w-[60px] sm:w-[80px] 3xl:w-[120px] h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-5 mt-5">
                  <div className="w-full relative max-w-[525px] xl:max-w-none xl:w-[525px] 1680:w-[600px] 3xl:w-[750px] h-auto bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[30px] mx-auto xl:mx-0">
                    <div className="px-5 pt-9 flex flex-col sm:flex-row gap-7">
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/cybersecurity.svg"
                          width={100}
                          height={85}
                          alt="Compliance"
                          className="w-[50px] sm:w-[67px] 3xl:w-[100px] h-auto"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="text-[#ffffff] text-[20px] sm:text-[24px] 3xl:text-[32px]">
                          Compliance
                        </div>
                        <div className="w-full ">
                          <p className="text-[#D9D9D9] text-[14px] sm:text-[16px] 3xl:text-[22px] leading-[133%] max-w-[449px] 3xl:max-w-[600px]">
                            Modern data security comes with a maze of
                            regulations and acronyms. We simplify compliance by
                            guiding you through the complexities of today's
                            regulatory requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 lg:mt-[55px] 3xl:mt-[70px]">
                      <Image
                        src="/images/complaince-img.svg"
                        width={750}
                        height={375}
                        alt="Compliance"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="w-full max-w-[743px] xl:max-w-none xl:w-[743px] 1680:w-[820px] 3xl:w-[1050px] h-auto rounded-[30px] overflow-hidden bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] mx-auto xl:mx-0">
                    <div className="px-5 lg:px-7 pt-10 flex flex-col sm:flex-row gap-7">
                      <div className="flex-shrink-0">
                        <Image
                          src="/images/cybersecurity.svg"
                          width={100}
                          height={85}
                          alt="Consulting"
                          className="w-[50px] sm:w-[67px] 3xl:w-[100px] h-auto"
                        />
                      </div>

                      <div className="flex flex-col gap-2 ">
                        <div className="text-[#ffffff] text-[24px] 3xl:text-[32px]">
                          Consulting
                        </div>
                        <div className="w-[470px] 3xl:w-[700px] h-[84px] 3xl:h-[110px] leading-[133%] font-normal">
                          <p className="text-[#D9D9D9] text-[16px] 3xl:text-[22px] font-poppin">
                            whether you need to update your privacy policy,
                            terms of service, or other security documentation,
                            we make the process straightforward and stress-free,
                            ensuring your policies remain clear, compliant, and
                            up-to-date.
                          </p>
                        </div>
                        <div className="relative mt-1 3xl:mt-3">
                          <div className="absolute top-[5px] left-[170px] 3xl:top-[8px] 3xl:left-[250px]">
                            <Image
                              width={220}
                              height={220}
                              className="w-full h-full 3xl:scale-110"
                              src="images/consulting-img1.svg"
                              alt=""
                            />
                          </div>
                          <div className="absolute top-[49px] left-[100px] 3xl:top-[70px] 3xl:left-[150px]">
                            <Image
                              width={220}
                              height={220}
                              className="w-full h-full 3xl:scale-110"
                              src="images/consulting-img1.svg"
                              alt=""
                            />
                          </div>
                          <div className="absolute top-[93px] left-[10px] 3xl:top-[132px] 3xl:left-[20px]">
                            <Image
                              width={220}
                              height={220}
                              className="w-full h-full 3xl:scale-110"
                              src="images/Group 26 (1).svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 sm:px-7 lg:px-[50px] py-8 lg:py-0 lg:h-[550px] flex flex-col justify-center items-center">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-[80px] items-center lg:items-start">
                <div className="flex flex-col gap-[30px] lg:gap-[50px] lg:text-left">
                  <div className="text-[32px] sm:text-[44px] lg:text-[55px] 3xl:text-[70px] text-[#ffffff] font-normal  w-full max-w-[450px] 3xl:max-w-[800px] leading-[133%]">
                    Professionals Committed to Excellence
                  </div>
                  <div className="w-[182px] py-[11px] cursor-pointer z-50 hover:bg-black hover:text-white transition-all duration-100 ease-in-out bg-[#fff] rounded-[24px] text-center text-[#000000] text-[16px] mx-auto lg:mx-0">
                    View All
                  </div>
                </div>
                <div className="flex flex-col gap-6 lg:gap-9 max-w-[680px]">
                  <div className="w-full">
                    <p className="text-[#DFDFDF] text-[16px] sm:text-[18px] lg:text-[20px] 3xl:text-[23px] text-center lg:text-left">
                      At CLOUDSEC our team is composed of seasoned professionals
                      who combine deep industry expertise with a passion for
                      delivering exceptional results. Every project we take on
                      is approached with a blend of knowledge, creativity, and a
                      personalized touch.
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-[#DFDFDF] text-[16px] sm:text-[18px] lg:text-[20px] 3xl:text-[23px] text-center lg:text-left">
                      Meet the dedicated individuals who drive our
                      success—professionals who are not just experts in their
                      fields, but partners in your company's growth and
                      security. Together, we turn complex challenges into
                      simple, effective solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <FAQ />
            <Footer />
          </div>
        </div>
      </SmoothScrollProvider>
    </>
  );
} 
