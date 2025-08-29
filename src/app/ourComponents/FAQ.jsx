import React from "react";

const FAQ = () => {
  return (
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
        <div className="flex flex-col gap-2 w-full px-6 sm:px-9 py-5 sm:py-7 h-auto bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[30px] lg:rounded-[38.3px] border-2 border-solid border-[#D9D9D9]">
          <h1 className="w-full text-[#ffffff] font-bold text-[20px] sm:text-[26px] lg:text-[31px] leading-tight">
            Why Does My Organization Need Cybersecurity Consulting Services If
            We Haven't Had Any Issues?
          </h1>
          <p className="w-full text-[#D9D9D9] text-[14px] sm:text-[16px] lg:text-[18.64px] leading-relaxed">
            Cybersecurity is most effective when it's proactive, not reactive.
            Just because you haven't experienced a breach doesn't mean you're
            immune to threats. Our consulting services help you identify hidden
            vulnerabilities, strengthen your defenses, and ensure regulatory
            compliance—protecting your business before problems arise.
          </p>
        </div>
        <div className="w-full px-6 sm:px-9 py-5 sm:py-7 h-auto bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[30px] lg:rounded-[38.3px] border-2 border-solid border-[#D9D9D9]">
          <h1 className="text-[#ffffff] font-bold text-[20px] sm:text-[26px] lg:text-[31px]">
            Can you help redesign our website?
          </h1>
        </div>
        <div className="w-full px-6 sm:px-9 py-5 sm:py-7 h-auto bg-gradient-to-b from-[#050505] via-[#202020] to-[#050505] rounded-[30px] lg:rounded-[38.3px] border-2 border-solid border-[#D9D9D9]">
          <h1 className="text-[#ffffff] font-bold text-[20px] sm:text-[26px] lg:text-[31px]">
            How long does a project take?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
