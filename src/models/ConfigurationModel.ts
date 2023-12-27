import { FunctionComponent } from 'react';
import ConfigModel from './ConfigModel';
import ConfigProps from './ComfigProps';

interface ConfigurationModel {
  value: string;
  title: string;
  config: ConfigModel[]; // list of data for the component
  ComponentName: FunctionComponent<ConfigProps>; // component name
  showBox?: boolean; // show box over the component
  showArrow?: boolean; // show arrow before the paragraph
  hideInApp?: boolean; // hide in app
  addNewPageInPdf?: boolean; // add new page after the component in pdf
}

export default ConfigurationModel;
