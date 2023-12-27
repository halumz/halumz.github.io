import ConfigProps from '../models/ComfigProps';

const Skill = ({ title, skillSet }: ConfigProps) => (
  <p key={title} className="text-justify">
    <strong className="pr-2">
      {title}
      {':'}
    </strong>
    {skillSet?.join(', ')}
  </p>
);

export default Skill;
