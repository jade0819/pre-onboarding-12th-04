export const chartColors = {
  bar: isAccent => (isAccent ? colors.pinkAccent : colors.pink),
  area: isAccent => (isAccent ? colors.skyblueAccent : colors.skyblue),
};

export const colors = {
  skyblue: 'rgba(181, 217, 241, 0.6)',
  skyblueAccent: 'rgba(159, 205, 231, 1)',

  pink: 'rgba(248, 188, 214, 0.6)',
  pinkAccent: 'rgba(255, 100, 147, 0.8)',
  whiteCloudy: 'rgba(240, 240, 240, 0.5)',
};
