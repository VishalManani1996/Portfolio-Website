import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import freshFruitProject from "../assets/projects/freshFruitProject.png";
import weatherApp from "../assets/projects/weatherApp.png";
import snackbar from "../assets/projects/snackbar.png";
import expenseTracker from "../assets/projects/expenseTracker.png";
import todolist from "../assets/projects/todolist.png";
import ECommerceDashboard from "../assets/projects/ECommerceDashboard.jpeg";

export const HERO_CONTENT = `I am React.js Developer with 2 years of experience in building responsive web applications. I am good in creating complex features, integrating RESTful APIs, and optimizing mobile performance. I'm excited to work on building innovative features that enhance user experiences and solve real-world problems. I’m particularly interested in developing scalable web applications with React.js and Node.js, focusing on creating seamless, interactive interfaces and efficient backend services. Exploring new technologies and integrating advanced functionalities like real-time data processing and AI-driven features are also areas I’m keen to dive in`;

export const ABOUT_TEXT = `I am a dedicated and versatile React Js developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Node.js, Express.js, MongoDB, Python and Django. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "March 2023 - Present",
    role: "React Js Developer",
    company: "Impaac Idea Foundation",
    description: [
      "Spearheaded frontend development for an NGO platform, enhancing the admin dashboard to facilitate donation management using React.js and Node.js.",
      "Implemented advanced analytics featuring dynamic pie charts and summary cards using Material UI, elevating donation contributions by 20%.",
      "Engineered a KYC verification component that cut down completion times by 40%, improving NGO onboarding and ensuring regulatory compliance.",
      "Developed a performance evaluation module that enabled real-time tracking and visualization of productivity metrics, increasing team performance by 20%.",
      "Collaborated with backend developers to design and integrate multiple RESTful APIs, enhancing platform functionality and data exchange.",
      `Optimized the admin dashboard's responsive design for mobile devices, creating a user-friendly interface accessible across various devices.`,
      "Version Control System: Git, Gitlab",
    ],
    technologies: [
      "Javascript",
      "React.js",
      "Express.js",
      "mongoDB",
      "Material UI",
    ],
  },
  {
    year: "September 2022 - February 2023",
    role: "Web Developer",
    company: "Confio Engineering Solution Pvt Ltd",
    description: [
      "Assisted in the design and development of a Django-based web application for managing expenses and invoices, using HTML, CSS, and Bootstrap.",
      "Contributed to the design and implementation of an ERP system that manages orders and sub-orders, improving monthly order handling using Django and PostgreSQL.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Django",
      "Python",
      "PostgreSQL",
      "GIT",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E Commerce Dashbord",
    image: ECommerceDashboard,
    description:
      "E-commerce Dashboard project is a full-featured MERN stack application with CRUD operations, providing a user-friendly interface for managing products and customer data. Built with Tailwind CSS for sleek, responsive design, the dashboard is optimized for both desktop and mobile use, secured with authentication and middleware. This application allows admins to easily add, edit, delete, and view product details, making it a dynamic and efficient tool for e-commerce management.",
    technologies: [
      "MongoDB",
      "Express Js",
      "React Js",
      "Node Js",
      "Tailwind CSS",
    ],
    link: "https://e-commerce-mern-project-frontend.vercel.app",
    source_code:
      "https://github.com/VishalManani1996/E-Commerce-MERN-Project/tree/main",
  },
  {
    title: "Fruit Selling E-Commerce Website",
    image: freshFruitProject,
    description:
      "Fully Responsive Fruits Selling Ecommerce website with React + Tailwind CSS and Framer-motion.",
    technologies: ["HTML", "CSS", "React Js", "Tailwind CSS", "Framer Motion"],
    link: "http://fruit-selling-vmm.netlify.app/",
    source_code: "https://github.com/VishalManani1996/Fresh-Fruit-Store",
  },
  {
    title: "Expense Tracker",
    image: expenseTracker,
    description:
      "Created a expense tracker app using React Js hooks like useState, useContext and useReducer and context API.",
    technologies: ["HTML", "CSS", "JavaScript", "React Js"],
    link: "https://expense-tracker-weld-one.vercel.app/",
    source_code: "https://github.com/VishalManani1996/Expense-Tracker",
  },
  {
    title: "Weather App",
    image: weatherApp,
    description:
      "A Weather App for a website using HTML, CSS, and JavaScript. Current weather data was fetched from a free API key provided by OpenWeatherMap and  information such as temperature, weather conditions, humidity, and wind speed based on the city entered by the user was displayed. I used JavaScript to retrieve and display the weather data on the website. The app also featured a search box where users could input a city name to view the weather information for that specific location.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://weather-app-vmm.netlify.app/",
    source_code: "https://github.com/VishalManani1996/Weather-App",
  },
  {
    title: "To do list",
    image: todolist,
    description: `This To-Do List project is a simple React application that allows users to manage a list of tasks. Key features include:
Adding new tasks with a unique ID and displaying them in a list.
Marking tasks as completed by toggling a checkbox.
Deleting tasks from the list.
User input is handled dynamically using useState for managing the list and task input.
The UI includes an input field, add button, and list of tasks, with functionality to update, complete, or delete tasks easily.`,
    technologies: ["HTML", "CSS", "JavaScript", "React Js"],
    link: "https://to-do-app-for-list.vercel.app/",
    source_code: "https://github.com/VishalManani1996/To-Do-App-For-list",
  },
];

export const CONTACT = {
  address: "Pune, Maharashtra, India ",
  // phoneNo: " ********** ",
  email: "vishalmanani35@gmail.com",
};
