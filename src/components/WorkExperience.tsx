import ConfigProps from '../models/ComfigProps';
import CardHeader from './CardHolder';

const WorkExperience = ({
  link,
  organization,
  details,
  workRole,
  period,
}: ConfigProps) => (
  <CardHeader key={organization}>
    <a target="blank" href={link}>
      <p>
        <strong>{`${workRole} | ${organization}`}</strong>
      </p>
      <p>{period}</p>
      <p className="text-justify">{details}</p>
    </a>
  </CardHeader>
);

export default WorkExperience;
