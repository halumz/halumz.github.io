import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => (
  <div
    className={`rounded bg-secondary shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.2),0px_4px_5px_0px_rgba(0,0,0,0.14),0px_1px_10px_0px_rgba(0,0,0,0.12)] transition-shadow delay-[0ms] duration-300 ease-in-out ${className}`}
  >
    {children}
  </div>
);

export default Card;
