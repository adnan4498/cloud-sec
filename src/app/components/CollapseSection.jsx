// components/shared/CollapseSection.js
import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default function CollapseSection({ items, title, description }) {
  return (
    <div className="2xl:px-[80px] 2xl:py-[300px] xl:px-[50px] xl:py-[180px] 1080:py-[150px]">
      <div className="flex justify-center 2xl:gap-18 xl:gap-18 1080:gap-20">
        <div className="flex flex-col gap-[50px]">
          <div className="2xl:w-[539px] text-white xl:w-[300px] 1080:w-[250px] xl:text-[48px] 1080:text-[48px] 2xl:text-[55px] leading-[133%] font-normal">
            {title}
          </div>
          <div className="text-white w-[500px]">
            {description}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="2xl:w-[467px] xl:w-[460px] 1080:w-[380px]">
            <Collapse
              items={items}
              expandIcon={({ isActive }) => (
                <PlusOutlined
                  style={{
                    color: "black",
                    fontSize: "16px",
                    transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                />
              )}
              ghost
              className="custom-collapse"
              style={{
                background: "transparent",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}