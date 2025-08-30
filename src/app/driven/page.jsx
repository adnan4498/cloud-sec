import Image from "next/image";
import Head from "next/head";
import Navbar from "../shared/Navbar";
import Hero from "../../../Hero";
import SmoothScrollProvider from "../components/smooth-scroll-provider";
import Footer from "../shared/Footer";
import FAQ from "../ourComponents/FAQ";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <div className="bg-[#111111] relative">
        <Navbar />

        <Hero />
        {/* OUR MISSION SECTION */}
        <div className="2xl:px-[110px] xl:px-[80px] py-[90px] flex flex-col gap-13 px-[50px]">
          <div className=" w-[273px] h-[43px] text-[16px] text-[#DFDFDF] rounded-[24px] border-1 border-solid border-[#DFDFDF] flex justify-center items-center  text-center hover:bg-[#FFFFFF] hover:text-[#000] transition  ease-in-out cursor-pointer ">
            <div>Our Mission</div>
          </div>
          <div className="flex justify-between">
            <div className=" text-[70px] leading-[133%] font-thin text-[#FFFFFF] w-[611px]">
              <div className="w-[500px]">
                Our mission is simple yet powerful
              </div>
            </div>

            <div className="flex flex-col">
              <div className="w-[300px] h-[70px]"></div>
              <div>
                <Image
                  src="/images/ourmission(2).svg"
                  width={"0"}
                  height={"0"}
                  alt="Our Mission"
                  className=" 2xl:w-[454px] 1080:w-[350px] xl:w-[454px]  h-auto"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-10">
            <div>
              <Image
                src="/images/ourmission.svg"
                width={"0"}
                height={"0"}
                alt="Our Mission"
                className=" 2xl:w-[388px] xl:w-[388px] 1080:w-[340px]  h-auto"
              />
            </div>
            <div className="flex flex-col">
              <div className="w-[540px] h-[50px] 2xl:h-[80px] xl:h-[60px]"></div>
              <div className="2xl:w-[580px] 1080:w-[500px]  text-[20px] text-[#ffffff] font-normal leading-[133%]">
                To empower businesses by creating a safer, more compliant
                digital ecosystem—allowing you to focus on growth while we
                safeguard your data privacy and security.
              </div>
            </div>
            <div className="hidden 2xl:block xl:block">
              <div className="flex flex-col">
                <div className="w-[162px] h-[180px] xl:h-[150px]"></div>
                <div className=" w-[162px] border-1 h-[40px] flex justify-center items-center border-solid border-[#ffffff]  cursor-pointer z-50 hover:bg-white hover:text-black transition-all duration-100 ease-in-out  rounded-[24px] text-center text-[#ffffff] text-[16px] mx-auto lg:mx-0">
                  <div>View All</div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:hidden xl:hidden">
            <div className="w-[162px] border-1 h-[40px] flex justify-center items-center border-solid border-[#ffffff]  cursor-pointer z-50 hover:bg-white hover:text-black transition-all duration-100 ease-in-out  rounded-[24px] text-center text-[#ffffff] text-[16px] mx-auto lg:mx-0">
              <div>View All</div>
            </div>
          </div>
        </div>
        {/* OUR CORE VALUE SECTION */}
        <div className="2xl:px-[110px] xl:px-[80px] py-[20px] px-[50px] xl:py-[70px]">
          <div className="flex justify-between 2xl:gap-[80px]">
            <div className="flex flex-col gap-4  py-[60px] 2xl:py-[50px] xl:py-[40px]">
              <div className="xl:text-[55px] 2xl:text-[55px] 2xl:w-[500px] xl:w-[450px] w-[400px]  text-[40px] text-[#ffffff] leading-[133%] font-normal">
                Our Core Values
              </div>
              <div className="xl:w-[400px] 2xl:w-[489px] w-[380px] text-[18px] xl:text-[20px] text-[#ffffff] text-normal">
                At CLOUDSEC, our work is anchored inlution unwavering core
                values that shape every interaction and solution we deliever
              </div>
              <div className="xl:px-5 xl:pt-5 xl:pb-7 2xl:pb-5 py-3 px-5 xl:w-[450px] 2xl:w-[455px] xl:h-[124px] w-[380px] h-[100px] bg-[#202020] border-1 border-solid border-[#FFFFFF] rounded-[10px] ">
                <div className="flex flex-col xl:gap-2">
                  <div className="flex justify-between">
                    <div className="w-[135px] text-[20px] text-[#FFFFFF] font-normal">
                      Commitment
                    </div>
                    <div className="text-[#FFFFFF] h-[20px] flex justify-center items-center">
                      _
                    </div>
                  </div>
                  <div className="xl:w-[400px]  text-[16px] text-[#ffffff] lowercase">
                    We are dedicated to protecting your business and supporting
                    your growth at every step
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 px-7 ">
                <div className="flex justify-between items-center text-[#FFFFFF] ">
                  <div className="w-[73px] text-[20px] font-normal">Growth</div>
                  <div className="w-[30px] xl:w-[20px] 2xl:w-[60px]">+</div>
                </div>
                <div className="flex justify-between items-center text-[#FFFFFF] ">
                  <div className="w-[73px] text-[20px] font-normal">
                    Teamwork
                  </div>
                  <div className="w-[30px] xl:w-[20px] 2xl:w-[60px]">+</div>
                </div>
                <div className="flex justify-between items-center text-[#FFFFFF] ">
                  <div className="w-[73px] text-[20px] font-normal">
                    Accountability
                  </div>
                  <div className="w-[30px] xl:w-[20px] 2xl:w-[60px]">+</div>
                </div>
                <div className="flex justify-between items-center text-[#FFFFFF] ">
                  <div className="w-[73px] text-[20px] font-normal">
                    Integrity
                  </div>
                  <div className="w-[30px] xl:w-[20px] 2xl:w-[60px]">+</div>
                </div>
              </div>
            </div>
            <div className="px-9 py-7 xl:px-[40px] xl:py-9 2xl:w-[745px] 2xl:h-[550px] w-[500px] h-[500px] rounded-[40px] bg-[#202020]">
              <div className="flex gap-5">
                <div className="flex flex-col">
                  <div className="2xl:w-[299px] 2xl:h-[130px] xl:w-[299px] xl:h-[100px] w-[200px] h-[120px]"></div>
                  <div className="flex flex-col gap-3">
                    <div className="w-[150px] xl:w-[299px] text-[30px] xl:text-[40px] text-[#FFFFFF] leading-[133%]`">
                      Commitment
                    </div>
                    <div className="xl:w-[312px] w-[230px] lowercase text-[#D9D9D9] text-[16px] font-thin leading-[133%] ">
                      We are dedicated to protecting your business and
                      supporting your growth at every step
                    </div>
                    <div className="2xl:w-[299px] 2xl:h-[130px] xl:w-[299px] xl:h-[100px] w-[200px] h-[120px]"></div>
                    <div className=" w-[150px] xl:w-[162px] border-1 h-[36px] xl:h-[40px] flex justify-center items-center border-solid bg-[#ffffff]  cursor-pointer z-50 hover:bg-black hover:text-white transition-all duration-100 ease-in-out  rounded-[24px] text-center text-[#000000] text-[14px] xl:text-[16px] mx-auto lg:mx-0">
                  <div>LEARN MORE</div>
                </div>
                  </div>
                </div>
                 
              </div>
            </div>
          </div>

        </div>
         
        <FAQ/>
        <Footer/>
    
      </div>
    </SmoothScrollProvider>  
  );
}
