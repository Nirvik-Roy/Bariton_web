import React, { useState } from "react";
import MonthlyPlan from "./MonthlyPlan";
import YearlyPlan from "./YearlyPlan";

const PricingCard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="pricing-area ptb-110 bg-fafafa">
        <div className="container">
          <div className="section-title">
            <h2>Solar Services</h2>
            <p style={{fontSize:'18px', color:'#000', fontWeight:'600'}}>
              Powering a Cleaner Tomorrow with Smarter Solar Solutions 
            </p>
          </div>

          <div className="pricing-tab">
          <p>We offer end-to-end solar energy services designed to make clean power simple,accessible, and cost-effective for homes,  business and industries. Our solutions are tailored to your needs whether you're looking to reduce your carbon footprint, lower your energy bills, or achive energy independence.</p>
           <ul className="services-list">
    <li>
      <strong>Solar Panel Installation</strong><br />
      High-efficiency solar panels installed by certified experts to ensure maximum energy output and long-term durability.
    </li>
    <li>
      <strong>Customized System Design</strong><br />
      We assess your energy needs and design solar solutions that fit your site, usage, and budget perfectly.
    </li>
    <li>
      <strong>Energy Storage Solutions</strong><br />
      Integrate batteries and smart storage systems to save excess power and use it when you need it most.
    </li>
    <li>
      <strong>Monitoring & Maintenance</strong><br />
      Real-time performance monitoring and regular maintenance to keep your system running at its best.
    </li>
    <li>
      <strong>Solar for Commercial & Industrial Use</strong><br />
      Scalable solar systems for large-scale operations looking to reduce operational costs and meet sustainability goals.
    </li>
    <li>
      <strong>Government Subsidy & Financing Support</strong><br />
      Assistance with government schemes, tax credits, and financing options to make solar affordable for everyone.
    </li>
  </ul>
            {/* <ul className="tabs">
              <li
                className={`list ${activeTab === 0 ? "current" : ""}`}
                onClick={() => handleTabClick(0)}
              >
                Monthly Plan
              </li>

              <li
                className={`list ${activeTab === 1 ? "current" : ""}`}
                onClick={() => handleTabClick(1)}
              >
                Yearly Plan
              </li>
            </ul> */}

            {/* <div>
              {activeTab === 0 && <MonthlyPlan />}
              {activeTab === 1 && <YearlyPlan />}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
