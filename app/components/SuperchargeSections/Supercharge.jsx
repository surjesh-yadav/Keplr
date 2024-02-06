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
    <div className="mt-20" data-aos="fade-up">
      <h2 className="text-center font-semibold text-[30px] my-5">
        Features of Doller House
      </h2>
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4">
          <div
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1 "
            className="df-item p-4 md:flex  justify-around"
          >
            <div className="md:w-1/2">
              <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f479637df68f7e4b36c371_k-icon-stake.svg"
                loading="lazy"
                alt=""
                className="icon-medium"
              />
              <h4>Doller House 1 Plan</h4>
              <p>
                The best & advanced networking platform deployed on Binance
                smart chain network, with superfast transactions & speed. The
                house of investment is coming for you all..
              </p>
            </div>
            <div className="max-w-[260px] mt-3 md:mt-0 mx-auto md:mx-0">
              <img src="/featuresBox.svg" />
            </div>
          </div>
          <div
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1 flex justify-between"
            className="df-item p-4 md:flex mt-3 md:mt-0 justify-around"
          >
            <div className="md:w-1/2">
              <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f479637df68f7e4b36c371_k-icon-stake.svg"
                loading="lazy"
                alt=""
                className="icon-medium"
              />
              <h4>Doller House 1 Plan</h4>
              <p>
                The best & advanced networking platform deployed on Binance
                smart chain network, with superfast transactions & speed. The
                house of investment is coming for you all..
              </p>
            </div>
            <div className="max-w-[260px] mt-3 md:mt-0 mx-auto md:mx-0">
              <img src="/featuresBox.svg" />
            </div>
          </div>
          <div
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1 flex justify-between"
            className="df-item p-4 md:flex justify-around"
          >
            <div className="md:w-1/2">
              <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f479637df68f7e4b36c371_k-icon-stake.svg"
                loading="lazy"
                alt=""
                className="icon-medium"
              />
              <h4>Doller House 1 Plan</h4>
              <p>
                The best & advanced networking platform deployed on Binance
                smart chain network, with superfast transactions & speed. The
                house of investment is coming for you all..
              </p>
            </div>
            <div className="max-w-[260px] mt-3 md:mt-0 mx-auto md:mx-0">
              <img src="/featuresBox.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supercharge;
