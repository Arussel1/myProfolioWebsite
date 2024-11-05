import  { useState } from 'react';
import { Github, ExternalLink, Moon, Sun,  } from 'lucide-react';
import { motion } from 'framer-motion';
import Avatar from '/avatar.png'
import { FaReact, FaPython, FaJava, FaLinux, FaCog, FaUserFriends } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiCplusplus, SiMongodb, SiTailwindcss, SiSpring, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiGithubactions, SiAmazonwebservices, SiJira } from 'react-icons/si';
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
  
const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<FormErrors>({});


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
    { name: "Node.js", icon: <SiNodedotjs className='mx-auto' color="green" /> },
    { name: "Express.js", icon: <SiExpress className='mx-auto' color="black" /> },
    { name: "MongoDB", icon: <SiMongodb className='mx-auto' color="green" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className='mx-auto' color="#38B2AC" /> },
    { name: "Spring Boot", icon: <SiSpring className='mx-auto' color="#6DB33F" /> },
    { name: "AWS", icon: <SiAmazonwebservices className='mx-auto' color="gray" /> },
    { name: "Git", icon: <AiFillGitlab className='mx-auto' color="#F05032" /> },
    { name: "Linux", icon: <FaLinux className='mx-auto' color="black" /> },
    { name: "Jira", icon: <SiJira className='mx-auto' color="#0052CC" /> },
    { name: "SDLC", icon: <FaCog className='mx-auto' color="gray" /> }, // Generic cog icon for SDLC
    { name: "Agile", icon: <FaUserFriends className='mx-auto' color="orange" /> }, // Generic icon for Agile
    { name: "CI/CD (GitHub Actions)", icon: <SiGithubactions className='mx-auto' color="#2088FF" /> } // GitHub Actions icon
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
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden transform transition-all duration-200 hover:shadow-xl`}
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

      <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} py-20`}>
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

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              {formErrors.name && <p className="text-red-500 mt-1">{formErrors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              {formErrors.email && <p className="text-red-500 mt-1">{formErrors.email}</p>}
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className={`w-full px-4 py-2 rounded-md border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}
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
