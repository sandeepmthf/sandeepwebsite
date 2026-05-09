import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Award, Code, Briefcase, GraduationCap, Trophy, Download, ArrowUp, Code2 } from 'lucide-react';
import profilePhoto from '../imports/image.png';
import { Navigation } from './components/Navigation';
import { projects, experiences, skills, certifications, coursework } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              className="mb-8 flex justify-center"
            >
              <motion.div
                className="relative w-56 h-56 md:w-72 md:h-72"
                whileHover={{ scale: 1.05, rotateZ: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated glowing rings */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 rounded-3xl blur-2xl opacity-30"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                ></motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-3xl blur-xl opacity-20"
                  animate={{
                    scale: [1.1, 1, 1.1],
                    rotate: [360, 180, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                ></motion.div>

                {/* Profile image container */}
                <div className="relative w-full h-full">
                  {/* Animated gradient border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 p-1"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className="w-full h-full rounded-3xl overflow-hidden bg-background">
                      <motion.img
                        src={profilePhoto}
                        alt="Sandeep Kumar"
                        className="w-full h-full object-cover object-top"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>

                  {/* Corner accents */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  ></motion.div>
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1
                    }}
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl mb-4 font-bold bg-gradient-to-r from-foreground via-foreground to-foreground bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hi, I'm{' '}
                <motion.span
                  className="bg-gradient-to-r from-orange-600 via-red-600 to-rose-600 bg-clip-text text-transparent inline-block"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  Sandeep Kumar
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-3xl text-muted-foreground mb-6 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.1, color: "#ea580c" }}
                >
                  Full Stack Developer
                </motion.span>
                {' & '}
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.1, color: "#dc2626" }}
                >
                  AI Enthusiast
                </motion.span>
              </motion.p>
              <motion.p
                className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Crafting seamless digital experiences with modern technologies.
                Passionate about building scalable applications and exploring AI innovations.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
            >
              {[
                { icon: Phone, text: '+91-6367648334', href: 'tel:+916367648334', delay: 0 },
                { icon: Mail, text: 'sandeep636764@gmail.com', href: 'mailto:sandeep636764@gmail.com', delay: 0.1 },
                { icon: Linkedin, text: 'LinkedIn', href: 'https://linkedin.com/in/sandeep-kumar-869189333', delay: 0.2 },
                { icon: Github, text: 'GitHub', href: 'https://github.com/sandeepmthf', delay: 0.3 },
                { icon: Code2, text: 'LeetCode', href: 'https://leetcode.com/u/sandeepmth/', delay: 0.4 }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + item.delay, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 border border-transparent hover:border-primary/30 transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span className="text-sm">{item.text}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8, boxShadow: "0 0 0 rgba(220, 38, 38, 0)" }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.08, y: -4, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full flex items-center gap-2 font-medium overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">View My Work</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.div>
              </motion.button>

              <motion.a
                href="https://drive.google.com/file/d/12j1fbqPTltOj0QmoUXmRgpAiQGxCZPrM/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 border-2 border-border rounded-full flex items-center gap-2 font-medium backdrop-blur-sm overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  <Download className="w-5 h-5" />
                </motion.div>
                <span className="relative z-10">Download Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full mb-4"
              >
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Academic Background</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                Education
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-rose-500/10 rounded-3xl blur-xl"
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative bg-card p-8 md:p-10 rounded-3xl border border-border hover:border-primary/50 transition-all shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      Ajay Kumar Garg Engineering College
                    </h3>
                    <p className="text-xl text-muted-foreground mb-2">B.Tech - Computer Science</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:text-right">
                    <p className="text-muted-foreground font-medium">09 2023 – 09 2027</p>
                    <p className="text-muted-foreground">Ghaziabad, India</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Core Coursework:
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {coursework.map((course, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.05,
                          duration: 0.4,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{
                          scale: 1.08,
                          y: -4,
                          rotateZ: 2,
                          transition: { duration: 0.2 }
                        }}
                        className="relative group bg-gradient-to-br from-accent to-accent/50 px-4 py-3 rounded-xl text-sm font-medium border border-border hover:border-primary/50 transition-all cursor-default shadow-sm overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                        <span className="relative z-10">{course}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full mb-4 border border-orange-500/20"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Code className="w-5 h-5 text-primary" />
                </motion.div>
                <span className="text-sm font-medium">Featured Work</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
              >
                Projects
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground max-w-2xl mx-auto"
              >
                Explore my latest projects showcasing full-stack development and innovative solutions
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    y: -12,
                    rotateY: 2,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10"
                  style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500"></div>

                  <div className="relative p-6">
                    <div className="flex justify-between items-start mb-6">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-lg"
                          animate={{
                            opacity: [0, 0.5, 0],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 1
                          }}
                        />
                        <div className="relative bg-white p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                          <motion.img
                            src={project.logo}
                            alt={project.title}
                            className="w-16 h-16 object-contain"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                          />
                        </div>
                      </motion.div>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.2 }}
                        className="text-xs px-3 py-1 bg-accent rounded-full text-muted-foreground"
                      >
                        {project.date}
                      </motion.span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-medium mb-4">{project.tech}</p>

                    <ul className="space-y-2 mb-6">
                      {project.description.map((desc, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex gap-2">
                          <span className="text-primary mt-0.5 flex-shrink-0">✦</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-accent hover:bg-primary hover:text-primary-foreground rounded-lg text-sm font-medium transition-all group/btn"
                      >
                        <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </a>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-red-500/50 transition-all group/btn"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Bottom gradient accent */}
                  <div className="h-1 bg-gradient-to-r from-orange-600 via-red-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-rose-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full mb-4"
              >
                <Briefcase className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Professional Journey</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                Experience
              </h2>
            </div>

            <div className="relative space-y-8">
              {/* Animated Timeline line */}
              <motion.div
                className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-red-500 to-rose-500 hidden md:block overflow-hidden"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"
                  animate={{
                    y: ["0%", "100%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ x: 10 }}
                  className="relative group"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Animated Timeline dot */}
                  <motion.div
                    className="absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-br from-orange-600 to-red-600 border-4 border-background hidden md:block"
                    initial={{ scale: 0, boxShadow: "0 0 0 0 rgba(220, 38, 38, 0)" }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.5 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(220, 38, 38, 0)",
                        "0 0 0 10px rgba(220, 38, 38, 0.1)",
                        "0 0 0 0 rgba(220, 38, 38, 0)"
                      ]
                    }}
                    transition={{
                      scale: {
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 200
                      },
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }
                    }}
                  />

                  <div className="md:ml-20 relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl blur-xl"
                      animate={{
                        opacity: [0, 0.5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />

                    <motion.div
                      className="relative bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary/50 transition-all shadow-lg overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div
                        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 via-red-600 to-rose-600"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                        style={{ transformOrigin: "left" }}
                      />
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium">{exp.role}</p>
                        </div>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent rounded-full text-sm text-muted-foreground mt-2 md:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {exp.description.map((desc, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.6 + i * 0.1 }}
                            className="text-sm text-muted-foreground flex gap-3"
                          >
                            <motion.span
                              className="text-primary mt-0.5 flex-shrink-0"
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                            >
                              ✦
                            </motion.span>
                            <span>{desc}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full mb-4"
              >
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Technical Expertise</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text mb-4">
                Skills
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A comprehensive toolkit of modern technologies and frameworks
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? -10 : 10 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group relative"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl blur-xl"
                    animate={{
                      opacity: [0, 0.5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />

                  <div className="relative bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg">
                        <Code className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {items.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.1 + i * 0.05,
                            type: "spring",
                            stiffness: 200,
                            damping: 10
                          }}
                          whileHover={{
                            scale: 1.15,
                            y: -5,
                            rotate: 5,
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="group/skill relative px-4 py-2 bg-gradient-to-r from-accent to-accent/70 rounded-full text-sm font-medium border border-border hover:border-primary/50 transition-all cursor-default shadow-sm overflow-hidden"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-full"
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          <span className="relative z-10">
                            {skill}
                          </span>
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/* Certifications */}
              <div>
                <div className="text-center md:text-left mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full mb-4"
                  >
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Verified Credentials</span>
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert, index) => {
                    const Component = cert.link ? motion.a : motion.div;
                    const linkProps = cert.link ? {
                      href: cert.link,
                      target: "_blank",
                      rel: "noopener noreferrer"
                    } : {};

                    return (
                      <Component
                        key={index}
                        {...linkProps}
                        initial={{ opacity: 0, x: -30, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.08,
                          type: "spring",
                          stiffness: 150
                        }}
                        whileHover={{ x: 8, scale: 1.02 }}
                        className="group relative block"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-xl blur-lg"
                          animate={{
                            opacity: [0, 0.3, 0]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.2
                          }}
                        />
                        <div className="relative bg-card p-5 rounded-xl border border-border group-hover:border-primary/50 transition-all flex items-start gap-4 shadow-sm overflow-hidden">
                          <motion.div
                            className="p-2 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg flex-shrink-0"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <ExternalLink className="w-5 h-5 text-primary" />
                          </motion.div>
                          <span className="text-sm font-medium">{cert.name}</span>
                          {cert.link && (
                            <motion.div
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500"
                              initial={{ scaleX: 0 }}
                              whileHover={{ scaleX: 1 }}
                              transition={{ duration: 0.3 }}
                              style={{ transformOrigin: "left" }}
                            />
                          )}
                        </div>
                      </Component>
                    );
                  })}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <div className="text-center md:text-left mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full mb-4"
                  >
                    <Trophy className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Milestones</span>
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
                </div>
                <div className="space-y-6">
                  <motion.a
                    href="https://drive.google.com/file/d/1UI0sKB9rokUFB6g3Hr9gUMWmT3tHFJ-P/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 30, rotateY: 15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="group relative block"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl blur-xl"
                      animate={{
                        opacity: [0, 0.5, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity
                      }}
                    />
                    <div className="relative bg-card p-6 rounded-2xl border border-border group-hover:border-primary/50 transition-all shadow-lg overflow-hidden">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="p-2 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg">
                          <Trophy className="w-6 h-6 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold mb-1">Hack4Health - HealthTech Hackathon</h3>
                            <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-sm px-3 py-1 bg-accent rounded-full inline-block text-muted-foreground">IIIT Delhi</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Participated in Hack4Health - The HealthTech Hackathon organized by Indraprastha Institute of Information Technology (IIIT), Delhi.
                      </p>
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ transformOrigin: "left" }}
                      />
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/posts/sandeep-kumar-869189333_hackathon-codeclash-thestreetcoder-share-7349800871855099904-zkTa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFPahZEBxVePng5iJldJUn4NmzBP3tybZLk"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 30, rotateY: 15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.1,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="group relative block"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 rounded-2xl blur-xl"
                      animate={{
                        opacity: [0, 0.5, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: 0.5
                      }}
                    />
                    <div className="relative bg-card p-6 rounded-2xl border border-border group-hover:border-primary/50 transition-all shadow-lg overflow-hidden">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="p-2 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-lg">
                          <Trophy className="w-6 h-6 text-amber-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold mb-1">Code Clash</h3>
                            <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-sm px-3 py-1 bg-accent rounded-full inline-block text-muted-foreground">06 2025</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Participated in a competitive hackathon, solving real-world problems under time constraints and collaborating to build a working prototype.
                      </p>
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ transformOrigin: "left" }}
                      />
                    </div>
                  </motion.a>

                  <motion.div
                    initial={{ opacity: 0, x: 30, rotateY: 15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="group relative"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl blur-xl"
                      animate={{
                        opacity: [0, 0.5, 0],
                        rotate: [0, -5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: 1
                      }}
                    />
                    <div className="relative bg-card p-6 rounded-2xl border border-border group-hover:border-primary/50 transition-all shadow-lg overflow-hidden">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="p-2 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg">
                          <Code className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">Competitive Programming</h3>
                          <p className="text-sm px-3 py-1 bg-accent rounded-full inline-block text-muted-foreground">2025 – Present</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        Solved 200+ DSA problems across platforms including LeetCode, GeeksforGeeks, and other coding platforms.
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-accent rounded-full overflow-hidden relative">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '75%' }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.5,
                              delay: 0.5,
                              ease: "easeOut"
                            }}
                            className="h-full bg-gradient-to-r from-green-600 to-emerald-600 relative overflow-hidden"
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{
                                x: ["-100%", "200%"]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            />
                          </motion.div>
                        </div>
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 2, type: "spring", stiffness: 200 }}
                          className="text-xs font-medium text-muted-foreground"
                        >
                          200+ solved
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-rose-600 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="flex justify-center gap-4 mb-10">
              {[
                { icon: Mail, href: "mailto:sandeep636764@gmail.com", delay: 0 },
                { icon: Linkedin, href: "https://linkedin.com/in/sandeep-kumar-869189333", delay: 0.1 },
                { icon: Github, href: "https://github.com/sandeepmthf", delay: 0.2 },
                { icon: Code2, href: "https://leetcode.com/u/sandeepmth/", delay: 0.3 }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: social.delay,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{
                    scale: 1.15,
                    y: -8,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.4 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative p-4 bg-card rounded-full border border-border hover:border-primary/50 transition-all shadow-lg hover:shadow-xl overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 2, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
                  </motion.div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                © 2026 <span className="font-medium text-foreground">Sandeep Kumar</span>. Crafted with passion and code.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0
            }}
            exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
            whileHover={{
              scale: 1.15,
              y: -4,
              rotate: [0, -10, 10, 0],
              transition: { duration: 0.4 }
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-red-500/50 transition-all z-40 overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-600"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 2, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              animate={{
                y: [0, -3, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.div>

            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white"
              animate={{
                scale: [1, 1.5],
                opacity: [0.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}