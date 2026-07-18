import { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin, FileText, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Avatar from '/avatar.png';
// React Icons
import { FaReact, FaPython, FaJava, FaLinux, FaDocker } from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiTailwindcss, 
  SiSpring, SiHtml5, SiCss3, SiNodedotjs, SiExpress, 
  SiAmazonwebservices, SiJenkins, SiAngular, SiPytorch, SiOpencv, 
  SiMicrosoftazure,  
} from 'react-icons/si';
import { DiPostgresql } from 'react-icons/di';

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const experience = [
    {
      role: "Machine Learning Developer Intern",
      company: "Ontario Power Generation",
      period: "May 2026 – Present",
      image: "/opg.jpg",
      bullets: [
        "Developed a computer vision pipeline using Python, PyTorch, and OpenCV, training and optimizing an R-CNN model for automated vehicle detection and counting with 90% detection accuracy, reducing costs by $200K+ annually.",
        "Engineered a scalable ML pipeline using Python and Azure Databricks, using reproducible preprocessing, MLflow experiment tracking, Azure ML Registry versioning, and GitHub Actions CI/CD for automated model deployment."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Fidelity Canada",
      period: "Sept 2025 – Dec 2025",
      image: "/fidelity.jpg",
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
      image: "/teranet.jpg",
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
      description: "Full-stack blog platform built with PERN stack. Features secure authentication and rich text editing.",
      image: "/personalBlog.png",
      tags: ["PostgreSQL", "Express", "React", "Node.js", "TailwindCSS"],
      github: "https://github.com/Arussel1/blogAPI",
      demo: "https://blog-client-rose.vercel.app"
    },
    {
      title: "Message Board",
      description: "Backend web application with robust relational data structures and session management.",
      image: "/messageBoard.png",
      tags: ["Java", "Spring Boot", "Thymeleaf", "PostgreSQL"],
      github: "https://github.com/Arussel1/messageBoard",
      demo: "https://messageboard111-ac85598e9130.herokuapp.com"
    },
    {
      title: "Cloud Storage",
      description: "Highly scalable cloud storage web app inspired by Google Drive with file upload and management.",
      image: "/cloudStorage.png",
      tags: ["Node.js", "Express", "Supabase", "PrismaORM"],
      github: "https://github.com/Arussel1/simplified-google-drive",
      demo: "https://simplified-google-drive.onrender.com/login"
    },
    {
      title: "File Organizer",
      description: "Python automation tool that sorts and categorizes local files into designated folders by extension.",
      image: "/fileOrganizer.png",
      tags: ["Python", "Scripting", "GUI"],
      github: "https://github.com/Arussel1/fileOrganizer"
    }
  ];

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: <FaPython color="#3B82F6" /> },
        { name: "Java", icon: <FaJava color="#3B82F6" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3B82F6" /> },
        { name: "JavaScript", icon: <SiJavascript color="#3B82F6" /> },
        { name: "SQL", icon: <DiPostgresql color="#3B82F6" /> }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact color="#06B6D4" /> },
        { name: "Angular", icon: <SiAngular color="#06B6D4" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss color="#06B6D4" /> },
        { name: "HTML5", icon: <SiHtml5 color="#06B6D4" /> },
        { name: "CSS3", icon: <SiCss3 color="#06B6D4" /> }
      ]
    },
    {
      title: "Backend & ML",
      skills: [
        { name: "Spring Boot", icon: <SiSpring color="#8B5CF6" /> },
        { name: "Node.js", icon: <SiNodedotjs color="#8B5CF6" /> },
        { name: "Express", icon: <SiExpress color="#8B5CF6" /> },
        { name: "PyTorch", icon: <SiPytorch color="#8B5CF6" /> },
        { name: "OpenCV", icon: <SiOpencv color="#8B5CF6" /> }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Docker", icon: <FaDocker color="#10B981" /> },
        { name: "AWS", icon: <SiAmazonwebservices color="#10B981" /> },
        { name: "Azure", icon: <SiMicrosoftazure color="#10B981" /> },
        { name: "Jenkins", icon: <SiJenkins color="#10B981" /> },
        { name: "Linux", icon: <FaLinux color="#10B981" /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-200 font-sans selection:bg-[#3B82F6] selection:text-white">
      
      {/* Sticky Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0F172A]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
            NL
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          </div>
          <button className="px-5 py-2 text-sm font-medium bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors">
            Resume
          </button>
        </div>
      </nav>

{/* Hero Section */}
      <section id="about" className="relative pt-40 pb-20 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Left Column: Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              {/* Here is your typing animation back! */}
              <div className="text-[#3B82F6] font-mono text-xl mb-4 typing-text">
               Hi, I am Noal Le_
              </div>

              <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
                Machine Learning Engineer <br />
                <span className="text-slate-400">& Full Stack Developer.</span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                Building scalable AI systems and production-grade software. Focused on distributed systems, modern web architecture, and creating measurable business impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="px-8 py-4 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center gap-2">
                  View Projects <ChevronRight size={18} />
                </a>
                <a href="https://github.com/Arussel1" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-[#111827] border border-white/10 hover:bg-white/5 text-white font-medium transition-all flex items-center gap-2">
                  <Github size={18} /> GitHub
                </a>
              </div>
            </motion.div>

            {/* Right Column: Floating Avatar */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
              className="relative hidden md:block"
            >
              {/* Floating Wrapper */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative"
              >
                {/* Glow behind avatar */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6] to-[#06B6D4] rounded-full blur-3xl opacity-30"></div>
                
                {/* Avatar Image */}
                <div className="relative w-72 h-72 rounded-full border-4 border-white/5 overflow-hidden bg-[#111827] shadow-2xl">
                  <img 
                    src={Avatar} 
                    alt="Noal Le" 
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* Pop-in Hello Bubble */}
                <motion.div
                  initial={{ scale: 0, x: -20, y: 20 }}
                  animate={{ scale: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 300, damping: 15 }}
                  className="absolute top-8 -left-8 bg-white text-[#0F172A] px-5 py-3 rounded-2xl rounded-br-sm font-bold shadow-xl flex items-center gap-2"
                >
                  <span className="text-xl">👋</span> Hi, I'm Noal!
                </motion.div>
              </motion.div>
            </motion.div>

          </div>


        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <span className="h-px w-8 bg-[#3B82F6]"></span> Experience
          </h2>
          
          <div className="space-y-6">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-white/10 transition-all group"
              >
                <div className="flex flex-col sm:flex-row gap-6 mb-6">
                  {/* Logo Container */}
                  <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 p-2 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <img src={job.image} alt={job.company} className="w-full h-auto object-contain" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{job.role}</h3>
                        <p className="text-[#3B82F6] font-medium mt-1">{job.company}</p>
                      </div>
                      <span className="text-sm font-medium text-slate-400 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#06B6D4] shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <span className="h-px w-8 bg-[#06B6D4]"></span> Technical Arsenal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#111827] border border-white/5"
              >
                <h3 className="text-lg font-semibold text-white mb-6">{category.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-default">
                      <div className="text-2xl">{skill.icon}</div>
                      <span className="text-xs font-medium text-slate-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <span className="h-px w-8 bg-[#8B5CF6]"></span> Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl bg-[#111827] border border-white/5 hover:border-[#3B82F6]/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)]"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#0F172A]/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-6 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#3B82F6] transition-colors">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                      <Github size={16} /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#111827]" />
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something Amazing.</h2>
          <p className="text-lg text-slate-400 mb-10">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:noal.le.work@gmail.com" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0F172A] font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
              <Mail size={18} /> Send Message
            </a>
            <div className="flex gap-4 w-full sm:w-auto justify-center">
              <a href="https://github.com/Arussel1" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-[#111827] border border-white/10 hover:bg-white/5 text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-[#111827] border border-white/10 hover:bg-white/5 text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <button className="p-4 rounded-full bg-[#111827] border border-white/10 hover:bg-white/5 text-white transition-colors">
                <FileText size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Portfolio;