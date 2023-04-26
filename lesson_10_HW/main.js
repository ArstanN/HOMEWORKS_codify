//! Задание 1
//? Создайте объект с полями name, age и city. С помощью деструктуризации получите значения 
//? этих полей в переменные personName, personAge и personCity.
// const pers = {
//     name: 'Arstan',
//     age: 10,
//     city: 'Bishkek'
// }
  
// const {name: personName, age: personAge, city: personCity} = pers
  
// console.log(personName)
// console.log(personAge)
// console.log(personCity)

//! Задание 2
//? У вас есть массив, содержащий объекты. Каждый объект 
//? описывает человека и содержит поля name и age. С помощью 
//? деструктуризации получите значения этих 
//? полей для первого элемента массива в переменные firstName и firstAge.

// const people = [
//     { name: 'Arstan', age: 17 },
//     { name: 'Beka', age: 1900 },
//     { name: 'Limon', age: 90 }
// ]
// const [{ name: firstName, age: firstAge }] = people
  
// console.log(firstName)
// console.log(firstAge)

//! Задание 3
//? У вас есть объект, содержащий массив чисел. С помощью
//?  деструктуризации получите
//?  первый и второй элементы массива в переменные firstNum и secondNum.

// const num = [1, 2, 3, 4, 5]
// const [firstNum, secondNum] = num

// console.log(firstNum)
// console.log(secondNum)

//! Задание 4
//? Создайте объект person с полями name и age. С помощью 
//? деструктуризации создайте новый объект newPerson, содержащий 
//? только поле name из объекта person.

// const person = { name: 'Ars', age: 17 }
// const { name: personName } = person

// const newPerson = { name: personName }
// console.log(newPerson)

//! Задание 5
//? Создайте функцию, которая принимает на вход объект с полями name,
//?  age и city, а затем с помощью деструктуризации выводит значения 
//? этих полей в консоль.

// const fn = ({ name, age, city }) =>  {
//     console.log(`Name: ${name}, Age: ${age}, City: ${city}`)
// }

// const user = { name: 'Arstan', age: 18, city: 'Bish' }
// console.log(fn(user))

//! SPREAD

//! Задание 1
//? Создайте массив numbers1 с элементами 1, 2, 3 и массив numbers2 с 
//? элементами 4, 5, 6. Используя оператор spread, объедините эти два 
//? массива в новый массив allNumbers

// const numbers1 = [1, 2, 3]
// const numbers2 = [4, 5, 6]
// const allNumbers = [...numbers1, ...numbers2]

// console.log(allNumbers)

//! Задание 2
//? Создайте объект person1 с полями name и age, 
//? а также объект person2 с полями city и gender.
//? Используя оператор spread, создайте новый объект newPerson, 
//? содержащий все поля из person1 и person2.

// const person1 = [
//     {
//         name: 'Ars',
//         age: 17
//     }
// ]

// const person2 = [
//     {
//         city: 'Bish',
//         gender: 'male'
//     }
// ]

// const newPerson = [...person1, ...person2]

// console.log(newPerson)

//! Задание 3
//? Создайте функцию, которая принимает на вход массив чисел и возвращает новый массив, содержащий 
//? все элементы исходного массива и число 0 в конце. Используйте оператор spread.


// const arr = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]
// const arr3 = [0]

// const newArr = [...arr, ...arr2, ...arr3]

// console.log(newArr)

//! Задание 4
//? Создайте объект person с полями name и age. Используя оператор spread,
//?  создайте новый объект newPerson, содержащий все поля из person, а также дополнительное поле city.


// const person = 
//     {
//         name: 'Ars',
//         age: 18
//     }


// const newPerson = 
//     {
//         ...person,
//         city: 'Bish'
//     }

//     console.log(newPerson)

//! Задание 5
//? Создайте функцию, которая принимает на вход объект person с полями name, age и city,
//?  а затем с помощью оператора spread выводит значения этих полей в консоль.

// function newPerson (person) {
//     const { name, age, city } = person
//     console.log(`Name: ${name}, Age: ${age}, City: ${city}`)
// }

// const person = { name: 'Arsa', age: 18, city: 'Bish'}
// newPerson(person)

//! Combined Questions 
//! Задание 1

//? У вас есть объект person с полями name, age и city. Создайте новый объект newPerson, который содержит
//?  все поля из person, кроме поля city. Используйте деструктуризацию и оператор spread.

// const person = {
//     name: 'Arsa',
//     age: 18,
//     city: 'Bish'
// }

// const { city, ...newPerson } = person

// console.log(newPerson)

//! 2
//? Создайте массив numbers с элементами 1, 2, 3, 4, 5. С помощью деструктуризации и оператора spread создайте 
//? новый массив, содержащий первый элемент исходного массива и все остальные элементы, начиная со второго.

// const num = [1,2,3,4,5]

// const [first, ...rest] = num 
// const newArr = [first, ...rest]
// console.log(newArr)

//! Задание 3
//? Создайте объект person1 с полями name и age, а также объект person2 с полями city и gender.
//? Создайте новый объект newPerson, который содержит поле name из person1 и поля city и gender из 
//? person2. Используйте деструктуризацию и оператор spread.

// const person = {
//     name: 'Arsa',
//     age: 18
// }

// const person2 = {
//     city: 'Bish',
//     gender: 'male'
// }

// const { name, ...rest } = person
// const newPerson = { name, ...person2 }
// console.log(newPerson)

//! 4
//? Создайте объект person с полями name и age, а также массив hobbies со строками, описывающими хобби.
//?  Создайте новый объект newPerson, который содержит все поля из person, а также дополнительное поле hobbies, 
//? содержащее все элементы массива hobbies. Используйте деструктуризацию и оператор spread.

// const person  = { 
//     name: 'Ars',
//     age: 18,
//     hobbies: ['swimming', 'singing']

// }

// const { hobbies, ...newPerson } = person
// const newHobbies = [...hobbies]
// const result = { ...newPerson, hobbies: newHobbies}
// console.log(result)

//! 5

//?Создайте функцию, которая принимает на вход объект person с полями name, age и city, а затем
//?  с помощью деструктуризации и оператора spread выводит значения этих полей в консоль, а также строку "Country: USA".

// function personInfo ({ name, age, city }) {
//     console.log(`Name: ${name}`)
//     console.log(`Age: ${age}`)
//     console.log(`City: ${city}`)
//     console.log(`Country: USA`)
// }
// const person = { name: 'Arsa', age: 18, city: 'NY'}
// personInfo(person)