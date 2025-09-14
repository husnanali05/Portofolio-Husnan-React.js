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
import Proyek3 from "/assets/proyek/project3.webp";
import Proyek4 from "/assets/proyek/project4.webp";
import Proyek5 from "/assets/proyek/project5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Bike Sales Dashboard",
    desk: "Bike sales dashboard showing Germany as top market, women 54.8%, and young adults as key buyers.",
    tools: ["HTML", "CSS", "Javascript", "Big Query", "Looker Studio", "Github"],
    dad: "200",
    links: [
      { type: "live", url: "https://kampus-merdeka-software-engineering.github.io/km-feb24-jakarta-8/", label: "Live Demo" }
    ],
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Telecom Churn Analysis",
    desk: "Churn prediction with Logistic Regression (78% accuracy), customer risk segmentation, and key factor visualization (charges, tenure, competition) for retention strategies.",
    tools: ["Python", "Looker Studio", "MySQL"],
    dad: "300",
    links: [
      { type: "live", url: "https://lookerstudio.google.com/reporting/23a7c9a4-3baa-440d-99af-f95a470f49a2", label: "Live Demo" },
      { type: "pdf", url: "/assets/pdf/vertopal.com_Telecom_analysis.pdf", label: "Case Study (PDF)" }
    ],
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Pima Diabetes Analysis",
    desk: "Diabetes classification using Random Forest, SVM, and Logistic Regression. Logistic Regression gave best ROC-AUC (0.89), while Random Forest achieved highest testing accuracy (82%).",
    tools: ["R Studio", "MySQL", "R Shiny"],
    dad: "400",
    links: [
      { type: "live", url: "https://husnanalih.shinyapps.io/r-shiny-dashboard/", label: "Live Demo" },
      { type: "link", label: "Journal Report", url: "https://medium.com/@arimoch83/comparative-analysis-of-random-forest-svm-and-logistic-regression-for-diabetes-classification-327d834d8da7" }
    ],
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Electricity Consumption Classification in West Java",
    desk: "Analyzed 600,000+ customer electricity records in West Java using Random Forest, XGBoost, and Logistic Regression. Random Forest achieved 92.2% accuracy (AUC 0.985), providing insights for anomaly detection and operational efficiency at PLN.",
    tools: ["Python", "Excel", "Google Colab"],
    dad: "500",
    links: [
      { type: "pdf", url: "/assets/pdf/Laporan KP HUSNAN Ali_redacted.pdf", label: "Analisys Report (PDF)" }
    ],
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "HRSG Quality Control Optimization Using Machine Learning",
    desk: "Developed a Max-MEWMA control chart using Random Forest Regressor residuals to monitor Fuel Gas Flow, Combustion Pressure, and Gas Temperature. Improved anomaly detection sensitivity for HRSG system, identifying key out-of-control signals in real-time.",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
    dad: "600",
    links: [
      { type: "pdf", url: "/assets/pdf/Tugas Akhir_Husnan Ali Husnain_redacted.pdf", label: "Analisys Report (PDF)" }
    ],
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Company Profile 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["NextJS", "TailwindCSS", "Framermotion"],
    dad: "700",
    links: [
      { type: "live", url: "https://kampus-merdeka-software-engineering.github.io/km-feb24-jakarta-8/", label: "Live Demo" }
    ],
  },
];
