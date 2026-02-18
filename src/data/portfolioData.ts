import { PersonalInfo, Experience, Education, SkillGroup, Project } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Vishal Aggarwal",
  title: "Senior Software Consultant",
  description: "Curious by nature and driven by possibilities, I enjoy discovering my potential through building impactful solutions. With a strong foundation in backend, frontend, and system integration, I thrive on solving complex problems, staying positive, and continuously growing both in technology and in life. Trekking and programming keep me balanced and inspired.",
  img: "./data/profile.jpeg",
  email: "vishaggarwal94@gmail.com",
  location: "Melbourne, Australia",
  aboutMe: {
    part1: "I'm a passionate Software Developer with a strong foundation in backend and system integration. I enjoy developing reliable, scalable solutions that solve real-world problems and deliver business value. My experience spans building cloud-native applications, integrating distributed systems, and contributing across software development lifecycle.",
    part2: "Driven by curiosity and a love for discovery, I believe that life is full of possibilities both in technology and beyond. I bring a positive mindset to every challenge, constantly learning and growing along the way. Outside of work, I find inspiration in trekking and nature, which helps me stay grounded and focused."
  },
  social: {
    github: "https://github.com/vatechie",
    linkedin: "https://www.linkedin.com/in/vishal-aggarwal/",
    email: "mailto:vishaggarwal94@gmail.com"
  }
};

export const experience: Experience[] = [
  {
    title: "Senior Software Consultant",
    company: "Cognizant Technologies",
    link: "https://www.cognizant.com/us/en",
    period: "2022 - Present",
    description: "Led the design and implementation of scalable microservices and customer-centric backend solutions across cloud platforms (AWS, Azure, GCP) for top-tier clients in banking, retail, and logistics. Spearheaded feature development, API design, and performance optimization, while driving DevOps automation, production stability, and mentoring new team members to accelerate team productivity.",
    technologies: ["Java", "Spring-Boot", "Kafka", "Python", "Node.js", "Typescript", "PostgreSQL", "AWS", "Docker"]
  },
  {
    title: "Senior Software Developer",
    company: "Transunion",
    link: "https://www.transunion.com/",
    period: "2021 - 2022",
    description: "Developed and optimized a distributed event processing system for a media marketing platform, integrating full-stack features and scaling support for new advertisers. Accelerated large-scale data processing by 50% using Apache Airflow and BigQuery, led cloud migration to GCP, and delivered solutions aligned with SAFe Agile practices to support business growth.",
    technologies: ["Java", "Spring-Boot", "React", "Python", "Apache Airflow", "PostgreSQL", "AWS", "GCP"]
  },
  {
    title: "Senior Software Developer",
    company: "Wipro Technologies",
    link: "https://www.wipro.com/",
    period: "2015 - 2021",
    description: "Designed and delivered robust tools, data frameworks, and full-stack applications to support business-critical operations and improve system efficiency. Delivered scalable data migration pipelines and real-time monitoring dashboards using Kafka, Elasticsearch, InfluxDB, and Grafana. Modernized legacy systems by migrating to OpenShift and re-architecting reporting workflows, significantly improving performance and maintainability. Led engineering efforts and collaborated across teams to ensure high-quality, timely delivery of solutions.",
    technologies: ["Java", "Spring-Boot", "PL/SQL", "Oracle DB", "Oracle ERP", "Javascript", "Angular", "Mongo DB", "Kafka", "ELK Stack", "Openshift", "InfluxDB", "Grafana", "Shell Scripting"]
  }
];

export const education: Education[] = [
  {
    degree: "Master of Technology in Software Engineering",
    link: "https://www.bits-pilani.ac.in/",
    school: "Birla Institute of Technology and Science, India",
    period: "2015 - 2019",
    description: "Specialized in Software Engineering and Computer Science with Industry knowledge and experience."
  },
  {
    degree: "Bachelor of Science in Computer Science",
    link: "https://www.du.ac.in/",
    school: "University of Delhi, India",
    period: "2012 - 2015",
    description: "Major in Mathmatics and Computer Science with focus on algorithms, data structures, programming and software development."
  }
];

export const skills: SkillGroup[] = [
  {
    category: "Backend",
    skills: [
      { name: "Java", proficiency: 95 },
      { name: "Spring-Boot", proficiency: 90 },
      { name: "Node.js", proficiency: 85 },
      { name: "Python", proficiency: 80 },
      { name: "Express.js", proficiency: 80 },
      { name: "REST APIs", proficiency: 92 },
      { name: "Microservices", proficiency: 88 }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "Angular", proficiency: 85 },
      { name: "React", proficiency: 82 },
      { name: "Vue.js", proficiency: 72 },
      { name: "JavaScript", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
      { name: "HTML5", proficiency: 88 }
    ]
  },
  {
    category: "Database & Tools",
    skills: [
      { name: "PostgreSQL", proficiency: 88 },
      { name: "Oracle DB", proficiency: 85 },
      { name: "MongoDB", proficiency: 82 },
      { name: "Redis", proficiency: 75 },
      { name: "Elastic", proficiency: 80 },
      { name: "Git", proficiency: 92 },
      { name: "Docker", proficiency: 85 },
      { name: "AWS", proficiency: 82 },
      { name: "Jenkins", proficiency: 78 }
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Self Service Tool",
    description: "A comprehensive analytics dashboard for monitoring system performance and business metrics. Built with real-time data streaming, interactive charts, and customizable widgets. Supports multiple data sources and provides alerts for critical thresholds.",
    technologies: ["React", "TypeScript", "Node.js", "Kafka", "Elasticsearch", "Grafana", "InfluxDB"],
    image: "bg-gradient-to-br from-purple-400 to-pink-500",
    github: "https://github.com/vatechie",
    demo: ""
  },
  {
    title: "Account Directory Search Modernization",
    description: "Project to replace the Perl UI with AngularJS and use Elasticsearch as an intermediate to get the data from oracle database instead of legacy approach ofcalling PL/SQL procedures.",
    technologies: ["Java Jersey API", "Logstash", "Elasticsearch", "Shell Scripting"],
    image: "bg-gradient-to-br from-yellow-400 to-orange-500",
    github: "https://github.com/vatechie",
    demo: ""
  },
  {
    title: "Data Validation and Telemetry Framework",
    description: "Project has been executed to have the reporting tool to validate the production data of various data sources like Oracle DB, MongoDB, Elasticsearch as part of Tech transformation of customer sales tool.",
    technologies: ["Java", "Spring-Boot", "MongoDB", "Apache Drill", "InfuxDB", "Grafana", "Elasticsearch", "Java Mongo API", "Elasticsearch Java API"],
    image: "bg-gradient-to-br from-indigo-400 to-purple-500",
    github: "https://github.com/vatechie",
    demo: ""
  }
];
