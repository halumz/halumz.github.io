import personalInformation from "./personalInformation";
import objectives from "./objectives";
import awards from "./awards";
import education from "./education";
import skills from "./skills";
import portfolio from "./portfolio";
import workExperience from "./workExperience";
import externalLinks from "./externalLinks";
import Paragraph from "../components/Paragraph";
import ExternalLink from "../components/ExternalLink";
import Skill from "../components/Skill";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
import Portfolio from "../components/Portfolio";
import ConfigurationModel from "../models/ConfigurationModel";

const myself = {
  name: "Mashuk Sadman",
  profession: "Senior Software Engineer",
  address: "Flat-b5, 85B/12A, Dhanmondi, Dhaka, BANGLADESH",
  phone: "+88 01726 634 711",
  email: "mashuksadman@gmail.com",
  location: "Dhaka, Bangladesh",
};

const configuration: ConfigurationModel[] = [
  {
    value: "personalInformation",
    title: "Personal Statement",
    ComponentName: Paragraph,
    config: personalInformation,
  },
  {
    value: "objectives",
    title: "Objectives",
    ComponentName: Paragraph,
    config: objectives,
    hideInApp: true,
  },
  {
    value: "skills",
    title: "Skills",
    ComponentName: Skill,
    config: skills,
  },
  {
    value: "workExperience",
    title: "Work Experience",
    ComponentName: WorkExperience,
    config: workExperience,
    showBox: true,
  },
  {
    value: "portfolio",
    title: "Portfolio",
    ComponentName: Portfolio,
    config: portfolio,
    showBox: true,
  },
  {
    value: "awards",
    title: "Awards",
    ComponentName: Paragraph,
    config: awards,
    showArrow: true,
  },
  {
    value: "education",
    title: "Education",
    ComponentName: Education,
    config: education,
    showBox: true,
    hideInApp: true,
  },
  {
    value: "externalLinks",
    title: "External Links",
    ComponentName: ExternalLink,
    config: externalLinks,
  },
];

export { myself, configuration };
