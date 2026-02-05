// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-understanding-zero-day-vulnerabilities",
        
          title: "Understanding Zero-Day Vulnerabilities",
        
        description: "The lifecycle of unknown vulnerabilities and their impact on security",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/understanding-zero-day-vulnerabilities/";
          
        },
      },{id: "post-security-career-development",
        
          title: "Security Career Development",
        
        description: "Building and advancing a career in cybersecurity",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/security-career-development/";
          
        },
      },{id: "post-future-of-cybersecurity",
        
          title: "Future of Cybersecurity",
        
        description: "Emerging trends and technologies shaping the future of security",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/future-of-cybersecurity/";
          
        },
      },{id: "post-security-compliance-frameworks",
        
          title: "Security Compliance Frameworks",
        
        description: "Understanding major security standards and regulatory requirements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/security-compliance-frameworks/";
          
        },
      },{id: "post-iot-security-challenges",
        
          title: "IoT Security Challenges",
        
        description: "Securing the expanding Internet of Things ecosystem",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/iot-security-challenges/";
          
        },
      },{id: "post-blockchain-security-fundamentals",
        
          title: "Blockchain Security Fundamentals",
        
        description: "Understanding security considerations in blockchain and cryptocurrency systems",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/blockchain-security-fundamentals/";
          
        },
      },{id: "post-devsecops-integration",
        
          title: "DevSecOps Integration",
        
        description: "Embedding security throughout the software development lifecycle",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/devsecops-integration/";
          
        },
      },{id: "post-security-orchestration-automation-and-response-soar",
        
          title: "Security Orchestration, Automation, and Response (SOAR)",
        
        description: "Automating security operations to improve efficiency and effectiveness",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/security-orchestration-automation-and-response-soar/";
          
        },
      },{id: "post-vulnerability-management",
        
          title: "Vulnerability Management",
        
        description: "Systematic approach to identifying, assessing, and remediating security vulnerabilities",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/vulnerability-management/";
          
        },
      },{id: "post-security-information-and-event-management-siem",
        
          title: "Security Information and Event Management (SIEM)",
        
        description: "Centralizing security monitoring and analysis with SIEM systems",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/security-information-and-event-management-siem/";
          
        },
      },{id: "post-red-team-vs-blue-team",
        
          title: "Red Team vs Blue Team",
        
        description: "Understanding offensive and defensive security roles and collaboration",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/red-team-vs-blue-team/";
          
        },
      },{id: "post-cloud-security-fundamentals",
        
          title: "Cloud Security Fundamentals",
        
        description: "Essential security concepts for cloud computing environments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/cloud-security-fundamentals/";
          
        },
      },{id: "post-wireless-network-security",
        
          title: "Wireless Network Security",
        
        description: "Protecting wireless networks from unauthorized access and attacks",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/wireless-network-security/";
          
        },
      },{id: "post-container-security",
        
          title: "Container Security",
        
        description: "Securing Docker and containerized applications throughout the lifecycle",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/container-security/";
          
        },
      },{id: "post-api-security-best-practices",
        
          title: "API Security Best Practices",
        
        description: "Securing application programming interfaces against common threats",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/api-security-best-practices/";
          
        },
      },{id: "post-incident-response-methodology",
        
          title: "Incident Response Methodology",
        
        description: "Structured approach to handling security incidents effectively",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/incident-response-methodology/";
          
        },
      },{id: "post-password-security-and-cracking",
        
          title: "Password Security and Cracking",
        
        description: "Understanding password vulnerabilities and protection strategies",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/password-security-and-cracking/";
          
        },
      },{id: "post-digital-forensics-basics",
        
          title: "Digital Forensics Basics",
        
        description: "Principles and techniques for investigating digital evidence",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/digital-forensics-basics/";
          
        },
      },{id: "post-secure-coding-practices",
        
          title: "Secure Coding Practices",
        
        description: "Writing code that resists exploitation and maintains security",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/secure-coding-practices/";
          
        },
      },{id: "post-threat-intelligence-fundamentals",
        
          title: "Threat Intelligence Fundamentals",
        
        description: "Collecting and using information about potential security threats",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/threat-intelligence-fundamentals/";
          
        },
      },{id: "post-malware-analysis-fundamentals",
        
          title: "Malware Analysis Fundamentals",
        
        description: "Techniques for examining malicious software safely and effectively",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/malware-analysis-fundamentals/";
          
        },
      },{id: "post-network-protocol-analysis",
        
          title: "Network Protocol Analysis",
        
        description: "Examining network communications for security and troubleshooting",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/network-protocol-analysis/";
          
        },
      },{id: "post-linux-privilege-escalation-techniques",
        
          title: "Linux Privilege Escalation Techniques",
        
        description: "Methods for gaining elevated access on Linux systems during security assessments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/linux-privilege-escalation-techniques/";
          
        },
      },{id: "post-social-engineering-and-human-factors",
        
          title: "Social Engineering and Human Factors",
        
        description: "Understanding psychological manipulation in cybersecurity",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/social-engineering-and-human-factors/";
          
        },
      },{id: "post-cryptography-basics-for-security-professionals",
        
          title: "Cryptography Basics for Security Professionals",
        
        description: "Essential cryptographic concepts and their security applications",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/cryptography-basics-for-security-professionals/";
          
        },
      },{id: "post-web-application-security-fundamentals",
        
          title: "Web Application Security Fundamentals",
        
        description: "Core concepts and common vulnerabilities in web applications",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/web-application-security-fundamentals/";
          
        },
      },{id: "post-python-scripting-for-security-automation",
        
          title: "Python Scripting for Security Automation",
        
        description: "Leveraging Python for efficient security tasks and tool development",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/python-scripting-for-security-automation/";
          
        },
      },{id: "post-security-cheat-sheets-for-quick-reference",
        
          title: "Security Cheat Sheets for Quick Reference",
        
        description: "Essential commands and techniques for security professionals",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/security-cheat-sheets-for-quick-reference/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-github-exploit-tracking-and-analysis",
        
          title: "GitHub Exploit Tracking and Analysis",
        
        description: "Monitoring public exploit repositories and threat intelligence",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/github-exploit-tracking-and-analysis/";
          
        },
      },{id: "post-network-intrusion-detection-with-arachnids-ng",
        
          title: "Network Intrusion Detection with arachNIDS-NG",
        
        description: "Building effective network monitoring and threat detection systems",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/network-intrusion-detection-with-arachnids-ng/";
          
        },
      },{id: "post-setting-up-tor-hidden-services",
        
          title: "Setting Up Tor Hidden Services",
        
        description: "Creating anonymous web services using Tor&#39;s onion routing",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/setting-up-tor-hidden-services/";
          
        },
      },{id: "post-javascript-exploits-in-tor-browser",
        
          title: "JavaScript Exploits in Tor Browser",
        
        description: "Understanding browser vulnerabilities and security research",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/javascript-exploits-in-tor-browser/";
          
        },
      },{id: "post-tor-browser-security-and-privacy",
        
          title: "Tor Browser Security and Privacy",
        
        description: "Exploring Tor&#39;s anonymity network and browser security considerations",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tor-browser-security-and-privacy/";
          
        },
      },{id: "post-analyzing-data-breaches-with-breachpeek",
        
          title: "Analyzing Data Breaches with BreachPeek",
        
        description: "Understanding breach patterns and protecting your digital footprint",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/analyzing-data-breaches-with-breachpeek/";
          
        },
      },{id: "post-cloud-storage-enumeration-techniques",
        
          title: "Cloud Storage Enumeration Techniques",
        
        description: "Methods for discovering exposed cloud storage buckets and securing your data",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/cloud-storage-enumeration-techniques/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-kingpin-how-one-hacker-took-over-the-billion-dollar-cybercrime-underground",
          title: 'Kingpin: How One Hacker Took Over the Billion-Dollar Cybercrime Underground',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/kingpin/";
            },},{id: "books-1984",
          title: '1984',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/1984/";
            },},{id: "books-american-kingpin",
          title: 'American Kingpin',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/american_kingpin/";
            },},{id: "books-brave-new-world",
          title: 'Brave New World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/brave_new_world/";
            },},{id: "books-cryptonomicon",
          title: 'Cryptonomicon',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/cryptonomicon/";
            },},{id: "books-fahrenheit-451",
          title: 'Fahrenheit 451',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/fahrenheit_451/";
            },},{id: "books-ghost-in-the-wires",
          title: 'Ghost in the Wires',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ghost_in_the_wires/";
            },},{id: "books-hackers",
          title: 'Hackers',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/hackers/";
            },},{id: "books-neuromancer",
          title: 'Neuromancer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/neuromancer/";
            },},{id: "books-permanent-record",
          title: 'Permanent Record',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/permanent_record/";
            },},{id: "books-snow-crash",
          title: 'Snow Crash',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/snow_crash/";
            },},{id: "books-the-cuckoo-39-s-egg",
          title: 'The Cuckoo&amp;#39;s Egg',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_cuckoos_egg/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-excited-to-announce-the-launch-of-my-new-security-focused-github-pages-site-after-years-of-cybersecurity-work-and-development-i-m-bringing-all-my-projects-research-and-tools-together-in-one-centralized-location-this-platform-will-serve-as-a-hub-for-sharing-security-insights-open-source-tools-and-technical-documentation",
          title: 'Excited to announce the launch of my new security-focused GitHub Pages site! After...',
          description: "",
          section: "News",},{id: "news-proud-to-announce-the-beginning-of-arachnids-ng-development-continuing-the-legacy-of-the-original-arachnids-project-started-in-the-early-2000s-with-over-20-years-of-cybersecurity-and-evolution-in-network-intrusion-detection-arachnids-ng-represents-the-next-generation-of-intelligent-threat-detection-systems-designed-for-modern-security-operations",
          title: 'Proud to announce the beginning of arachNIDS-NG development, continuing the legacy of the...',
          description: "",
          section: "News",},{id: "news-msr206-software-interface-development",
          title: 'MSR206 Software Interface Development',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-01-10-msr206-interface-development/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%75%62.%69%6E%62%6F%78@%70%72%6F%74%6F%6E.%6D%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
