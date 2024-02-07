"use client";
import React, { useEffect } from "react";
import "./Supercharge.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Supercharge = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="mt-20">
      <h2 className="text-center font-semibold text-[30px] my-5">
        Features of Doller House
      </h2>
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4">
          <div
            data-aos="fade-up"
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1"
            className="df-item p-6 py-8 md:flex  justify-around background_box"
          >
            <div className="md:w-1/2 mt-3">
              <img
                src="/top_image.svg"
                loading="lazy"
                alt=""
                className="icon-medium"
              />
              <h3 className="text-2xl  mt-4">Doller House 1 Plan</h3>
              <p className=" max-w-[350px] text-white mt-3">
                The best & advanced networking platform deployed on Binance
                smart chain network, with superfast transactions & speed. The
                house of investment is coming for you all..
              </p>
            </div>
            <div className="max-w-[425px] mt-4 md:mt-0 mx-auto md:mx-0">
              <img src="/featuresBox.svg" />
            </div>
          </div>
          <div  data-aos="fade-up" data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1 flex justify-between"
            className="df-item p-6 py-8 md:flex justify-around background_box"
          >
            <div className="md:w-1/2 mt-3">
              <img
                 src="/top_image.svg"
                 loading="lazy"
                alt=""
                className="icon-medium"
              />
              <h3 className="text-2xl  mt-4">Doller House 1 Plan</h3>

              <p className="max-w-[350px] mt-3 text-white">
                The best & advanced networking platform deployed on Binance
                smart chain network, with superfast transactions & speed. The
                house of investment is coming for you all..
              </p>
            </div>
            <div className="max-w-[500px] mt-4 md:mt-0 mx-auto md:mx-0">
              <img src="/featuresBox2.svg" />
            </div>
          </div>
          <div
           data-aos="fade-up"
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1 flex justify-between"
            className="df-item  p-6 py-8 md:flex justify-around background_box"
          >
            <div className="md:w-1/2 mt-4">
              <img
                src="/top_image.svg"
                 loading="lazy"
                alt=""
                className="icon-medium"
              />
              <h3 className="text-2xl mt-4">Doller House 1 Plan</h3>
              <p className="text-white mt-3 max-w-[350px]">
                The best & advanced networking platform deployed on Binance
                smart chain network, with superfast transactions & speed. The
                house of investment is coming for you all..
              </p>
            </div>
            <div className="max-w-[425px] mt-4 md:mt-0 mx-auto md:mx-0">
              <img src="/featuresBox3.svg" />
            </div>
          </div>
          <div
           data-aos="fade-up"
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1 flex justify-between"
            className="df-item  p-6 py-8 md:flex justify-around background_box"
          >
            <div className="md:w-1/2 mt-4">
              <img
                src="/top_image.svg"
                 loading="lazy"
                alt=""
                className="icon-medium"
              />
              <h3 className="text-2xl mt-4">Doller House 1 Plan</h3>
              <p className="text-white mt-3 max-w-[350px]">
                The best & advanced networking platform deployed on Binance
                smart chain network, with superfast transactions & speed. The
                house of investment is coming for you all..
              </p>
            </div>
            <div className="max-w-[425px] mt-4 md:mt-0 mx-auto md:mx-0">
              <img src="/featuresBox3.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supercharge;
