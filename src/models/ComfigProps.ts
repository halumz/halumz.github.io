import ConfigModel from "./ConfigModel";

interface ConfigProps extends ConfigModel {
  value: string;
  showBox?: boolean;
  showArrow?: boolean;
}

export default ConfigProps;
