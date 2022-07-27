// 函数定义

// 1.普通函数
function addfn1(x: number, y: number): number {
  return x + y;
}

// 2. 通过变量定义函数
// let addfn2: (x: number, y: number) => number = (x, y) => x + y
let addfn2: (x: number, y: number) => number;
addfn2 = (x, y) => x + y;

// 3. 通过类型定义
type addFN3 = (x: number, y: number) => number; // 这里其实是饶了一圈  相当于把上边的类型注解拎了出来
let addfn3: addFN3 = (x, y) => x + y;

// type sn = string | number
// let xxx: sn = false

// 4. 通过接口实现
interface AddFn4 {
  (x: number, y: number): number;
}
let addfn4: AddFn4 = (x, y) => x + y;

function addfn5(x: number, y?: number) {
  // 可选参数不能在必选参数之后
  return y ? x + y : y;
}

function addfn6(x: number, y = 2, z: number, q = 12) {
  return x + y + z + q;
}
addfn6(1, undefined, 2); // 如果在必选参数前有默认值参数，则需要传undefined来过去它的默认值

// 函数参数不固定时
function addfun7(x: number, ...ags: number[]) {
  return x + ags.reduce((pre, cur) => pre + cur);
}
console.log("addfun7", addfun7(1, 2, 3, 4, 5, 6));  // 21

// 函数重载
function addfn8(...ags: number[]): number
function addfn8(...ags: string[]): string
function addfn8(...ags: any[]): any{ // 在做宽泛的版本中书写函数体
    let first = ags[0]
    if(typeof first === 'string'){
        return ags.join('')
    }
    if(typeof first === 'number'){
        return ags.reduce((pre, cur) => pre + cur)
    }
}
