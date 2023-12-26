import { ReactNode } from 'react';

interface CardHolderProps {
  children: ReactNode;
  isLink?: boolean;
  showBox?: boolean;
}

const CardHolder = ({ children, isLink, showBox }: CardHolderProps) => (
  <div
    className={`m-2 p-1 ${showBox && 'my-4 rounded-xl bg-primary'} ${
      isLink && 'hover:bg-colorText hover:text-primary'
    }`}
  >
    {children}
  </div>
);

export default CardHolder;
