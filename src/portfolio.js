/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Import images
import lpuLogo from "./assets/images/lpuLogo.png";
import brabuLogo from "./assets/images/brabuLogo.png";
import facebookLogo from "./assets/images/facebookLogo.png";
import saayaHealthLogo from "./assets/images/saayaHealthLogo.webp";
import nextuLogo from "./assets/images/nextuLogo.webp";
import googleCybersecurityCert from "./assets/images/google_cybersecurity_cert.png";
import patentAchievement from "./assets/images/patent_achievement.png";
import researchAchievement from "./assets/images/research_achievement.png";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gautam Kumar",
  title: "Hi, I'm Gautam",
  subTitle: emoji(
    "🛡️ A passionate developer specializing in Cybersecurity, AI, and Data Science. Building intelligent, secure, and data-driven applications using Python, FastAPI, and advanced analytics tools."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ZzRjofbptosamMHP1ON_DFpA4m_DBlMN/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Gautam7070",
  linkedin: "https://www.linkedin.com/in/gautam7070/",
  gmail: "gautamkumar.turki@gmail.com",

  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Building Intelligent, Data-Driven and Secure Systems",
  skills: [
    emoji(
      "⚡ AI & Data: Build data-driven applications and predictive systems using Python, FastAPI, NumPy, Pandas, Scikit-learn, Matplotlib, and Seaborn."
    ),
    emoji(
      "⚡ Cybersecurity: Familiar with penetration testing and network analysis using Wireshark, Nmap, Burp Suite, and Metasploit."
    ),
    emoji(
      "⚡ Development Tools: Use GitHub and Linux for version control, collaboration, and development environments."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      iconifyTag: "logos:python"
    },
    {
      skillName: "FastAPI",
      iconifyTag: "logos:fastapi-icon"
    },
    {
      skillName: "NumPy",
      iconifyTag: "logos:numpy"
    },
    {
      skillName: "Pandas",
      iconifyTag: "logos:pandas-icon"
    },
    {
      skillName: "Matplotlib",
      iconifyTag: "logos:matplotlib-icon"
    },
    {
      skillName: "Seaborn",
      iconifyTag: "logos:seaborn-icon"
    },
    {
      skillName: "Scikit-learn",
      iconifyTag: "simple-icons:scikitlearn"
    },
    {
      skillName: "Linux",
      iconifyTag: "logos:linux-tux"
    },
    {
      skillName: "GitHub",
      iconifyTag: "logos:github-icon"
    },
    {
      skillName: "Wireshark",
      iconifyTag: "simple-icons:wireshark"
    },
    {
      skillName: "Nmap",
      iconifyTag: "file-icons:nmap"
    },
    {
      skillName: "Burp Suite",
      iconifyTag: "simple-icons:burpsuite"
    },
    {
      skillName: "Metasploit",
      iconifyTag: "simple-icons:metasploit"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lovely Professional University",
      logo: lpuLogo,
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - May 2025",
      desc: "Coursework covered Artificial Intelligence, Data Analytics, Backend Development, Cybersecurity Fundamentals",

    },
    {
      schoolName: "Babasaheb Bhimrao Ambedkar Bihar University",
      logo: brabuLogo,
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2018 - April 2021",
      desc: "Coursework covered programming fundamentals, computer networks, operating systems, database fundamentals, and basic cybersecurity concepts...",

    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI / Data Science / Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Cybersecurity (Pentesting/Networking)",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend (FastAPI/Python)",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming (Python)",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: facebookLogo,
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: saayaHealthLogo,
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: nextuLogo,
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),


  achievementsCards: [
    {
      title: "Google Cybersecurity Professional Certificate",
      subtitle: "Completed the Google Cybersecurity Professional Certificate on Coursera, covering assets, threats, vulnerabilities, and incident response.",
      image: googleCybersecurityCert,
      imageAlt: "Google Cybersecurity Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/professional-cert/1MRV4JFRND8W"
        }
      ]
    },
    {
      title: "Patent Approval (Team Project)",
      subtitle: "“Hybrid Energy Highways: A Fusion of Wind, Solar & Microbial Technology” — recognized by the LPU Intellectual Property Cell.",
      image: patentAchievement,
      imageAlt: "Hybrid Energy Highways Patent",
      footerLink: [
        {
          name: "LPU Intellectual Property Cell",
          url: "https://www.lpu.in/"
        }
      ]
    },
    {
      title: "Academic Research Activities",
      subtitle: "Participated in academic research activities involving analysis, documentation, and collaborative problem-solving.",
      image: researchAchievement,
      imageAlt: "Academic Research",
      footerLink: []
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/gautam-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Gautam-from-India-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7070822982",
  email_address: "gautamkumar.turki@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
