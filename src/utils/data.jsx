import { FaLaptopCode } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";

const navLinks = [
  {
    href: "#",
    title: "home",
  },
  {
    href: "#services",
    title: "services",
  },
  {
    href: "#skills",
    title: "skills",
  },
  {
    href: "#portfolio",
    title: "potfolio",
  },
  {
    href: "#contact",
    title: "contact",
  },
];

const typewriter = [
  "sidra mursaleen",
  "mern stack developer",
  "mobile app developer",
];

const socialLink = [
  {
    top: "-20px",
    right: { base: "105px", md: "115px" },
    icon: FaLinkedinIn,
    iconColor: "#fff",
    bgColor: "#0e76a8",
    href: "https://www.linkedin.com/in/sidra-mursaleen-56a77b2a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    top: { base: "110px", md: "120px" },
    left: "-20px",
    icon: FaGithub,
    iconColor: "#fff",
    bgColor: "black",
    href: "https://github.com/sidra-mursaleen-21",
  },
  {
    bottom: "-20px",
    left: { base: "105px", md: "115px" },
    icon: FaFacebookF,
    iconColor: "#fff",
    bgColor: "#3b5998",
  },
  {
    top: { base: "110px", md: "120px" },
    right: "-20px",
    icon: MdOutlineEmail,
    iconColor: "#fff",
    bgColor: "#ea4335",
    href: "mailto: sidramursaleen21@gmail.com",
  },
];

const project = [
  {
    width: { base: "100%", sm: "450px", md: "350px", lg: "500px" },
    height: { base: "250px", sm: "400px", md: "290px", lg: "350px" },
    image: "/images/web-5.png",
    title: "home interior decoration website",
    languages: [
      {
        language: "html",
        percent: 90,
      },
      {
        language: "css",
        percent: 90,
      },
      {
        language: "javascript",
        percent: 50,
      },
    ],
    paragraph:
      "I developed a sleek and modern Home Interior Decoration website using HTML, CSS, and JavaScript. The project showcases my ability to create visually appealing and user-friendly designs, with smooth animations and responsive layouts that adapt seamlessly across devices. This site highlights my passion for combining aesthetic design with functional code to create engaging user experiences.",
    preview: true,
    href: "https://home-decoration-913a5.web.app/",
    github: "https://github.com/sidra-mursaleen-21/DECORIFY",
  },
  {
    width: { base: "100%", sm: "450px", md: "350px", lg: "500px" },
    height: { base: "250px", sm: "400px", md: "290px", lg: "350px" },
    image: "/images/web-6.png",
    title: "blood bank website",
    languages: [
      {
        language: "react js",
        percent: 90,
      },
      {
        language: "node js",
        percent: 50,
      },
      {
        language: "mongo db",
        percent: 50,
      },
    ],
    paragraph:
      "I developed a blood bank website using React JS, Node JS, and MongoDB. The platform allows users to search for blood donations, manage donor information, and streamline the donation process. It features a secure backend with Node.js and MongoDB, and a user-friendly React JS frontend. This project showcases my full-stack development skills in creating real-world solutions.",
    preview: true,
    href: "https://mini-hakathon-289c6.web.app/dashboard",
    github: "https://github.com/sidra-mursaleen-21/mini-hakathon",
  },
  {
    width: "300px",
    height: "600px",
    image: "/images/app-2.jfif",
    title: "task management app",
    languages: [
      {
        language: "react native",
        percent: 90,
      },
      {
        language: "node js",
        percent: 40,
      },
      {
        language: "mongo db",
        percent: 30,
      },
    ],
    paragraph:
      "I developed a task management app using React Native, tailored specifically for Android devices. The app features a sleek and user-friendly interface, enabling users to efficiently manage and organize their daily tasks. This project focuses on delivering a high-quality frontend experience, showcasing my expertise in creating responsive and visually appealing mobile applications.",
    github: "https://github.com/sidra-mursaleen-21/hakathonApp",
  },
  {
    width: { base: "100%", sm: "450px", md: "350px", lg: "500px" },
    height: { base: "250px", sm: "400px", md: "290px", lg: "350px" },
    image: "/images/web-4.png",
    title: "software house website",
    languages: [
      {
        language: "react js",
        percent: 90,
      },
    ],
    paragraph:
      "I developed a dynamic software house website using React JS, focusing on a seamless user experience and responsive design. The project showcases my skills in modern front-end development, with an emphasis on clean, maintainable code and effective component structuring to create a professional and engaging web presence.",
    preview: true,
    href: "https://software-house-7afec.web.app/",
    github: "https://github.com/sidra-mursaleen-21/software-house",
  },
];

const skills = [
  {
    skill: "html/css",
    percentage: "90%",
    top: "10%",
  },
  {
    skill: "react js",
    percentage: "75%",
    top: "30%",
  },
  {
    skill: "react native",
    percentage: "70%",
    top: "20%",
  },
  {
    skill: "javascript / typescript",
    percentage: "80%",
    top: "30%",
  },
  {
    skill: "mongo db",
    percentage: "75%",
    top: "30%",
  },
  {
    skill: "node js / express js",
    percentage: "50%",
    top: "60%",
  },
];

const services = [
  {
    icon: FaLaptopCode,
    heading: "web development",
    text: "I can develop impressive PWA(Progressive Web App) website with firebase with MongoDB database, google and Facebook authentication and utilizing Rest APIs, also develop node backend.",
  },
  {
    icon: MdPhoneAndroid,
    heading: "app development",
    text: "I can develop cross platform apps with firebase database and Facebook and google authentication and utilizing Rest APIs. I can develop e-commerce mobile app with CMS (redux) and backend (firebase or node).",
  },
  {
    icon: FaDatabase,
    heading: "backend $ database",
    text: "I specialize in backend development, creating secure and efficient server-side solutions using Node.js and MongoDB. My services ensure reliable data management and seamless integration with frontends.",
  },
];

export { project, skills, services, typewriter, socialLink, navLinks };
