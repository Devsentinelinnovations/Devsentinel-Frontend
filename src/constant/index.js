import { aws, blog1, blog2, blog3, cisco, microsoft, serviceImg1, serviceImg2, serviceImg3, zoom } from "../assets";

export const nav = [
    {
        id: 0,
        text: "Home",
        link: "/#",
    },
    {
        id: 1,
        text: "Education",
        link: "/education",
    },
    {
        id: 3,
        text: "Services",
        link: "/services",
    },
    {
        id: 4,
        text: "Portfolio",
        link: "/portfolio",
    },
    {
        id: 5,
        text: "About us",
        link: "/about",
    },
    {
        id: 6,
        text: "Testimonial",
        link: "/testimonial",
    }
]

export const partners = [
    {
      id: 1,
      name: "Microsoft",
      logo: microsoft, 
    },
    {
      id: 2,
      name: "AWS",
      logo: aws, 
    },
    {
      id: 3,
      name: "Cisco",
      logo: cisco, 
    },
    {
      id: 4,
      name: "Zoom",
      logo: zoom, 
    },
  ];

export const services = [
    { id: 1, name: "Mobile App Development", img: serviceImg3 },
    { id: 2, name: "Game Development", img: serviceImg1 },
    { id: 3, name: "Website Development", img: serviceImg2 },
  ];

export const testimonials = [
    {
      id: 1,
      quote:
        "“Dev Sentinels transformed my career! The live classes and hands-on projects were invaluable”",
      name: "Timileyin Ogunsaya",
      role: "Software Developer",
    },
    {
      id: 2,
      quote: "“Enrolling in courses at Dev Sentinels was a game changer for me”",
      name: "Ademide Ajala",
      role: "UI Designer",
    },
    {
      id: 3,
      quote:
        "“I gained the skills to land my dream job in Cybersecurity analysis”",
      name: "Ogunyinka Gbola",
      role: "Cybersecurity Analyst",
    },
  ];

export const blogs = [
    {
      id: 1,
      title: "5 Tips for Effective Online Learning",
      description:
        "Transform your study habits and achieve your academic goals with these essential techniques.",
      image: blog1,
    },
    {
      id: 2,
      title: "5 Tips for Effective Online Learning",
      description:
        "Explore emerging trends and technologies are reshaping the digital landscape, driving, and enhancing user experiences.",
      image: blog2,
    },
    {
      id: 3,
      title: "How to Choose the Right Career Path in Tech",
      description:
        "Navigate the diverse world of technology with insights and strategies to align your skills, interests, and goals for a fulfilling career.",
      image: blog3,
    },
  ];

  export const faqs = [
    {
      id: 1,
      question: "What is Dev Sentinels?",
      answer: "Dev Sentinels is a platform that provides high-quality education and training for aspiring developers.",
    },
    {
      id: 2,
      question: "Where can I watch live videos?",
      answer: "You can watch live videos on our official website and YouTube channel.",
    },
    {
      id: 3,
      question: "How much is a course in Dev Sentinels?",
      answer: "Course prices vary depending on the program. Visit our website for detailed pricing.",
    },
  ];