import { firstList } from "./input.js";

const sortLists = (list) => {
  if (list.length === 0) return [];
  for (const i of list) {
    for (const j of list) {
      if (list[j] > list[j + 1]) {
        const temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list;
};

console.log(sortLists(firstList));
