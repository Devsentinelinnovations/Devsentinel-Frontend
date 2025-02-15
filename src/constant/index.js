import { aws, cisco, microsoft, serviceImg1, serviceImg2, serviceImg3, zoom } from "../assets";

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
        text: "Service",
        link: "/service",
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