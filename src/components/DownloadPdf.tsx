/// <reference types="vite-plugin-svgr/client" />
import { Slide } from 'react-awesome-reveal';
import DownloadIcon from '../assets/img/download.svg?react';
import createCV from '../utils/createCV';

const iconSize = 30;

const DownloadPdf = () => {
  const onClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const pdf = createCV();
    pdf.save('mashuk_sadman.pdf');
  };

  return (
    <div className="fixed bottom-5 right-5 z-20">
      <Slide direction="up">
        <button
          onClick={onClick}
          className="rounded-full bg-colorText p-3 hover:opacity-60 lg:bottom-10 lg:right-10"
          title="Download PDF"
        >
          <DownloadIcon
            width={30}
            height={30}
            className="fill-primary transition-opacity hover:opacity-60"
          />
        </button>
      </Slide>
    </div>
  );
};

export default DownloadPdf;
export { iconSize };
