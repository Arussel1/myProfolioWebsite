import { useState } from 'react';
import { Github, ExternalLink, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import Avatar from '/avatar.png'
import { FaReact, FaPython, FaJava, FaLinux, FaCog, FaUserFriends, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiCplusplus, SiMongodb, SiTailwindcss, SiSpring, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiGithubactions, SiAmazonwebservices, SiJira, SiJenkins, SiAngular, SiPytorch, SiOpencv, SiMicrosoftazure } from 'react-icons/si';
import { DiPostgresql } from 'react-icons/di';
import { AiFillGitlab } from 'react-icons/ai';
interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
  }
  interface FormData {
    name: string;
    email: string;
    message: string;
  }
 
interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}
 
const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
 
  const experience: ExperienceItem[] = [
    {
      role: "Machine Learning Developer Intern",
      company: "Ontario Power Generation",
      period: "May 2026 – Present",
      bullets: [
        "Developed a computer vision pipeline using Python, PyTorch, and OpenCV, training and optimizing an R-CNN model for automated vehicle detection and counting with 90% detection accuracy, reducing costs by $200K+ annually.",
        "Engineered a scalable ML pipeline using Python and Azure Databricks, using reproducible preprocessing, MLflow experiment tracking, Azure ML Registry versioning, and GitHub Actions CI/CD for automated model deployment."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Fidelity Canada",
      period: "Sept 2025 – Dec 2025",
      bullets: [
        "Eliminated 50+ vulnerable dependencies across 12 Java microservices by integrating Sonatype SCA into Jenkins CI pipelines, enforcing automated security gates on every build and reducing critical CVE exposure to zero.",
        "Automated Swagger OpenAPI documentation for 12 microservices by building a dedicated AWS CodePipeline, eliminating all manual documentation effort and cutting doc-related onboarding time by 20 hours.",
        "Achieved 90%+ unit test coverage across 12 microservices by using a markdown RAG knowledge base of test templates, enabling Copilot to auto-generate JUnit 5/Mockito tests and reducing manual test writing by 10 hours per sprint."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Teranet",
      period: "Jan 2025 – Aug 2025",
      bullets: [
        "Migrated a production Angular 9 app to v19, refactoring 100+ components to standalone architecture with signals; cut deployment time by 60% and reduced bundle size by 20%.",
        "Containerized and orchestrated 4 production applications with Docker and OpenShift, migrating to Azure and eliminating on-premise VM overhead, delivering $10K in annual infrastructure savings.",
        "Designed Jenkins CI/CD pipelines automating build, test, and promotion across UAT and production environments, recovering 12+ engineering hours monthly and enabling same-day deployments.",
        "Identified and resolved a backend security vulnerability by improving Java/Spring Boot exception handling logic; prevented sensitive error exposure and aligned API responses with secure coding practices."
      ]
    }
  ];
 
  const projects = [
    {
      title: "Personal Blog",
      description: "Full-stack blog platform built with PERN stack",
      image: "/personalBlog.png",
      tags: ["PostgreSQL", "Express", "React", "Node.js", "Typescript", "TailwindCSS", "REST API", "PrismaORM"],
      github: "https://github.com/Arussel1/blogAPI",
      demo: "https://blog-client-rose.vercel.app"
    },
    {
      title: "Message Board",
      description: "Small backend web application built using Java/Spring Boot and PostgreSQL",
      image: "/messageBoard.png",
      tags: ["Java", "Spring Boot", "Thymeleaf", "PostgreSQL"],
      github: "https://github.com/Arussel1/messageBoard",
      demo: "https://messageboard111-ac85598e9130.herokuapp.com"
    },
    {
      title: "Cloud storage",
      description: "Backend cloud storage web app inspired from having a personal Google Drive",
      image: "/cloudStorage.png",
      tags: ["Pug.js", "Node.js", "Express", "Supabase", "PostgreSQL", "PrismaORM"],
      github: "https://github.com/Arussel1/simplified-google-drive",
      demo: "https://simplified-google-drive.onrender.com/login"
    },
    {
      title: "File Organizer",
      description: "A Python script that automates file organization by sorting and categorizing files into designated folders based on their extensions",
      image: "/fileOrganizer.png",
      tags: ["Python", "Scripting", "GUI"],
      github: "https://github.com/Arussel1/fileOrganizer"
    }
  ];
 
  const skills = [
    { name: "Python", icon: <FaPython className='mx-auto' color="#306998" /> },
    { name: "JavaScript", icon: <SiJavascript className='mx-auto' color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript className='mx-auto' color="blue" /> },
    { name: "C++", icon: <SiCplusplus className='mx-auto' color="#00599C" /> },
    { name: "Java", icon: <FaJava className='mx-auto' color="#007396" /> },
    { name: "SQL (PostgreSQL)", icon: <DiPostgresql className='mx-auto' color="#336791" /> },
    { name: "HTML", icon: <SiHtml5 className='mx-auto' color="#E34F26" /> },
    { name: "CSS", icon: <SiCss3 className='mx-auto' color="#1572B6" /> },
    { name: "React.js", icon: <FaReact className='mx-auto' color="cyan" /> },
    { name: "Angular", icon: <SiAngular className='mx-auto' color="#DD0031" /> },
    { name: "Node.js", icon: <SiNodedotjs className='mx-auto' color="green" /> },
    { name: "Express.js", icon: <SiExpress className='mx-auto' color="black" /> },
    { name: "MongoDB", icon: <SiMongodb className='mx-auto' color="green" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className='mx-auto' color="#38B2AC" /> },
    { name: "Spring Boot", icon: <SiSpring className='mx-auto' color="#6DB33F" /> },
    { name: "PyTorch", icon: <SiPytorch className='mx-auto' color="#EE4C2C" /> },
    { name: "OpenCV", icon: <SiOpencv className='mx-auto' color="#5C3EE8" /> },
    { name: "Docker", icon: <FaDocker className='mx-auto' color="#2496ED" /> },
    { name: "Azure", icon: <SiMicrosoftazure className='mx-auto' color="#0078D4" /> },
    { name: "AWS", icon: <SiAmazonwebservices className='mx-auto' color="gray" /> },
    { name: "Jenkins", icon: <SiJenkins className='mx-auto' color="#D24939" /> },
    { name: "Git", icon: <AiFillGitlab className='mx-auto' color="#F05032" /> },
    { name: "Linux", icon: <FaLinux className='mx-auto' color="black" /> },
    { name: "Jira", icon: <SiJira className='mx-auto' color="#0052CC" /> },
    { name: "SDLC", icon: <FaCog className='mx-auto' color="gray" /> },
    { name: "Agile", icon: <FaUserFriends className='mx-auto' color="orange" /> },
    { name: "CI/CD (GitHub Actions)", icon: <SiGithubactions className='mx-auto' color="#2088FF" /> }
  ];
 
 
  const validateForm = () => {
    const errors:FormErrors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
    } else {
      setFormErrors(errors);
    }
  };
 
  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Noal</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
 
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${darkMode ? 'bg-gray-800' : 'bg-white'} py-20`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4 typing-text">Hi, I am Noal Le</h1>
              <h2 className="text-xl mb-2 ">Web developer</h2>
              <p className="text-gray-600 dark:text-gray-800 mb-6">
              Hi, I’m Noal, a passionate full stack developer. With a strong foundation in web development and a focus on creating robust, user-friendly applications.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-100 text-green-800 px-6 py-2 rounded-md hover:bg-green-200 transition-colors duration-200 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
              >
                Contact Me
              </motion.button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 bg-yellow-300 rounded-full overflow-hidden">
                <img src={Avatar} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
 
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-10 ml-8 last:mb-0"
              >
                <span className={`absolute -left-[9px] flex items-center justify-center w-4 h-4 rounded-full ring-4 ${darkMode ? 'bg-blue-500 ring-gray-900' : 'bg-blue-500 ring-gray-50'}`}></span>
                <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6`}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{job.period}</span>
                  </div>
                  <p className={`font-medium mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{job.company}</p>
                  <ul className={`list-disc list-outside pl-5 space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {job.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 
      <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} py-20`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} rounded-lg shadow-md overflow-hidden transform transition-all duration-200 hover:shadow-xl`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-200 hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tagIndex}
                        whileHover={{ scale: 1.1 }}
                        className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} px-2 py-1 rounded-md text-sm transition-colors duration-200`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      href={project.demo} 
                      className="flex items-center hover:text-blue-500 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      href={project.github} 
                      className="flex items-center hover:text-blue-500 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                className={`${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} rounded-lg p-6 text-center transition-colors duration-200 cursor-pointer`}
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <div className="font-medium">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 
      <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} py-20`}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'}`}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              {formErrors.name && <p className="text-red-500 mt-1">{formErrors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'}`}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              {formErrors.email && <p className="text-red-500 mt-1">{formErrors.email}</p>}
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'}`}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
              {formErrors.message && <p className="text-red-500 mt-1">{formErrors.message}</p>}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transform transition-all duration-200 hover:shadow-lg"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </section>
    </div>
  );
};
 
export default Portfolio;
