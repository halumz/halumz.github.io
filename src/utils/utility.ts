const saveLocalStorage = (name: string, value: string): void => {
  if (!value) {
    return;
  }
  localStorage.setItem(name, value);
};

const getLocalStorage = (name: string, defaultValue: string = ""): string => {
  const value = localStorage.getItem(name);
  if (!value) {
    return defaultValue;
  }
  return value;
};

export { saveLocalStorage, getLocalStorage };
