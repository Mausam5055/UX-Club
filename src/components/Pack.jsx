import React from "react";

class Pack extends React.Component {
  render() {
    return (
      <div className="w-full py-10 h-full items-center grid bg-[#dcfebc]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <h2 className="font-serif font-light text-3xl md:text-5xl px-6 leading-10">
            Hackathon Pricing Details
          </h2>
          <h4 className="font-sans font-light text-xl md:text-2xl px-6 mt-10 md:mt-0">
            Projected Income Breakdown for Design2Code Hackathon
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white w-[96%] border py-6 mx-auto mt-10 ">
            <div className="border-b px-6 pb-6">
              <div className="h-10 w-10 mb-2">
                <img
                  src="https://peekinsights.co/wp-content/uploads/2024/08/package-1-icon.svg"
                  alt=""
                />
              </div>
              <h2 className="font-serif font-light text-3xl md:text-4xl">
                Entry Fee Structure
              </h2>
            </div>
            <div className="px-6">
              <h4 className="font-sans font-light text-2xl md:text-2xl py-8">
                Team Size Options with Pricing
              </h4>
              <p className="font-sans text-xl font-light">Flexible Participation</p>
              <div className="font-sans text-xl py-2">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Solo: ₹79</li>
                  <li>Duo: ₹149</li>
                  <li>Team of 3: ₹189</li>
                  <li>Team of 4: ₹219</li>
                </ul>
              </div>
              <p className="font-sans text-xl font-light">
                Target Audience: Open to all students
              </p>
              <button className="flex items-center w-[95%] h-12 mt-6 bg-black text-white rounded-xl justify-between border-2 border-black hover:bg-white hover:text-black">
                <a className="px-4 text-xl" href="">
                  Register Now
                </a>
                <div className="h-8 w-8 mr-4">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </g>
                  </svg>
                </div>
              </button>
              <button className="flex items-center w-[95%] h-12 mb-6 mt-4 bg-white text-black rounded-xl justify-between border-2 border-black hover:bg-black hover:text-white">
                <a className="px-4 text-xl" href="">
                  Know More
                </a>
              </button>
              <div className="flex items-center bg-white rounded-2xl gap-2 w-fit px-2 my-2 mb-6">
                <div className="h-4 w-4 md:h-5 md:w-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke="#292D32"
                        strokeWidth="0.792"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M7.75 12L10.58 14.83L16.25 9.17004"
                        stroke="#292D32"
                        strokeWidth="0.792"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <span className="text-lg md:text-xl font-sans font-light">
                  Solo, Duo, 3 members, or 4 members teams
                </span>
              </div>
              <div className="flex items-center bg-white rounded-2xl gap-2 w-fit px-2 my-2 mb-6">
                <div className="h-4 w-4 md:h-5 md:w-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke="#292D32"
                        strokeWidth="0.792"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M7.75 12L10.58 14.83L16.25 9.17004"
                        stroke="#292D32"
                        strokeWidth="0.792"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <span className="text-lg md:text-xl font-sans font-light">
                  Expected Participation: 120 Teams (Round 1), 60 Teams (Round 2)
                </span>
              </div>
              <div className="flex items-center bg-white rounded-2xl gap-2 w-fit px-2 my-2 mb-6">
                <div className="h-4 w-4 md:h-5 md:w-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke="#292D32"
                        strokeWidth="0.792"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M7.75 12L10.58 14.83L16.25 9.17004"
                        stroke="#292D32"
                        strokeWidth="0.792"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <span className="text-lg md:text-xl font-sans font-light leading-tight">
                  Streamlined and self-sustaining event
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white w-[96%] border mx-auto mt-10 ">
            <div className="border-b py-6 px-6 bg-[#f1ee83]">
              <div className="h-10 w-10 mb-2">
                <img
                  src="https://peekinsights.co/wp-content/uploads/2024/08/package-2-icon.svg"
                  alt=""
                />
              </div>
              <h2 className="font-serif font-light text-3xl md:text-4xl">
                Projected Income
              </h2>
            </div>
            <div className="px-6">
              <h4 className="font-sans font-light text-2xl md:text-2xl py-8">
                Breakdown by Team Type
              </h4>
              <p className="font-sans text-xl font-light">Revenue Forecast</p>
              <div className="font-sans text-xl py-2">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border-b border-gray-300 py-3 px-4 font-bold">Team Type</th>
                      <th className="border-b border-gray-300 py-3 px-4 font-bold">Fee (INR)</th>
                      <th className="border-b border-gray-300 py-3 px-4 font-bold">No. of Teams</th>
                      <th className="border-b border-gray-300 py-3 px-4 font-bold">Subtotal (INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4">Solo</td>
                      <td className="py-3 px-4">₹79</td>
                      <td className="py-3 px-4">8</td>
                      <td className="py-3 px-4">₹632</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4">Duo</td>
                      <td className="py-3 px-4">₹149</td>
                      <td className="py-3 px-4">12</td>
                      <td className="py-3 px-4">₹1,778</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4">Team of 3</td>
                      <td className="py-3 px-4">₹189</td>
                      <td className="py-3 px-4">10</td>
                      <td className="py-3 px-4">₹1,890</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4">Team of 4</td>
                      <td className="py-3 px-4">₹219</td>
                      <td className="py-3 px-4">30</td>
                      <td className="py-3 px-4">₹6,570</td>
                    </tr>
                    <tr className="bg-gray-100 font-bold">
                      <td className="py-3 px-4">Total</td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4">₹10,880</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="font-sans text-xl font-light">
                Delivered with confidence
              </p>
              <button className="flex items-center w-[95%] h-12 mt-6 bg-black text-white rounded-xl justify-between border-2 border-black hover:bg-white hover:text-black">
                <a className="px-4 text-xl" href="">
                  Request Approval
                </a>
                <div className="h-8 w-8 mr-4">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </g>
                  </svg>
                </div>
              </button>
              <button className="flex items-center w-[95%] h-12 mb-6 mt-4 bg-white text-black rounded-xl justify-between border-2 border-black hover:bg-black hover:text-white">
                <a className="px-4 text-xl" href="">
                  Download PDF
                </a>
              </button>
              <div className="flex items-center bg-white rounded-2xl gap-2 w-fit px-2 my-2 mb-6">
                <div className="h-4 w-4 md:h-5 md:w-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                   
                  </svg>
                </div>
               
      
          
              
              </div>
            </div>
          </div>
          <div className="bg-white w-[96%] border mx-auto mt-10 ">
            <div className="border-b px-6 py-6 bg-[#e2c6ff]">
              <div className="h-10 w-10 mb-2">
                <img
                  src="https://peekinsights.co/wp-content/uploads/2024/08/package-2-icon.svg"
                  alt=""
                />
              </div>
              <h2 className="font-serif font-light text-3xl md:text-4xl">
                Event Benefits
              </h2>
            </div>
            <div className="px-6">
              <h4 className="font-sans font-light text-2xl md:text-2xl py-8">
                Why This Hackathon Will Succeed
              </h4>
              <p className="font-sans text-xl font-light">Key Advantages</p>
              <div className="font-sans text-xl py-2">
                <ul className="list-disc pl-5 space-y-2">
                  <li>2-day intensive learning experience</li>
                  <li>Focus on front-end development skills</li>
                  <li>Beautiful design implementation</li>
                  <li>Free food for all participants</li>
                  <li>Opportunity to flex CSS skills</li>
                  <li>See designs built to perfection</li>
                </ul>
              </div>
              <p className="font-sans text-xl font-light">
                Limited time opportunity - Delivered with excellence
              </p>
              <button className="flex items-center w-[95%] h-12 mt-6 bg-black text-white rounded-xl justify-between border-2 border-black hover:bg-white hover:text-black">
                <a className="px-4 text-xl" href="">
                  Join Hackathon
                </a>
                <div className="h-8 w-8 mr-4">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </g>
                  </svg>
                </div>
              </button>
              <button className="flex items-center w-[95%] h-12 mb-6 mt-4 bg-white text-black rounded-xl justify-between border-2 border-black hover:bg-black hover:text-white">
                <a className="px-4 text-xl" href="">
                  Contact Organizers
                </a>
              </button>
              <div className="flex items-center bg-white rounded-2xl gap-2 w-fit px-2 my-2 mb-6">
                <div className="h-4 w-4 md:h-5 md:w-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke="#292D32"
                        strokeWidth="0.792"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M7.75 12L10.58 14.83L16.25 9.17004"
                        stroke="#292D32"
                        strokeWidth="0.792"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <span className="text-lg md:text-xl decoration-dashed font-sans font-light">
                  Find the best front-end champs on campus
                </span>
              </div>
              <div className="flex items-center bg-white rounded-2xl gap-2 w-fit px-2 my-2 mb-6">
                <div className="h-4 w-4 md:h-5 md:w-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke="#292D32"
                        strokeWidth="0.792"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M7.75 12L10.58 14.83L16.25 9.17004"
                        stroke="#292D32"
                        strokeWidth="0.792"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <span className="text-lg md:text-xl decoration-dashed font-sans font-light">
                  Team up and code together
                </span>
              </div>
              <div className="flex items-center bg-white rounded-2xl gap-2 w-fit px-2 my-2 mb-6">
                <div className="h-4 w-4 md:h-5 md:w-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke="#292D32"
                        strokeWidth="0.792"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M7.75 12L10.58 14.83L16.25 9.17004"
                        stroke="#292D32"
                        strokeWidth="0.792"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <span className="text-lg md:text-xl font-sans font-light leading-tight">
                  Make yourself usable with this 48-hour hackathon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pack;