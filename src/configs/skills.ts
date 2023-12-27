import ConfigModel from '../models/ConfigModel';

const skills: ConfigModel[] = [
  {
    details: 'frontendWeb',
    title: 'Technology',
    skillSet: [
      'React Js',
      'Redux',
      'JavaScript [ES7]',
      'Spring Boot',
      'Scrapy',
    ],
  },
  {
    details: 'mlTools',
    title: 'Machine Learning Tools',
    skillSet: ['Amazon Rekoginition', 'Microsoft Azure Machine Learning'],
  },
  {
    details: 'api',
    title: 'API',
    skillSet: [
      'FabricJs',
      'Amazon Web Services',
      'Algoila',
      'Firebase',
      'Auth0',
    ],
  },
  {
    details: 'smApi',
    title: 'Social Media API',
    skillSet: ['Google', 'Facebook', 'Twitter', 'Github', 'Youtube'],
  },
  {
    details: 'mobileApplication',
    title: 'IDE',
    skillSet: ['Android Studio', 'Visual Code', 'IntellIJ'],
  },
  {
    details: 'dataStore',
    title: 'DBMS',
    skillSet: ['MySQL', 'Sqlite', 'Postgres', 'Firestore'],
  },
  {
    details: 'developmentTools',
    title: 'Automation Tools',
    skillSet: ['Webpack'],
  },
  {
    details: 'Versioning',
    title: 'Version Controlling',
    skillSet: ['Git'],
  },
  {
    details: 'ProjectManagement',
    title: 'Project Management',
    skillSet: ['Scrum'],
  },
];

export default skills;
