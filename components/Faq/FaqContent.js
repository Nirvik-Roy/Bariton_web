
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import FaqForm from "./FaqForm";
import Image from "next/image";

const FaqContent = () => {
  return (
    <>
      <section className="faq-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>❓ General Questions</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Q1. What industries does Grue and Bleen serve?
                      </p>
                      <p>We serve public and private sectors including logistics, infrastructure, smart cities, government bodies, health, education, energy, and technology startups.</p>
                      <p>Q2. Where is your team based?</p>
                      <p>Our headquarters is in India. We offer services both on-site and remotely for clients across the globe.</p>
                      <p>Q3. Do you provide turnkey project delivery?</p>
                      <p>Yes. We handle end-to-end delivery including requirement gathering, development, deployment, support, and compliance documentation.</p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>🧩 ERP Solutions (SAP / Oracle)</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Q1. What ERP platforms do you specialize in?
                        <p>We offer services on SAP (ECC, S/4HANA, BW/4HANA, Ariba, MDG) and Oracle ERP systems.</p>
                        <p>Q2. Do you provide support for SAP ABAP customizations?</p>
                        <p>Yes. We have a team of experienced ABAP consultants for development, integration, and workflow enhancements.</p>
                        <p>Q3. Can you help with post-implementation ERP support?</p>
                        <p>Absolutely. We offer long-term support contracts for issue resolution, patching, updates, and performance tuning.</p>
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>
                          🔧 Custom Application Development
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>🌐 IoT & Smart Automation</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Q1. What technologies do you use?
                      </p>
                      <p>Our stack includes React.js, Node.js, MongoDB, MySQL, GraphQL, REST, and Android SDK.</p>
                      <p>Q2. Do you build mobile apps too?</p>
                      <p>Yes. We specialize in both Android and hybrid cross-platform mobile applications.</p>
                      <p>Q3. Can you integrate our app with ERP or third-party systems?</p>
                      <p>Yes. We have experience in integrating with SAP, payment gateways, SMS/email gateways, and IoT hardware.</p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>👥 IT Consulting & Staff Augmentation</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Q1. Q1. What profiles do you provide?
                      </p>
                      <p>SAP consultants (ABAP, MM, SD, BW), web/app developers, DevOps, IoT engineers, and testers.</p>
                      <p>Q2. What is the engagement model?</p>
                      <p>You can hire resources on a contract, contract-to-hire, or full-time basis – remotely or on-site.</p>
                      <p>Q3. Do you offer resource replacements?</p>
                      <p>Yes. If a resource doesn’t meet expectations, we offer a quick replacement guarantee.</p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>♻️ Renewable Energy Solutions</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Q1. What services do you provide in renewable energy?
                      </p>
                      <p>We consult on solar project planning, energy audits, hybrid systems, and IoT-based metering.</p>
                      <p>Q2. Do you work with government subsidy schemes?</p>
                      <p>Yes. We assist with government documentation and subsidy applications for eligible projects.</p>
                      <p>Q3. Can your energy systems be monitored remotely?</p>
                      <p>Yes. We provide web and mobile dashboards for real-time energy usage tracking and alerts.</p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="g">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>🔐 Cyber Security</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Q1. What areas of cyber security do you cover?
                      </p>
                      <p>ICS/SCADA protection, VAPT, cyber audits, forensic investigation, and simulation testing.</p>
                      <p>Q2. Are your audits compliant with Indian and global standards?</p>
                      <p>Yes. Our partners comply with ISO 27001, CERT-In, NIST, and other sectoral regulations.</p>
                      <p>Q3. Can you conduct red team exercises or stress testing?</p>
                      <p>Absolutely. We perform simulated cyberattack drills to test system readiness.</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="faq-content">
                <div className="section-title">
                  <span>Ask Question</span>
                  <h2>Frequently Asked Questions?</h2>
                  {/* <p>
                    Veniam quis nostrud exercitation ullamco laboris nist aute
                    irure dolor in reprehenderit in voluptate velit esse nulla
                    pariatur excepteur sint occaecat aboris nisi ut aliquip.
                  </p> */}
                </div>

                <div className="faq-image">
                  <Image
                    src="/images/faq.png"
                    alt="image"
                    width={1200}
                    height={660}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Faq Form */}
          <FaqForm />
        </div>
      </section>
    </>
  );
};

export default FaqContent;
