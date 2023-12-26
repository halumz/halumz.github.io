import { FunctionComponent } from "react";
import ConfigModel from "./ConfigModel";
import ConfigProps from "./ComfigProps";

interface ConfigurationModel {
  value: string;
  title: string;
  showBox?: boolean;
  showArrow?: boolean;
  hideInApp?: boolean;
  config: ConfigModel[];
  ComponentName: FunctionComponent<ConfigProps>;
}

export default ConfigurationModel;
