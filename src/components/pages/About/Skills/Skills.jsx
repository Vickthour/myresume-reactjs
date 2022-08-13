import React from "react";

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Skills</h3>
          </div>
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-sm text-md font-medium bg-blue-100 text-blue-800">Languages</span>
          <ul className="list-disc list-inside text-gray-900 dark:text-gray-200">
            <li className="inline-block relative pr-8">HTML</li>
            <li className="inline-block relative pr-8">CSS</li>
            <li className="inline-block relative pr-8">JavaScript</li>
            <li className="inline-block relative pr-8">TypeScript</li>
            <li className="inline-block relative pr-8">PHP</li>
          </ul>
          <hr/><br/>
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-sm text-md font-medium bg-blue-100 text-blue-800">Libraries</span>
          <br/>
          <ul className="list-disc list-inside text-gray-900 dark:text-gray-200">
            <li className="inline-block relative pr-8">React</li>
            <li className="inline-block relative pr-8">React-Redux</li>
            <li className="inline-block relative pr-8">JavaScript</li>
            <li className="inline-block relative pr-8">TypeScript</li>
            <li className="inline-block relative pr-8">Laravel</li>
          </ul>
          <hr/><br/>
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-sm text-md font-medium bg-blue-100 text-blue-800">Frameworks</span>
          <br/>
          <ul className="list-disc list-inside text-gray-900 dark:text-gray-200">
            <li className="inline-block relative pr-8">TailwindCSS</li>
            <li className="inline-block relative pr-8">BootStrap</li>
          </ul>
          <hr/><br/>
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-sm text-md font-medium bg-blue-100 text-blue-800">Tools & System</span>
          <br/>
          <ul className="list-disc list-inside text-gray-900 dark:text-gray-200">
            <li className="inline-block relative pr-8">Git</li>
            <li className="inline-block relative pr-8">NPM</li>
            <li className="inline-block relative pr-8">VScode</li>
          </ul><hr/><br/>
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-sm text-md font-medium bg-blue-100 text-blue-800">CMS</span>
          <br/>
          <ul className="list-disc list-inside text-gray-900 dark:text-gray-200">
            <li className="inline-block relative pr-8">WordPress</li>
            <li className="inline-block relative pr-8">Wix</li>
            <li className="inline-block relative pr-8">PageCarton</li>
          </ul>
        </div>
        
        
      </div>
    </div>
  );
};

export default Skills;
