export const personalInfo = {
  name: "Akshat Jain",
  title: "Software Developer | Full Stack Developer",
  email: "akshat1910j@gmail.com",
  phone: "+91 9171249029",
  location: "IIITM Gwalior",
  bio: "Innovative and software developer with a passion for building dynamic and user-friendly web applications. Experienced in developing responsive, high-performance websites using modern frameworks like Next.Js, React.js and Vue.js. Currently pursuing an Integrated M.Tech in Information Technology from IIITM Gwalior.",
  about:
    "I am a passionate and driven software developer with a strong foundation in computer science fundamentals, including Data Structures, Algorithms, and Object-Oriented Programming. My journey in web development began with a desire to create seamless and engaging digital experiences. I thrive in collaborative environments and enjoy tackling complex problems to deliver efficient and scalable solutions. As the Executive Head at E-Cell, IIIT Gwalior, I have honed my leadership skills by fostering innovation within the student community. I am committed to continuous learning and am always exploring new technologies to enhance my skill set.",
  resumeUrl:
    "https://drive.google.com/file/d/1KWao_m2czofYEIU2zoY8vy5GAj1d8fUc/view", // You can add your resume PDF here
  socialLinks: {
    github: "https://github.com/aka-akshatj",
    linkedin: "https://linkedin.com/in/19akshatj",
    leetcode: "https://leetcode.com/u/aka_akshatj/",
    email: "mailto:akshat1910j@gmail.com",
  },
};

export const experience = [
  {
    id: 1,
    company: "Wealth-I/O",
    position: "Vue Js Developer Intern",
    duration: "July 2023 - October 2023",
    location: "Remote",
    responsibilities: [
      "Developed wealthio.com, a professional website for financial advisors and their clients.",
      "The website was built using reusable VueJS components and implemented v-binding to pass all data dynamically.",
      "Ensured a fluent and user-friendly UI that is completely responsive across all mobile, tablet, and laptop devices.",
      "Utilized animations and styling to create a captivating product.",
    ],
  },
  {
    id: 2,
    company: "Bodhie Vik",
    position: "Full Stack Developer Intern",
    duration: "April 2023 - July 2023",
    location: "Remote",
    responsibilities: [
      "Developed a fully responsive website, bodhievik.com, for the client from the ground up.",
      "The website is made of reusable React components for every part of the site.",
      "The website is fully responsive for all mobile, tablet, and laptop screens using Tailwind CSS.",
      "Integrated libraries such as Box Model, Grid, React Router, and Redux to ensure a seamless user experience.",
      "Used Email.Js to integrate forms to email.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Collab-io",
    description:
      "A real-time collaborative code editor that enables multiple users to join and edit simultaneously using unique room IDs. The application features real-time data streaming via WebSockets.",
    technologies: ["React", "Node.js", "WebSockets", "react-hot-toast"],
    features: [
      "Real-time collaborative editing",
      "Unique room ID system",
      "WebSocket integration",
      "User notifications",
    ],
    liveDemo: "#", // Replace with actual URL
    github: "#", // Replace with actual URL
    image: "/project1.jpg", // You can add project images
  },
  {
    id: 2,
    title: "Flixir",
    description:
      "A MERN-based social media web application with features including user authentication, CRUD operations for posts, likes, and comments.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Redux"],
    features: [
      "User authentication with JWT and Google OAuth",
      "CRUD operations for posts",
      "Like and comment functionality",
      "Redux state management",
      "6+ REST API routes",
    ],
    liveDemo: "#", // Replace with actual URL
    github: "#", // Replace with actual URL
    image: "/project2.jpg", // You can add project images
  },
];

export const skills = {
  "Web Development": [
    "React JS",
    "Vue.js",
    "Vuex",
    "Node.js",
    "MongoDB",
    "Firebase",
    "Tailwind CSS",
    "Express.js",
    "Redux",
    "Context API",
    "Material UI",
    "Bootstrap",
    "MySQL",
    "EJS",
    "REST APIs",
    "Mongoose",
  ],
  "Developer Tools": [
    "Git",
    "GitHub",
    "Postman",
    "Thunder Client",
    "Figma",
    "Canva",
    "Vercel",
    "Render",
    "Netlify",
  ],
  "Programming Languages": [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "HTML5",
    "CSS3",
  ],
};

export const achievements = [
  {
    id: 1,
    title: "Runner-up at Webkriti Hackathon",
    organization: "IIITM Gwalior",
    year: "2024",
  },
  {
    id: 2,
    title: "Top Performer in Competitive Programming Sprint",
    organization: "IIIT Gwalior",
    year: "2024",
  },
  {
    id: 3,
    title: "Core Team/Event Head at Aurora 24",
    organization: "IIIT Gwalior (Annual Fest)",
    year: "2024",
  },
  {
    id: 4,
    title: "Member of Uthaan Club",
    organization: "IIIT Gwalior",
    year: "2023-Present",
  },
  {
    id: 5,
    title: "Executive Head at E-Cell",
    organization: "IIIT Gwalior",
    year: "2023-Present",
  },
];

export const education = {
  degree: "Integrated M.Tech in Information Technology",
  institution: "IIITM Gwalior",
  duration: "2021 - 2026",
  status: "Currently Pursuing",
};
