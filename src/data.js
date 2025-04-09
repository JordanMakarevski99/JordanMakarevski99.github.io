import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaSyncAlt, FaPuzzlePiece, FaBrain } from 'react-icons/fa'; // Added FaSyncAlt, FaPuzzlePiece, FaBrain
import { SiReact, SiNodedotjs, SiAngular, SiVuedotjs, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiSpring, SiGraphql, SiMysql, SiGit } from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import cvFile from './assets/jordan_makarevski_cv.pdf';

export const personalInfo = {
  name: "Jordan Makarevski",
  title: "Software Developer",
  location: "Strumica, North Macedonia",
  email: "jordanmakarevski@gmail.com",
  phone: "+389 78 432 210",
  cv: cvFile,
  socials: [
    { name: "GitHub", url: "https://github.com/jordanmakarevski99", icon: FaGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/jordan-makarevski-34114720a/", icon: FaLinkedin },
  ],
  contact: [
     { text: "+389 78 432 210", icon: FaPhone },
     { text: "jordanmakarevski@gmail.com", icon: FaEnvelope },
     { text: "Strumica, North Macedonia", icon: FaMapMarkerAlt },
  ]
};

export const summary = `
I’m a passionate Frontend Software Developer currently working at Steets. With experience in a wide range of technologies including React, Angular, Vue, Java Spring Boot, Node.js, Tailwind, GraphQL, and MySQL.
I specialize in building high-quality, user-centric web applications.
I focus on creating intuitive, responsive interfaces and efficient solutions, while collaborating closely with teams to deliver projects successfully.
`;

export const skills = [
    { name: "React", icon: SiReact },
    { name: "Angular", icon: SiAngular },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Vue.js", icon: SiVuedotjs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Java", icon: SiJavascript },
    { name: "Spring Boot", icon: SiSpring },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "GraphQL", icon: SiGraphql },
    { name: "MySQL", icon: SiMysql },
    { name: "Git", icon: SiGit },
    { name: "RESTful APIs", icon: MdApi }, // Updated
    { name: "Agile Methodologies", icon: FaSyncAlt }, // Updated
    { name: "Problem Solving", icon: FaPuzzlePiece }, // Updated
    { name: "Critical Thinking", icon: FaBrain }, // Updated
];

export const experience = [
  {
    title: "Frontend Developer",
    company: "Steets",
    location: "Strumica, North Macedonia",
    duration: "January 2025 - Present",
    description: [
      "Developing and maintaining user-facing features using modern frontend frameworks.",
      "Collaborating with designers and backend developers to implement pixel-perfect UIs.",
      "Optimizing application performance for maximum speed and scalability.",
      "Writing clean, maintainable, and testable code.",
    ],
  },
  {
    title: "Software Developer",
    company: "CodeIT Solution",
    location: "Strumica, North Macedonia",
    duration: "February 2022 - November 2023",
    description: [
      "Created engaging user interfaces using front-end frameworks like Angular and React.",
      "Expanded expertise to the back end, working with Java Spring Boot and Node.js.",
      "Contributed to numerous projects, ranging from e-commerce applications to HR solutions, playing a leadership role in some.",
      "Developed a peer-to-peer accommodation marketplace application (React front-end, Node.js back-end).",
      "Created SQL queries to query the database for web applications.",
      "Developed and tested web services with RESTful APIs.",
    ],
  },
  {
    title: "Software Developer",
    company: "MegaSoft",
    location: "Strumica, North Macedonia",
    duration: "July 2021 - December 2021",
    description: [
      "Developed a responsive and intuitive user interface using React, enhancing ease of navigation.",
      "Implemented robust and scalable server-side logic using Node.js.",
      "Integrated various APIs and ensured smooth database operation, contributing to system performance and reliability.",
      "Instrumental in streamlining workflows and improving efficiency across departments.",
    ],
  },
  {
    title: "Intern Software Developer",
    company: "ITgma",
    location: "Strumica, North Macedonia",
    duration: "March 2021 - June 2021",
    description: [
      "Acquired knowledge of Angular and introduced to Agile software development.",
      "Acquired practical skills in Vue.js through hands-on project work.",
      "Learned Git version control principles and practices.",
    ],
  },
];

export const education = [
  {
    institution: "University Of Computer Science and Engineering - Strumica",
    degree: "Computer Science and Engineering",
    duration: "2017 - 2022",
  },
  {
    institution: "High School Jane Sandanski - Strumica",
    degree: "High School Diploma",
    duration: "2013 - 2017",
  },
];

export const languages = [
    { name: "English", level: "Fluent" },
    { name: "Macedonian", level: "Native Language" },
    { name: "Serbian", level: "Fluent" },
    { name: "Spanish", level: "Beginner" },
    { name: "German", level: "Beginner" },
]
export const projects = [
  {
    title: "Products Store App",
    description: "This project showcases a modern e-commerce UI built using React and Tailwind CSS, featuring intuitive product navigation (search, sort, paginate) and a complete cart-to-checkout user flow simulation.",
    technologies: ["React", "Node.js", "Express", "MySQL", "RESTful API"],
    imageUrl: "../public/img/product-store.png",
    githubUrl: "https://github.com/jordanmakarevski99/products-store",
    liveUrl: "https://jordanmakarevski99.github.io/products-store/",
  },
  {
    title: "Recipe Meal Planner",
    description: "This React and Tailwind application integrates with TheMealDB, allowing users to search recipes, visually plan weekly meals using drag-and-drop, and automatically generate a corresponding grocery list.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    imageUrl: "../public/img/recipe-planner.png",
    githubUrl: "https://github.com/jordanmakarevski99/recipe-meal-planner",
    liveUrl: "https://jordanmakarevski99.github.io/recipe-meal-planner",
  },
  {
    title: "Trivia Quiz",
    description: "Challenge your trivia knowledge with an interactive app built using vanilla JavaScript, and the Open Trivia Database API, featuring timed questions, category selection, hints, and persistent high scores.",
    technologies: ["HTML5", "JavaScript", "CSS"],
    imageUrl: "../public/img/quiz-app.png",
    githubUrl: "https://github.com/jordanmakarevski99/quiz-project",
    liveUrl: "https://jordanmakarevski99.github.io/quiz-project/",
  },
]