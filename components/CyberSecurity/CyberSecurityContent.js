import React from "react";
import Head from "next/head";

const CyberSecurityContent = () => {
  return (
    <div>
      <section className="py-12 bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl text-center font-bold mb-10 mt-16">
            🛡️ Our Core Cyber Security Offerings
          </h2>

          <div className="container my-5">
            <div className="row g-4 justify-content-center">
              {/* Card 1 */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0 rounded-3">
                  <div className="card-body">
                    <h5 className="card-title text-primary fw-bold">
                      ICS/SCADA Security for Industrial Systems
                    </h5>
                    <ul className="mt-3 ps-3">
                      <li>
                        Risk assessment & threat modeling of PLCs, HMIs, RTUs
                      </li>
                      <li>Secure segmentation of OT/IT networks</li>
                      <li>Real-time anomaly detection for SCADA networks</li>
                      <li>Compliance readiness: NIST, ISA/IEC 62443, etc.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0 rounded-3">
                  <div className="card-body">
                    <h5 className="card-title text-primary fw-bold">
                      Vulnerability Assessment & Penetration Testing (VAPT)
                    </h5>
                    <ul className="mt-3 ps-3">
                      <li>Network & server vulnerability scanning</li>
                      <li>Web & mobile app penetration testing</li>
                      <li>API and cloud infrastructure testing</li>
                      <li>Red team vs. blue team simulation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0 rounded-3">
                  <div className="card-body">
                    <h5 className="card-title text-primary fw-bold">
                      Cyber Security Audit & Gap Analysis
                    </h5>
                    <ul className="mt-3 ps-3">
                      <li>End-to-end security posture evaluation</li>
                      <li>ISO 27001 / NIST CSF / GDPR audit support</li>
                      <li>Infrastructure hardening recommendations</li>
                      <li>Policy & SOP documentation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0 rounded-3">
                  <div className="card-body">
                    <h5 className="card-title text-primary fw-bold">
                      Cyber Forensics & Incident Response
                    </h5>
                    <ul className="mt-3 ps-3">
                      <li>
                        Malware analysis, log forensics, data breach triage
                      </li>
                      <li>Evidence preservation and legal chain-of-custody</li>
                      <li>Root cause analysis and security remediation</li>
                      <li>Incident response playbook development</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0 rounded-3">
                  <div className="card-body">
                    <h5 className="card-title text-primary fw-bold">
                      Cyber Simulation & Awareness Training
                    </h5>
                    <ul className="mt-3 ps-3">
                      <li>Phishing, ransomware, insider threat drills</li>
                      <li>Role-based awareness for employees and IT staff</li>
                      <li>
                        Executive tabletop exercises for critical incidents
                      </li>
                      <li>Custom cyber range or attack simulation labs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">
              🔧 Why Choose Grue and Bleen?
            </h3>
            <ul className="list-none text-lg text-gray-800 space-y-2">
              <p>OT + IT cyber security expertise</p>
              <p>Certified professionals</p>
              <p>Real-world ICS testing & forensics experience</p>
              <p>Government and enterprise implementation background</p>
              <p>End-to-end support — from risk assessment to training</p>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center bg-blue-900 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              📩 Secure Your Infrastructure Today
            </h3>
            <p className="mb-4">
              Whether you’re a manufacturing plant, energy utility, government
              agency, or enterprise — we can tailor a cyber defense strategy to
              match your environment.
            </p>
            <p className="font-semibold">
              📧 Email: cybersecurity@gruebleen.com
            </p>
            <p className="font-semibold">
              🌐 Visit: www.gruebleen.com/cybersecurity
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurityContent;
