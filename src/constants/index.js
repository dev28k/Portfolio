import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  expo,
  reactBootstrap,
  coverImage,
  fashionCover,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Web App Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Expo",
    icon: expo,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "React Bootstrap",
    icon: reactBootstrap,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "Xtatic Tech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "November 2020 - March 2021",
    points: [
      "Developing and maintaining mobile applications using React Native and other related technologies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "InceptionTechPk.com",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2021 - July 2021",
    points: [
      "Developing and maintaining accessories and gadgets selling point website with CMS using HTML, CSS, Bootstrap, MySQL, Php.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Handling end-to-end project deployment, ensuring a seamless transition from development to a live, functional website.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "TradeApe",
    icon: shopify,
    iconBg: "#383E56",
    date: "August 2021 - December 2021",
    points: [
      "Developing and maintaining website using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Digital Pakistan Lab, NUST",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "March 2022 - Present",
    points: [
      "Developing and maintaining mobile applications and web applications using React, React Native, Expo, Nodejs, Express and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Handling end-to-end project deployment, ensuring a seamless transition from development to a live, functional website.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
    name: "M Zain",
    designation: "CFO",
    company: "BFS Marketing",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like him.",
    name: "Mr. Shoaib",
    designation: "CEO",
    company: "DPL",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
    name: "M Zain",
    designation: "CFO",
    company: "BFS Marketing",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const projects = [
  {
    name: "Art Genz App Template",
    description:
      "React Native template provides a robust foundation for building an AI art generation app, whether for personal use, education, or as a creative tool.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "UI",
        color: "green-text-gradient",
      },
      {
        name: "Template",
        color: "pink-text-gradient",
      },
      {
        name: "artApp",
        color: "pink-text-gradient",
      },
    ],
    image: coverImage,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fashion App Template",
    description:
      "Creative & Minimilistic fashion store with our Pure React Native & Expo eCommerce UI template, ensuring a chic mobile shopping experience on iOS and Android.",
    tags: [
      {
        name: "pure",
        color: "blue-text-gradient",
      },
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "ecommerce",
        color: "green-text-gradient",
      },
      {
        name: "template",
        color: "pink-text-gradient",
      },
    ],
    image: fashionCover,
    source_code_link: "https://github.com/",
  },
  {
    name: "Food & Recipe Template",
    description:
      "Unlock a world of culinary delights with our React Native Recipe App template — seamless, stylish, and ready to elevate your cooking experience. 🍲✨",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "UI",
        color: "green-text-gradient",
      },
      {
        name: "template",
        color: "pink-text-gradient",
      },
      {
        name: "recipe",
        color: "pink-text-gradient",
      },
      {
        name: "food",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
