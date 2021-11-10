export const saveLocalItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const removeLocalItem = (key) => {
  localStorage.removeItem(key);
};

export const checkLocalStorage = (key) => {
  return !!getLocalItem(key);
};
