import React from "react";

const experiences = [
  {
    company: "Linkbot Pte Ltd",
    location: "Remote – Singapore",
    title: "Solution Engineer / Software Engineer",
    date: "Jul 2024 - Present",
    bullets: [
      "Collaborated closely with 7+ B2B clients to gather business needs and translate them into custom low-code solutions using n8n and Lark, streamlining CRM and operational workflows.",
      "Designed and implemented multi-channel communication systems integrating WhatsApp, Email, Zoho, and Lark to automate invoicing, increasing response speed and billing efficiency.",
      "Built AI-powered dashboards and ATS enhancements, contributing to a 25% increase in lead conversion rates through improved customer experience.",
      "Led the creation of a task management app with auto-assignment, deadline tracking, and Slack/Lark integration, reducing backlog by 35% within 3 months and improving SLA adherence.",
      "Delivered solution demos and technical support, receiving positive feedback from both internal and external stakeholders."
    ]
  },
  {
    company: "Community Service Program / KKN (University Program)",
    location: "Trenggalek, Indonesia",
    title: "Mobile Developer (Community Project)",
    date: "May 2024 - Jul 2024",
    bullets: [
      "Developed and improved a complex hybrid mobile application (SiBunda) for iOS & Android using Flutter, Firebase, and PostgreSQL to support stunting prevention efforts in rural communities.",
      "Successfully launched, tested, and onboarded 20+ villagers, enhancing maternal and child health monitoring.",
      "Contributed to local engagement by organizing community events and deploying digital tools to assist child growth tracking and improve pedestrian accessibility."
    ]
  },
  {
    company: "Abinara-1 ITS Robotic Team",
    location: "Surabaya",
    title: "Lead Programmer",
    date: "Feb 2022 - Jul 2024",
    bullets: [
      "Designed control systems and led development of autonomous robots for national competitions.",
      "Mentored peers and presented solutions at national robotics seminars; ranked Top 3 nationally."
    ]
  },
  {
    company: "Crustea Indonesia",
    location: "Surabaya",
    title: "IoT & Software Engineer (Part-Time)",
    date: "Nov 2022 - Sep 2023",
    bullets: [
      "Developed smart aquaculture devices (nano-aerators and IoT dashboards) to help farmers monitor water quality in real time.",
      "Scaled tech to 5+ shrimp pond sites across Java, reducing oxygen-related losses by 20%.",
      "Co-led research initiatives that secured over $1M in competitive grant funding."
    ]
  }
];

const Experience = () => (
  <section id="experience" className="w-full flex flex-col items-center py-20 px-4 bg-white">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#00C0FD] mb-16 text-center drop-shadow-lg">Work Experience (1 Year+)</h1>
    <div className="w-full max-w-6xl flex flex-col gap-8">
      {experiences.map((exp, idx) => (
        <div key={idx} className="bg-white border border-gray-200 rounded-2xl shadow-lg px-8 py-6 mx-auto w-full md:w-[90%] lg:w-[80%]">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-1">
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
              <span className="font-bold text-lg text-[#232526]">{exp.company}</span>
              <span className="text-gray-400 font-semibold"><span className="hidden md:inline">-</span> <span className="italic">{exp.location}</span></span>
            </div>
            <span className="text-gray-500 text-sm mt-1 md:mt-0 whitespace-nowrap">{exp.date}</span>
          </div>
          <div className="font-semibold text-gray-700 mb-2">{exp.title}</div>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-base">
            {exp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience; 