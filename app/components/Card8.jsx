"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card8 = () => {
   
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  
  const [tabOpen, setTabOpen] = useState(1);
  return (
    <div>
    <div data-aos="fade-up" className="md:flex relative my-5 justify-center border-color rounded-2xl space-x-5">
     
      <div class="bi-content_chains mr-0 scroll_image_right_margin">
        <div class="chains-scroll">
          <div class="chain-list_wrap w-dyn-list">
               <div>
                  <img className="m-5 rounded-md w-[95%]" src="/one.svg"/>
                  <img className="m-5 rounded-md w-[95%]"  src="/two.svg"/>
                  <img className="m-5 rounded-md w-[95%]"  src="/three.svg"/>
                  <img className="m-5 rounded-md w-[95%]"  src="/four.svg"/>
                  <img className="m-5 rounded-md w-[95%]"  src="/five.svg"/>
                  <img className="m-5 rounded-md w-[95%]"  src="/six.svg"/>
                  <img className="m-5 rounded-md w-[95%]"  src="/seven.svg"/>
                  <img className="m-5 rounded-md w-[95%]"  src="/eight.svg"/>
                  <img className="m-5 rounded-md w-[95%]"  src="/nine.svg"/>
                  <img className="m-5 rounded-md w-[95%]"  src="/ten.png"/>

               </div>
            <div
              fs-cmsfilter-element="empty"
              class="chains-empty"
              //   style="display: none;"
            >
              {/* <div>We couldn't find anything :</div> */}
            </div>
          </div>
        </div>
      </div>
      <div class="bi-background is-chains-bg"><div id="stars-chains" class="stars"><canvas class="particles-js-canvas-el" width="894" height="467" style={{height: 100, width: 100}}></canvas></div><div class="grid-css"></div></div>
    </div>

    <div
            data-aos="fade-up"
            data-w-id="b3fd95f7-10b2-f103-e2b0-e28f97e2adb1"
            className="df-item df-item_last  mb-5 md:flex  justify-between background_box"
          >
            <div className="p-8 md:ml-5 md:max-w-[55%]">
              
              <h3 className="text-2xl mt-5">Why you should join <span className="text-[#E07E37]">Dollar House?</span></h3>
               <ul className="mt-5">
                  <li className="text-sm mb-3 flex">
                       <img className="w-6 mr-4" src="/tickgreen.svg"/>
                       <p className="text-white">Dollar house is completely decentralized & works on smart contract</p> 
                  </li>
                  <li  className="text-sm mb-3 flex">
                       <img className="w-6 mr-4" src="/tickgreen.svg"/>
                    <p className="text-white"> There is no owner or admin authority over the contract or assets of the user</p>   
                  </li>
                  <li  className="text-sm mb-3 flex">
                       <img className="w-6 mr-4" src="/tickgreen.svg"/>
                    <p className="text-white">  Dollar house only deals with USDT stablecoin, which eliminates the issue of price fluctuation</p> 
                  </li>
                  <li  className="text-sm mb-3 flex">
                       <img className="w-6 mr-4" src="/tickgreen.svg"/>
                     <p className="text-white"> Your income is directly credited to your wallet address without any intermediate party.</p> 
                  </li>
               </ul>
            </div>
            <div className="md:max-w-[300px] pb-4 mt-4 md:mt-10 md:mx-0">
              <img src="/token.svg" />
            </div>
          </div>

    </div>


  );
};

export default Card8;
