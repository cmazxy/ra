// 类的继承 和 成员修饰符
// 类的成员方法都是原型方法  类的属性都是实类属性
// 类成员必须有初始值或者在构造函数中赋值
class Dog {
  constructor(name: string) { // 构造函数加private代表这个类既不能被实例化也不能被继承  
    this.name = name;         // 构造函数加protected代表这个类不能被实例化只能被继承 相当于声明了一个基例
  }
  protected name: string // 受保护成员  只能在类或者子类中访问  不能在实例中访问
  run(): void {}
  private eat() {} // 私有成员只能在类的本身调用  不能被实例调用也不能被子类调用
  readonly legs: number = 4  // 只读属性
  static food: string = 'bones' // 静态成员 只能通过类名来访问  不能通过实例访问   可以被继承
}
// 类继承
class Husky extends Dog {
  constructor(name: string, color: string, public age: number) { // 构造函数的参数也可以使用修饰符  它会直接被添加成实例属性
    super(name)
    this.color = color
  }
  color: string
}

// 类的成员修饰符
class XDog extends Dog {
  constructor(name: string, color: string) {
    super(name)
    this.color = color
  }
  color: string
}


// 抽象类 只能被继承  不能被实例化
abstract class Aninal {
  eat(){}
  abstract sleep(): void // 抽象方法  只定义  不实现  在子类中再去实现  从而实现多态
}

class Cat extends Aninal{
  constructor() {
    super()
  }
  sleep(){}
}
let cat = new Cat()

let aninals: Aninal[] = [cat]
aninals.forEach(item => {
  item.sleep  
})


// this类型  类的成员方法可以直接返回this  可以很方便的实现链式调用
class WorkFlow {
  step1(){
    return this
  }
  step2(){
    return this
  }
}
new WorkFlow().step1().step2()

class MyFlow extends WorkFlow {
  next() {
    return this
  }
}
new MyFlow().next().step1().step2().next()