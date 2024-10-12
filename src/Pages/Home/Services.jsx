import React from "react";
import delivery from "../../imgs/truck.png";
import refund from "../../imgs/refund.png";
import support from "../../imgs/support.png";

function Services() {
  return (
    <div className="pt-28">
      <div className="flex flex-wrap justify-center items-center gap-x-64 gap-y-10">
        <div className="flex flex-col items-center gap-10">
          <img src={delivery} alt="delivery" className="h-14" />

          <div className="leading-tight">
            <h5 className="font-medium text-xl pb-2">FREE SHIPPING</h5>

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

        <div className="flex flex-col items-center gap-8">
          <img src={refund} alt="delivery" className="h-16" />

          <div className="leading-tight">
            <h5 className="font-medium text-xl pb-2">100% REFUND</h5>

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

        <div className="flex flex-col items-center gap-8">
          <img src={support} alt="delivery" className="h-16" />

          <div className="leading-tight">
            <h5 className="font-medium text-xl pb-2">SUPPORT 24/7</h5>

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

export default Services;
