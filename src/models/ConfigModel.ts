import { FunctionComponent, SVGProps } from 'react';

interface ConfigModel {
  title?: string;
  details?: string;
  link?: string;
  company?: string;
  position?: string;
  options?: string[];
  creator?: string;
  type?: string;
  period?: string;
  result?: string;
  institution?: string;
  ImageLink?: string | FunctionComponent<SVGProps<SVGSVGElement>>;
}

export default ConfigModel;
