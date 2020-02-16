const getColor = (props, colorName) => {
  const {
    theme: { colors },
  } = props;

  return colors[colorName];
};
// ex: ${props => getColor(props, 'background')};

export { getColor };
