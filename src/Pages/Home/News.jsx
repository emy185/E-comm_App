import React from "react";
import { SiNike } from "react-icons/si";
import figma from "../../imgs/figma-1-logo 1.png";
import kronos from "../../imgs/kronos-logo-1-1 1.png";

function News() {
  return (
    <div className="py-28">
      <h1 className="text-3xl font-semibold">LATEST NEWS</h1>

      <div className="flex flex-wrap justify-center items-center text-start gap-x-20 gap-y-10 mt-12">
        <div className="flex items-center gap-6">
          <SiNike className="size-24" />

          <div className="pt-7 leading-tight">
            <h5 className="text-[#C1C8CE] font-medium text-[14px]">
              01 Jan, 2015
            </h5>

            <h3 className="font-semibold text-lg">Fashion Industry</h3>

            <span className="text-[12px]">
              Lorem Ipsum is simply
              <br />
              dummy text of the
              <br />
              printing and typesetting
              <br />
              industry.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img src={figma} alt="figma" className="h-20" />

          <div className="pt-5 leading-tight">
            <h5 className="text-[#C1C8CE] font-medium text-[14px]">
              01 Jan, 2015
            </h5>

            <h3 className="font-semibold text-lg">Best Design Tools</h3>

            <span className="text-[12px]">
              Lorem Ipsum is simply
              <br />
              dummy text of the
              <br />
              printing and typesetting
              <br />
              industry.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <img src={kronos} alt="kronos" />

          <div className="pt-4 leading-tight">
            <h5 className="text-[#C1C8CE] font-medium text-[14px]">
              01 Jan, 2015
            </h5>

            <h3 className="font-semibold text-lg">HR Community</h3>

            <span className="text-[12px]">
              Lorem Ipsum is simply
              <br />
              dummy text of the
              <br />
              printing and typesetting
              <br />
              industry.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
