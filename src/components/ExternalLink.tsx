import ConfigProps from '../models/ComfigProps';

const ExternalLinkComponent = ({ ImageLink, link, title }: ConfigProps) =>
  ImageLink && (
    <a href={link} target="blank" title={title} className="py-10">
      {typeof ImageLink === 'string' ? (
        <img
          alt="#"
          src={ImageLink}
          className="w-[2.3rem] transition-opacity hover:opacity-60"
        />
      ) : (
        <ImageLink
          width="2.3rem"
          height="2.3rem"
          className="fill-colorText transition-opacity hover:opacity-60"
        />
      )}
    </a>
  );

export default ExternalLinkComponent;
