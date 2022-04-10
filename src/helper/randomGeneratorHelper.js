export const randomChar = () => {
  const chars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

  return chars.charAt(Math.floor(Math.random() * chars.length));
};
