import { algorithms, devnotes, oscs, trendchat } from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "YouTube Content Creator",
    company_name: "Self Employed",
    date: "2016 - Present",
    details: [
      "Built a subscriber base of over <span style='color: white;'>500,000 subscribers</span> by creating video content to help programmers.",
      "Crafted visually appealling programming videos that have garnered over <span style='color: white;'>30,000,000 views</span>.",
      "Produced high-quality educational and entertaining videos for clients including <span style='color: white;'>Intel, JetBrains, and MicroCenter</span>.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Indie",
    date: "2019 - 2023",
    details: [
      "Developed and delivered custom interdisciplinary coding portfolio for clients including <span style='color: white;'>Nvidia, Hostinger, and Amazon</span>.",
      "<span style='color: white;'>Designed and developed innovative</span> AI applications and interactive websites.",
      "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Prime 3",
    date: "2018 - 2019",
    details: [
      "Built custom enterprise applications for a <span style='color: white;'>Fortune 500 company</span> as a full-stack software engineer.",
      "Developed and maintained <span style='color: white;'>scalable backend services</span>, ensuring high availability for critical business applications.",
      "<span style='color: white;'>Collaborated with a team</span> to design and implement front-end interfaces.",
    ],
  },
  {
    title: "Computer Science",
    company_name: "King's College London",
    date: "2017 - 2023",
    details: [
      "<span style='color: white;'>컴퓨터공학</span> 전공자로서 자료구조, 운영체제, 인터넷 시스템 등 핵심 과목 이수",
      "<span style='color: white;'>PyTorch</span>와 <span style='color: white;'>TensorFlow</span> 기반 <span style='color: white;'>한영 양방향 기계번역기</span> 개발 및 논문 제출",
      "<span style='color: white;'>TurtleBot</span>을 활용한 <span style='color: white;'>A* 탐색 기반 자율주행</span> 프로젝트 수행 (ROS, Python)",
      "<span style='color: white;'>Pacman AI</span> 개발: 베이즈 분류와 MDP를 적용한 자동 플레이 에이전트 구현",
      "<span style='color: white;'>학점: Upper Second Class (3.6/4.0)</span>",
    ],
  },
];

const portfolio = [
  {
    name: "Open Source Computer Science Repo",
    description:
      "A GitHub repo with over 17,000 stars containing a curated list of free online courses from reputable universities that satisfy undergraduate computer science requirements.",
    image: oscs,
  },
  {
    name: "Dev Notes",
    description:
      "A newsletter with over 6,000 readers made for software developers to keep up with this rapidly evolving industry, with a sister platform in progress.",
    image: devnotes,
  },
  {
    name: "TrendChat",
    description:
      "MSA 기반 트렌드 채팅 플랫폼. Google Trends RSS를 Kafka로 처리하고, WebFlux로 실시간 채팅 및 SSE 구현. Redis로 JWT + Refresh Token 인증 방식 적용.",
    image: trendchat,
    tags: [
      "Spring WebFlux",
      "Kafka",
      "Redis",
      "JWT",
      "MySQL",
      "Refresh Token",
      "RabbitMQ",
    ],
  },
];

export { experiences, portfolio };
