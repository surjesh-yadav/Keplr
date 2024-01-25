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
    <div data-aos="fade-up" className="md:flex relative my-5 justify-between border-color rounded-2xl space-x-5">
      <div class="bi-content is-chains-cont card8_let_box">
        <div class="bi-content_text">
          <h3>Natively and Permissionlessly Integrated&nbsp;Chains</h3>
          <div class="bi-content_2-items  whitespace-nowrap text-[14px] ">
            <div class="features-item color-platinum-100">
              <h4>40</h4>
              <div>Native Chains</div>
            </div>
            <div class="features-item color-platinum-100">
              <h4>70+</h4>
              <div>Non-Native Chains</div>
            </div>
          </div>
        </div>
        <div fs-cmsfilter-element="filters" class="form w-form">
          <form
            id="wf-form-"
            name="wf-form-"
            data-name=""
            method="post"
            data-wf-page-id="64c25e92dc88b8094456c467"
            data-wf-element-id="20103ee1-6d75-e785-4e1c-6d99b8af54e1"
            aria-label="Form"
          >
            <input
              class="field search w-input"
              maxlength="256"
              name="Sarch"
              fs-cmsfilter-field="name"
              data-name="Sarch"
              placeholder="Search native chain..."
              type="text"
              id="Sarch"
              required=""
            />
          </form>
          <div
            class="w-form-done"
            tabindex="-1"
            role="region"
            aria-label="Form success"
          >
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div
            class="w-form-fail"
            tabindex="-1"
            role="region"
            aria-label="Form failure"
          >
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
        <p>
          Make pull requests for any chains to our community repo. Add the
          chains with simple clicks via our chain list page.
        </p>
        <div class="bi-content_buttons is-integr-btns flex-wrap">
          <a href="#" target="_blank" class="button w-inline-block">
            <div class="btn-text-small text-black">
              Add Non-Native Chain
              <br />
            </div>
          </a>
          <a href="#" target="_blank" class="button text-only w-inline-block github_button">
            <div class="icon-medium w-embed">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.97607C10.8181 2.97607 9.64778 3.20887 8.55585 3.66116C7.46392 4.11345 6.47177 4.77639 5.63604 5.61211C3.94821 7.29994 3 9.58913 3 11.9761C3 15.9541 5.583 19.3291 9.156 20.5261C9.606 20.5981 9.75 20.3191 9.75 20.0761V18.5551C7.257 19.0951 6.726 17.3491 6.726 17.3491C6.312 16.3051 5.727 16.0261 5.727 16.0261C4.908 15.4681 5.79 15.4861 5.79 15.4861C6.69 15.5491 7.167 16.4131 7.167 16.4131C7.95 17.7811 9.273 17.3761 9.786 17.1601C9.867 16.5751 10.101 16.1791 10.353 15.9541C8.355 15.7291 6.258 14.9551 6.258 11.5261C6.258 10.5271 6.6 9.72607 7.185 9.08707C7.095 8.86207 6.78 7.92607 7.275 6.71107C7.275 6.71107 8.031 6.46807 9.75 7.62907C10.461 7.43107 11.235 7.33207 12 7.33207C12.765 7.33207 13.539 7.43107 14.25 7.62907C15.969 6.46807 16.725 6.71107 16.725 6.71107C17.22 7.92607 16.905 8.86207 16.815 9.08707C17.4 9.72607 17.742 10.5271 17.742 11.5261C17.742 14.9641 15.636 15.7201 13.629 15.9451C13.953 16.2241 14.25 16.7731 14.25 17.6101V20.0761C14.25 20.3191 14.394 20.6071 14.853 20.5261C18.426 19.3201 21 15.9541 21 11.9761C21 10.7942 20.7672 9.62385 20.3149 8.53192C19.8626 7.43999 19.1997 6.44784 18.364 5.61211C17.5282 4.77639 16.5361 4.11345 15.4442 3.66116C14.3522 3.20887 13.1819 2.97607 12 2.97607Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div class="btn-text-small">Community Repo</div>
          </a>
        </div>
      </div>
      <div class="bi-content_chains m-5">
        <div class="chains-scroll">
          <div class="chain-list_wrap w-dyn-list">
            <div
              fs-cmsfilter-element="list"
              role="list"
              class="chain-list w-dyn-items"
            >
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/61f0583ff3bb23dc51dc8c71/61f05920321577318737bb88_osmosis.png"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Osmosis
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5b86c5dfbc9c_flijoJYv.jpeg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Cosmos Hub
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5b5d6edfbd5f_mars.jpg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Mars
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5bb5e4dfbcc3_TpPQTz2B.jpeg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Akash
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5b72f6dfbd42_PuDaaC7N_400x400.jpeg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Stargaze
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5be2c3dfbd59_sommelier_300.png"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Sommelier
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5b5b36dfbd62_terra%20classic1.png"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Terra Classic
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5b1a07dfbd60_terra.png"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Terra
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5b460cdfbce2__jWX0blu_400x400.png"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Secret Network
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5b121cdfbd41_j9w433Fc_400x400.jpeg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Kava
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5b0886dfbd43_description-sifchain-logo.jpeg"
                  loading="lazy"
                  alt=""
                  sizes="(max-width: 991px) 33.59375px, 38.3984375px"
                  srcset="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5b0886dfbd43_description-sifchain-logo-p-500.jpeg 500w, https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5b0886dfbd43_description-sifchain-logo.jpeg 512w"
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Sifchain
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5be247dfbd38_REGEN.png"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Regen
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5bfa58dfbd5e_quicksilver.jpg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Quicksilver
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5b0a23dfbd39_hpN9o681_400x400.jpeg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  IRISnet
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5bd8b2dfbd55_lc4nnSCn_400x400.jpeg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Sentinel
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5b4465dfbd3a_co.mona.android.png"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Crypto.org
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5ba286dfbd3b_oW3AGQyU_400x400.jpeg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Persistence
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5b6782dfbd56_gravity.png"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Gravity Bridge
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5b3ea6dfbd58_MP_flcZ1_400x400.jpeg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Axelar
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5b34c7dfbd5b_stride.png"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Stride
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5bdb61dfbd3e_large-green-circle_1f7e2.png"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Bostrom
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5ba2fadfbd5d_injective.jpg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Injective
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5b2d5fdfbd3c_kGvPhnXc_400x400.jpeg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Juno
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/65801575b29d515ac2c84741_ux.png"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  UX
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5b7971dfbd3d_Gl81Fjpx_400x400.png"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Agoric
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/63eb7ddf41cf5bff1ddfbd5c_shentu.jpg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Shentu
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/647078639be7214cf9b52ff4_quasar.png"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Quasar
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/647078d96a9d1c73f4a77013_omni.jpg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  OmniFlix
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/64707918862cc20af33746c4_kyeve.jpg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  KYVE
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/647079755fcdb6b4d0deafa8_neutron.jpg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Neutron
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/647079c4862cc20af337d098_gitopia.png"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Gitopia
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/6470789c1a29105b5dafa1a0_noble.jpg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Noble
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/64c377338e3559214feb54d2_likecoin.jpg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  LikeCoin
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/64ef34ee5eb0ffac9e55dd96_archway.png"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Archway
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/64ef358b41170da059bb407c_cel.jpg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  Celestia
                </div>
              </div>
              <div role="listitem" class="chain-list__item w-dyn-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5bab74dfbc9a/653fe25b9ec4fdb1da3f471f_dydx.jpg"
                  loading="lazy"
                  alt=""
                  class="ci__symbol"
                />
                <div fs-cmsfilter-field="name" class="btn-text-small">
                  dYdX
                </div>
              </div>
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
      <div class="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
    </div>
    </div>
  );
};

export default Card8;
