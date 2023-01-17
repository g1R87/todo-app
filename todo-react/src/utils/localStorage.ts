export const set = (key: string, data: Object) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const get = (key: string) => {
  let value = localStorage.getItem(key);
  if (value) return JSON.parse(value);
};
