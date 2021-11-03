//分割代入　配列//
const list = ["a", "b"];
const [item0, item1] = list;
console.log(item0, item1);

//分割代入 オブジェクト//
const userInfo = {
  name: "kiri",
  age: "5"
};

const { name, age } = userInfo;

const intro = `${name}は${age}才です。`;
console.log(intro);

//デフォルト値//
const userInfo1 = {
  addless: "Aichi"
};
const { type = "ゲスト", addless, color = "white" } = userInfo1;
console.log(type, addless, color);

const func = (username = "ゲスト") => {
  const message = `Hello! ${username}`;
  console.log(message);
};

func("Tom");

//スプレッド構文-配列//
const list1 = ["a", "b"];
console.log(list1);
console.log(...list1);

const list2 = [1, 5, 9, 50, 70, 80];
const [num1, num2, num3, ...bignumlist] = list2;
console.log(...list2);
console.log(num1, num2, num3, bignumlist);
console.log(...bignumlist);

//配列のコピー//
const list3 = [1, 2, 3];
const list4 = [3, 4];

const list5 = [...list3]; //copy//
const list6 = [...list3, ...list4]; //結合//

console.log(...list5);
console.log(...list6);
//copyは結合の延長？//

//objectのcopy,結合//
const obj1 = {
  food: "rice",
  drink: "milk",
  tool: "fork"
};

const obj2 = {
  place: "living",
  time: "night"
};

const obj3 = { ...obj1 };
const obj4 = { ...obj1, ...obj2 };

console.log(obj3);
console.log(obj4);

//map関数//
const list7 = list2.map((item, index) => {
  console.log(`要素:${item}`, `index:${index}`);
  return item * 2;
});
console.log(list7);

//filter関数//
const list8 = list2.filter((item, index) => {
  console.log(`要素:${item}`, `index:${index}`);
  return item <= 30;
});
console.log(list8);
