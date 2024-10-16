'use client'
import React, { useEffect } from "react";
import Link from "next/link";

const Indus = () => {
  useEffect(() => {

    const panels = document.querySelectorAll(".panel");

    panels.forEach((panel) => {
      panel.addEventListener("mouseover", handleMouseEnter);
    });

    function handleMouseEnter(event) {
      removeActiveClasses();
      event.currentTarget.classList.add("active");
    }

    function removeActiveClasses() {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      panels.forEach((panel) => {
        panel.removeEventListener("mouseover", handleMouseEnter);
      });
    };
  }, []);  // Empty dependency array means this runs once after initial render

  return (
    <div className=" max-w-7xl mx-10  lg:px-8 py-12">
      <div className="text-left ml-2 md:mx-20">
        <h2 className="text-3xl font-bold playfair md:text-5xl text-[#000000]">
        React Native&apos;s Applications Across Sectors
        </h2>
        <p className="mt-2 text-lg md:text-2xl text-[#000000] ">
          Our top mobile app development company proudly serves a diverse range
          of industries. Through innovative technology solutions, we empower
          businesses in numerous sectors to engage customers, optimize
          operations, and unlock new opportunities for growth.
        </p>
        <div className="galerrys ">
          <div className="containers mr-10">
            <div className="panel active Indus">
              <div className="img-boxs">
                <h3 className="text-xs md:text-sm lg:text-lg">e-Commerce</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                  Thanks to its fast, responsive, and eye-catching experience, React Native has emerged as a smarter 
                  option for mobile applications used in the e-commerce industry.                  </p>
                </div>
                <div className=" mt-5  lg:mt-5 xl:mt-10">
                  <Link href="#" onClick={(e) => e.preventDefault()} className="round  ">
                    <span className=" px-1 md:px-2 py-2 xl:px-4 xl:py-4 ">Explore more →</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="panel Indus1">
              <div className="img-boxs ">
                <h3 className="text-xs md:text-sm lg:text-lg ">FINTech </h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                  React Native is a powerful tool for the financial services industry, where speed, security, and 
                  reliability are paramount.                  </p>
                </div>
                <div className="mt-5 lg:mt-5 xl:mt-10">
                  <Link href="#" onClick={(e) => e.preventDefault()} className=" round    ">
                    <span className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="panel Indus2">
              <div className="img-boxs ">
                <h3 className="text-xs md:text-sm lg:text-lg ">Healthcare</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                  React Native aids the healthcare sector with applications designed to control patient records, 
                  appointments, and online consultations.                  </p>
                </div>
                <div className="mt-5 lg:mt-5 xl:mt-10">
                  <Link href="#" onClick={(e) => e.preventDefault()} className=" round    ">
                    <span className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="panel Indus3">
              <div className="img-boxs ">
                <h3 className="text-xs md:text-sm lg:text-lg ">Social media and entertainment</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                  The software offers a capable infrastructure for managing real-time updates, interactive interfaces, 
                  and sophisticated animations for social media and entertainment venues.                  </p>
                </div>
                <div className="mt-5 lg:mt-5 xl:mt-10">
                  <Link href="#" onClick={(e) => e.preventDefault()} className=" round    ">
                    <span className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="panel Indus4">
              <div className="img-boxs ">
                <h3 className="text-xs md:text-sm lg:text-lg ">Travel and Courtesy in Hospitality</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                  Mobile apps in the travel and hospitality sector must provide speedy searches, instantaneous 
bookings, and flawless user interfaces.
                  </p>
                </div>
                <div className="mt-5 lg:mt-5 xl:mt-10">
                  <Link href="#" onClick={(e) => e.preventDefault()} className=" round">
                    <span className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="panel Indus5">
              <div className="img-boxs ">
                <h3 className="text-xs md:text-sm lg:text-lg ">e-Learning and Education</h3>
                <div className="mt-1 md:mt-2">
                  <p className="">
                  React Native provides the ideal foundation for dynamic and scalable mobile apps as e-learning and 
                  ed-tech solutions see rising demand.
                  </p>
                </div>
                <div className="mt-5 lg:mt-5 xl:mt-10">
                  <Link href="#" onClick={(e) => e.preventDefault()} className=" round    ">
                    <span className="md:px-2 xl:px-4 xl:py-4 ">Explore more →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Indus;
