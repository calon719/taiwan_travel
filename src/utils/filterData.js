function filterData(obj, key) {
  const properties = Object.entries(obj);
  const index = properties.findIndex((property) => property[0].includes(key));
  const filteredData = properties.splice(index, 1);
  return filteredData[0][1];
}

export default filterData;
