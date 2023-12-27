import ConfigProps from '../models/ComfigProps';
import CardHeader from './CardHolder';

const Portfolio = ({ title, organization, details, link }: ConfigProps) => (
  <CardHeader key={title}>
    <a target="blank" href={link}>
      <p>
        <strong>
          {title}
          {organization && <span>{` (${organization})`}</span>}
        </strong>
      </p>
      <p className="text-justify">{details}</p>
    </a>
  </CardHeader>
);

export default Portfolio;
