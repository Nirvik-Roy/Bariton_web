import React from 'react'
import Head from "next/head";

const CyberSecurityContent = () => {
  return (
    <div>

      
      <section className="py-12 bg-gray-50 ">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-10 ml-[50px]">
      🛡️ Our Core Cyber Security Offerings
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl p-6 transition duration-300">
        <h3 className="text-xl font-semibold mb-4 text-blue-900">
          ICS/SCADA Security for Industrial Systems
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Risk assessment & threat modeling of PLCs, HMIs, RTUs</li>
          <li>Secure segmentation of OT/IT networks</li>
          <li>Real-time anomaly detection for SCADA networks</li>
          <li>Compliance readiness: NIST, ISA/IEC 62443, etc.</li>
        </ul>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl p-6 transition duration-300">
        <h3 className="text-xl font-semibold mb-4 text-blue-900">
          Vulnerability Assessment & Penetration Testing (VAPT)
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Network & server vulnerability scanning</li>
          <li>Web & mobile app penetration testing</li>
          <li>API and cloud infrastructure testing</li>
          <li>Red team vs. blue team simulation</li>
        </ul>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl p-6 transition duration-300">
        <h3 className="text-xl font-semibold mb-4 text-blue-900">
          Cyber Security Audit & Gap Analysis
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>End-to-end security posture evaluation</li>
          <li>ISO 27001 / NIST CSF / GDPR audit support</li>
          <li>Infrastructure hardening recommendations</li>
          <li>Policy & SOP documentation</li>
        </ul>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-2xl p-6 transition duration-300">
        <h3 className="text-xl font-semibold mb-4 text-blue-900">
          Cyber Forensics & Incident Response
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Malware analysis, log forensics, data breach triage</li>
          <li>Evidence preservation and legal chain-of-custody</li>
          <li>Root cause analysis and security remediation</li>
          <li>Incident response playbook development</li>
        </ul>
      </div>

      {/* Card 5 */}
      <div className="bg-white rounded-2xl p-6 transition duration-300">
        <h3 className="text-xl font-semibold mb-4 text-blue-900">
          Cyber Simulation & Awareness Training
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Phishing, ransomware, insider threat drills</li>
          <li>Role-based awareness for employees and IT staff</li>
          <li>Executive tabletop exercises for critical incidents</li>
          <li>Custom cyber range or attack simulation labs</li>
        </ul>
      </div>
    </div>

    {/* Why Choose Section */}
    <div className="mt-16 text-center">
      <h3 className="text-2xl font-bold mb-6">🔧 Why Choose Grue and Bleen?</h3>
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
      <h3 className="text-2xl font-bold mb-4">📩 Secure Your Infrastructure Today</h3>
      <p className="mb-4">
        Whether you’re a manufacturing plant, energy utility, government agency, or
        enterprise — we can tailor a cyber defense strategy to match your environment.
      </p>
      <p className="font-semibold">📧 Email: cybersecurity@gruebleen.com</p>
      <p className="font-semibold">🌐 Visit: www.gruebleen.com/cybersecurity</p>
    </div>
  </div>
</section>

    </div>
  )
}

export default CyberSecurityContent
