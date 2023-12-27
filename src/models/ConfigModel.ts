import { FunctionComponent, SVGProps } from 'react';

interface ConfigModel {
  title?: string;
  details?: string;
  link?: string; // link for the config
  workRole?: string; // position for experience
  skillSet?: string[]; // skill set for skills
  organization?: string; // organization name
  language?: string; // project language of portfolio
  period?: string; // time period for experience or education
  result?: string; // result for education
  ImageComponent?: string | FunctionComponent<SVGProps<SVGSVGElement>>; // image link or svg component for external link
}

export default ConfigModel;
