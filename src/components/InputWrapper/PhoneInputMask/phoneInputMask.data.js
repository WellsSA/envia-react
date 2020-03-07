const maskWithLessThan9Digits = [
  '(',
  /[1-9]/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /(\d|'')/,
];

const maskWith9Digits = [
  '(',
  /[1-9]/,
  /\d/,
  ')',
  ' ',
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

function clearPhone(phone) {
  return phone.replace(/\(|_|\)| |-/g, '');
}

function validatePhone(phone) {
  const clearValue = clearPhone(phone);
  return clearValue.length === 10 || clearValue.length === 11;
}

export { maskWith9Digits, maskWithLessThan9Digits, clearPhone, validatePhone };
