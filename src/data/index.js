import { fitnus, trendchat, leetcode } from "../assets";

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
    title: "Backend Developer",
    company_name: "TrendChat Project Team",
    date: "2025.06 - 2025.08",
    details: [
      "MSA 기반 실시간 채팅 플랫폼 백엔드 개발",
      "Spring WebFlux + SSE로 실시간 메시지 전송 구현",
      "RabbitMQ·Redis Pub/Sub으로 NEW 메시지 알림 시스템 구축",
      "JWT + Refresh Token 기반 인증 및 역할별 접근 제어 적용",
      "DB 부하 70% 절감, 동시 접속자 1,000+명 안정 처리",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "FitNus",
    date: "2024.09 - 2024.11",
    details: [
      "구독·쿠폰 기반 운동 세션 결제 백엔드 개발",
      "KakaoPay 결제 연동, 결제 성공 시 쿠폰 발급·만료·잔여수량 관리",
      "Optimistic Lock 기반 동시성 제어로 데이터 경합 문제 방지",
      "결제 실패 시 트랜잭션 보상 처리로 데이터 일관성 보장",
      "QueryDSL 기반 복합 조회 API 구현",
    ],
  },
  {
    title: "Computer Science",
    company_name: "King's College London",
    date: "2017 - 2023",
    details: [
      "자료구조, 운영체제, 인터넷 시스템 등 핵심 CS 과목 이수",
      "PyTorch·TensorFlow 기반 한영 양방향 기계번역기 개발 및 논문 제출",
      "TurtleBot을 활용한 A* 탐색 기반 자율주행 프로젝트 (ROS, Python)",
      "Pacman AI: 베이즈 분류·MDP 기반 자동 플레이 에이전트 구현",
      "학점: Upper Second Class (3.6/4.0)",
    ],
  },
];

const portfolio = [
  {
    name: "TrendChat",
    description:
      "MSA 기반 실시간 트렌드 채팅 플랫폼. Google Trends RSS를 Kafka로 처리해 주제별 채팅방을 자동 생성하고, WebFlux + SSE로 실시간 메시지·알림 전송. RabbitMQ·Redis Pub/Sub으로 고속 알림, JWT + Refresh Token 인증으로 안전한 접근 제어. 이벤트 드리븐 구조로 DB 부하 70% 절감, 동시 접속자 1,000+명 안정 처리.",
    image: trendchat,
    tags: [
      "Spring WebFlux",
      "RabbitMQ",
      "Redis",
      "JWT",
      "MySQL",
      "Refresh Token",
    ],
    github: "https://github.com/Cho-Gall-Dr-Mundo",
  },
  {
    name: "FitNus",
    description:
      "구독·쿠폰 기반 운동 세션 결제 백엔드. KakaoPay 결제 연동 및 결제 성공 시 쿠폰 자동 발급, 만료·잔여수량·사용이력 관리. Optimistic Lock 기반 동시성 제어로 이중 사용·경합 문제 0건 달성. 트랜잭션 보상 처리로 결제 실패 시 데이터 일관성 보장, 관리자 API로 발급·조회 기능 제공.",
    image: fitnus,
    tags: [
      "Spring Boot",
      "JPA",
      "MySQL",
      "KakaoPay",
      "Optimistic Lock",
      "QueryDSL",
      "Redis",
    ],
    github: "https://github.com/FitNus/FitNus",
  },
  {
    name: "Algorithm Practice",
    description:
      "LeetCode 기반 알고리즘 문제 풀이 저장소. 이진 탐색, 그리디, DP 등 주제별로 풀이 및 주석 정리. 각 문제는 시간 복잡도, 공간 복잡도 분석 포함.",
    image: leetcode,
    tags: ["Java", "Python", "Data Structures", "Algorithms", "LeetCode"],
    github: "https://github.com/tae98/LeetCodeAlgorithmPractice",
  },
];

export { experiences, portfolio };
