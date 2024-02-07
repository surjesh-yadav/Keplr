"use client"
import React, {useEffect} from "react";
import "./Interoperability.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Interoperability = () => {
   
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (

    <div className="container" data-aos="fade-up">
      <div class="blocks-layout align-center">
        <div class="h2-headline-layout">
          <div
            data-w-id="6b879517-04c9-13ef-4e3d-b8ca000fbe5b"
            style={{
              opacity: 1,
              transform:
                 "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            class="badge-item"
          >
            <div class="badge-bg">
              <div class="badge-content">
                <div>Ecosystem</div>
              </div>
            </div>
          </div>
          <div class="h2-headline">
            <h2
              data-w-id="6b879517-04c9-13ef-4e3d-b8ca000fbe62"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              One Wallet. Full&nbsp;Interoperability.
            </h2>
            <p
              data-w-id="6b879517-04c9-13ef-4e3d-b8ca000fbe64"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              Easily plug into the new decentralized web experiences with Keplr.
            </p>
          </div>
        </div>
        <div class="block-item is-icns">
          <div class="bi-content is-icns">
            <div class="bi-content_subhead">
              <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef3269a5cb638db6a77b3b_logo-partners-icns.svg"
                loading="lazy"
                alt="Keplr and ICNS partnership"
                class="keplr-logo-partners"
              />
            </div>
            <div class="bi-content_text">
              <h3>
                Portable Identity for&nbsp;the&nbsp;Interchain
                <br />
              </h3>
              <p>
                Send and receive assets with your Interchain Nameservice. Carry
                and build a coherent identity from chain to chain.
              </p>
              <div class="features-item">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef0e3aa90a071f2cefafe3_k-icon-users.svg"
                  loading="lazy"
                  alt="Join more than 40000 ICNS users"
                  class="icon-medium"
                />
                <div>Join 48000 + members</div>
              </div>
            </div>
            <div class="bi-content_buttons">
              <a
                href="https://www.icns.xyz/"
                target="_blank"
                class="button hero no-glow w-inline-block flex"
              >
                <div class="btn-text-small">
                  Claim Your ICNS
                  <br />
                </div>
                <div class="btn-arrow-item">
                  <div class="icon-small w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.8512 8.11253L8.5179 13.4459L7.5679 12.5125L11.3012 8.77919L3.18457 8.7792L3.18457 7.44586L11.3012 7.44586L7.5679 3.71253L8.5179 2.7792L13.8512 8.11253Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
           </div>
           <div class="bi-background">
            <img
              src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f2f628327ae95ef7a63caf_icns-shape-illustration-sq.svg"
              loading="lazy"
              alt=""
              class="icns-image"
            />
            <div class="icns-img_line"></div>
            <div class="icns-img_line btm"></div>
            <div class="block-fade"></div>
            <div class="gradient-bg w-embed isLoaded">
              <canvas
                class="canvas-item-2 isLoaded"
                id="dg-gradient-canvas-2"
                width={1366}
                height={600}
              ></canvas>
            </div>
          </div>
          <div class="bi-background is-devs"><div class="grid-css"></div><div id="stars-devs" class="stars"><canvas class="particles-js-canvas-el" width="894" height="424" ></canvas></div></div>
        </div>
        <div data-aos="fade-up" class="blocks-layout-2items">
          <div class="block-item is-small sec">
            <div class="bi-content_small">
              <img
                src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f4b04c2ff7a74f76d2d468_Security-img.svg"
                loading="lazy"
                alt="Multiple Login Options"
                class="secure-image"
              />
              <div class="bi-content_text">
                <h3>
                  Multiple Login Options
                  <br />
                </h3>
                <p class="is-secure-txt">
                  Log in with Google account, scan QR code to sign in to any
                  DApps, or connect your hardware wallets. Keplr supports a
                  variety of login options to extend its connectivity to other
                  wallets and networks.
                </p>
              </div>
              <div class="hero-features-checks is-secure">
                <div class="secure-features">
                  <div class="features-item">
                    <img
                      src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f422514744d5e6e15cfe62_k-icon-keys.svg"
                      loading="lazy"
                      alt="Self Custodial"
                      class="icon-medium"
                    />
                    <div>Self Custodial</div>
                  </div>
                  <div class="features-item">
                    <img
                      src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f0b0342ad2dc8c27351008_k-icon-shield.svg"
                      loading="lazy"
                      alt="Keplr Non-Custodial Wallet"
                      class="icon-medium"
                    />
                    <div>Secure</div>
                  </div>
                  <div class="features-item">
                    <img
                      src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f0b034e2860cd37047e62d_k-icon-wallet.svg"
                      loading="lazy"
                      alt="Keplr Hardware wallet support
                           "
                      class="icon-medium"
                    />
                    <div>Flexible</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bi-background is-sec-bg">
              <div id="stars-icns" class="stars">
                <canvas
                  class="particles-js-canvas-el"
                  width="434"
                  height="513"
                ></canvas>
              </div>
              <div class="grid-css"></div>
            </div>
          </div>
          <div class="block-item is-small mt-5 md:mt-0">
            <div class="bi-content_small is-skiff">
              <div class="bi-content_subhead">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef3377854a63c6593922bb_logo-partners-skiff.svg"
                  loading="lazy"
                  alt="Keplr and Skiff partnership"
                  class="keplr-logo-partners"
                />
              </div>
              <div class="bi-content_text">
                <h3>
                  End-to-End Encrypted Productivity&nbsp;Tools
                  <br />
                </h3>
                <p class="is-skiff-txt">
                  Evolve your work environment into a Web3&nbsp;productivity
                  powerhouse.
                  <br />
                </p>
              </div>
              <div class="bi-content_buttons is--skiff-btns">
                <a
                  href="https://skiff.com/"
                  target="_blank"
                  class="button hero no-glow w-inline-block flex"
                >
                  <div class="btn-text-small">Get Skiff Free</div>
                  <div class="btn-arrow-item">
                    <div class="icon-small w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.8512 8.11253L8.5179 13.4459L7.5679 12.5125L11.3012 8.77919L3.18457 8.7792L3.18457 7.44586L11.3012 7.44586L7.5679 3.71253L8.5179 2.7792L13.8512 8.11253Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
                <div class="skiff-features">
                  <div class="hero-features-line">
                    <div class="features-item">
                      <img
                        src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef350e854a6331ca394115_k-icon-calendar-white.svg"
                        loading="lazy"
                        alt="Skiff Calendar"
                        class="icon-medium"
                      />
                      <div>Calendar</div>
                    </div>
                    <div class="features-item">
                      <img
                        src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef350e550ec9f77fc4227f_k-icon-storage-white.svg"
                        loading="lazy"
                        alt="Skiff Storage
                              "
                        class="icon-medium"
                      />
                      <div>Storage</div>
                    </div>
                  </div>
                  <div class="hero-features-line">
                    <div class="features-item">
                      <img
                        src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef350e7895ffd0be0879f8_k-icon-mail-white.svg"
                        loading="lazy"
                        alt="Skiff Mail
                              "
                        class="icon-medium"
                      />
                      <div>Mail</div>
                    </div>
                    <div class="features-item">
                      <img
                        src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63ef350ea31e9882f2a1c2e1_k-icon-white.svg"
                        loading="lazy"
                        alt="Skiff Pages"
                        class="icon-medium"
                      />
                      <div>Pages</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bi-background is-skiff-bg">
              <div class="bg-image-skiff">
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f3063854239603c9bdb7fe_skiff-mail.svg"
                  loading="lazy"
                  alt="Skiff mail"
                  class="skiff-image_icon"
                />
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f306380314aa822049f88f_skiff-cal.svg"
                  loading="lazy"
                  alt="Skiff Calendar"
                  class="skiff-image_icon"
                />
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f3063849b46c62dbca6796_skiff-pages.svg"
                  loading="lazy"
                  alt="Skiff Pages"
                  class="skiff-image_icon"
                />
                <img
                  src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63f30639950c48c14bfadee5_skiff-storage.svg"
                  loading="lazy"
                  alt="Skiff Storage"
                  class="skiff-image_icon"
                />
              </div>
              <div id="stars-skiff" class="stars">
                <canvas
                  class="particles-js-canvas-el"
                  width="434"
                  height="513"
                ></canvas>
              </div>
              <div class="grid-css"></div>
            </div>
          </div>
        </div>
        <div class="bg-animation"><div id="stars"></div><div id="stars2"></div><div id="stars3"></div><div id="stars4"></div></div>
      </div>
    </div>
  );
};

export default Interoperability;
