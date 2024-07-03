//problem-1
const lengthOrSquare = (value: string | number):number=>{
    
    if(typeof value === 'string'){
        return (value.length);
    }
    if(typeof value === 'number'){
        return (value*value);
    }

    return 0;
   
}

//problem-2

interface Person{
    address?: {
        city : string
        street : string
    }
    phone?: string
}

const getAddressCity = (person:Person):string=>{
    return (person?.address?.city ?? 'no city name exists');
}

//problem-3

class Cat{
    name: string;
    species: string;

    constructor(name:string,species:string){
        this.name= name;
        this.species = species;
    }
}

const isCat = (cat:Cat)=>{
    if(cat instanceof Cat){
        return `yes, it's a cat`
    }   
    else
        return `no, it's not a cat`
}

//problem-4

const addingNumber = <T>(mixedData:T[]):number=>{

    let total:number = 0;

    for(let i=0;i<mixedData.length;i++){
        if(typeof mixedData[i] === 'number'){
            total = mixedData[i] as number + total;
        }
    }

    return total;

}

//problem-5

interface Car{
    make: string;
    model: string;
    year: number
}

interface Driver{
    name: string;
    licenseNumber: number;
}

const combinedObject = (obj1:Car,obj2:Driver):Car & Driver=>{
      return {...obj1,...obj2}
}

//problem-6


const arrayOfNumbers = (value:unknown):void=>{
    let sum = 0;
    if(value instanceof Array && (value.every((item)=> typeof item === 'number'))){
            for(let i=0;i<value.length;i++){
                sum = sum + value[i];
            }
            console.log('sum:',sum);
    }
    else {
        console.log('Not an Array of Numbers')
    }
}

//problem-7

const findFirstOccurrence = <T>(arr:T[],key:T):number=>{
        for(let i=0;i<arr.length;i++){
            if(arr[i] === key){
                return i;
            }
        }

        return -1;
}


const numbers: number[] = [1, 2, 3, 4, 5, 2];

const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

const targetNumber = 2;

const targetString = "date";

const indexInNumbers = findFirstOccurrence(numbers, targetNumber);

const indexInStrings = findFirstOccurrence(strings, targetString);

console.log(indexInNumbers); 

console.log(indexInStrings);

//problem-8

interface Product{
    name: string;
    price: number;
    quantity: number;
}

const totalCostOfItems = (arr:Product[]):number=>{
    return arr?.reduce((acc,curr)=>{
        return curr?.price*curr?.quantity + acc;
    },0)
}

