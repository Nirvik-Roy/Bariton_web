import React from "react";
import Image from "next/image";

const ServiceDetailsContent = ({ id }) => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              {id === "1" && <h3>Our IT Consulting Expertise Includes</h3>}
              {id === "1" && (
                <p>
                  Technology Strategy Consulting like Develop a customized IT
                  roadmap to drive your digital transformation. Also include
                  Cloud Consulting Services such as migrate, optimize, and
                  manage your cloud infrastructure for scalability and
                  flexibility. Our Cybersecurity Consulting and Digital
                  Transformation Consulting Protect your business with risk
                  assessments, security audits, and best-practice
                  recommendations and odernize your legacy systems with the
                  latest digital solutions to stay competitive. Our IT
                  consultant improve your IT infrastructure to enhance
                  performance, and ensure operational reliability.{" "}
                </p>
              )}
              {id === "2" && <h3>Our SAP ERP / Solution Services</h3>}
              {id === "2" && (
                <p>
                  SAP Consulting Services include Business process analysis and
                  SAP roadmap design , Digital transformation planning using SAP
                  solutions. SAP ERP Implementation is end-to-end deployment,
                  industry-specific module setup, business process redesign and
                  SAP customization. SAP ERP help to Version upgrades, system
                  enhancements and data migration planning and execution. Also
                  SAP Managed Services and 24/7 SAP system monitoring and
                  Functional and technical support. SAP also develop Custom
                  module development tailored to specific industry needs and
                  enhancements to existing SAP modules with seamless integration
                  with existing IT infrastructure.{" "}
                </p>
              )}
              {id === "3" && (
                <h3>Our Custom Application Development Services</h3>
              )}
              {id === "3" && (
                <p>
                  Web Application Development of responsive, high-performance
                  web applications tailored to your business workflows. Mobile
                  Application Development like Native and cross-platform app
                  development and UI/UX design ensuring a seamless user
                  experience. Our Custom Application Development continuous
                  monitoring, bug fixing, and performance optimization and focus
                  on security, scalability, elasticity, high availability, and
                  data security. Also we provide end-to-end development of
                  Software-as-a-Service platforms and continuous monitoring and
                  feature enhancement.
                </p>
              )}
              {id === "4" && <h3>Cyber Security Services</h3>}
              {id === "4" && (
                <>
                  <h5>
                    🔐 Strengthening Digital Defenses for Businesses & Industry
                  </h5>
                  <p>
                    In today’s interconnected world, security is more than a
                    compliance checkbox — it’s a critical pillar of business
                    resilience. At <b>Grue and Bleen Technologies</b>, we
                    deliver specialized cyber security services to safeguard IT
                    and OT environments, including Industrial Control Systems
                    (ICS), enterprise networks, cloud infrastructure, and
                    applications.
                  </p>
                </>
              )}
              {id === "5" && <h3>CCTV Surveillance System</h3>}
              {id === "5" && (
                <p>
                  CCTV Surveillance System provide constant monitoring from a
                  set position and offer remote control to pan, tilt, and zoom,
                  allowing flexible, real-time monitoring. CCTV Surveillanc
                  specialized for capturing vehicle information. Also utilize
                  artificial intelligence to detect unusual activities,
                  recognize faces, and identify potential threats in real-time
                  and allows security personnel to monitor live feeds from any
                  location, ensuring continuous surveillance even during
                  off-hours.{" "}
                </p>
              )}
              {id === "6" && <h3>IT staff augmentation</h3>}
              {id === "6" && (
                <p>
                  IT staff augmentation easily scale your team up or down based
                  on project needs, avoiding the overhead of permanent hires and
                  reduce expenses related to recruitment, training, and benefits
                  by hiring professionals on a need basis. Also engage
                  professionals for specific tasks, minimizing the risks
                  associated with long-term employment commitments. Business
                  consulting involves hiring external experts to provide
                  objective insight, specialized knowledge, and tactical
                  support. Our consultants analyze your organization, identify
                  problems and opportunities, and collaborate with your team to
                  implement tailored solutions that enhance performance and
                  growth.
                </p>
              )}
              {id === "7" && <h3>Business consulting</h3>}
              {id === "7" && (
                <p>
                  Consultants analyze your organization, identify problems and
                  opportunities, and collaborate with your team to implement
                  solutions that enhance performance, streamline operations, and
                  growth. Business consulting involves partnering with
                  organizations to analyze challenges, develop strategic
                  solutions. Consultants also bring objectivity, specialized
                  frameworks, industry expertise, and experience from multiple
                  clients to help businesses navigate complex issues
                  effectively.{" "}
                </p>
              )}
              {id === "8" && <h3>IT Infrastructure services</h3>}
              {id === "8" && (
                <p>
                  IT Infrastructure Design, implement, and managing security
                  measures to protect IT infrastructure from potential threats
                  and vulnerabilities, ensuring compliance with regulatory
                  requirementsand network infrastructure to ensure reliable
                  connectivity and secure communication and maintain servers and
                  storage systems, including virtualization and backup
                  solutions.{" "}
                </p>
              )}
              {id === "9" && <h3>Solar System and BMS Services</h3>}
              {id === "9" && (
                <p>
                  Solar System and BMS Provides turnkey EPC services for
                  commercial, industrial, and utility-scale solar projects.
                  Solar System handle design, integration, programming, and full
                  stack deployment of PV systems. Also BMS referred to as
                  Building Management or Automation Systems—covering HVAC,
                  lighting, power, security, and more.
                </p>
              )}
            </div>

            <div className="services-details-image">
              <Image
                src="/images/services-details/service-details1.jpg"
                alt="image"
                width={660}
                height={530}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
