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
        Features of Dollar House
      </h2>
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4">
          <div
            data-aos="fade-up"
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1"
            className="df-item p-6 py-8 px-8 md:flex  justify-around background_box"
          >
            <div className="md:w-1/2">
              <img
                src="/top_image.svg"
                loading="lazy"
                alt=""
                className="icon-medium"
              />
              <h3 className="text-2xl mt-5 ">Dollar House 1 Plan</h3>
              <p className=" max-w-[350px] text-white mt-3">
                The best & advanced networking platform deployed on Binance
                smart chain network, with superfast transactions & speed. The
                house of investment is coming for you all..
              </p>
            </div>
            <div className="max-w-[400px] mt-4 md:mt-0 mx-auto md:mx-0">
              <img src="/featuresBox.svg" />
            </div>
          </div>
          <div  data-aos="fade-up" data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1 flex justify-between"
            className="df-item p-6 py-8 px-8 md:flex justify-around background_box"
          >
            <div className="md:w-1/2 ">
              <img
                 src="/top_image.svg"
                 loading="lazy"
                alt=""
                className="icon-medium"
              />
              <h3 className="text-2xl   mt-5">Dollar House 1 Plan</h3>

              <p className="max-w-[350px] mt-3 text-white">
                The best & advanced networking platform deployed on Binance
                smart chain network, with superfast transactions & speed. The
                house of investment is coming for you all..
              </p>
            </div>
            <div className="max-w-[450px] mt-4 md:mt-0 mx-auto md:mx-0">
              <img src="/featuresBox2.svg" />
            </div>
          </div>
          <div
           data-aos="fade-up"
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1 flex justify-between"
            className="df-item  p-6 py-8 px-8 md:flex justify-around background_box"
          >
            <div className="md:w-1/2 ">
              <img
                src="/top_image.svg"
                 loading="lazy"
                alt=""
                className="icon-medium"
              />
              <h3 className="text-2xl mt-4">Dollar House 1 Plan</h3>
              <p className="text-white mt-3 max-w-[350px]">
                The best & advanced networking platform deployed on Binance
                smart chain network, with superfast transactions & speed. The
                house of investment is coming for you all..
              </p>
            </div>
            <div className="max-w-[400px]  md:mt-0 mx-auto md:mx-0">
              <img src="/featuresBox3.svg" />
            </div>
          </div>
          <div data-aos="fade-up"
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1 flex justify-between"
            className="df-item py-8 px-8 p-6 md:flex md:space-x-10 justify-around">
             <div className="max-w-[400px] mt-4 md:mt-0 mx-auto md:mx-0">
              <img src="/dashboard.png" />
             </div>
             <div className="md:w-1/2 ">
              <h3 className="text-3xl font-bold mt-5 md:mt-0 "> <span className="text-[#b96c33]">Dollar house </span>dashboard</h3>
              <p className="text-white mt-3 max-w-[350px]">
              Easy to use and user friendly dashboard to keep the track of your team, purchase, incomes and much more.
              </p>
              <ul className="mt-5 dashboard_ul">
                <li>
                View level income
                </li>
                <li>Track of missed, received, spilled, freezed rewards</li>
                <li>
                Wallet connectivity
                </li>
                <li>
                Web3 integrated with security
                </li>
              </ul>
              <button className="border border-[#b96c33] px-5 mt-6 py-2 rounded-full">Go to dashboard</button>
            </div>
          </div>
          <div
           data-aos="fade-up"
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1 flex justify-between"
            className="df-item  p-6 py-8 px-8 md:flex justify-around background_box"
          >
            <div className="md:w-1/2 ">
              <h3 className="text-3xl font-bold mt-5 md:mt-0 "> <span className="text-[#b96c33]">Binance </span>Smart Chain</h3>
              <p className="text-white mt-3 max-w-[350px]">
              The robust & secure blockchain on which the dollar house platform is deployed. Dollar house uses BSC network because
               </p>
              <ul className="mt-5 dashboard_ul">
                <li>
                Robust & reliable 
                </li>
                <li>100% Secure & decentralized</li>
                <li>
                Faster transactions                
                </li>
                <li>
                Minimal gas fees
                </li>
              </ul>
            </div>
            <div className="max-w-[275px]  md:mt-0 mx-auto md:mx-0">
              <img src="/binance.png" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Supercharge;
