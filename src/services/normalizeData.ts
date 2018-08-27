export function normalizeData(arr: any, dataType: any) {
  const objByType = {}
  dataType.forEach((types) => {
    arr.forEach((elem) => {
      const id = elem.id;
      const data = elem[types];
      if (!objByType[types]) {
        objByType[types] = {}
      }
      objByType[types][id] = data;
    });
  })
  return {arr, objByType}
}
