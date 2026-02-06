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
        },{id: "nav-events",
          title: "events",
          description: "Upcoming conferences, workshops, and security events.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/events/";
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
            },{id: "post-understanding-zero-day-vulnerabilities-and-their-security-impact",
        
          title: "Understanding Zero-Day Vulnerabilities and Their Security Impact",
        
        description: "How zero-day vulnerabilities are discovered, exploited, and defended against in modern cybersecurity",
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
      },{id: "post-network-protocol-analysis-for-security-and-troubleshooting",
        
          title: "Network Protocol Analysis for Security and Troubleshooting",
        
        description: "Understanding how to capture and analyze network traffic for security monitoring, incident response, and network diagnostics",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/network-protocol-analysis/";
          
        },
      },{id: "post-understanding-linux-privilege-escalation-in-security-assessments",
        
          title: "Understanding Linux Privilege Escalation in Security Assessments",
        
        description: "How privilege escalation works on Linux systems and strategies for both testing and hardening",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/linux-privilege-escalation-techniques/";
          
        },
      },{id: "post-social-engineering-and-the-human-element-in-security",
        
          title: "Social Engineering and the Human Element in Security",
        
        description: "How attackers exploit human psychology and what organizations can do to build resilience against manipulation",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/social-engineering-and-human-factors/";
          
        },
      },{id: "post-cryptography-fundamentals-for-security-professionals",
        
          title: "Cryptography Fundamentals for Security Professionals",
        
        description: "Understanding the cryptographic principles and algorithms that underpin modern information security",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/cryptography-basics-for-security-professionals/";
          
        },
      },{id: "post-web-application-security-fundamentals",
        
          title: "Web Application Security Fundamentals",
        
        description: "Understanding core security concepts and common vulnerabilities that affect modern web applications",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/web-application-security-fundamentals/";
          
        },
      },{id: "post-python-for-security-automation-and-tool-development",
        
          title: "Python for Security Automation and Tool Development",
        
        description: "How Python has become essential for security professionals automating tasks and building custom tools",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/python-scripting-for-security-automation/";
          
        },
      },{id: "post-building-effective-security-reference-materials",
        
          title: "Building Effective Security Reference Materials",
        
        description: "How security professionals create and maintain cheat sheets for efficient operations",
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
      },{id: "post-tracking-public-exploit-research-for-proactive-defense",
        
          title: "Tracking Public Exploit Research for Proactive Defense",
        
        description: "How security teams leverage public vulnerability disclosures and exploit repositories to strengthen defenses",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/github-exploit-tracking-and-analysis/";
          
        },
      },{id: "post-network-intrusion-detection-systems-and-threat-monitoring",
        
          title: "Network Intrusion Detection Systems and Threat Monitoring",
        
        description: "Understanding how network intrusion detection systems work and best practices for implementation",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/network-intrusion-detection-with-arachnids-ng/";
          
        },
      },{id: "post-understanding-tor-hidden-services-and-onion-routing",
        
          title: "Understanding Tor Hidden Services and Onion Routing",
        
        description: "How Tor hidden services provide anonymous hosting and the technical architecture behind onion addresses",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/setting-up-tor-hidden-services/";
          
        },
      },{id: "post-browser-security-and-vulnerability-research-ethics",
        
          title: "Browser Security and Vulnerability Research Ethics",
        
        description: "Understanding browser security mechanisms, common vulnerability classes, and the principles of responsible disclosure",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/javascript-exploits-in-tor-browser/";
          
        },
      },{id: "post-understanding-tor-browser-and-online-anonymity",
        
          title: "Understanding Tor Browser and Online Anonymity",
        
        description: "How Tor provides privacy and anonymity online, and best practices for secure usage",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tor-browser-security-and-privacy/";
          
        },
      },{id: "post-understanding-data-breach-analysis-and-digital-security",
        
          title: "Understanding Data Breach Analysis and Digital Security",
        
        description: "How breach analysis tools help organizations and individuals strengthen their security posture",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/analyzing-data-breaches-with-breachpeek/";
          
        },
      },{id: "post-understanding-cloud-storage-security-and-access-controls",
        
          title: "Understanding Cloud Storage Security and Access Controls",
        
        description: "Best practices for securing cloud storage infrastructure and preventing unauthorized access",
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
            },},{id: "books-the-code-book",
          title: 'The Code Book',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_code_book/";
            },},{id: "books-we",
          title: 'We',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/we/";
            },},{id: "books-this-is-how-they-tell-me-the-world-ends",
          title: 'This Is How They Tell Me the World Ends',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/this_is_how_they_tell_me_the_world_ends/";
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
            },},{id: "teachings-black-hat-usa-2026",
          title: 'Black Hat USA 2026',
          description: "Premier information security conference and training. Black Hat brings together elite security researchers, corporate executives, government agencies, and security vendors for cutting-edge briefings and in-depth technical training.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/blackhat_usa_2026/";
            },},{id: "teachings-",
          title: '',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/bsides_lv_2026/";
            },},{id: "teachings-security-bsides-san-francisco-2026",
          title: 'Security BSides San Francisco 2026',
          description: "Bay Area&#39;s community security conference. BSides SF brings the BSides community spirit to the heart of the Bay Area tech scene with technical content, networking, and community building.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/bsides_sf_2026/";
            },},{id: "teachings-def-con-34",
          title: 'DEF CON 34',
          description: "The world&#39;s largest and most infamous hacker conference. Four days of hacking, learning, and chaos in Las Vegas featuring cutting-edge security research, hands-on workshops, villages, contests, and networking.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/defcon_34/";
            },},{id: "teachings-rsa-conference-2026",
          title: 'RSA Conference 2026',
          description: "The world&#39;s leading cybersecurity conference and exposition. RSA Conference attracts over 40,000 attendees including CISOs, security practitioners, vendors, and media with its massive expo floor and comprehensive agenda.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/rsa_conference_2026/";
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
