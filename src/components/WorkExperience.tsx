import ConfigProps from '../models/ComfigProps';
import CardHeader from './CardHolder';

const WorkExperience = ({
  link,
  company,
  details,
  position,
  period,
}: ConfigProps) => (
  <CardHeader key={company}>
    <a target="blank" href={link}>
      <p>
        <strong>{`${position} | ${company}`}</strong>
      </p>
      <p>{period}</p>
      <p className="text-justify">{details}</p>
    </a>
  </CardHeader>
);

export default WorkExperience;
