
export default (item) => {
  const idRegExp = /\/([a-z]*)\//;
  return item.match(idRegExp);
};
