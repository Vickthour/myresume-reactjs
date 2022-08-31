import React from "react";
import {FaCode, FaHtml5, FaReact, FaMobile } from "react-icons/fa";
//import { SiTailwindcss } from "react-icons/si";
import ServiceItem from "./ServiceItem";

const serviceData = [
  {
    id: 1,
    icon: <FaHtml5 />,
    title: "HTML & CSS Responsive Web Design",
    description:
    "Enterprise-class websites need consistent colors, fonts, and design to match the organization's branding guidelines. I design responsive websites, with CSS at the core of front end development alongside JavaScript and HTML."
  },
  {
    id: 2,
    icon: <FaMobile />,
    title: "Mobile Frontend development",
    description:
    "React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities."
  },
  {
    id: 3,
    icon: <FaReact />,
    title: "React JS Development",
    description:
    "ReactJS is renowned for its extensibility, adjustability, and convenience. Using this library, i build dynamic and responsive websites."
  },
  {
    id: 4,
    icon: <FaCode />,
    title: "Content Management System",
    description:
    "A content management system is computer software used to manage the creation and modification of digital content. (WordPress, Wix, ...)"
  },
  
];

const Service = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {serviceData.map((service, id) => (
          <ServiceItem service={service} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Service;
