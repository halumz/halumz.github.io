import ConfigProps from '../models/ComfigProps';
import CardHeader from './CardHolder';

const Education = ({ title, period, result, organization }: ConfigProps) => (
  <CardHeader key={title}>
    <p>
      <strong>{title}</strong>
      {' | '}
      {organization}
    </p>
    <p>
      {period}
      {' - '}
      {result}
    </p>
  </CardHeader>
);
export default Education;
