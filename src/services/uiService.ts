import truncate from "lodash/truncate";
export const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215);
  const hexColor = randomColor.toString(16).toUpperCase();
  return "#" + "0".repeat(6 - hexColor.length) + hexColor;
};

export const truncateString = (str: string, limit: number): string => {
  return truncate(str, {
    length: limit || 20,
    omission: "...",
  });
};
