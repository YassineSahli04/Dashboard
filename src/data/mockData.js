import { tokens } from "../theme";

export const mockRadarData = {
  "AI Engineer": {
    labels: ["Python", "TensorFlow", "Data Science", "NLP", "Computer Vision", "MLOps"],
    datasets: [
      {
        label: "AI Engineer",
        data: [95, 90, 85, 80, 75, 70],
        backgroundColor: "rgba(34, 202, 236, 0.2)",
        borderColor: "rgba(34, 202, 236, 1)",
        borderWidth: 2,

      },
    ],
  },
  "Cybersecurity Analyst": {
    labels: ["Network Security", "Risk Assessment", "SIEM Tools", "Incident Response", "Encryption", "Ethical Hacking"],
    datasets: [
      {
        label: "Cybersecurity Analyst",
        data: [90, 85, 80, 75, 70, 65],
        backgroundColor: "rgba(34, 202, 236, 0.2)",
        borderColor: "rgba(34, 202, 236, 1)",
        borderWidth: 1,
      },
    ],
  },
  "Fullstack Developer": {
    labels: ["HTML/CSS", "JavaScript", "React", "Node.js", "Databases", "DevOps"],
    datasets: [
      {
        label: "Fullstack Developer",
        data: [85, 90, 95, 90, 80, 75],
        backgroundColor: "rgba(34, 202, 236, 0.2)",
        borderColor: "rgba(34, 202, 236, 1)",
        borderWidth: 2,
      },
    ],
  },
};


export const mockBarData = [
  {
    field: "AI Software",
    "San Francisco": 2000,
    city1Color: "hsl(0, 70%, 50%)",
    "New York": 1800,
    city2Color: "hsl(72, 70%, 50%)",
    "Seattle": 1600,
    city3Color: "hsl(144, 70%, 50%)",
    "Toronto": 1000,
    city4Color: "hsl(216, 70%, 50%)",
    "Austin": 800,
    city5Color: "hsl(288, 70%, 50%)"
  },
  {
    field: "Cybersecurity Software",
    "San Francisco": 2500,
    city1Color: "hsl(0, 70%, 50%)",
    "New York": 2200,
    city2Color: "hsl(72, 70%, 50%)",
    "Seattle": 2000,
    city3Color: "hsl(144, 70%, 50%)",
    "Toronto": 1200,
    city4Color: "hsl(216, 70%, 50%)",
    "Austin": 1000,
    city5Color: "hsl(288, 70%, 50%)"
  },
  {
    field: "Fullstack Software",
    "San Francisco": 3000,
    city1Color: "hsl(0, 70%, 50%)",
    "New York": 2800,
    city2Color: "hsl(72, 70%, 50%)",
    "Seattle": 2500,
    city3Color: "hsl(144, 70%, 50%)",
    "Toronto": 1500,
    city4Color: "hsl(216, 70%, 50%)",
    "Austin": 1300,
    city5Color: "hsl(288, 70%, 50%)"
  }
];



export const mockReportData = [
  { id: "AI Software", value1: 210, value2: 220 },
  { id: "Cybersecurity Software", value1: 180, value2: 190 },
  { id: "Fullstack Software", value1: 170, value2: 180 }
];

export const mockPieData = {
  "AI Software": [
    {
      id: "open",
      label: "Open Positions",
      value: 1000000,
      color: "hsl(200, 70%, 50%)",
    },
    {
      id: "seekers",
      label: "Job Seekers",
      value: 100000,
      color: "hsl(100, 70%, 50%)",
    },
  ],
  "Cybersecurity Software": [
    {
      id: "open",
      label: "Open Positions",
      value: 500000,
      color: "hsl(0, 70%, 50%)",
    },
    {
      id: "seekers",
      label: "Job Seekers",
      value: 75000,
      color: "hsl(40, 70%, 50%)",
    },
  ],
  "Fullstack Software": [
    {
      id: "open",
      label: "Open Positions",
      value: 350000,
      color: "hsl(290, 70%, 50%)",
    },
    {
      id: "seekers",
      label: "Job Seekers",
      value: 60000,
      color: "hsl(170, 70%, 50%)",
    },
  ],
};



