const { promises: fsPromises } = require("fs");

async function asyncReadFile(filename) {
  let arr = [];
  if (typeof filename != undefined)
    try {
      const contents = await fsPromises.readFile(filename, "utf-8");

      arr = contents.split(/\r?\n/g);

      //console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

      return arr;
    } catch (err) {
      console.log(err);
    }
}

async function removeDirt(nums) {
  let data = [];
  data = await nums.map((num) => num.replace(/([-. (]*[-. )]*(\+1?)*)/gm, ""));
  return data;
}

function myFunction(item, index, arr) {
  arr[index] = "+1" + item;
}

async function convertNumbersToUs(nums) {
  try {
    const myNewNums = await asyncReadFile(nums);
    const cleaned = await removeDirt(myNewNums);
    let newArray = [];
    newArray = await cleaned.filter((x) => x > 5);
    const tenOnly = newArray.map((w) => {
      return "+1" + w;
    });

    fsPromises.writeFile("newList.txt", tenOnly.join("\n"), {
      encoding: "utf-8",
    });
  } catch (err) {
    console.log(err);
  }
}

convertNumbersToUs("oh.txt");
