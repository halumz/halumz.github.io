import ConfigProps from "../models/ComfigProps";

const Skill = ({ title, options }: ConfigProps) => (
  <p key={title}>
    <strong className="pr-2">
      {title}
      {":"}
    </strong>
    {options?.join(", ")}
  </p>
);

export default Skill;
