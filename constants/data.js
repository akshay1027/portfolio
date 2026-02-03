const userData = {
  githubUsername: "akshay1027",
  name: "Akshay R R",
  designation: "Tech Lead, Backend Engineering",
  avatarUrl: "/avatar.jpg",
  email: "akshayar1027@gmail.com",
  phone: "+91 8056701263",
  address: "Bangalore, India",
  projects: [
    {
      title: "Zerodha Kite Clone",
      link: "https://github.com/A-Finance/kite",
      description: [
        '• Developed 3 features: login, dashboard, and storing instruments CSV data.',
        '• Working on displaying real-time market data.',
        '• Elixir, Phoenix, Postgres, Ecto, HEEx, Kite connect API'
      ]
    },
    {
      title: "TrelloX",
      link: "https://github.com/akshay1027/TrelloX",
      description: [
        `• Users can create, drag, drop tasks for productivity.`,
        `• Used socket.io and MongoDb changeStream to facilitate realtime drag drop feature.`,
        `• NodeJS, ExpressJS, MongoDB, ReactJS, CSS, Postman.`
      ]
    },
    {
      title: "Job Application Review Backend",
      link: "https://github.com/akshay1027/job-application-review",
      description: [
        '• CRUD, review application by sending mail using message broker, background worker, resume upload feature, postman documentation.',
        '• Django (DRF), Celery, RabbitMQ, SQLite, Postman.'
      ]
    },
    {
      title: "Task Scheduler backend",
      link: "https://github.com/akshay1027/Task-Scheduler-NodeJS",
      description: [
        '• Fetch latest videos from YouTube for a given search query in background, store in DB, return paginated response.',
        '• ExpressJS, MongoDB, Node-Cron, Postman, Youtube API'
      ]
    },
    {
      title: "CRUD in Go",
      link: "https://github.com/akshay1027/crud-go",
      description: [
        '• Creacte, Read, Update and Delete API application in Go-lang',
        '• Go, Go-fiber, MongoDB, Postman'
      ]
    },
    {
      title: "Complete Authentication: Django, React.js",
      link: "https://github.com/akshay1027/django-react-auth",
      description: [
        '• Complete authentication and authorisation application',
        '• DRF, JWT, ReactJS'
      ]
    },
    {
      title: "Pec Quora",
      link: "https://github.com/akshay1027/Quora",
      description: [
        '• Developing a Forum like website for my college to bridge the gap between Alumni and current students.',
        '• NodeJS, ExpressJS, MongoDB, ReactJS, CSS, Material-UI.'
      ]
    },
    {
      title: "Other POCs/Projects",
      link: "https://github.com/akshay1027/Projects",
      description: [
        '• All my projects and POCs',
        '• Learnings | Experimentation | Reverse engineering | Tinkering',
      ]
    },
  ],
  about: {
    title:
      "Tech Lead who took over the CTO's primary product line and scaled it to 90% of company revenue. I build outcome-focused engineers who leverage AI tools to ship faster—not coders who happen to use AI.",
    description: [
      `I'm a product-minded engineer with 2.7 years of experience building revenue-critical systems that process $8.6M+ monthly. Started as a Founding Backend Engineer at Hotelzify and scaled to Tech Lead, managing a team of 5 engineers while maintaining hands-on technical contribution.`,
      `My unfair advantage? I focus on outcomes over syntax. I've shipped production code in Node.js, Python, and Elixir—choosing the right tool for the problem, not the other way around. Led my team's adoption of AI agents (Cursor, LLM-assisted coding) and practice spec-driven development: define outcomes first, then use the best tool—AI, code, or both.`,
      `I build autonomous systems: self-healing reconciliation bots (99%+ accuracy), intelligent pricing algorithms, and event-driven architectures that reduced price inaccuracies by 88%. Achieved <200ms p95 latency on user-facing APIs through strategic denormalization, caching, and query optimization. Automated 45+ hours/month of manual operations across teams.`,
      `Product ownership is in my DNA. I don't just build features—I bridge business stakeholders with technical execution, transform requirements into technical roadmaps, and drive engineering decisions from architecture to deployment. Led 15+ complex integrations across payments, AdTech, and metasearch connectivity while reducing enterprise B2B integration timelines.`,
      `Recognized as Performer of the Year 2025 (33% of organization-wide votes). Consistently exceeded expectations at every role—top intern at Wealthy (earned full-time offer among 8), built 2,700+ dynamic pages at Dhanlap. In the AI-augmented era, I believe LLMs amplify builders, not coders.`,
      `Looking for remote backend or full-stack engineering roles at growth-stage startups where I can own revenue-critical systems, mentor engineers, and bring 0→1 product ownership. Let's build something impactful together.`,
    ],
    // currentProject: "Zerodha Kite clone",
    // currentProjectUrl: "https://tailwindmasterkit.com",
  },
  experience: [
    {
      title: "Tech Lead (Founding Engineer)",
      company: "Hotelzify",
      year: "Jun 2023 - Present",
      companyLink: "https://hotelzify.com/",
      desc: [
        '• Scaled from Founding Backend Engineer to Tech Lead, taking full ownership of the company\'s primary product line (previously managed by the CTO).',
        '• Manage and mentor a team of 5 engineers, drive engineering decisions, detailed design specs, code reviews, and sprint planning.',
        '• Architected and own 4 core revenue systems (Booking Engine, Price Parity Engine, Google Hotel Center & Ads, Channel Manager) powering 90% of company revenue and processing $8.6M+ in monthly booking value.',
        '• Achieved <200ms p95 latency on user-facing APIs through strategic denormalization, query optimization, indexing, and caching.',
        '• Refactored system to event-driven architecture reducing price inaccuracies by 88% and achieving 22% increase in impressions.',
        '• Led technical execution of 30+ production features and 15+ integrations across payments (Razorpay, Paytring), AdTech (Google Ads), metasearch connectivity (Skyscanner, TripAdvisor, Wego).',
        '• Automated hotelier and guest escalations, eliminating 45+ hours/month of manual operations across support team.',
        '• Led integration of AI agents (Cursor, LLM-assisted coding) into team workflow and mentored engineers on spec-driven development.',
        '• Voted Performer of the Year 2025 (33% of organization-wide votes).',
        '• Tech Stack: Node.js, MySQL, MongoDB, JavaScript, AWS (SQS, S3, RDS, Lambda, API Gateway, CloudFront, EC2, CodePipeline), GCP (Cloud Functions, Cloud Scheduler), Redis, Docker, Sentry, Retool, Git.'
      ]
    },
    {
      title: "Backend Engineer Intern",
      company: "Wealthy (Buildwealth Tech Pvt Ltd)",
      year: "Apr 2023 - May 2023",
      companyLink: "https://wealthy.in/",
      desc: [
        '• Contributed to the Mutual Funds Tracker microservice. Built the migration of fund tracking via MF Central APIs.',
        '• Built a wrapper class to use Postgres with FastAPI and Celery.',
        '• Earned a full-time offer as the top performing engineer among 8 interns.',
        '• Tech Stack: Python, Django, FastAPI, Celery, Postgres, Metabase.'
      ]
    },
    {
      title: "Full Stack Engineer Intern",
      company: "Dhanlap | Ark Neo financial services",
      year: "Feb 2023 - Apr 2023",
      companyLink: "https://dhanlap.com/",
      desc: [
        '• Scraped, parsed over the web to extract 2.5k mutual funds data',
        '• Modelled schema and wrote complex Ecto queries to retrieve filtered data from the database.',
        '• Dynamically developed around 2.7 K pages for showing all data related to mutual funds.',
        '• Engineered Batch script to update all the data in the database.',
        '• Directly communicated with CEO, CTO, product, testing and UI/UX designer.',
        '• Technologies : Elixir, Phoenix, Postgres, Ecto, Postman, EEx (Embedded elixir), Tailwind CSS',
      ]
    },
    {
      title: "Full Stack Engineer Intern",
      company: "Maveric Systems Limited",
      year: "Nov 2021 - Jan 2022",
      companyLink: "https://maveric-systems.com/",
      desc: [
        '• Implemented a POC to migrate from the existing backend to microsoft Azure web pubsub service with Flask. The backend establishes websocket connection to enable cross-device communication.',
        '• Reintegrated authentication from OAuth to Custom Authentication using OTP in frontend.',
        '• Developed Dashboard referencing figma docs and displayed charts using API data.',
        '• Technologies : Microsoft Azure, NodeJS, Flask, ReactJS, Tailwind CSS, ChartJS',
      ]
    },
    {
      title: "Full Stack Engineer Intern",
      company: "Gokion",
      year: "May 2021 - Oct 2021",
      desc: [
        '• Developed a landing page referencing figma docs.',
        '• Developed 5 features: combo, menu, order, invoice, and dashboard screens by integrating REST APIs for SAAS product.',
        '• Built an internal tool/website to identify customer activity.',
        '• Technologies: Typescript, NodeJS, ReactJS, Material-UI, HTML, CSS, Postman, redux-toolkit. AWS.'
      ]
    },
    {
      title: "GSSOC contributor",
      company: "GirlScript Summer of Code",
      year: "Feb 2021 - May 2021",
      companyLink: "https://algochurn.com",
      desc: [
        '• Secured a Rank of 20th out of 6000+ developers.',
        '• Contributed to a variety of projects.',
        '• Understanding and learning new technologies and packages to implement new features in projects.',
        '• Demonstrated my skills in React js, HTML , CSS, JavaScript, Redux.'
      ]
    },
    {
      title: "CWoD Full-stack Developer",
      company: "CRIO Winter of Doing",
      year: "Jan 2021 - Mar 2021",
      companyLink: "https://www.crio.do/crio-winter-of-doing/",
      desc: [
        '• Learnt and demonstrated development skills to qualify from stage 1 which comprised 13,000+ developers.',
        '• Cleared Coding test with a rank of 428 to qualify for stage 2 phase B. (one among 1000 developers)',
        '• In stage 2 phase B, demonstrated my skills by making a full stack application with REST API archetechture in 8 days.',
        '• Tech used: Swagger UI for API documentation, React js, JavaScript, React-bootstrap, Node js, Express js, Lowdb, npm package manager, gitlab for version control, testing done with AWS E2 instance.',
      ]
    },
    {
      title: "B.Tech, ECE",
      company: "PTU (formerly Pondicherry Engineering College, PEC) - Pondicherry",
      year: "Aug 2019 - May 2023",
      companyLink: "http://www.ptuniv.edu.in/",
      desc: [
        "• Major in Electronics and Communication Enginnering with a CGPA of 8.72.",
        "• Started my full stack programmig journey. Built around 10 landing pages for college and department related events.",
        "• 2x runner in intra department football championship, 1x Winner.",
        "• Bronze medalist with PEC college team in intercollegiate footnall championship",
        "• College football team Vice Captain"
      ]
    },
    {
      title: "High School",
      company: "KV no. 1, Pondicherry",
      year: "2017 - 2019",
      desc: [
        "• Took Physics, Chemistry and Mathematics in 11th and 12th grade."
      ]
    },
  ],
  resumeUrl:
    "https://drive.google.com/file/d/1MhlVJdcH4f0g4AAv13hpW69ZnLOeafSj/view?usp=share_link",
  socialLinks: {
    instagram: "https://instagram.com/akshay_rr10",
    linkedin: "https://linkedin.com/in/akshayrr1027",
    github: "https://github.com/akshay1027",
    blog: "https://akshayrr.hashnode.dev/"
  },
};

export default userData;
