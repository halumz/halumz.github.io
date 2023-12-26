import uvaImg from '../assets/img/uva.png';
import hackerrankImg from '../assets/img/hackerrank.svg?react';
import linkedInImg from '../assets/img/linkedin.svg?react';
import githubImg from '../assets/img/github.svg?react';

import ConfigModel from '../models/ConfigModel';

const externalLinks: ConfigModel[] = [
  {
    link: 'https://github.com/halumz',
    title: 'Github',
    ImageLink: githubImg,
  },
  {
    link: 'http://uhunt.onlinejudge.org/id/71527',
    title: 'UVA',
    ImageLink: uvaImg,
  },
  {
    link: 'https://www.hackerrank.com/mashuksadman',
    title: 'Hacker Rank',
    ImageLink: hackerrankImg,
  },
  {
    link: 'https://www.linkedin.com/in/mashuk-sadman-740a3b107/',
    title: 'Linkedin',
    ImageLink: linkedInImg,
  },
];

export default externalLinks;
