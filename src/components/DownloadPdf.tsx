/// <reference types="vite-plugin-svgr/client" />
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
    <button
      onClick={onClick}
      title="Download PDF"
      className="bg-colorText fixed bottom-5 z-20 right-5 rounded-full p-3 lg:bottom-10 lg:right-10"
    >
      <DownloadIcon
        width={30}
        height={30}
        className="fill-primary transition-opacity hover:opacity-60"
      />
    </button>
  );
};

export default DownloadPdf;
export { iconSize };
