import { Component } from "react";
import star from "../assets/star.svg";

export default class Benefit extends Component {
  render() {
    return (
      <div className="w-full py-10 items-center grid bg-[#f7f3ef] justify-center">
        <div className="bg-[#bbecff] items-center rounded-2xl flex gap-2 mx-auto py-2 px-4">
          <div className="h-4 w-4 ml-1">
            <img className="object-cover" src={star} alt="" />
          </div>
          <span className="font-sans text-sm uppercase tracking-wider">Hackathon Event</span>
        </div>
        <h1 className="font-serif font-light text-3xl md:text-5xl px-6 py-10 text-center leading-tight">
          UX Club Hackathon 2025
        </h1>
        
        {/* Event Vision Section */}
        <div className="bg-white w-[96%] lg:h-[100vh] border mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="font-serif font-light text-2xl md:text-4xl px-6 pt-8 leading-tight">
              Event Vision
            </h2>
            <h4 className="font-sans font-light text-lg md:text-xl px-6 py-6 leading-relaxed">
              The core philosophy driving this hackathon is straightforward yet impactful: great products originate from great design. The first day centres on a flexible online round, focused on problem-solving and wireframing. The top 30 teams, distinguished by their user-centric design approach, will advance to the second day, where they will realise their validated concepts through an intensive coding session. This structure mirrors industry practices and instils the valuable lesson of prioritising design before development.
            </h4>
          </div>
          <div className="p-3 md:p-4 relative w-[90%] h-[60vh] my-auto py-10 mx-auto grid-pattern">
            <div className="absolute w-[40%] h-[80%] bottom-[10%] right-[2%] z-10 ">
              <img
                src="https://peekinsights.co/wp-content/themes/starter/img/cro-uplift.svg"
                alt=""
              />
            </div>
            <svg
              className="absolute top-[15%] right-[15%]"
              width="85%"
              height="85%"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="clip0_224_605">
                  <path d="M50 50.5H50.5V50V49.5C23.2199 49.5 1.04241 27.6526 0.509799 0.5H199.491C198.957 27.6526 176.781 49.5 149.5 49.5V50V50.5H150C177.338 50.5 199.5 72.6619 199.5 100C199.5 125.033 180.918 145.726 156.795 149.038L156.791 150.028C180.949 153.556 199.5 174.363 199.5 199.5H0.5C0.5 174.363 19.0509 153.556 43.2094 150.028L43.2051 149.038C19.0823 145.726 0.5 125.033 0.5 100C0.5 72.6619 22.6619 50.5 50 50.5Z"></path>
                </clipPath>
              </defs>
              <image
                href="https://peekinsights.co/wp-content/uploads/2024/09/store-front.jpg.webp"
                width="200"
                height="200"
                clipPath="url(#clip0_224_605)"
                preserveAspectRatio="xMidYMid slice"
                loading="lazy"
              ></image>
              <path
                d="M50 50.5H50.5V50V49.5C23.2199 49.5 1.04241 27.6526 0.509799 0.5H199.491C198.957 27.6526 176.781 49.5 149.5 49.5V50V50.5H150C177.338 50.5 199.5 72.6619 199.5 100C199.5 125.033 180.918 145.726 156.795 149.038L156.791 150.028C180.949 153.556 199.5 174.363 199.5 199.5H0.5C0.5 174.363 19.0509 153.556 43.2094 150.028L43.2051 149.038C19.0823 145.726 0.5 125.033 0.5 100C0.5 72.6619 22.6619 50.5 50 50.5Z"
                fill="none"
                stroke="black"
                vectorEffect="non-scaling-stroke"
              ></path>
            </svg>
          </div>
        </div>
        
        {/* Event Format Section - Day 1 */}
        <div className="bg-white w-[96%] lg:h-[100vh] border mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center lg:order-2">
            <h2 className="font-serif font-light text-2xl md:text-4xl px-6 pt-8 leading-tight">
              Event Format - Day 1
            </h2>
            <div className="font-sans font-light text-lg md:text-xl px-6 py-6 space-y-4">
              <h3 className="font-serif font-medium text-xl md:text-2xl">Online Design Sprint (Design + Coding) – <span className="font-bold">Free</span></h3>
              <ul className="space-y-2 list-disc pl-5">
                <li><span className="font-medium">Mode:</span> Online</li>
                <li><span className="font-medium">Start Time:</span> Problem statement will be disseminated via email at 9:00 AM on 22/11/2025</li>
                <li><span className="font-medium">Activity:</span> Teams will work remotely throughout the day to brainstorm, develop user flows, and create wireframes</li>
                <li><span className="font-medium">Submission Deadline:</span> Teams must submit wireframes (PDF/JPG/Figma link) and a brief description through a designated Google Form by 11:59 PM – 23/11/2025</li>
                <li>
                  <span className="font-medium">Judging & Shortlisting:</span>
                  <ul className="space-y-1 list-circle pl-5 mt-1">
                    <li>A panel of senior club members will evaluate the submissions based on User-Centricity, Innovation, and Usability</li>
                    <li>The top 30 teams will be announced by 11:00 PM – 24/11/2025 via email</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-7 lg:order-1 relative h-[60vh] sm:h-[80vh] md:h-[80vh] w-[90%] my-auto mx-auto grid-pattern flex items-center justify-center">
            <div className="absolute w-[80%] h-[80%] rounded-full">
              <img
                className="w-full h-full rounded-full object-cover"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Online Design Sprint"
              />
            </div>
          </div>
        </div>
        
        {/* Event Format Section - Day 2 */}
        <div className="bg-white w-[96%] lg:h-[100vh] border mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="font-serif font-light text-2xl md:text-4xl px-6 pt-8 leading-tight">
              Event Format - Day 2
            </h2>
            <div className="font-sans font-light text-lg md:text-xl px-6 py-6 space-y-4">
              <h3 className="font-serif font-medium text-xl md:text-2xl">Offline Live Code Evaluation (Evaluation) – <span className="font-bold">Paid</span></h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium">1:00 PM - 1:30 PM:</span> Mandatory check-in for all shortlisted teams
                </div>
                <div>
                  <span className="font-medium">1:30 PM – 2:00 PM:</span> Inaugural Ceremony
                  <ul className="space-y-1 list-circle pl-5 mt-1">
                    <li>Welcome address by the General Secretary</li>
                    <li>Briefing by the UX Club General Secretary on event flow and rules</li>
                  </ul>
                </div>
                <div>
                  <span className="font-medium">2:00 PM - 3:20 PM:</span> Evaluation
                  <ul className="space-y-1 list-circle pl-5 mt-1">
                    <li>Teams will be evaluated as per their developed model</li>
                    <li>Senior Club Members offer guidance throughout</li>
                  </ul>
                </div>
                <div>
                  <span className="font-medium">3:20 PM - 4:20 PM:</span> Final demo and judging by a panel + Prize Distribution, felicitation of guests, and vote of thanks
                  <ul className="space-y-1 list-circle pl-5 mt-1">
                    <li>Felicitation of judges, and faculty</li>
                    <li>Announcement of the winning team and distribution of Certificates, Gift Cards (Cash Price)</li>
                    <li>Vote of Thanks by the UX Club</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 md:p-4 relative w-[90%] h-[60vh] my-auto py-10 mx-auto grid-pattern">
            <div className="absolute w-[50%] h-[80%] bottom-[10%] left-[2%] z-10 ">
              <img
                src="https://peekinsights.co/wp-content/themes/starter/img/roas-chart.svg"
                alt=""
              />
            </div>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="myMask">
                  <path d="M18.502 100.912L18.4857 99.9286C8.28339 98.2515 0.5 89.3913 0.5 78.7143V22.7143C0.5 10.8401 10.1259 1.21428 22 1.21428H78C88.4321 1.21428 97.1299 8.64466 99.0877 18.502L100.071 18.4857C101.748 8.28339 110.609 0.5 121.286 0.5L177.286 0.500002C189.16 0.500003 198.786 10.1259 198.786 22V78C198.786 88.432 191.355 97.1298 181.499 99.0876L181.515 100.071C191.716 101.748 199.5 110.609 199.5 121.286V177.286C199.5 189.16 189.874 198.786 178 198.786H122C111.568 198.786 102.87 191.355 100.912 181.498L99.9286 181.514C98.2515 191.716 89.3914 199.5 78.7143 199.5H22.7143C10.8401 199.5 1.21426 189.874 1.21426 178L1.21426 122C1.21426 111.568 8.64466 102.87 18.502 100.912Z"></path>
                </clipPath>
              </defs>
              <image
                href="https://peekinsights.co/wp-content/uploads/2024/09/ARTD-C04-Device-034-edit.jpg.webp"
                loading="lazy"
                width="200"
                height="200"
                clipPath="url(#myMask)"
                preserveAspectRatio="xMidYMid slice"
              ></image>
              <path
                d="M18.502 100.912L18.4857 99.9286C8.28339 98.2515 0.5 89.3913 0.5 78.7143V22.7143C0.5 10.8401 10.1259 1.21428 22 1.21428H78C88.4321 1.21428 97.1299 8.64466 99.0877 18.502L100.071 18.4857C101.748 8.28339 110.609 0.5 121.286 0.5L177.286 0.500002C189.16 0.500003 198.786 10.1259 198.786 22V78C198.786 88.432 191.355 97.1298 181.499 99.0876L181.515 100.071C191.716 101.748 199.5 110.609 199.5 121.286V177.286C199.5 189.16 189.874 198.786 178 198.786H122C111.568 198.786 102.87 191.355 100.912 181.498L99.9286 181.514C98.2515 191.716 89.3914 199.5 78.7143 199.5H22.7143C10.8401 199.5 1.21426 189.874 1.21426 178L1.21426 122C1.21426 111.568 8.64466 102.87 18.502 100.912Z"
                fill="none"
                stroke="black"
                vectorEffect="non-scaling-stroke"
              ></path>
            </svg>
          </div>
        </div>
        
        {/* Prize Structure Section */}
        <div className="bg-white w-[96%] lg:h-[100vh] border mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center lg:order-2">
            <h2 className="font-serif font-light text-2xl md:text-4xl px-6 pt-8 leading-tight">
              Prize Structure
            </h2>
            <div className="font-sans font-light text-lg md:text-xl px-6 py-6 space-y-4">
              <ul className="space-y-3 list-disc pl-5">
                <li className="font-medium">One winning team will be declared</li>
                <li>
                  <span className="font-medium">Prize Money (Cash Gift Card):</span>
                  <ul className="space-y-1 list-circle pl-5 mt-1">
                    <li>Winning Team: ₹4000</li>
                  </ul>
                </li>
                <li>All members of the winning team will receive an official offline certificates</li>
                <li>All other participants will be awarded digital participation certificates</li>
              </ul>
            </div>
          </div>
          <div className="pt-7 lg:order-1 relative h-[60vh] sm:h-[80vh] md:h-[80vh] w-[90%] my-auto mx-auto grid-pattern flex items-center justify-center">
            <div className="absolute w-[80%] h-[80%] rounded-full">
              <img
                className="w-full h-full rounded-full object-cover"
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Prize Structure"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}