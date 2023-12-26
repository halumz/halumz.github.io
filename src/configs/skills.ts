import ConfigModel from "../models/ConfigModel";

const skills: ConfigModel[] = [
  {
    details: "frontendWeb",
    title: "Technology",
    options: ["React Js", "Redux", "JavaScript [ES7]", "Spring Boot", "Scrapy"],
  },
  {
    details: "mlTools",
    title: "Machine Learning Tools",
    options: ["Amazon Rekoginition", "Microsoft Azure Machine Learning"],
  },
  {
    details: "api",
    title: "API",
    options: [
      "FabricJs",
      "Amazon Web Services",
      "Algoila",
      "Firebase",
      "Auth0",
    ],
  },
  {
    details: "smApi",
    title: "Social Media API",
    options: ["Google", "Facebook", "Twitter", "Github", "Youtube"],
  },
  {
    details: "mobileApplication",
    title: "IDE",
    options: ["Android Studio", "Visual Code", "IntellIJ"],
  },
  {
    details: "dataStore",
    title: "DBMS",
    options: ["MySQL", "Sqlite", "Postgres", "Firestore"],
  },
  {
    details: "developmentTools",
    title: "Automation Tools",
    options: ["Webpack"],
  },
  {
    details: "Versioning",
    title: "Version Controlling",
    options: ["Git"],
  },
  {
    details: "ProjectManagement",
    title: "Project Management",
    options: ["Scrum"],
  },
];

export default skills;
