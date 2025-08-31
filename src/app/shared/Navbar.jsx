import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-[#111111] relative ">
      <div className="h-[119px] px-8 xl:px-16 2xl:px-24">
        <div className="flex justify-between items-center h-full max-w-[1920px] mx-auto">
          <div className="flex-shrink-0 pt-5">
            <Image
              src="/images/footer-logo.svg"
              width={290}
              height={40}
              alt="CLOUDSEC Logo"
              className="w-[240px] xl:w-[270px] 2xl:w-[290px] h-auto"
            />
          </div>

          <div className="flex-1 max-w-[500px] mx-8 xl:mx-12 2xl:mx-16 z-50">
            <div className="w-full cursor-pointer h-[40px] bg-[#050505] rounded-[24px] flex justify-between items-center px-4 py-1">
              <Link href={"/"}>
              <div className="w-[72px] h-[32px] flex justify-center items-center rounded-[24px] bg-[#ffffff] text-[#000] text-[14px]">
                <div>Home</div>
              </div>
              </Link>
              <Link href={"/driven"}>
              <div className="text-[#fff] text-[14px] w-[72px] h-[32px] flex justify-center items-center">
                <div>Driven</div>
              </div>
              </Link>
              <Link href={"/support"}>
              <div className="text-[#fff] text-[14px] w-[72px] h-[32px] flex justify-center items-center">
                <div>Support</div>
              </div>
              </Link>
              <Link href={"/cybersecurity"}>
              <div className="text-[#fff] text-[14px] flex justify-center items-center">
                <div>Cyber Security</div>
              </div>
              </Link>
            </div>
          </div>

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
            <div className="w-[116px] xl:w-[126px] 2xl:w-[136px] h-[39px] text-[#fff] text-[14px] rounded-[24px] bg-[#050505] flex justify-center items-center">
              <div>Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
