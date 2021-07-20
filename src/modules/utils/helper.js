// Conver API date to VNese date

export const converDate = (data) => {
  const date = new Date(data);
  return date.toLocaleDateString();
};
//

export const randomDuration = () =>
  Math.trunc(Math.random() * (200 - 120) + 120);
//
export const randomNumber = () => Math.trunc(Math.random() * (8 - 5) + 5);
