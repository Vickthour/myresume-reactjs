import React from "react";
import image1 from "../../../images/portfolio/sadiq.jpg";
import image2 from "../../../images/portfolio/crypto.jpg";
import image3 from "../../../images/portfolio/wield.jpg";
import image4 from "../../../images/portfolio/project-04.jpg";
import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  {
    id: 1,
    image: image1,
    title: "HTML & CSS website",
    link: "https://sadiqisu.netlify.app/",
    description:"A portfolio website (Bootstrap & Jquery)",
  },
  {
    id: 2,
    image: image2,
    title: "Cryptoverse (React| Reduxjs toolkit | bootstrap)",
    link: "https://crypto-analyze.netlify.app/",
    description:
      "Cryptocurrency Analysis Application. Offers a nice range of cryptocurrencies and a simple-to-use app experience",
  },
  {
    id: 3,
    image: image3,
    title: "Wield frontend (React & nextjs)",
    link: "https://wield-frontend-pi.vercel.app/",
    description:"Connecting People brand and influencing",
  },
  {
    id: 4,
    image: image4,
    title: "Gearix Car repair App",
    link: "#0",
    description:"",
  },
];

const Portfolio = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {portfolioData.map((portfolio, id) => (
          <PortfolioItem portfolio={portfolio} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
