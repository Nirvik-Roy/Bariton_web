import React from 'react'
import Head from "next/head";

const CyberSecurityContent = () => {
  return (
    <div>

      {/* ✅ Offerings */}
      <section className="bg-[#0a0f1a] text-gray-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            🛡️ Our Core Cyber Security Offerings
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                1. ICS/SCADA Security
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Risk assessment & threat modeling of PLCs, HMIs, RTUs</li>
                <li>Secure segmentation of OT/IT networks</li>
                <li>Real-time anomaly detection for SCADA networks</li>
                <li>Compliance readiness: NIST, ISA/IEC 62443</li>
              </ul>
            </div>

            <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                2. Vulnerability Assessment & Penetration Testing (VAPT)
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Network & server vulnerability scanning</li>
                <li>Web & mobile app penetration testing</li>
                <li>API and cloud infra testing</li>
                <li>Red team vs. blue team simulation</li>
              </ul>
            </div>

            <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                3. Cyber Security Audit & Gap Analysis
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>End-to-end security posture evaluation</li>
                <li>ISO 27001 / NIST CSF / GDPR audit support</li>
                <li>Infrastructure hardening recommendations</li>
                <li>Policy & SOP documentation</li>
              </ul>
            </div>

            <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                4. Cyber Forensics & Incident Response
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Malware analysis, log forensics, data breach triage</li>
                <li>Evidence preservation and legal chain-of-custody</li>
                <li>Root cause analysis and remediation</li>
                <li>Incident response playbook development</li>
              </ul>
            </div>

            <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg md:col-span-2">
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                5. Cyber Simulation & Awareness Training
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Phishing, ransomware, insider threat drills</li>
                <li>Role-based awareness for employees & IT staff</li>
                <li>Executive tabletop exercises</li>
                <li>Custom cyber range or attack simulation labs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="bg-[#0f172a] text-gray-200 py-12 px-6 border-y-2 border-cyan-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            🔧 Why Choose Grue and Bleen?
          </h2>
          <ul className="space-y-3 text-lg text-left md:text-center">
            <p>OT + IT cyber security expertise</p>
            <p>Certified professionals</p>
            <p>Real-world ICS testing & forensics experience</p>
            <p>Government and enterprise implementation background</p>
            <p>End-to-end support — from risk assessment to training</p>
          </ul>
        </div>
      </section>

      {/* ✅ Contact CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">📩 Secure Your Infrastructure Today</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Whether you’re a manufacturing plant, energy utility, government agency, 
          or enterprise — we can tailor a cyber defense strategy to match your environment.
        </p>
        <p className="mb-2">
          📧 Email:{" "}
          <a href="mailto:cybersecurity@gruebleen.com" className="text-yellow-300 hover:underline">
            cybersecurity@gruebleen.com
          </a>
        </p>
        <p>
          🌐 Visit:{" "}
          <a href="https://www.gruebleen.com/cybersecurity" target="_blank" className="text-yellow-300 hover:underline">
            www.gruebleen.com/cybersecurity
          </a>
        </p>
      </section>
    </div>
  )
}

export default CyberSecurityContent
