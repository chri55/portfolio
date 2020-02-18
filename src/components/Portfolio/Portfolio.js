const portfolioItems = [
  {
    index: 1,
    title: "Rutgers Camden ACM Website",
    synopsis: "Club website made during my time as Webmaster of the Rutgers ACM Camden Chapter.",
    description: "Made in Flask.",
    link: "https://github.com/rutgersacm/ruc-acm",
    repo: "https://github.com/rutgersacm/ruc-acm",
    previewImageLink: "https://cpt-images.s3.us-east-2.amazonaws.com/ruc-acmDemo.png",
    tags: ["Python", "Flask", "HTML", "CSS", "Javascript"],
    slug: "rutgers-acm-site",
  },
  {
    index: 2,
    title: "Club 405",
    synopsis: "A summary of research around harassment of Virtual AI and Robotic Influencers on Instagram",
    description: "During my time at Rutgers University, I participated in a research project for the Digital Studies department in which we researched harassment of Virtual Influencers on Instagram. We focused the research around the account of a character called '@lilmiquela'. This account claims to be a real being that is robotic, not unlike Sofia the Robot, however it is simply a 3D model of a character created by a company called Brud. Because of the ambiguity of facts surrounding this account it gets a lot of harassment, and we were interested to see what kind of harassment was most common for a virtual being to receive.",
    link: "http://club-405.com",
    previewImageLink: "https://cpt-images.s3.us-east-2.amazonaws.com/club405Demo.png",
    repo: "https://github.com/chri55/club405",
    tags: ["JavaScript", "HTML", "CSS", "Python"],
    slug: "club-405",
  },
  {
    index: 3,
    title: "Search-and-Evacuation Algorithm Simulator",
    synopsis: "Research on distributed algorithms for mobile agents on a  geometric field.",
    description: "I collaborated on this project during my time as a research assistant at the Rutgers University CCIB. The aim was to build an application to simulate and visualize search-and-evacuate algorithms for mobile agents in a known geometry. We started with simulations on a disk, and from there moved to other regular polygons and the 1-dimensional line. The original was written in Javascript with D3.js, and later we rewrote the backend to utilize Python for the data simulation. (NOTE: The repo for this project is private as it belongs to Rutgers.)",
    link: "https://dbushta.github.io/BotAlgorithms/disk/circleShowcase.html",
    previewImageLink: "https://cpt-images.s3.us-east-2.amazonaws.com/botAlgDemo.png",
    repo: "https://dbushta.github.io/BotAlgorithms/disk/circleShowcase.html",
    tags: ["JavaScript", "HTML", "CSS", "D3.js", "Python", "Django", "Amazon Web Services"],
    slug: "search-evacuate-simulator",
  },
];

module.exports = portfolioItems;
