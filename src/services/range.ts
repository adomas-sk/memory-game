export const range = (count: number) => {
  // This is cleaner but didn't work because create-react-app keeps reseting TS target
  // return [...Array(count).keys()];
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr[i] = i;
  }
  return arr;
};
