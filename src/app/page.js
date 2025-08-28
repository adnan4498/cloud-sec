import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-[#111111] min-h-screen">
      <Head>
        <title>CLOUDSEC</title>
        <meta
          name="description"
          content="Simplifying Data Privacy & Security"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAV BAR */}
      <div className="bg-[#111111] relative">
        <div className="h-auto lg:h-[119px] px-4 sm:px-8 lg:px-[0px]">
          <div className="flex flex-col lg:flex-row lg:justify-evenly items-center pt-[10px] gap-5">
            <div className="flex-shrink-0">
              <Image
                src="/images/CLOUDSEC-IMG.png"
                width={290}
                height={40}
                alt="CLOUDSEC Logo"
                className="w-[200px] lg:w-[290px] h-auto"
              />
            </div>
            <div className="w-full z-50 max-w-[413px] h-[40px] bg-[#050505] rounded-[30px] flex justify-evenly gap-2 sm:gap-6 items-center">
              <div className="text-[#000] text-[14px] sm:text-[16px] bg-[#fff] w-[50px] sm:w-[72px] pt-[2px] text-center rounded-[30px] h-[30px]">
                Home
              </div>
              <div className="text-[#fff] text-[14px] sm:text-[16px]">
                About
              </div>
              <div className="text-[#fff] text-[14px] sm:text-[16px]">
                Services
              </div>
              <div className="text-[#fff] text-[14px] sm:text-[16px]">
                Contact Us
              </div>
            </div>
            <div className="flex gap-3 sm:gap-6">
              <div>
                <Image
                  src="/images/Icon Background.svg"
                  width={40}
                  height={40}
                  alt="Icon"
                  className="w-[32px] sm:w-[40px] h-auto"
                />
              </div>
              <div>
                <Image
                  src="/images/Icon Background (1).svg"
                  width={40}
                  height={40}
                  alt="Icon"
                  className="w-[32px] sm:w-[40px] h-auto"
                />
              </div>
              <div className="w-[90px] sm:w-[116px] h-[39px] text-[#fff] text-[14px] sm:text-[16px] rounded-[30px] bg-[#050505] text-center pt-[5px]">
                Contact Us
              </div>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
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
          </div>

             {/* <div className="absolute top-[400px] z-20 ">
            <Image
              src="/images/hero-elipse.svg"
              width={0}
              height={0}
              alt="CLOUDSEC Logo"
              className="w-full"
            />
          </div> */}

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
            <div className="w-auto lg:w-[273px] h-[43px] font-poppin text-center text-[#DFDFDF] pt-[5px] tracking-[1px] rounded-[24px] border-2 border-solid border-[#DFDFDF] lg:absolute lg:top-[200px] px-6">
              Track Performance
            </div>
            <div className="text-[32px] sm:text-[48px] lg:text-[64px] text-[#ffffff] font-poppins w-full max-w-[608px] lg:absolute lg:top-[280px] text-center leading-tight">
              Simplifying Data Privacy & Security
            </div>
            <div className="lg:absolute lg:top-[490px] text-[16px] sm:text-[18px] lg:text-[20px] font-poppins w-full max-w-[729px] text-center text-[#DFDFDF] mt-[10px] px-4">
              At CLOUDSEC, we recognize the challenges businesses face in
              navigating evolving data security and compliance regulations. Our
              expert team is dedicated to identifying vulnerabilities and
              implementing effective solutions, ensuring your organization
              remains secure and compliant in an ever-changing threat landscape.
            </div>
            <div className="lg:absolute lg:top-[700px] bg-[#ffffff] w-[182px] py-[11px] font-semibold rounded-[24px] text-[#000000] text-center text-[16px] font-poppin mt-8 lg:mt-0">
              Get Started
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

            <div className="absolute top-[400px] z-30 left-1/2 -translate-x-1/2">
            <Image
              src="/images/hero-elipse2.svg"
              width={0}
              height={0}
              alt="CLOUDSEC Logo"
              className="w-[1200px]"
            />
          </div>

        </div>

        {/* EXPLORE SECTION */}
        <div className="px-4 sm:px-8 lg:px-[110px] py-8 sm:py-16 lg:py-[130px]">
          <div className="flex flex-col justify-center gap-7">
            <div className="text-center">
              <h1 className="text-[32px] sm:text-[44px] lg:text-[55px] text-[#ffffff] font-poppin">
                Explore Our Services
              </h1>
            </div>
            <div className="flex justify-center w-full">
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#DFDFDF] leading-[1.33] font-normal w-[729px] text-center">
                No matter the size of your business or its location—whether in
                the U.S. or internationally— our tailored approach ensures your
                security needs are fully addressed with solutions customized to
                your specific requirements.
              </p>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row pt-[40px] lg:pt-[80px] pb-[20px] gap-7">
            {/* CYBERSECURITY */}
            <div className="flex-1">
              <div className="w-full max-w-[745px] h-auto bg-[#050505] rounded-[30px] p-5 lg:pt-9">
                <div className="flex flex-col gap-7">
                  <div className="flex flex-col sm:flex-row gap-5 lg:gap-7">
                    <div className="flex-shrink-0">
                      <Image
                        src="/images/cybersecurity.svg"
                        width={67}
                        height={57}
                        alt="Cybersecurity"
                        className="w-[50px] sm:w-[67px] h-auto"
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="text-[20px] sm:text-[24px] text-[#ffffff]">
                        Cybersecurity
                      </div>
                      <div className="w-full max-w-[574px]">
                        <p className="text-[#D9D9D9] text-[14px] sm:text-[16px]">
                          We provide a structured framework for your
                          organization's information security management system,
                          ensuring your data is safeguarded both in transit and
                          at rest.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CYBERSECURITY SECTION */}
                  <div className="flex flex-col lg:flex-row gap-3">
                    <div className="w-full lg:w-[458px] h-auto lg:h-[284px] rounded-[20px] bg-[#202020] p-5 lg:p-0">
                      <div className="flex gap-5 lg:gap-7 lg:px-5 lg:pt-7">
                        <div className="mt-3 flex-shrink-0">
                          <Image
                            src="/images/cyber-img-2.svg"
                            width={45}
                            height={38}
                            alt="Cyber"
                            className="w-[35px] lg:w-[45px] h-auto"
                          />
                        </div>
                        <div>
                          <Image
                            src="/images/cyber-text-img.svg"
                            width={150}
                            height={61}
                            alt="Cyber Text"
                            className="w-[120px] lg:w-[150px] h-auto"
                          />
                        </div>
                      </div>
                      <div className="mt-5 lg:mt-7">
                        <Image
                          src="/images/cyber-vector-img.svg"
                          width={458}
                          height={169}
                          alt="Cyber Vector"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-[241px] h-auto lg:h-[284px] bg-[#202020] rounded-[20px] p-5 lg:p-0">
                      <div className="flex gap-5 lg:gap-7 lg:px-5 lg:pt-7">
                        <div className="mt-3 flex-shrink-0">
                          <Image
                            src="/images/cyber-img-2.svg"
                            width={45}
                            height={38}
                            alt="Cyber"
                            className="w-[35px] lg:w-[45px] h-auto"
                          />
                        </div>
                        <div>
                          <Image
                            src="/images/cyber-text (2).svg"
                            width={109}
                            height={61}
                            alt="Cyber Text"
                            className="w-[90px] lg:w-[109px] h-auto"
                          />
                        </div>
                      </div>
                      <div className="mt-8 lg:mt-[55px]">
                        <Image
                          src="/images/cyber-vector-2-img.svg"
                          width={241}
                          height={139}
                          alt="Cyber Vector"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PRIVACY SECTION */}
            <div className="w-full max-w-[525px] xl:max-w-none xl:w-[525px] h-auto rounded-[20px] bg-[#050505] pt-7 mx-auto xl:mx-0">
              <div className="flex flex-col sm:flex-row gap-5 px-5">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/cybersecurity.svg"
                    width={67}
                    height={57}
                    alt="Privacy"
                    className="w-[50px] sm:w-[67px] h-auto"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="text-[20px] sm:text-[24px] text-[#ffffff]">
                    Privacy
                  </div>
                  <div className="w-full max-w-[370px]">
                    <p className="text-[#D9D9D9] text-[14px] sm:text-[16px]">
                      In today's digital environment, privacy is more critical
                      than ever. We empower individuals and organizations with
                      the tools, knowledge, and strategies necessary to defend
                      against cyber threats while upholding privacy rights.
                    </p>
                  </div>
                  <div className="relative w-full max-w-[200px] h-[150px] mt-4">
                    <div>
                      <Image
                        src="/images/Rectangle 10.svg"
                        width={200}
                        height={150}
                        alt="Rectangle"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="absolute top-[25px] left-[17px]">
                      <Image
                        src="/images/Rectangle 11.svg"
                        width={150}
                        height={100}
                        alt="Rectangle"
                        className="w-[150px] h-auto"
                      />
                    </div>
                    <div className="absolute top-[65px] left-[70px]">
                      <Image
                        src="/images/privacy-img.svg"
                        width={80}
                        height={80}
                        alt="Privacy"
                        className="w-[60px] sm:w-[80px] h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-5 mt-5">
            {/* COMPLIANCE SECTION */}
            <div className="w-full max-w-[525px] xl:max-w-none xl:w-[525px] h-auto bg-[#050505] rounded-[20px] mx-auto xl:mx-0">
              <div className="px-5 pt-9 flex flex-col sm:flex-row gap-5">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/cybersecurity.svg"
                    width={67}
                    height={57}
                    alt="Compliance"
                    className="w-[50px] sm:w-[67px] h-auto"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-[#ffffff] text-[20px] sm:text-[24px]">
                    Compliance
                  </div>
                  <div className="w-full max-w-[394px]">
                    <p className="text-[#D9D9D9] text-[14px] sm:text-[16px]">
                      Modern data security comes with a maze of regulations and
                      acronyms. We simplify compliance by guiding you through
                      the complexities of today's regulatory requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 lg:mt-[55px]">
                <Image
                  src="/images/complaince-img.svg"
                  width={525}
                  height={300}
                  alt="Compliance"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* CONSULTING SECTION */}
            <div className="w-full max-w-[743px] xl:max-w-none xl:w-[743px] h-auto rounded-[20px] bg-[#050505] mx-auto xl:mx-0">
              <div className="px-5 lg:px-7 pt-10 flex flex-col sm:flex-row gap-5">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/cybersecurity.svg"
                    width={67}
                    height={57}
                    alt="Consulting"
                    className="w-[50px] sm:w-[67px] h-auto"
                  />
                </div>
                {/* <div className="flex flex-col gap-2">
                  <div className="text-[#ffffff] text-[20px] sm:text-[24px]">Consulting</div>
                  <div className="w-full max-w-[535px]">
                    <p className="text-[#D9D9D9] text-[14px] sm:text-[16px]">
                      Whether you need to update your privacy policy, terms of service, or other security documentation, we make the process straightforward and stress-free, ensuring your policies remain clear, compliant, and up-to-date.
                    </p>
                  </div>
                  <div className="relative h-[150px] lg:h-[200px] w-full max-w-[400px] mt-4">
                    <div className="absolute top-[5px] left-[40%] lg:left-[170px]">
                      <Image 
                        src="/images/consulting-img1.svg" 
                        width={80} 
                        height={80} 
                        alt="Consulting"
                        className="w-[60px] lg:w-[80px] h-auto"
                      />
                    </div>
                    <div className="absolute top-[49px] left-[25%] lg:left-[100px]">
                      <Image 
                        src="/images/consulting-img1.svg" 
                        width={80} 
                        height={80} 
                        alt="Consulting"
                        className="w-[60px] lg:w-[80px] h-auto"
                      />
                    </div>
                    <div className="absolute top-[93px] left-[10%] lg:left-[10px]">
                      <Image 
                        src="/images/Group 26 (1).svg" 
                        width={100} 
                        height={80} 
                        alt="Consulting"
                        className="w-[80px] lg:w-[100px] h-auto"
                      />
                    </div>
                  </div>
                </div> */}

                <div className="flex flex-col gap-2">
                  <div className="text-[#ffffff] text-[24px]">Consulting</div>
                  <div className="w-[535px]">
                    <p className="text-[#D9D9D9] text-[16px]">
                      Whether you need to update your privacy policy, terms of
                      service, or other security documentation, we make the
                      process straightforward and stress-free, ensuring your
                      policies remain clear, compliant, and up-to-date.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute top-[5px] left-[170px]">
                      <Image
                        width={"0"}
                        height={"0"}
                        className="w-full h-full"
                        src="images/consulting-img1.svg"
                        alt=""
                      />
                    </div>
                    <div className="absolute top-[49px] left-[100px]">
                      <Image
                        width={"0"}
                        height={"0"}
                        className="w-full h-full"
                        src="images/consulting-img1.svg"
                        alt=""
                      />
                    </div>
                    <div className="absolute top-[93px] left-[10px]">
                      <Image
                        width={"0"}
                        height={"0"}
                        className="w-full h-full"
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

        {/* PROFESSIONAL SECTION */}
        <div className="px-4 sm:px-8 lg:px-[110px] py-8 lg:py-0 lg:h-[550px] flex flex-col justify-center items-center">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[80px] items-center lg:items-start">
            <div className="flex flex-col gap-[30px] lg:gap-[50px] text-center lg:text-left">
              <div className="text-[32px] sm:text-[44px] lg:text-[55px] text-[#ffffff] font-semibold w-full max-w-[450px] leading-tight">
                Professionals Committed to Excellence
              </div>
              <div className="w-[182px] py-[11px] bg-[#fff] rounded-[24px] text-center text-[#000000] text-[16px] mx-auto lg:mx-0">
                View All
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:gap-9 max-w-[680px]">
              <div className="w-full">
                <p className="text-[#DFDFDF] text-[16px] sm:text-[18px] lg:text-[20px] text-center lg:text-left">
                  At CLOUDSEC our team is composed of seasoned professionals who
                  combine deep industry expertise with a passion for delivering
                  exceptional results. Every project we take on is approached
                  with a blend of knowledge, creativity, and a personalized
                  touch.
                </p>
              </div>
              <div className="w-full">
                <p className="text-[#DFDFDF] text-[16px] sm:text-[18px] lg:text-[20px] text-center lg:text-left">
                  Meet the dedicated individuals who drive our
                  success—professionals who are not just experts in their
                  fields, but partners in your company's growth and security.
                  Together, we turn complex challenges into simple, effective
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* QUESTION SECTION */}
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
                Why Does My Organization Need Cybersecurity Consulting Services
                If We Haven't Had Any Issues?
              </h1>
              <p className="w-full text-[#D9D9D9] text-[14px] sm:text-[16px] lg:text-[18.64px] leading-relaxed">
                Cybersecurity is most effective when it's proactive, not
                reactive. Just because you haven't experienced a breach doesn't
                mean you're immune to threats. Our consulting services help you
                identify hidden vulnerabilities, strengthen your defenses, and
                ensure regulatory compliance—protecting your business before
                problems arise.
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
        <div className="px-4 sm:px-8 lg:px-[80px] pt-[40px] lg:pt-[80px] pb-[20px] relative">
          <div className="lg:absolute lg:top-[60px] lg:left-[120px] mb-4 lg:mb-0">
            <Image
              src="/images/cloudsec-logo.svg"
              width={150}
              height={40}
              alt="CLOUDSEC Logo"
              className="w-[120px] lg:w-[150px] h-auto mx-auto lg:mx-0"
            />
          </div>
          <div className="w-full overflow-hidden">
            <Image
              src="/images/Footer.svg"
              width={1200}
              height={300}
              alt="Footer"
              className="w-full h-auto max-w-[1200px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
