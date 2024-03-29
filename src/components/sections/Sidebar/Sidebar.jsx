import React from "react";
import {
  FaMailBulk,
  FaGithub,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import profile from "../../../images/profile.jpg";

const socials = [
  {
    id: 1,
    icon: <FaMailBulk />,
    link: "mailto:olabanjivictor37@gmail.com",
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/vickthour",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/victor-olabanji/",
  },
  {
    id: 4,
    icon: <FaSkype />,
    link: "https://join.skype.com/invite/OnT3a9gdjyNs",
  },
  {
    id: 5,
    icon: <FaTwitter />,
    link: "https://twitter.com/vickthour2",
  },
];

const Sidebar = () => {
  return (

    
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="shafiqhammad" className="w-full rounded-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">Victor Olabanji</h1>
        <p className="text-sm text-gray-400 mb-3">
          Front-End Developer at
          <a href="https://www.hubrootech.com.ng/" className="text-purple-600 pl-1">
            Hubroot Technologies
          </a>
        </p>
        <a target="_blank" rel="noreferrer"
          href="https://drive.google.com/file/d/18IeR8-ug9Dm3B0nLa_6rYHIB5e94xYy5/view?usp=sharing"
          className="inline-block mb-3 rounded bg-purple-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
          download="Resume"
        >
          Download Resume
        </a>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <p className="text-gray-400 text font-light leading-relaxed">
          FrontEnd engineer with 3 years of experience designing and building responsive web design and mobile apps for
          diverse industry organization. Proficient with CSS, JavaScript Libraries, and Frameworks, with extensive knowledge of user psychology.
          Experienced in creating and managing dynamic web pages, integrating them with back-end systems, and using analytics to optimize the user experience.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link}
        className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
      >
        {icon}
      </a>
    </li>
  );
};
