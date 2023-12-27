import ConfigProps from '../models/ComfigProps';

const ExternalLinkComponent = ({ ImageComponent, link, title }: ConfigProps) =>
  ImageComponent && (
    <a href={link} target="blank" title={title} className="py-10">
      {typeof ImageComponent === 'string' ? (
        <img
          alt="#"
          src={ImageComponent}
          className="w-[2.1rem] transition-opacity hover:opacity-60"
        />
      ) : (
        <ImageComponent
          width="2.1rem"
          height="2.1rem"
          className="fill-colorText transition-opacity hover:opacity-60"
        />
      )}
    </a>
  );

export default ExternalLinkComponent;
