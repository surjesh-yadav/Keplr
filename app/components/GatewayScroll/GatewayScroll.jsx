import React from "react";
import "./Gateway.css";
const GatewayScroll = () => {
  const myStyles = {
    opacity: 1,
    transform:
      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
  };

  const myStyles2 = {
    willChange: "opacity, width, height",
    opacity: 1,
    width: "18em",
    height: "31em",
  };

  const myStyles3 = {
    willChange: "opacity",
    opacity: 1,
  };

  const myStyles4 = {
    willChange: "transform",
    transform:
      "translate3d(-5em, -12em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
  };

  const myStyles5 = {
    willChange: "transform, width, height",
    transform:
      "translate3d(0.042594vw, -0.09998vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
    width: "12em",
    height: "12em",
  };

  const myStyles6 = {
    willChange: "transform",
    transform:
      "translate3d(6em, -4em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
  };

  const myStyles7 = {
    willChange: "transform, width, height",
    transform:
      "translate3d(0.0937068vw, -0.219956vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
    width: "12em",
    height: "12em",
  };

  const myStyles8 = {
    willChange: "transform",
    transform:
      "translate3d(-4em, -1em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
  };

  const myStyles9 = {
    willChange: "transform, width, height",
    transform:
      "translate3d(0.063891vw, -0.14997vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
    width: "5em",
    height: "5em",
  };

  const myStyles10 = {
    willChange: "transform",
    transform:
      "translate3d(-12em, 3em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
  };

  const myStyles11 = {
    transform:
      "translate3d(0px, 0px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
  };

  const myStyles12 = {
    willChange: "width, height",
    width: "24em",
    height: "31em",
  };

  const myStyles13 = {
    willChange: "transform",
    transform:
      "translate3d(8em, 10em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
  };

  const myStyles14 = {
    willChange: "transform, width, height",
    transform:
      "translate3d(0.14482vw, -0.339932vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
    width: "35em",
    height: "22em",
  };

  return (
    <div className="">
      <div class="gateway-scroll">
        <div class="gateway-sticky">
          <div class="gateway__canvas">
            <div
              data-w-id="f4aa5db7-67e6-222c-0e34-b981f1b1ee91"
              style={myStyles}
              class="gateway-item"
            >
              <div class="gc_portal" style={myStyles2}></div>
              <div class="gc_k" style={myStyles3}>
                <div class="k-top"></div>
                <div class="k-btm"></div>
                <div class="k-gradient">
                  <img
                    src="https://assets-global.website-files.com/61e518f84aa2a6645094f0ad/62dbd1c50c06540c54bebcf4_Group%20401.svg"
                    loading="eager"
                    alt=""
                    class="k-gradient-image-2"
                  />
                </div>
              </div>
              <div class="gc_planets-bg">
                <div class="planet-2__position" style={myStyles4}>
                  <div class="planet__2" style={myStyles5}>
                    <img
                      src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63eb7ddf41cf5ba26ddfbccf_planet%202.svg/"
                      loading="eager"
                      alt="Purple Glowing Orb"
                      width="523"
                      class="planet__image"
                    />
                    <img
                      src="https://assets-global.website-files.com/62dbc9b6b1444851f065c74a/63030abd42cbe25f1aef95f1_star-1.svg"
                      loading="lazy"
                      width="236"
                      alt=""
                      class="planet-logo hide"
                    />
                  </div>
                </div>
                <div class="planet-3__position" style={myStyles6}>
                  <div class="planet__3" style={myStyles7}>
                    <img
                      src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63eb7ddf41cf5b5437dfbce8_planet%203.svg"
                      loading="eager"
                      alt="Cyan and Purple glowing orb"
                      width="523"
                      class="planet__image rotate"
                    />
                    <img
                      src="https://assets-global.website-files.com/62dbc9b6b1444851f065c74a/62dcc8e88642e960be2860cd_regen-logo.svg"
                      loading="lazy"
                      alt=""
                      class="planet-logo regen hide"
                    />
                  </div>
                </div>
                <div class="planet-4__position" style={myStyles8}>
                  <div class="planet__4" style={myStyles9}>
                    <img
                      src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63eb7ddf41cf5b53f7dfbce9_planet%204.svg"
                      loading="eager"
                      alt="Purple glowing orb"
                      width="523"
                      class="planet__image"
                    />
                    <img
                      src="https://assets-global.website-files.com/62dbc9b6b1444851f065c74a/62dcc8e72ec145646724cf40_Akash__logo.svg"
                      loading="lazy"
                      alt=""
                      class="planet-logo akash hide"
                    />
                  </div>
                </div>
              </div>
              <div class="gc_star" style={myStyles10}>
                <div
                  data-w-id="f4aa5db7-67e6-222c-0e34-b981f1b1eea6"
                  class="star__position"
                >
                  <img
                    src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63eb7ddf41cf5b449cdfbcec_shooting%20star.svg/"
                    loading="lazy"
                    style={myStyles11}
                    alt="sparkling star"
                    class="star"
                  />
                </div>
                <div class="tail__position">
                  <img
                    src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63eb7ddf41cf5b89c6dfbceb_tail.svg"
                    loading="lazy"
                    alt="Falling Star"
                    class="tail"
                  />
                </div>
              </div>
              <div class="gc_planet-canvas" style={myStyles12}>
                <div class="huge-planet__move" style={myStyles13}>
                  <img
                    src="https://assets-global.website-files.com/63eb7ddf41cf5b1c8fdfbc74/63eb7ddf41cf5b62fddfbce7_cosmos.svg"
                    loading="eager"
                    alt="Glowing Cyan planet with Atom Cosmos Network Logo"
                    class="huge-planet"
                    style={myStyles14}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GatewayScroll;
