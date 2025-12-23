import React, { useEffect, useState } from 'react'

export default function ExperienceSection() {
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

  return (
    <div className="relative min-h-screen p-6" style={{ background: 'linear-gradient(180deg, #050510 0%, #08081a 50%, #050510 100%)' }}>
      {/* Deep Space Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle nebula accent */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.04) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(103, 232, 249, 0.03) 0%, transparent 50%)'
          }}
        ></div>
      </div>

      {/* Subtle Starfield */}
      <div className="absolute inset-0">
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
              opacity: 0.4,
              animationDelay: star.delay,
              animationDuration: `calc(${star.duration} * 1.5)`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-8xl mx-auto mb-24">
        {/* Title */}
        <div className="text-center my-20">
          <h2
            className="text-4xl md:text-6xl font-medium mb-6"
            style={{
              background: 'linear-gradient(90deg, rgba(167, 139, 250, 0.9) 0%, rgba(103, 232, 249, 0.9) 50%, rgba(167, 139, 250, 0.9) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Experience
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-10">
          {/* Timeline Column */}
          <div className="md:col-span-1 xl:col-span-1 relative">
            <div className="sticky top-8">
              {/* Timeline Line */}
              <div className="relative">
                {/* Main timeline line with glow */}
                <div className="absolute left-[30px] top-0 bottom-0 w-[2px]">
                  {/* Glow layer */}
                  <div
                    className="absolute inset-0 blur-sm"
                    style={{
                      background: 'linear-gradient(180deg, rgba(103, 232, 249, 0.5) 0%, rgba(167, 139, 250, 0.5) 50%, rgba(103, 232, 249, 0.3) 100%)',
                    }}
                  ></div>
                  {/* Core line */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, rgba(103, 232, 249, 0.6) 0%, rgba(167, 139, 250, 0.6) 50%, rgba(103, 232, 249, 0.4) 100%)',
                      borderRadius: '2px',
                    }}
                  ></div>
                </div>

                {/* Timeline Points */}
                <div className="space-y-10 md:space-y-64">
                  {/* First Experience Point */}
                  <div className="relative flex items-center">
                    {/* Outer glow ring */}
                    <div
                      className="absolute left-4 w-8 h-8 rounded-full opacity-30 blur-md"
                      style={{ background: 'rgba(103, 232, 249, 0.8)' }}
                    ></div>
                    {/* Main point */}
                    <div
                      className="absolute left-5 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(103, 232, 249, 0.9) 0%, rgba(103, 232, 249, 0.5) 100%)',
                        boxShadow: '0 0 15px rgba(103, 232, 249, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.2)',
                        border: '2px solid rgba(103, 232, 249, 0.7)'
                      }}
                    >
                      {/* Inner dot */}
                      <div className="w-2 h-2 rounded-full bg-white/80"></div>
                    </div>
                    <div className="ml-14">
                      <div className="text-md font-medium text-cyan-300/90 tracking-wide">
                        Mar 2022 - Dec 2022
                      </div>
                    </div>
                  </div>

                  {/* Second Experience Point */}
                  <div className="relative flex items-center">
                    {/* Outer glow ring */}
                    <div
                      className="absolute left-4 w-8 h-8 rounded-full opacity-30 blur-md"
                      style={{ background: 'rgba(167, 139, 250, 0.8)' }}
                    ></div>
                    {/* Main point */}
                    <div
                      className="absolute left-5 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.9) 0%, rgba(167, 139, 250, 0.5) 100%)',
                        boxShadow: '0 0 15px rgba(167, 139, 250, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.2)',
                        border: '2px solid rgba(167, 139, 250, 0.7)'
                      }}
                    >
                      {/* Inner dot */}
                      <div className="w-2 h-2 rounded-full bg-white/80"></div>
                    </div>
                    <div className="ml-14">
                      <div className="text-md font-medium text-purple-300/90 tracking-wide">
                        Feb 2023 - Present
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Cards Column */}
          <div className="md:col-span-3 xl:col-span-4 space-y-10">
            {/* First Experience Card */}
            <div className="group relative p-8 rounded-2xl
                         bg-[#0a0a18]/60 backdrop-blur-xl
                         border border-cyan-500/8
                         hover:border-cyan-400/15
                         transition-all duration-600 ease-out
                         hover:-translate-y-1">
              <div className="relative z-10">
                <h3 className="text-2xl font-medium mb-3 text-cyan-200/90 group-hover:text-cyan-100 transition-colors duration-500">
                  Vertobase Co., Ltd.
                </h3>
                <p className="text-lg mb-5 font-normal text-slate-400 group-hover:text-slate-300 transition-colors duration-500">
                  Product: Zignway App, Role: Front-end Developer
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-cyan-400/60"></span>
                    <span>Write front-end code from the design using React and Next.js.</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-cyan-400/60"></span>
                    <span>Write Flutter code from the design details for Zignway App, including the process for PIN login on mobile and other pages.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Second Experience Card */}
            <div className="group relative p-8 rounded-2xl
                         bg-[#0a0a18]/60 backdrop-blur-xl
                         border border-purple-500/8
                         hover:border-purple-400/15
                         transition-all duration-600 ease-out
                         hover:-translate-y-1">
              <div className="relative z-10">
                <h3 className="text-2xl font-medium mb-3 text-purple-200/90 group-hover:text-purple-100 transition-colors duration-500">
                  iApp Technology
                </h3>
                <p className="text-lg mb-5 font-normal text-slate-400 group-hover:text-slate-300 transition-colors duration-500">
                  Role: Full Stack Developer
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500">
                    <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-purple-400/60"></span>
                    <span className="font-medium text-purple-200/80">Project: NBTC - Drone Data Transmission, Role: Backend Developer</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Developed an API for transmitting drone data to both mobile and web platforms.</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Presented the API functionality to the client, explaining how the API works.</span>
                  </li>

                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 mt-5">
                    <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-purple-400/60"></span>
                    <span className="font-medium text-purple-200/80">Project: ACT, Role: Full Stack Developer</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Updated the API for fetching data from the web and retrieving data from the Kibana database.</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Updated the front-end view to display data from MA and newly integrated database sources.</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Wrote Python logic for project risk assessment and Created Excel export functionality for project and company data.</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Redesigned the data fetching flow for three web pages: EGP, DBD, and GOV.</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Updated the API for fetching data from the three web pages (EGP, DBD, GOV) based on the previous version.</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Set up Jenkins processes to execute commands for fetching project and company data.</span>
                  </li>

                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 mt-5">
                    <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-purple-400/60"></span>
                    <span className="font-medium text-purple-200/80">Project: ACT Phase 2, Role: Full Stack Developer</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Designed the workflow for fetching project and company data from three web pages: EGP, DBD, and GOV.</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Developed an API to fetch project data from these web pages and store it in the database.</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Set up a Jenkins process to automate commands for fetching project and company data.</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Developed the front-end web view for Phase 2.</span>
                  </li>

                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 mt-5">
                    <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-purple-400/60"></span>
                    <span className="font-medium text-purple-200/80">Product: iApp Speech Flow for Web, Role: Full Stack Developer</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Planned the development and designed the workflow for iApp Speech Flow for Web.</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Converted mobile codebase into a web application using Next.js.</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Designed the code flow for iApp Speech Flow on the Web.</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Built the application as an Electron app targeting macOS and Windows.</span>
                  </li>

                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 mt-5">
                    <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-purple-400/60"></span>
                    <span className="font-medium text-purple-200/80">Project: iisi huboftalent, Role: Front-end Developer</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Connect the role data API from the signup process to display and edit the data in the view according to the design.</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Connect the API flow for liking profiles and viewing the data in the system according to the design.</span>
                  </li>

                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 mt-5">
                    <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-purple-400/60"></span>
                    <span className="font-medium text-purple-200/80">Project: digitaltouchpoint-wellness-chatbot, Role: Full Stack Developer</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Write an API from Next.js to retrieve, add, delete, and edit data for the signup process and add/remove package pricing information.</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Write an authentication flow to protect users using JWT for login and viewing the user signup process.</span>
                  </li>
                  <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors duration-500 ml-5">
                    <span className="mr-3 mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-purple-300/50"></span>
                    <span>Create a dashboard bot view to display package and user information.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
