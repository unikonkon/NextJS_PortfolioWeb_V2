import React, { useEffect, useState, useCallback } from 'react'
import { BlurFade } from '@/components/magicui/blur-fade'
import Image from 'next/image'
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react'

type ColorScheme = 'orange' | 'orangeLight' | 'blue' | 'yellow' | 'red' | 'green' | 'purple' | 'indigo';

interface PersonalProject {
  title: string;
  role: string;
  description: string;
  image: string;
  slideImages?: string[]; // เพิ่ม slideImages สำหรับ modal
  technologies: string[];
  githubUrl?: string;
  githubUrlFrontend?: string;
  githubUrlBackend?: string;
  githubUrlNodePullData?: string;
  demoUrl?: string;
  featured?: boolean;
  colorScheme: ColorScheme;
}

interface WorkProject {
  title: string;
  role: string;
  description: string;
  technologies: string[];
  features: string[];
  icon: string;
  colorScheme: ColorScheme;
  demoUrl?: string;
}

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState<'personal' | 'work'>('personal');
  const [selectedProject, setSelectedProject] = useState<PersonalProject | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [stars, setStars] = useState<Array<{ id: number, left: string, top: string, size: string, color: string, delay: string, duration: string }>>([]);

  useEffect(() => {
    // Generate stars only on client side to prevent hydration mismatch
    const generatedStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      color: ['#ffffff', '#00cfff', '#a259ff', '#7df9ff'][Math.floor(Math.random() * 4)],
      delay: `${Math.random() * 3}s`,
      duration: `${Math.random() * 2 + 2}s`
    }));
    setStars(generatedStars);
  }, []);

  // Modal functions
  const openModal = (project: PersonalProject) => {
    if (project.slideImages && project.slideImages.length > 0) {
      setSelectedProject(project);
      setCurrentSlide(0);
    }
  };

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    setCurrentSlide(0);
  }, []);

  const nextSlide = useCallback(() => {
    if (selectedProject && selectedProject.slideImages) {
      setCurrentSlide((prev) =>
        prev === selectedProject.slideImages!.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedProject]);

  const prevSlide = useCallback(() => {
    if (selectedProject && selectedProject.slideImages) {
      setCurrentSlide((prev) =>
        prev === 0 ? selectedProject.slideImages!.length - 1 : prev - 1
      );
    }
  }, [selectedProject]);

  // Keyboard navigation for modal
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextSlide();
          break;
        case 'Escape':
          e.preventDefault();
          closeModal();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, nextSlide, prevSlide, closeModal]);

  // Personal projects data
  const personalProjects: PersonalProject[] = [
    {
      title: "💼 Job Matching AI",
      role: "Full Stack Developer",
      description: "AI-powered job matching application that helps job seekers find ideal roles by analyzing resumes and matching them with relevant job opportunities using RAG and vector search technology.",
      image: "/project/JobMatching1.png",
      slideImages: [
        "/project/JobMatching1.png",
        "/project/JobMatching2.png",
        "/project/JobMatching3.png",
        "/project/JobMatching4.png",
        "/project/JobMatching5.png",
        "/project/JobMatching6.png",
        "/project/JobMatching7.png"
      ],
      featured: true,
      technologies: ["Next.js 16", "TypeScript", "Google Gemini Pro 1.5", "RAG", "IndexedDB", "TailwindCSS", "Node.js", "ulixee", "huggingface/transformers"],
      githubUrl: "https://github.com/unikonkon/NextJS_Job_MatchingAI",
      githubUrlNodePullData: "https://github.com/unikonkon/nodeJS_JobThai_Scraper",
      demoUrl: "https://jobmatchingai.vercel.app/",
      colorScheme: "indigo" as const
    },
    {
      title: "📰 Crypto News Analysis",
      role: "Full Stack Developer",
      description: "AI-powered crypto news aggregator with sentiment analysis and trending score using Google Gemini API. Real-time updates with RSS feeds from major crypto news sources.",
      image: "/project/CryptoNews3.png",
      slideImages: [
        "/project/CryptoNews1.png",
        "/project/CryptoNews2.png",
        "/project/CryptoNews3.png",
        "/project/CryptoNews4.png",
        "/project/CryptoNews5.png",
        "/project/CryptoNews6.png",
        "/project/CryptoNews7.png",
        "/project/CryptoNews8.png"
      ],
      technologies: ["Next.js", "TypeScript", "Supabase", "Google Gemini API", "TailwindCSS", "RSS Parser"],
      githubUrl: "https://github.com/unikonkon/NextJS_Crypto_News_Aggregator",
      demoUrl: "https://crypto-news-aggregator-alpha.vercel.app/",
      featured: true,
      colorScheme: "orange" as const
    },
    {
      title: "🎵 WebRecord Sound App",
      role: "Full Stack Developer",
      description: "Browser-based audio recording with IndexedDB storage, Firebase auth, and privacy-first approach.",
      image: "/project/project WebRecord1.png",
      slideImages: [
        "/project/project WebRecord1.png",
        "/project/project WebRecord2.png",
        "/project/project WebRecord3.png",
        "/project/project WebRecord4.png",
        "/project/project WebRecord5.png",
        "/project/project WebRecord6.png"
      ],
      technologies: ["React", "TypeScript", "TailwindCSS", "IndexedDB"],
      githubUrl: "https://github.com/unikonkon/React_WebRecord",
      demoUrl: "https://voice-record-phi.vercel.app/",
      featured: true,
      colorScheme: "blue" as const
    },
    {
      title: "📋 WEB Planning Generator",
      role: "Front-End Developer",
      description: "AI-powered website planning tool that generates project discovery documents and website flowcharts using Google Gemini API. Features 4-step wizard, export to PDF/Word, and Mermaid diagram generation.",
      image: "/project/project WEB Planning1.png",
      slideImages: [
        "/project/project WEB Planning1.png",
        "/project/project WEB Planning2.png",
        "/project/project WEB Planning3.png",
        "/project/project WEB Planning4.png",
        "/project/project WEB Planning5.png",
        "/project/project WEB Planning6.png",
        "/project/project WEB Planning7.png",
        "/project/project WEB Planning8.png"
      ],
      technologies: ["Next.js 15", "TypeScript", "TailwindCSS", "Google Gemini API", "Mermaid.js", "shadcn/ui", "IndexedDB"],
      githubUrl: "https://github.com/unikonkon/NextJS_WEB_Planning_Generator",
      demoUrl: "https://next-js-web-planning-generator.vercel.app",
      colorScheme: "purple" as const
    },
    {
      title: "📰 Crypto Sentiment Analysis",
      role: "Full Stack Developer",
      description: "Analyze the sentiment of cryptocurrencies using AI Gemini API to make better investment decisions. updates with RSS feeds from major crypto news sources.",
      image: "/project/CryptoSentiment1.png",
      slideImages: [
        "/project/CryptoSentiment1.png",
        "/project/CryptoSentiment2.png",
        "/project/CryptoSentiment3.png",
        "/project/CryptoSentiment4.png",
        "/project/CryptoSentiment5.png",
        "/project/CryptoSentiment6.png",
        "/project/CryptoSentiment7.png",
        "/project/CryptoSentiment8.png",
        "/project/CryptoSentiment9.png",
        "/project/CryptoSentiment10.png",
        "/project/CryptoSentiment11.png",
        "/project/CryptoSentiment12.png",
      ],
      technologies: ["Next.js", "TypeScript", "Supabase", "Google Gemini API", "TailwindCSS", "NestJS", "Three.js"],
      githubUrlFrontend: "https://github.com/unikonkon/FrontEnd_useNestJS_CryptoSentimentAnalysis",
      githubUrlBackend: "https://github.com/unikonkon/BackEnd_NestJS_CryptoSentimentAnalysis",
      demoUrl: "https://crypto-sentiment-analysis-ten.vercel.app/",
      colorScheme: "orangeLight" as const
    },
    {
      title: "📈 CryptoTracker",
      role: "Front-End Developer",
      description: "Modern cryptocurrency tracking with categorized views, search functionality, and 7-day price charts.",
      image: "/project/project CryptoTracker.png",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Recharts"],
      githubUrl: "https://github.com/unikonkon/NextJS_CryptoTracker",
      demoUrl: "https://crypto-tracker-drab-eta.vercel.app/",
      colorScheme: "yellow" as const
    },
    {
      title: "🎬 Netflix Clone",
      role: "Front-End Developer",
      description: "Responsive Netflix clone with modern UI/UX, movie browsing, and server-side rendering.",
      image: "/project/project Netflix.png",
      technologies: ["Next.js", "TypeScript", "TailwindCSS"],
      githubUrl: "https://github.com/unikonkon/NextJS_Netflix_App",
      demoUrl: "https://next-js-netflix-app-5egp.vercel.app/",
      colorScheme: "red" as const
    },
    {
      title: "🗣️ Text-to-Speech App",
      role: "Front-End Developer",
      description: "Web application for text-to-speech conversion with voice selection and multi-language support.",
      image: "/project/project texttospeech.png",
      technologies: ["Next.js", "TypeScript", "Web Speech API"],
      githubUrl: "https://github.com/unikonkon/NextJS_Text-to-Speech-App",
      demoUrl: "https://text-to-speech-app-kappa.vercel.app/",
      colorScheme: "green" as const
    },
    {
      title: "🇹🇭 PyThaiTTS App",
      role: "Full Stack Developer",
      description: "Full-stack Thai text-to-speech with FastAPI backend and PyThaiTTS integration.",
      image: "/project/project PyThaiTTS texttospeech.png",
      technologies: ["Next.js", "FastAPI", "Python", "PyThaiTTS"],
      githubUrl: "https://github.com/unikonkon/NextJS_Text-to-Speech-for-PyThaiTTS",
      colorScheme: "purple" as const
    },
    {
      title: "💼 Portfolio V1",
      role: "Front-End Developer",
      description: "Clean and minimalist portfolio website with responsive design principles.",
      image: "/project/project webport1.png",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Three.js"],
      githubUrl: "https://github.com/unikonkon/NextJs_WebProtfolio",
      demoUrl: "https://faradaybanana.vercel.app/",
      colorScheme: "indigo" as const
    }
  ];

  // Work projects data
  const workProjects: WorkProject[] = [
    {
      title: "ACT Project",
      role: "Full Stack Developer",
      description: "Full-stack development with data fetching from multiple sources, risk assessment logic, and Excel exports.",
      technologies: ["JavaScript", "TypeScript", "React", "Elasticsearch", "Express", "GitLab", "Jenkins", "Postman", "Ant Design"],
      features: [
        "Update the API for fetching data from the web",
        "Update the API for fetching data from the Kibana database",
        "Update the front-end view to reflect data from MA and the new database data sent",
        "Write Python logic for project risk assessment",
        "Redesign the flow for fetching data from 3 web pages: EGP, DBD, GOV",
        "Update the API for fetching data from the 3 web pages (EGP, DBD, GOV) based on the previous version",
        "Set up Jenkins processes to run commands for fetching project and company data",
        "Implement code paths for project and company data as required",
        "Create an Excel export for the required project and company data"
      ],
      icon: "📊",
      colorScheme: "yellow" as const
    },
    {
      title: "ACT Phase 2",
      role: "Full Stack Developer",
      description: "Enhanced project with advanced data fetching flows, database storage, and modern web interface.",
      technologies: ["JavaScript", "TypeScript", "Next.js", "Nodejs", "PostgreSQL", "Express", "GitLab", "Jenkins", "Postman", "Puppeteer", "Ant Design"],
      features: [
        "Design the flow for fetching project and company data from 3 web pages: EGP, DBD, and GOV",
        "Develop an API to fetch project data from the 3 web pages (EGP, DBD, GOV) and store it in the database",
        "Set up a Jenkins process to run commands for fetching project and company data",
        "Develop the web view for the front-end of Phase 2"
      ],
      icon: "🚀",
      colorScheme: "purple" as const,
      demoUrl: "https://actai.co/"
    },
    {
      title: "Iapp Speech Flow",
      role: "Full Stack Developer",
      description: "Mobile-to-web migration with Electron desktop app deployment for cross-platform compatibility.",
      technologies: ["JavaScript", "TypeScript", "Next.js", "PostgreSQL", "Express", "GitLab", "Jenkins", "Postman", "NextUI", "TailwindCSS", "Electron"],
      features: [
        "Plan the development of Iapp Speech Flow for Web and design the workflow",
        "Convert the mobile code into a web format using Next.js",
        "Design the code flow for Iapp Speech Flow on the Web",
        "Build the application as an Electron app for macOS and Windows"
      ],
      icon: "💬",
      colorScheme: "green" as const
    },
    {
      title: "NBTC - Drone Data Transmission",
      role: "Backend Developer",
      description: "Developed a Proxy API for transmitting drone data to mobile and web platforms, ensuring secure and compliant data transmission with NBTC regulations",
      technologies: ["JavaScript", "TypeScript", "PostgreSQL", "Express", "GitLab", "Jenkins", "Postman"],
      features: [
        "Developed an API for transmitting drone data to both mobile and web platforms, ensuring data is transmitted securely and in compliance with NBTC regulations",
        "Provided real-time logging and error handling to track ensure the integrity of data during transmission",
        "Presented the API functionality to the client, explaining how the API works and ensuring they understand how it complies with NBTC regulations"
      ],
      icon: "🚁",
      colorScheme: "blue" as const
    },
    {
      title: "IISI Hub of Talent",
      role: "Front-end Developer",
      description: "Talent recruitment platform with profile management system and role-based signup process. Features interactive profile browsing",
      technologies: ["JavaScript", "TypeScript", "React", "GitLab", "Jenkins", "Postman"],
      features: [
        "Connect the role data API from the signup process to display and edit the data in the view according to the design",
        "Connect the API flow for liking profiles and viewing the data in the system according to the design"
      ],
      icon: "👥",
      colorScheme: "orange" as const
    },
    {
      title: "Digital Touchpoint - Wellness Chatbot",
      role: "Full Stack Developer",
      description: "Wellness chatbot platform with comprehensive user management, authentication system, and package pricing dashboard. Built with Next.js and JWT authentication.",
      technologies: ["Next.js", "TypeScript", "JWT", "GitLab", "Jenkins", "Postman", "PostgreSQL"],
      features: [
        "Write an API from Next.js to retrieve, add, delete, and edit data for the signup process and add/remove package pricing information",
        "Write an authentication flow to protect users using JWT for login and viewing the user signup process",
        "Create a dashboard bot view to display package and user information"
      ],
      icon: "🤖",
      colorScheme: "indigo" as const
    }
  ];

  // Image Modal Component
  const ImageModal = () => {
    if (!selectedProject || !selectedProject.slideImages) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={closeModal}
      >
        <div
          className="max-w-5xl max-h-[100vh] mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          >
            <X size={24} />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image */}
          <div className="relative">
            <Image
              src={selectedProject.slideImages[currentSlide]}
              alt={`${selectedProject.title} - Slide ${currentSlide + 1}`}
              width={1200}
              height={800}
              className="object-contain max-h-[100vh] rounded-lg"
            />

            {/* Slide Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 text-white rounded-full text-sm">
              {currentSlide + 1} / {selectedProject.slideImages.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
            {selectedProject.slideImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`flex-shrink-0 w-16 h-12 rounded border-2 overflow-hidden transition-all ${index === currentSlide ? 'border-blue-500' : 'border-gray-600 hover:border-gray-400'
                  }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={64}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen p-10" style={{ background: 'linear-gradient(180deg, #050510 0%, #08081a 50%, #050510 100%)' }}>

      {/* Deep Space Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.04) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(103, 232, 249, 0.03) 0%, transparent 50%)'
          }}
        />
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full sprite-blink"
            style={{
              left: star.left,
              top: star.top,
              width: `calc(${star.size} * 0.6)`,
              height: `calc(${star.size} * 0.6)`,
              background: star.color,
              opacity: 0.35,
              animationDelay: star.delay,
              animationDuration: `calc(${star.duration} * 1.5)`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto pt-[60px] mb-24">

        {/* Image Modal */}
        <ImageModal />

        {/* Header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-medium bg-gradient-to-r from-purple-300/90 via-cyan-300/90 to-purple-300/90 bg-clip-text text-transparent mb-6">
              Projects
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Explore my journey through personal experiments and professional achievements
            </p>
          </div>
        </BlurFade>

        {/* Tab Navigation */}
        <BlurFade delay={0.2}>
          <div className="flex justify-center mb-14">
            <div className="flex bg-[#0a0a18]/60 backdrop-blur-xl rounded-xl p-1.5 border border-purple-500/8">
              <button
                onClick={() => setActiveTab('personal')}
                className={`px-6 py-3 mr-1 rounded-lg font-medium transition-all duration-500 cursor-pointer ${activeTab === 'personal'
                  ? 'bg-gradient-to-r from-purple-600/80 to-cyan-600/80 text-white shadow-lg shadow-purple-500/10'
                  : 'text-slate-400 hover:text-slate-300 hover:bg-white/5'
                  }`}
              >
                Personal Projects
              </button>
              <button
                onClick={() => setActiveTab('work')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-500 cursor-pointer ${activeTab === 'work'
                  ? 'bg-gradient-to-r from-purple-600/80 to-cyan-600/80 text-white shadow-lg shadow-purple-500/10'
                  : 'text-slate-400 hover:text-slate-300 hover:bg-white/5'
                  }`}
              >
                Work Projects
              </button>
            </div>
          </div>
        </BlurFade>

        {/* Personal Projects */}
        {activeTab === 'personal' && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => {
              return (
                <BlurFade key={project.title} delay={0.09 + index * 0.1}>

                  <div className={`p-6 h-full flex flex-col bg-[#0a0a18]/60 backdrop-blur-xl rounded-xl border border-purple-500/8 hover:border-purple-400/15 transition-all duration-500`}>
                    {/* Project Image */}
                    <div
                      className={`relative w-full h-48 mb-5 rounded-lg overflow-hidden ${project.slideImages ? 'cursor-pointer group' : ''
                        }`}
                      onClick={() => project.slideImages && openModal(project)}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                      {project.slideImages && (
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/15 backdrop-blur-sm rounded-full p-3">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                      )}
                      {project.featured && (
                        <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </div>
                      )}
                      {project.slideImages && (
                        <div className="absolute bottom-2 left-2 bg-black/40 text-white/90 px-2 py-1 rounded text-xs">
                          {project.slideImages.length} images
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-medium mb-2 text-slate-200">
                        {project.title}
                      </h3>
                      <p className="text-sm font-normal mb-4 text-purple-300/80">
                        {project.role}
                      </p>
                      <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-200/80 border border-purple-500/15"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>


                    {/* Project Links */}
                    {project.githubUrl && (
                      <div className="flex flex-col sm:flex-row gap-2 mt-auto w-full">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-400/25 rounded-lg transition-all duration-500 text-sm w-full sm:w-auto justify-center"
                        >
                          <Github size={16} />
                          Code
                        </a>
                        {project.githubUrlNodePullData && (
                          <a
                            href={project.githubUrlNodePullData}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-400/25 rounded-lg transition-all duration-500 text-sm w-full sm:w-auto justify-center"
                          >
                            <Github size={16} />
                            Node Pull Jobs
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-600/70 to-cyan-600/70 text-white rounded-lg hover:from-purple-600/80 hover:to-cyan-600/80 transition-all duration-500 text-sm w-full sm:w-auto justify-center"
                          >
                            <ExternalLink size={16} />
                            Demo
                          </a>
                        )}
                      </div>
                    )}

                    {project.githubUrlFrontend && project.githubUrlBackend && (
                      <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                        <a
                          href={project.githubUrlFrontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-400/25 rounded-lg transition-all duration-500 text-sm w-full sm:w-auto justify-center"
                        >
                          <Github size={16} />
                          Frontend
                        </a>
                        <a
                          href={project.githubUrlBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-400/25 rounded-lg transition-all duration-500 text-sm w-full sm:w-auto justify-center"
                        >
                          <Github size={16} />
                          Backend
                        </a>
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-600/70 to-cyan-600/70 text-white rounded-lg hover:from-purple-600/80 hover:to-cyan-600/80 transition-all duration-500 text-sm w-full sm:w-auto justify-center"
                          >
                            <ExternalLink size={16} />
                            Demo
                          </a>
                        )}
                      </div>
                    )}

                  </div>
                </BlurFade>
              );
            })}
          </div>
        )}

        {/* Work Projects */}
        {activeTab === 'work' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workProjects.map((project, index) => {
              return (
                <BlurFade key={project.title} delay={0.09 + index * 0.1}>

                  <div className="p-6 h-full flex flex-col bg-[#0a0a18]/60 backdrop-blur-xl rounded-xl border border-cyan-500/8 hover:border-cyan-400/15 transition-all duration-500">
                    {/* Project Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-4xl opacity-80">{project.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-medium mb-2 text-slate-200">
                          {project.title}
                        </h3>
                        <p className="text-lg font-normal mb-3 text-cyan-300/80">
                          {project.role}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-slate-300 font-medium mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-200/80 border border-cyan-500/15"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex-1 mb-6">
                      <h4 className="text-slate-300 font-medium mb-3">Key Features & Responsibilities:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-cyan-400/50 mt-2 flex-shrink-0"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Demo Link */}
                    {project.demoUrl && (
                      <div className="mt-auto">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600/70 to-cyan-600/70 text-white rounded-lg hover:from-purple-600/80 hover:to-cyan-600/80 transition-all duration-500"
                        >
                          <ExternalLink size={18} />
                          View Project
                        </a>
                      </div>
                    )}
                  </div>
                </BlurFade>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;