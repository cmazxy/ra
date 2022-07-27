interface List {
  readonly id: number; // 只读属性
  name: string;
  //   [x: string]: any // 字符串索引签名  用任意的字符串索引  可以得到任意的值
  age?: number; // 可选属性
  sex?: number; // 可选属性
}

interface Result {
  data: List[];
}

function render(res: Result) {
  res.data.map((item) => {
    console.log(item.id, item.name);
    if (item.age) {
      console.log(item.age);
    }
  });
}

let result = {
  data: [
    { id: 1, name: "小米", sex: 12 },
    { id: 2, name: "华为" },
  ],
};

render(result);

render({
  data: [
    { id: 1, name: "小米", sex: 12 },
    { id: 2, name: "华为" },
  ],
} as Result);

render(<Result>{
  data: [
    { id: 1, name: "小米", sex: 12 },
    { id: 2, name: "华为" },
  ],
});
render({
  data: [
    { id: 1, name: "小米", sex: 12 },
    { id: 2, name: "华为" },
  ],
});

interface StringArray {
  [index: number]: string; // 数字索引签名 可以用任意的数字索引得到一个字符串  就相当于一个字符串数组
}
let chars: StringArray = ["1", "2"];

interface Names {
  [x: string]: string;
  [y: number]: string;
}

// 函数类型的接口
interface Add2 {
  (x: number, y: number): number;
}

// 类型别名定义函数
type Add3 = (x: number, y: number) => number;
let add2: Add3 = (a, b) => a + b;

// 混合类型接口
interface Lib {
  (): void;
  version: number;
  doSomething(): void;
}

function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = 1;
  lib.doSomething = () => {
    lib.version++
    console.log(lib.version)
  };
  return lib
}

let lib1 = getLib()
lib1()
lib1.doSomething()
lib1.doSomething()

let lib2 = getLib()
lib2.doSomething()