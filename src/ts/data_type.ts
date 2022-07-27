// 变量的数据类型是不可以改变的

// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'abc'

// 数组类型
let arr1: Array<number> = [12] // 泛型接口
let arr2: Array<number | string> = [12, '34']
let arr3: number[] = [12, 4]

// 元组
let tuple: [number, string] = [1, '2'] // 限定了数组个数和类型  元组可以push  但是不饿能访问

// 函数
let add = (x: number, y: number): number => {
    return x + y
}
// function add2(x: number, y: string):number {
//     return x + y
// }
let computed: (x: number, y: number) => number  // 用变量来定义一个函数类型
computed = (x, y) => x + y 

// 对象
let obj: {x: number, y: number} = {x: 1, y: 2}
obj.x = 2
 
// undefined null

let un: undefined = undefined
let nu: null = null

let noReturn = () => {}

// any

// never  函数抛错