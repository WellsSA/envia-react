const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const currencyFormat = value =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

const yearsFromNow = value => {
  const date = new Date(value);
  const now = new Date();

  return now.getFullYear() - date.getFullYear();
};

export { capitalize, currencyFormat, yearsFromNow };
