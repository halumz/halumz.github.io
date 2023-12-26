import ConfigProps from '../models/ComfigProps';
import CardHeader from './CardHolder';

const Portfolio = ({ title, creator, details, link }: ConfigProps) => (
  <CardHeader key={title}>
    <a target="blank" href={link}>
      <p>
        <strong>
          {title}
          {creator && <span>{` (${creator})`}</span>}
        </strong>
      </p>
      <p className="text-justify">{details}</p>
    </a>
  </CardHeader>
);

export default Portfolio;
