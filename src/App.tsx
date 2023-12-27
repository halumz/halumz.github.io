import { useEffect, useRef, useState } from 'react';

import Header from './components/Header';
import Configuration from './components/Configuration';
import DownloadPdf from './components/DownloadPdf';
import ThemeSwitcher from './components/ThemeSwitcher';
import { getLocalStorage, saveLocalStorage } from './utils/utility';
import { configuration } from './configs';

function App() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [theme, setTheme] = useState(getLocalStorage('theme', 'light'));

  const setThemeInBody = (currentTheme: string) => {
    if (currentTheme === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
  };

  const updateTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setThemeInBody(newTheme);
    saveLocalStorage('theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    setHeaderHeight(headerRef.current?.clientHeight || 0);
    setThemeInBody(theme);
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center bg-primary pb-5 text-colorText">
      <div
        ref={headerRef}
        className="fixed left-0 top-0 z-10 flex w-screen flex-col items-center gap-1 pb-2"
      >
        <Header />
      </div>
      <div
        style={{ paddingTop: headerHeight + 10 }}
        className="flex w-full max-w-screen-md flex-col items-center justify-center gap-5  px-3 pt-5"
      >
        {configuration
          .filter(({ hideInApp }) => hideInApp !== true)
          .map((config) => (
            <Configuration key={config.value} {...config} />
          ))}
      </div>
      <DownloadPdf />
      <ThemeSwitcher
        theme={theme}
        updateTheme={updateTheme}
        headerHeight={headerHeight}
      />
    </div>
  );
}

export default App;
