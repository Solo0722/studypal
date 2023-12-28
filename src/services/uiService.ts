export const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215);
  const hexColor = randomColor.toString(16).toUpperCase();
  return "#" + "0".repeat(6 - hexColor.length) + hexColor;
};
