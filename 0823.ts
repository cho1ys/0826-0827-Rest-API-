// function add(a:number,b:number):number;
// function add(a: string, b:string):string;

// function add(a: any, b:any):any{
//     return a+b;
// }
// add(1,2)
// add('hi','you')

// function exam(param : string):string
// function exam(param : string|null):number

// function exam(param : string|null):string|number{
//     if(param){
//         return 'string'
//     }else{
//         return 123
//     }
// }
// exam(null)
// exam('')

// interface Add{
//     (x:number,y:number):number
//     (x:string,y:string):string
// }
// const add : Add = (x:any, y:any)=>x+y

// type Add1 = (x:number, y:number) => number;
// type Add2 = (x:string, y:string) => string;
// type Add = Add1&Add2
// const add : Add = (x:any, y:any) => x+y

// function sayS(word : string) : string
// function sayS(word : string[]):string
// function sayS(word : any) : any{
//     if(typeof word === 'string'){
//         return word
//     }else if(Array.isArray(word)){
//         return word.join("")
//     }
//     throw new Error('error')
// }
// sayS(['hello','world'])

// enum Level{
//     NOVICE,
//     INTERMEDIATE,
//     ADVANCED = 1,
//     MASTER
// }
// // const b = Level.MASTER
// // console.log(b)

// function yourLevel(level : Level){
//     console.log(Level[level]);
// }
// const mylevel = Level.ADVANCED
// yourLevel(mylevel)

// type El<T> = T extends (infer T)[] ? T : never
// type str = El<string[]>
// type NumB = El<(number | boolean)[]>

// type Eltype<T> = T extends (infer T)[] ? T : never
// type numA = number[]
// type Ele = Eltype<numA>

// type Rec = {
//     name : string,
//     children : Rec[]
// }

// const rec1:Rec = {
//     name : 'test',
//     children : []
// }
// const rec2:Rec = {
//     name : 'test',
//     children: [
//         {name: 'test2' ,children: []}
//     ]
// }

// //배열의 중복이 제거된 새로운 배열을 반환하는 함수
// function removeD<T>(arr:T[]){
//     return Array.from(new Set(arr))
// }

// //배열 혹은 문자열의 길이를 반환하는 오버로딩 함수
// function rt<T>(param : T[]):number
// function rt(param : string):number
// function rt(param : any):number{
//         return param.length
// }
// const aa = [1,2,3]
// const a = rt(aa)
// const bb = '123'
// const b = rt(bb)

// class Person1{
//     name : string
//     age : number
//     married : boolean
//     constructor(name : string, age : number, married : boolean){
//         this.name = name
//         this.age = age
//         this.married = married
//     }
// }
// const Person2 = class {
//     name : string
//     age : number
//     married : boolean
//     constructor(name : string, age : number, married : boolean){
//         this.name = name
//         this.age = age
//         this.married = married
//     }
// }

// interface Human{
//     name : string
//     age : number
//     married : boolean
// }
// class Person implements Human{
//     name
//     age
//     married
//     constructor(name : string, age : number, married : boolean){
//         this.name = name
//         this.age = age
//         this.married = married
//     }
// }

// class Person{
//         name? : string
//         readonly age : number
//         protected married : boolean
//         private value : number
//         constructor(name : string, age : number, married : boolean){
//             this.name = name
//             this.age = age
//             this.married = married
//             this.value = 0
//         }
//         changeAge(age : number){
//             this.age = age
//         }
// }
// class Child extends Person{
//     constructor(name:string, age:number, married:boolean){
//         super(name, age, married)
//     }
//     sayName(){
//         console.log(this.name)
//     }
//     sayMerried(){
//         console.log(this.married)
//     }
//     sayValue(){
//         console.log(this.value)
//     }
// }
// const child = new Child('kim',25,false)
// child.name
// child.age
// child.married
// child.value

// class Human{
//     play(){
//         console.log('play')
//     }
//     study(){
//         console.log('study')
//     }
// }
// class Employee extends Human{
//     work(){
//         console.log('work')
//     }
//     override study(){
//         console.log('study')
//     }
// }

// class Sign{
//     [prop : string ]:string | number | undefined
//     static[prop : string ] : boolean
//  }
//  const sig = new Sign()
//  Sign.kkk = true
//  sig.hi = 123

// class Person{
//         name : string
//         age : number
//         married : boolean
//         value : number
//         constructor(name : string, age : number, married : boolean){
//             this.name = name
//             this.age = age
//             this.married = married
//             this.value = 0
//         }
//         sayMarried(this: Person){
//             console.log(this.married)
//         }
//         sayCallback(callback : (this:this)=>void){
//             callback.call(this)
//         }
// }

// // 조건부타입 정의(infer사용) - 튜플타입을 인자로받아 첫번째 요소의 타입을 추출
// type a<T> = T extends [infer T,...any[]] ? T : never
// type Tuple1 = [string,number,boolean]
// type Tuple2 = [boolean,number]
// type aa = a<Tuple1>
// type ab = a<Tuple2>

// //Animal과 그를 상속받는 Dog 클래스
// class Animal{
//     private name:string
//     protected age : number
//     constructor(name:string,age:number){
//         this.name = name
//         this.age = age
//     }
//     getName():string{
//         return this.name
//     }
//     getAge():number{
//         return this.age
//     }
// }
// class Dog extends Animal{
//     breed : string
//     constructor(name:string,age:number,breed:string){
//         super(name,age)
//         this.breed = breed
//     }
//     bark():string{
//         return 'Woof!'
//     }
// }

// interface Address{
//     email : string
//     address : string
// }
// const me :Partial<Address>= {}
// const you:Partial<Address> = {email : 'abc'}
// const him:Address = {email : 'abc', address: 'ccc'}

// interface todo{
//     title : string
//     description : string
//     completed : boolean
// }
// type tdpreview = Omit<todo, 'description'>
// const td:tdpreview = {
//     title : 'clean',
//     completed : false
// }

// interface cat{
//     age : number;
//     breed : string;
// }
// type catname = 'a' | 'b' | 'c'
// const cats : Record<catname, cat>={
//     a:{age: 10, breed: 'b'},
//     b:{age: 10, breed: 'b'},
//     c:{age: 10, breed: 'b'}
// }

// type t1 = ReturnType<()=>string>
// type t2 = ReturnType<()=>void>

// function fn(str:string){
//     return str
// }
// const a:ReturnType<typeof fn> = "hello"
// const b:ReturnType<typeof fn> = true
// type Users = 'kim' | 'lee' | 'park'
// type UserName = {[I in Users] : string}
// const userNameInfo: UserName ={
// kim: 'kim',
// lee: 'lee',
// park: 'park',
// }
// type Users = 'kim' | 'lee' | 'park'
// type UserAge = {[K in Users] : number}
// const userNameInfo: UserAge = {
// kim: 10,
// lee: 20,
// park: 30,
