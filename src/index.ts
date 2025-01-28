

// 1-function //


type ArrayTotal = (...numbers:Array<number>) => number


const Sum:ArrayTotal = (...numbers:Array<number>)=>{
    let sum:number = 0

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element
    }

    return sum
}


const total = Sum(12, 216, 54, 78)
// console.log(total);














// 2-function //

type Juft = (...numbers:Array<number>) => null

const juftFn:Juft = (...numbers:Array<number>)=>{
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];

        if (element % 2 === 0) {
            console.log((i+1), " son ", element);
        }        
    }
    return null
}

// juftFn(45,654,564,132,154,115,145,145,1245,12145,564,654,54,56,4,4)














// 3-function //


type Repeat = (...numbers:Array<number>) => Array<number>

const repeatNumber : Repeat = (...numbers:Array<number>)=>{
    const arr = numbers.filter((values, index, self)=>{
        return self.indexOf(values) === index
    })

    return arr
}

const arrNumber = repeatNumber(1,54,1,54,5,65,45,6,51,5,4,6,465,456,4,64)
// console.log(arrNumber);

















// 4-function //

type LengthString = (...text:Array<string>) => string

const findLongestString:LengthString = (...text:Array<string>) => {
    if (text.length === 0) {
        console.log("text kirgazing!");
    }


    let long = text.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");

    return long;
}

const result = findLongestString("asaasa", "asodbkjansasmdlka", "aspidjaskdnsakldm,saldashvd", "Asdb");
// console.log(`Eng uzun string: ${result}`);










// 5-function //

type Kvadrat = (...numbers:Array<number>) => null

const findKvadrat: Kvadrat = (...numbers:Array<number>)=>{
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        const num:number = element ** 2
        console.log((i+1 + "sonning kvadrati " + num));
    }

    return null
}

// findKvadrat(12,54,1554,125,154,65,54,65,4,54)













// 6-function //

type Factarial = (num:number) => number

const factarialFn : Factarial = (num:number)=>{
    let sum:number = 1
    for (let i = 0; i < num; i++) {
        sum = sum * (i+1)        
    }

    return sum
}

const fc = factarialFn(5)
// console.log('bu sonning factarial yigindisi : ', fc);












// 7-function //


type Palindrom = (num:number) => string

const palindromFn : Palindrom = (num:number)=>{
    const firstNum:string = num.toString()
    const reverse = firstNum.split('').reverse().join('')
    let text = ''
    if (firstNum === reverse) {
        text = 'bu son palindrom...'
    } else {
        text = 'bu son palindrom emas!'
    }
    return text
}

const pm = palindromFn(151)
// console.log(pm);













// 8-function //


type Password = (password:string) => boolean | string


const passwordFn : Password = (password:string)=>{
    if (password.length < 8) {
        return 'parol 8 tadan kam bolmasin'
    }

    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasDigit = /\d/.test(password)

    return (hasUpperCase && hasLowerCase && hasDigit)
}


const pass = passwordFn("23032006Yj")
// console.log(pass)
