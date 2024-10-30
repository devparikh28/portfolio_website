import { Government, Walmart, ArvidStaffing, YorkU  } from "../assets/images";
import {
    css,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    nodejs,
    react,
    tailwindcss,
    MySQL,
    PowerBI,
    Python,
    Java,
    threejs,
    Figma,
    contact,
    Snake,
    AI,
    car
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: Figma,
        name: "Figma",
        type: "Design",
    },
    {
        imageUrl: MySQL ,
        name: "MySQL",
        type: "Database Management System",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Backend",
    },
    {
        imageUrl: PowerBI,
        name: "PowerBI",
        type: "Data Visualisation",
    },
    {
        imageUrl: Python,
        name: "Python",
        type: "Animation",
    },
    {
        imageUrl: Java,
        name: "Java",
        type: "Software Development",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Service Designer",
        company_name: "Treasury Board Scretariat",
        icon: Government,
        iconBg: "#a2d2ff",
        date: "Sept 2024 - Present",
        points: [
            "Work closely with teams to align service design strategies with security and transition needs, ensuring compliance and reliability.",
            "Contribute to initiatives that digitize and streamline the OPS Security Screening System, focusing on enhancing efficiency and user experience.",
            "Design solutions that prioritize user experience while boosting the efficiency of security processes, contributing to a more effective system.",
            "Leverage Miro, FigJam, and Figma for process mapping and workflow design, identifying areas for improvement and ensuring user-centered design.",
        ],
    },
    {
        title: "Wait Staff",
        company_name: "Arvid Staffing",
        icon: ArvidStaffing,
        iconBg: "#b7e4c7",
        date: "May 2023 - Present",
        points: [
            "Display a proactive approach to addressing guest concerns or issues, swiftly resolving any challenges to maintain guest satisfaction.",
            "Thrive in a fast-paced and dynamic environment, adapting to varying guest preferences and needs while maintaining a positive and welcoming demeanor.",
            "Maintain effective communication with kitchen and bar staff to ensure timely preparation and guaranteeing a seamless dining experience.",
        ],
    },
    {
        title: "AV Tech/Bartender/Caterer",
        company_name: "York University",
        icon: YorkU,
        iconBg: "#fbc3bc",
        date: "Aug 2023 - Aug 2024",
        points: [
            "Managed AV setup and troubleshooting for flawless presentations, collaborating closely with event planners for optimal results.",
            "Crafted tailored cocktails and managed seamless bar operations, fostering a welcoming and professional atmosphere.",
            "Oversaw setup and service for corporate events, delivering high-quality, memorable dining experiences.",
        ],
    },
    {
        title: "Customer Experience Associate",
        company_name: "Walmart",
        icon: Walmart,
        iconBg: "#accbe1",
        date: "Nov 2022 - Aug 2023",
        points: [
            "Excelled in delivering exceptional customer service, assisting patrons and resolving inquiries to maintain a welcoming atmosphere.",
            "Demonstrated strong conflict resolution skills, handling customer issues with empathy and diplomacy for positive outcomes.",
            "Consistently received positive feedback and commendations, contributing to enhanced customer relations and a harmonious environment.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/devparikh28',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/dev-parikh-/',
    }
];

export const projects = [
    {
        iconUrl: AI,
        theme: 'btn-back-red',
        name: 'AI Desktop Assistant',
        description: 'Developed a voice-controlled AI Desktop Assistant using Python and OpenAI’s API, enabling seamless interaction for tasks like web browsing, multimedia playback, and application launching. Integrated natural language processing, error handling, and data recording for a smooth, efficient user experience.',
        link: 'https://github.com/devparikh28',
    },
    {
        iconUrl: Snake,
        theme: 'btn-back-green',
        name: 'The Snake Game',
        description: 'Created a classic Snake Game using Python and Tkinter, incorporating intuitive controls, score tracking, and interactive graphics for an engaging user experience. Implemented game mechanics like snake movement, collision detection, and food generation.',
        link: 'https://github.com/devparikh28',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'The Rev Machine',
        description: 'Developed The Rev Machine, an interactive car information website using HTML, CSS, and JavaScript. Designed a responsive interface with animations to enhance user engagement, providing detailed and visually appealing automotive data.',
        link: 'https://github.com/devparikh28/Car-Info-Website',
    },
    
];