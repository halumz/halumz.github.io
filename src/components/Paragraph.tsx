import ConfigProps from "../models/ComfigProps";

const Paragraph = ({ details, showArrow }: ConfigProps) => (
  <div className="flex text-justify">
    {showArrow && (
      <p className="pr-2">
        <strong>•</strong>
      </p>
    )}
    <p>{details}</p>
  </div>
);

export default Paragraph;
