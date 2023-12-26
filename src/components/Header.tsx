import Pulse from 'react-reveal/Pulse';
import Card from './Card';
import { myself } from '../configs';

const Header = () => (
  <Pulse>
    <Card className="flex w-screen flex-col items-center gap-1 py-2">
      <p className="text-center text-lg font-bold">{myself.name}</p>
      <p className="text-center">{myself.profession}</p>
      {/* <p>{myself.location}</p> */}
      <p className="text-center">
        <a
          target="blank"
          className="hover:text-blue-500"
          href={`mailto:${myself.email}`}
        >
          {myself.email}
        </a>
        <span className="lg: hidden px-2 lg:inline-block">|</span>
        <br className="lg:hidden" />
        <a
          target="blank"
          className="hover:text-blue-500"
          href={`tel:${myself.phone.replace(' ', '')}`}
        >
          {myself.phone}
        </a>
      </p>
    </Card>
  </Pulse>
);

export default Header;
