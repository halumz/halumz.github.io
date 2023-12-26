import ConfigProps from '../models/ComfigProps';
import CardHeader from './CardHolder';

const Education = ({ title, period, result, institution }: ConfigProps) => (
  <CardHeader key={title}>
    <p>
      <strong>{title}</strong>
      {' | '}
      {institution}
    </p>
    <p>
      {period}
      {' - '}
      {result}
    </p>
  </CardHeader>
);
export default Education;
