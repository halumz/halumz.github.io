import ThemeIcon from '../assets/img/themeSwitcher.svg?react';
import ThemeDarkIcon from '../assets/img/sun.svg?react';
import { iconSize } from './DownloadPdf';

interface ThemeSwitcherProps {
  theme: string;
  headerHeight: number;
  updateTheme: () => void;
}

const ThemeSwitcher = ({
  theme,
  headerHeight,
  updateTheme,
}: ThemeSwitcherProps) => {
  const SwitcherIcon = theme === 'light' ? ThemeIcon : ThemeDarkIcon;

  return (
    <button
      onClick={updateTheme}
      title={theme === 'light' ? 'Dark mode' : 'Light mode'}
      className="fixed right-5 z-20 rounded-full fill-colorText lg:right-10"
      style={{ top: (headerHeight - iconSize) / 2 }}
    >
      <SwitcherIcon
        width={iconSize}
        height={iconSize}
        className="fill-colorText transition-opacity hover:opacity-60"
      />
    </button>
  );
};

export default ThemeSwitcher;
