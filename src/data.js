export const navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "experience", title: "Experience" },
    { id: "education", title: "Education" },
    { id: "contact", title: "Contact" },
  ];
  
  export const socialLinks = [
    {
      id: "github",
      url: "https://github.com/Aniket04087021",
      icon: "FaGithub",
    },
    {
      id: "linkedin",
      url: "https://www.linkedin.com/in/aniket-gupta-94952425a/",
      icon: "FaLinkedinIn",
    },
    {
      id: "twitter",
      url: "https://twitter.com/aniket_dev",
      icon: "FaTwitter",
    },
    {
      id: "instagram",
      url: "https://www.instagram.com/the_aniketgupta0408?igsh=OWZocjVuYmxxaHZz",
      icon: "FaInstagram",
    },
  ];
  
  export const aboutData = {
    description: "I'm a passionate web developer with expertise in creating responsive and interactive web applications. With a strong foundation in both frontend and backend technologies, I strive to build seamless user experiences that combine aesthetics with functionality. My goal is to create web solutions that not only meet but exceed client expectations.",
    resumeLink: "Aniket Gupta Resume (2).pdf",
  };
  
  export const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", proficiency: 90 },
        { name: "CSS", proficiency: 85 },
        { name: "JavaScript", proficiency: 85 },
        { name: "React", proficiency: 80 },
        { name: "Vue.js", proficiency: 70 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", proficiency: 75 },
        { name: "Express", proficiency: 70 },
        { name: "MongoDB", proficiency: 65 },
        { name: "SQL", proficiency: 75 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", proficiency: 80 },
        { name: "Webpack", proficiency: 60 },
        { name: "Docker", proficiency: 55 },
        { name: "Figma", proficiency: 70 },
        {name:"Web Flow", proficiency:75},
        {name:"WordPress", proficiency:70}
      ],
    },
  ];
  
  export const projectsData = [
    {
      id: "project1",
      title: "Anii Care App",
      description: "ANII Care is a comprehensive hospital booking system designed to streamline appointment scheduling for patients and healthcare providers. Built as a full-stack web application, it ensures an efficient and user-friendly experience for booking medical consultations.",
      image: "anii care.png",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      sourceCode: "https://github.com/Aniket04087021/Anii-care.git",
      liveDemo: "https://anii-care.vercel.app/",
    },
    {
      id: "project2",
      title: "Anii Hotel",
      description: "ANII Hotel is a full-stack web application that simplifies the hotel booking process by allowing users to browse, select, and book hotel rooms effortlessly. It provides an intuitive interface for both customers and hotel administrators to manage bookings efficiently.",
      image: "anii hotel.png",
      tags: ["React js", "MongoDB", "Node js", "Express","Tailwind CSS"],
      sourceCode: "https://github.com/Aniket04087021/ANII-Hotel.git",
      liveDemo: "https://anii-hotel.netlify.app/",
    },
    {
      id: "project3",
      title: "Anii Naukri",
      description: "A full-stack job portal built using the MERN stack to connect job seekers with employers.Features include job listings, applications, user authentication, and employer dashboards.Designed a responsive UI/UX for seamless navigation and an efficient job search experience.",
      image: "Anii Naukri.png",
      tags: ["React js", "API Integration", "Node js", "MongoDB","JWT"],
      sourceCode: "https://github.com/Aniket04087021/Job-portal.git",
      liveDemo: "https://job-portal-tlyh.vercel.app/",
    },
    {
  id: "project4",
  title: "Task Manager App",
  description: "A full-stack task management application built using the MERN stack. Users can sign up or log in using JWT-based authentication, and perform CRUD operations on tasks. Features include adding tasks, marking them as completed, editing task details, and deleting tasks. Designed with a clean and responsive UI for a smooth user experience.",
  image: "Task Manager.png",
  tags: ["React js", "Node js", "Express js", "MongoDB","SCSS", "CRUD"],
  sourceCode: "https://github.com/Aniket04087021/Task-Manager.git",
  liveDemo: "https://task-manager-mezo.vercel.app/"
},
{
  id: "project5",
  title: "Ticket Pop",
  description: "A full-stack movie booking application built using the MERN stack with authentication and user management powered by Clerk. Users can sign up, log in, and manage their profiles securely through Clerk’s authentication system, ensuring a smooth onboarding experience. The app enables users to browse movies, filter by genre or language, select show timings, and book seats with instant confirmation.",
  image: "TicketPop.png",
  tags: ["React js", "Node js", "Express js", "MongoDB","Tailwind CSS", "CRUD"],
  sourceCode: "https://github.com/Aniket04087021/Ticket-Pop",
  liveDemo: "https://ticket-pop-2h36.vercel.app/"
},
{
  id: "project6",
  title: "Weather Chatbot AI Agent",
  description: "An AI-powered chatbot application that provides real-time weather updates and forecasts based on user queries. Built using the MERN stack, the app integrates an intelligent chat interface where users can interact naturally to get location-based weather insights. It leverages the Mastra Weather Agent streaming API for live weather data, offering a seamless conversational experience and responsive design across devices.",
  image: "weather.png",
  tags: ["React js", "Node js", "Express js", "MongoDB", "OpenAI API", "Tailwind CSS", "Mastra API"],
  apiUsage: "POST https://millions-screeching-vultur.mastra.cloud/api/agents/weatherAgent/stream",
  sourceCode: "https://github.com/Aniket04087021/Weather-chat",
  liveDemo: "https://weather-chat-peach.vercel.app/"
},


  ];
  
  export const experienceData = [
    {
      company: "Suvidha Foundation.",
      position: "Data Science Developer",
      period: "Dec 2024 - Jan 2025",
      description: "Contributed to stuttered speech dataset creation for research and awareness Assisted in social campaigns focused on speech disorder awareness.Supported digital initiatives and community projects using technical skills.",
      achievements: [
        "Successfully contributed to a stuttered speech dataset, aiding research and awareness.",
        "Played a key role in social campaigns to promote speech disorder awareness.",
        "Applied technical expertise to enhance digital initiatives for social impact."
      ]
    },
    {
      company: "OCTANET SERVICES PVT LTD.",
      position: "Web Development Intern",
      period: "Jun 2022 - Sep 2022",
      description: "Assisted in the development of client websites, gained experience with HTML, CSS, JavaScript, and various frontend frameworks, and participated in client meetings to understand project requirements.",
      achievements: [
        "Developed 5+ client websites under supervision",
        "Created reusable CSS components that were adopted company-wide",
        "Received 'Outstanding Intern' recognition"
      ]
    },
    {
      company: "TCET NSS TECHNICAL TEAM.",
      position: "Frontend Developer",
      period: "Jun 2023 - Sep 2024",
      description: "Contributed to the NSS website development, focusing on UI/UX design for a better user experience.",
      achievements: [
        "Assisted in maintaining and enhancing the digital presence of NSS activities.",
        "Collaborated with the team to implement technical solutions for social initiatives.",
        "Gained experience in web development, teamwork, and community service."

      ]
    }
  ];
  
  export const educationData = [
    {
      institution: "Thakur College of Engineering and Technology.",
      degree: "Bachelor of Computer Engineering",
      period: "2022 - 2026",
      description: "Studied core computer science subjects including algorithms, data structures, database systems, and web development. Participated in coding competitions and hackathons.",
      achievements: [ "8.8/10.0 CGPA"]
    },
    {
      institution: "K.M Agrawal College.",
      degree: "HSC",
      period: "Jan 2021 - Apr 2022",
      description: "Completed Higher Secondary Certificate (HSC) with a strong academic foundation.Developed analytical, problem-solving, and time management skills.Gained knowledge in core subjects, fostering a keen interest in technology.",
      achievements: ['Passed with First Class Result']
    },
    {
      institution: "New Sri Vani.",
      degree: "SSC",
      period: "Apr 2019 - Mar 2020",
      description: "Completed Secondary Certificate (SSC) with a strong academic foundation.Developed analytical, problem-solving, and time management skills.Gained knowledge in core subjects, Building Foundation for future Technology.",
      achievements: ['Passed with 86%']
    }
  ];
  
  export const contactInfo = {
    email: "gupta.aniket0408@gmail.com",
    phone: "+91 7021815645",
    address: "Kalayan (w), Maharashtra",
  };
