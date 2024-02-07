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
    </div>
  );
};

export default Card8;
