import React from "react";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Who am I?</h3>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              Hi, I'm Victor, and I graduated from the Federal Polytechnic, Ilaro with a degree in Computer Science. My interests are in Front End Engineering, and I love to create beautiful and performant products with delightful user experiences. 
             
            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3">
             Over the years, I develop new user-facing features, determine the structure and design of web pages, build reusable codes, optimize page loading times, and use a variety of markup languages to create the web pages. I previously worked at PageCarton, where I develop and integrate customized themes into <a href="https://www.pagecarton.org/">PageCarton CMS</a>.
              I’m very dedicated to diversity and inclusion in the tech space so I try to volunteer and support initiatives targeted towards minorities and provide direct mentorship to people who look like me.
            </p>

            <p className="text-sm text-gray-400 leading-6 mb-3"> Currently, I’m focused on moving to the next stage of my career.
             <br/> Thanks for reading 😊</p>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
