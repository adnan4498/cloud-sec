// // components/Navbar.jsx
// import Image from "next/image";

// export default function Navbar() {
//   return (
//     <div className="bg-[#111111] relative">
//       <div className="h-auto lg:h-[119px] px-4 sm:px-8 lg:px-[0px]">
//         <div className="flex flex-col lg:flex-row lg:justify-evenly items-center pt-[10px] gap-5">
//           {/* LOGO */}
//           <div className="pt-2">
//             <Image
//               // src="/images/CLOUDSEC-IMG.png"
//               src="/images/footer-logo.svg"
//               // width={290}
//               // height={40}
//               width={"0"}
//               height={"0"}
//               alt="CLOUDSEC Logo"
//               className="w-full"
//             />
//           </div>

//           {/* NAVIGATION MENU */}
//           <div className="w-full z-50 max-w-[450px] h-[40px] bg-[#050505] rounded-[24px] flex justify-evenly gap-9  items-center px-1 py-1">
           
//             <div className="sm:w-[72px] h-[32px] flex justify-center items-center rounded-[24px] bg-[#ffffff] text-[#000] text-[14px] text-center">
//                 <div>
//                     Home
//                 </div>
//             </div>
//             <div className="text-[#fff] text-[14px] w-[72px] h-[32px] flex justify-center items-center">
//                 <div>
//                     About
//                 </div> 
//             </div>
//             <div className="text-[#fff] text-[14px] w-[72px] h-[32px] flex justify-center items-center">
//              <div>
//                  Services
//              </div>
//             </div>
//             <div className="text-[#fff] text-[14px] flex justify-center items-center pr-2">
//               <div>
//                 Contact Us
//               </div>
//             </div>
//           </div>

//           {/* SOCIAL + CONTACT */}
//           <div className="flex gap-3 sm:gap-6">
//             <div>
//               <Image
//                 src="/images/Icon Background.svg"
//                 width={40}
//                 height={40}
//                 alt="Icon"
//                 className="w-[32px] sm:w-[40px] h-auto"
//               />
//             </div>
//             <div>
//               <Image
//                 src="/images/Icon Background (1).svg"
//                 width={40}
//                 height={40}
//                 alt="Icon"
//                 className="w-[32px] sm:w-[40px] h-auto"
//               />
//             </div>
//             <div className=" w-[116px] h-[39px] text-[#fff] text-[14px] rounded-[24px] bg-[#050505] text-center flex justify-center items-center">
//              <div>
//                  Contact Us
//              </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// components/Navbar.jsx
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-[#111111] relative ">
      <div className="h-[119px] px-8 xl:px-16 2xl:px-24">
        <div className="flex justify-between items-center h-full max-w-[1920px] mx-auto">
          {/* LOGO */}
          <div className="flex-shrink-0 pt-5">
            <Image
              src="/images/footer-logo.svg"
              width={290}
              height={40}
              alt="CLOUDSEC Logo"
              className="w-[240px] xl:w-[270px] 2xl:w-[290px] h-auto"
            />
          </div>

          {/* NAVIGATION MENU */}
          <div className="flex-1 max-w-[500px] mx-8 xl:mx-12 2xl:mx-16 z-50">
            <div className="w-full h-[40px] bg-[#050505] rounded-[24px] flex justify-between px-4 items-center px-1 py-1">
              <div className="w-[72px] h-[32px] flex justify-center items-center rounded-[24px] bg-[#ffffff] text-[#000] text-[14px]">
                <div>Home</div>
              </div>
              <div className="text-[#fff] text-[14px] w-[72px] h-[32px] flex justify-center items-center">
                <div>About</div>
              </div>
              <div className="text-[#fff] text-[14px] w-[72px] h-[32px] flex justify-center items-center">
                <div>Services</div>
              </div>
              <div className="text-[#fff] text-[14px] flex justify-center items-center">
                <div>Contact Us</div>
              </div>
            </div>
          </div>

          {/* SOCIAL + CONTACT */}
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
