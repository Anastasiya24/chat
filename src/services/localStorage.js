export const lsGet = (key) => {
  return localStorage.getItem(key);
};

export const lsSet = (key, value) => {
  localStorage.setItem(key, value);
};

export const lsRemove = (key) => {
  localStorage.removeItem(key);
};
