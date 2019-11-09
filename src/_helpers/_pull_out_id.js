export default (item) => {
  const idRegExp = /\/([0-9]*)\/$/;
  return item.match(idRegExp)[1];
};

//pulling id with Url
