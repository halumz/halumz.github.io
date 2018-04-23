import aboutMe from './aboutMe';
import awards from './awards';
import education from './education';
import skills from './skills';
import portfolio from './portfolio';
import workExperience from './workExperience';
import externalLinks from './externalLinks';

const myself = {
  name: 'Mashuk Sadman',
  profession: 'Software Engineer',
  address: 'Flat-5b, 85B/12A, Dhanmondi, Dhaka, BANGLADESH',
  phone: '+88 01726 634 711',
  email: 'mashuksadman@gmail.com'
};
const mainAttributes = [
  {
    value: 'aboutMe',
    title: 'Profile'
  },
  {
    value: 'skills',
    title: 'Skills'
  },
  {
    value: 'portfolio',
    title: 'Portfolio'
  },
  {
    value: 'workExperience',
    title: 'Work Experience'
  },
  {
    value: 'education',
    title: 'Education'
  },
  {
    value: 'awards',
    title: 'Awards'
  },
  {
    value: 'externalLinks',
    title: 'External Links'
  }
];

const languages = [
  'C',
  'C++',
  'Java',
  'javascript',
  'react',
  'XML & JSON',
  'MySQL'
];
export {
  myself,
  mainAttributes,
  aboutMe,
  awards,
  workExperience,
  education,
  languages,
  skills,
  portfolio,
  externalLinks
};