export const mockLineData = {
  2023: [
    {
      year: 2023,
      id: "AI Software",
      color: "#ff6b6b",
      data: [
        { x: "Jan", y: 10 },
        { x: "Feb", y: 12 },
        { x: "Mar", y: 15 },
        { x: "Apr", y: 20 },
        { x: "May", y: 18 },
        { x: "Jun", y: 14 },
        { x: "Jul", y: 22 },
        { x: "Aug", y: 25 },
        { x: "Sep", y: 19 },
        { x: "Oct", y: 23 },
        { x: "Nov", y: 21 },
        { x: "Dec", y: 17 },
      ],
    },
    {
      year: 2023,
      id: "Cybersecurity Software",
      color: "#4dabf7",
      data: [
        { x: "Jan", y: 7 },
        { x: "Feb", y: 9 },
        { x: "Mar", y: 11 },
        { x: "Apr", y: 14 },
        { x: "May", y: 13 },
        { x: "Jun", y: 10 },
        { x: "Jul", y: 12 },
        { x: "Aug", y: 14 },
        { x: "Sep", y: 12 },
        { x: "Oct", y: 11 },
        { x: "Nov", y: 9 },
        { x: "Dec", y: 8 },
      ],
    },
    {
      year: 2023,
      id: "Full-Stack Software",
      color: "#69db7c",
      data: [
        { x: "Jan", y: 13 },
        { x: "Feb", y: 14 },
        { x: "Mar", y: 16 },
        { x: "Apr", y: 18 },
        { x: "May", y: 20 },
        { x: "Jun", y: 22 },
        { x: "Jul", y: 25 },
        { x: "Aug", y: 24 },
        { x: "Sep", y: 21 },
        { x: "Oct", y: 20 },
        { x: "Nov", y: 18 },
        { x: "Dec", y: 19 },
      ],
    },
  ],
  2024: [
    {
      year: 2024,
      id: "AI Software",
      color: "#ff6b6b",
      data: [
        { x: "Jan", y: 14 },
        { x: "Feb", y: 16 },
        { x: "Mar", y: 19 },
        { x: "Apr", y: 22 },
        { x: "May", y: 20 },
        { x: "Jun", y: 18 },
        { x: "Jul", y: 25 },
        { x: "Aug", y: 27 },
        { x: "Sep", y: 23 },
        { x: "Oct", y: 22 },
        { x: "Nov", y: 20 },
        { x: "Dec", y: 21 },
      ],
    },
    {
      year: 2024,
      id: "Cybersecurity Software",
      color: "#4dabf7",
      data: [
        { x: "Jan", y: 9 },
        { x: "Feb", y: 10 },
        { x: "Mar", y: 12 },
        { x: "Apr", y: 15 },
        { x: "May", y: 13 },
        { x: "Jun", y: 14 },
        { x: "Jul", y: 15 },
        { x: "Aug", y: 16 },
        { x: "Sep", y: 14 },
        { x: "Oct", y: 13 },
        { x: "Nov", y: 12 },
        { x: "Dec", y: 11 },
      ],
    },
    {
      year: 2024,
      id: "Full-Stack Software",
      color: "#69db7c",
      data: [
        { x: "Jan", y: 18 },
        { x: "Feb", y: 20 },
        { x: "Mar", y: 22 },
        { x: "Apr", y: 23 },
        { x: "May", y: 25 },
        { x: "Jun", y: 27 },
        { x: "Jul", y: 29 },
        { x: "Aug", y: 28 },
        { x: "Sep", y: 26 },
        { x: "Oct", y: 25 },
        { x: "Nov", y: 23 },
        { x: "Dec", y: 22 },
      ],
    },
  ],
  2025: [
    {
      year: 2025,
      id: "AI Software",
      color: "#ff6b6b",
      data: [
        { x: "Jan", y: 22 },
        { x: "Feb", y: 24 },
        { x: "Mar", y: 26 },
        { x: "Apr", y: 28 },
        { x: "May", y: 30 },
        { x: "Jun", y: 33 },
        { x: "Jul", y: 34 },
        { x: "Aug", y: 35 },
        { x: "Sep", y: 33 },
        { x: "Oct", y: 31 },
        { x: "Nov", y: 29 },
        { x: "Dec", y: 28 },
      ],
    },
    {
      year: 2025,
      id: "Cybersecurity Software",
      color: "#4dabf7",
      data: [
        { x: "Jan", y: 12 },
        { x: "Feb", y: 13 },
        { x: "Mar", y: 15 },
        { x: "Apr", y: 16 },
        { x: "May", y: 15 },
        { x: "Jun", y: 16 },
        { x: "Jul", y: 17 },
        { x: "Aug", y: 18 },
        { x: "Sep", y: 17 },
        { x: "Oct", y: 16 },
        { x: "Nov", y: 15 },
        { x: "Dec", y: 14 },
      ],
    },
    {
      year: 2025,
      id: "Full-Stack Software",
      color: "#69db7c",
      data: [
        { x: "Jan", y: 24 },
        { x: "Feb", y: 26 },
        { x: "Mar", y: 28 },
        { x: "Apr", y: 30 },
        { x: "May", y: 33 },
        { x: "Jun", y: 35 },
        { x: "Jul", y: 36 },
        { x: "Aug", y: 35 },
        { x: "Sep", y: 33 },
        { x: "Oct", y: 31 },
        { x: "Nov", y: 29 },
        { x: "Dec", y: 27 },
      ],
    },
  ],
};


