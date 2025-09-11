import HeroImage from "/assets/tools/Ali.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/cpp.png";
import Tools4 from "/assets/tools/looker.png";
import Tools5 from "/assets/tools/mysql.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/python.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/r.png";
import Tools10 from "/assets/tools/html.png";
import Tools11 from "/assets/tools/css.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "C++",
    ket: "Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Looker Studio",
    ket: "Dashboard",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "MySQL",
    ket: "Database",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Python",
    ket: "Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "R",
    ket: "Language",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "HTML",
    ket: "Language",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "CSS",
    ket: "Language",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/project1.webp";
import Proyek2 from "/assets/proyek/project2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Bike Sales Dashboard",
    desk: "Interactive dashboard analyzing European bike sales. Revealed Germany as top market, women as main buyers (54.8%), and young adults (25–34) as key contributors.",
    tools: ["HTML", "CSS", "Javascript", "Big Query", "Looker Studio", "Github"],
    dad: "200",
    link: [
      { label: "Live Demo", url: "https://kampus-merdeka-software-engineering.github.io/km-feb24-jakarta-8/" }
    ],
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Telecom Churn Analysis",
    desk: "Built churn prediction with Logistic Regression with 78% accuracy. Segmented customers into Low, Medium, High risk and visualized key factors (monthly charge, tenure, competition) to support retention strategies.",
    tools: ["Python", "Looker Studio", "MySQL"],
    dad: "300",
    link: [
      { 
        label: "Live Demo", 
        url: "https://lookerstudio.google.com/u/0/reporting/23a7c9a4-3baa-440d-99af-f95a470f49a2/page/tXVUE", 
        type: "link" 
      },
      { 
        label: "Download Report", 
        url: "/assets/pdf/vertopal.com_Telecom_analysis.pdf",  
        type: "pdf" 
      }
    ],
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Pernikahan 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "400",
    link: [
      { label: "Live Demo", url: "https://kampus-merdeka-software-engineering.github.io/km-feb24-jakarta-8/" }
    ],
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website Course",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
    dad: "500",
    link: [
      { label: "Live Demo", url: "https://kampus-merdeka-software-engineering.github.io/km-feb24-jakarta-8/" }
    ],
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Portfolio",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
    dad: "600",
    link: [
      { label: "Live Demo", url: "https://kampus-merdeka-software-engineering.github.io/km-feb24-jakarta-8/" }
    ],
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Company Profile 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["NextJS", "TailwindCSS", "Framermotion"],
    dad: "700",
    link: [
      { label: "Live Demo", url: "https://kampus-merdeka-software-engineering.github.io/km-feb24-jakarta-8/" }
    ],
  },
];
