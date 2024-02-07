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

    

    </div>


  );
};

export default Card8;
