import { Fade } from 'react-awesome-reveal';
import CardHolder from './CardHolder';
import Card from './Card';

import ConfigurationModel from '../models/ConfigurationModel';

const Configuration = ({
  ComponentName,
  value,
  title,
  showBox,
  config,
  showArrow,
}: ConfigurationModel) => (
  <Card className="w-full">
    <Card className="bg-bgHolder p-4 font-bold">
      <p>{title}</p>
    </Card>

    <div
      className={`${
        value === 'externalLinks' && 'flex justify-center gap-0.5 py-2 lg:gap-1'
      } ${showBox && 'py-2'}`}
    >
      {config.map((singleConfig, index) => (
        <Fade key={index} direction="up" triggerOnce duration={300}>
          <CardHolder
            showBox={showBox}
            isLink={value === 'portfolio' || value === 'workExperience'}
          >
            <ComponentName
              value={value}
              showArrow={showArrow}
              {...singleConfig}
            />
          </CardHolder>
        </Fade>
      ))}
    </div>
  </Card>
);

export default Configuration;
