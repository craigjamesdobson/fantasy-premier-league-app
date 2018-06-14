module.exports = (value: string) => {
  if (value && typeof value === 'string') {
    return value.toLowerCase();
  }
  return '';
};
