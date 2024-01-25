"use client"
import React, {useEffect} from "react";
import "./Supercharge.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Supercharge = () => {
 
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  
  return (
    <div className="mt-20" data-aos="fade-up">
      <h2 className="text-center font-semibold text-[30px] my-5">Supercharge Your Interchain Journey</h2>
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1" className="df-item">
            <div className="df-item_bg">
              <img
                src="/Supercharge/1.svg"
                loading="lazy"
                alt="Stake and Claim. rewards with Keplr Dashboard"
                className="df-bg_ui transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
              />
              <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f478597bd06be524cd58d2_di-grad.svg"
                loading="lazy"
                alt=""
                className="df-bg_grad"
              />
              <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f47724275e81a41f5caf95_dashboard-grid-small.svg"
                loading="lazy"
                alt=""
                className="df-bg_grid"
              />
            </div>
            <div className="df-item_cont">
              <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f479637df68f7e4b36c371_k-icon-stake.svg"
                loading="lazy"
                alt=""
                className="icon-medium"
              />
              <h4>Stake & Earn Rewards</h4>
            </div>
          </div>
          <div data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1" className="df-item">
            <div className="df-item_bg">
              <img
                src="/Supercharge/2.svg"
                loading="lazy"
                alt="Stake and Claim. rewards with Keplr Dashboard"
                className="df-bg_ui"
              />
              <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f478597bd06be524cd58d2_di-grad.svg"
                loading="lazy"
                alt=""
                className="df-bg_grad"
              />
              <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f47724275e81a41f5caf95_dashboard-grid-small.svg"
                loading="lazy"
                alt=""
                className="df-bg_grid"
              />
            </div>
            <div className="df-item_cont">
              <img
                src="/Supercharge/t2.svg"
                loading="lazy"
                alt=""
                className="icon-medium"
              />
              <h4>Participate in Governance</h4>
            </div>
          </div>
          <div data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1" className="df-item">
            <div className="df-item_bg">
              <img
                src="/Supercharge/3.svg"
                loading="lazy"
                alt="Stake and Claim. rewards with Keplr Dashboard"
                className="df-bg_ui"
              />
              <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f478597bd06be524cd58d2_di-grad.svg"
                loading="lazy"
                alt=""
                className="df-bg_grad"
              />
              <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f47724275e81a41f5caf95_dashboard-grid-small.svg"
                loading="lazy"
                alt=""
                className="df-bg_grid"
              />
            </div>
            <div className="df-item_cont">
              <img
                src="/Supercharge/t3.svg"
                loading="lazy"
                alt=""
                className="icon-medium"
              />{" "}
              <h4>Track Transaction History</h4>
            </div>
          </div>
          <div data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1" className="df-item">
            <div className="df-item_bg">
              <img
                src="/Supercharge/4.svg"
                loading="lazy"
                alt="Stake and Claim. rewards with Keplr Dashboard"
                className="df-bg_ui"
              />
              <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f478597bd06be524cd58d2_di-grad.svg"
                loading="lazy"
                alt=""
                className="df-bg_grad"
              />
              <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f47724275e81a41f5caf95_dashboard-grid-small.svg"
                loading="lazy"
                alt=""
                className="df-bg_grid"
              />
            </div>
            <div className="df-item_cont">
              <img
                src="/Supercharge/t4.svg"
                loading="lazy"
                alt=""
                className="icon-medium"
              />
              <h4>Send, Deposit, Buy & Transfer Tokens</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supercharge;
