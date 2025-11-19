import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="w-full bg-[#151515]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <h1 className=" font-serif text-4xl font-light py-15 px-8 text-white leading-tight">
            Join the Design2Code Hackathon
          </h1>
          <div className="flex gap-20 px-8 py-15">
            <div className="flex flex-col gap-4 text-xl text-white">
              <h4>Register Now</h4>
              <h4>Hackathon Details</h4>
              <h4> Contact UX Club</h4>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-12">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>linkedin [#fff161]</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-180.000000, -7479.000000)"
                        fill="#fff"
                      >
                        {" "}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {" "}
                          <path
                            d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                            id="linkedin-[#fff161]"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  fill="#fff"
                  class="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] h-[1px] bg-white mx-auto mt-20" />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="mt-10 px-8 lg:mb-20 flex justify-center">
            <svg viewBox="0 0 600 120" className="w-3/4 h-auto">
              <defs>
                <filter id="glitch">
                  <feTurbulence baseFrequency="0.8" numOctaves="1" result="t"/>
                  <feDisplacementMap in="SourceGraphic" in2="t" scale="10" xChannelSelector="R" yChannelSelector="G"/>
                </filter>
                <clipPath id="circleClip">
                  <circle cx="30" cy="60" r="25" />
                </clipPath>
              </defs>
              <image href="UXClub.svg" x="5" y="25" width="50" height="50" clipPath="url(#circleClip)" />
              <g filter="url(#glitch)" transform="translate(60, 0)">
                <text x="0" y="55%" fontSize="64" textAnchor="start" fill="#ffffff">Design<tspan fill="red">2</tspan>Code</text>
              </g>
            </svg>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-15">
            <h4 className="text-white text-xl mt-6 mb-6 font-sans px-8">
              © Design2Code Hackathon 2025
            </h4>
            <h4 className="text-white text-xl md:mt-6 font-sans px-8">
              Organized by UX Club
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
