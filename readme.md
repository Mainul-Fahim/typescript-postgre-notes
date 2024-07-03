# Interview Question Answers

##   
1. Firstly, errors can be found before running the code by strict type checking, so majority of errors are solved before run time.Moreover, it gives suggestion of types and parameters if we use any function by importing it from a different file,so no need to go and check where the function is located.So, typescript helps a lot in increasing productivity.Then, it large codebases code can be manage smoothly with the help of typescript.As it can be transpiled into any javascript version,so if needed any older version of javascript in any project,so typescript can be a easy solve.So, overall typescript reduces bugs and hence writing less tests which is a great thing for any project.

##
2. Optional chaining and Nullish Coelscing are used for almost similar purposes but are not same.Specifically, if one has to make a decision based on null or undefined value then nullish coelscing is used.So, if a value is null or undefined then using nullish coelscing a default value can be set.For example, const teacher = null; const isTeacher = teacher ?? ‘Not a teacher’
Here, as teacher value is null isTeacher will hold the default value Not a teacher which is done by using nullsh coelscing.If it was not null then teacher value was stored in isTeacher.
On the other hand, if we are trying to access any value using chaining, like from nested object and value is null or undefined then the program will crash and give error, so this can be avoided by using optional chaining.For example, const obj = {
name: ‘harun’, contact: {
telephone: ‘02-89854’,
mobile: ‘019829382’
}
}

const mobileNo = obj?.contact?.mobile
Here, we used optional chaining for getting mobile value.So, if object is empty or contact is empty program will not crash or give errror.


##
3. Asynchronus opeartions can be handled using callbacks,promises or async/await.Among them async/await makes code more readable and manageable because of its writing structure.Before async/await and promises, callbacks were used mostly to handle asynchronous operations,but due to nested callbacks which leads to callback hell makes code complex.Then promise solved this problem by its .then,,catch chaining.And then async/await came which provides more clean, readable,synchronus look,so it’s easier to maintain code and handle asynchronous operations.

##
4. Enums are written with the keyword enum .E.g: enum Day{
Sunday,
Monday,
Tuesday,
Wednesday,
}
So, set of named constants can be written with enum.It’s a kind of special feature working with constants.It provides numeric values to it’s members and increments by one.e.g: here Day.Tuesday will give 2.Moreover, custom value also can be assigned.It has another special feature, which is name of the enum member can be obtained from it’s value.LIke, enum Code{
English =1,
Math=2,
Biology=3,
}
Here, Code[3] will give Biology.


##
5. The role of typeguard in typescript is quite crucial and has different use cases.Suppose, in a function parameters can be either string or number and based on the type a logic will be executed, so in that case typeof typeguard can be used.Moreover, to check a specific property in guard can be used.And the most important is using custom typeguard which is very crucial to narrow down the type of a variable within a specific block of code.For example,
const isFootball = (sport:Sport):sport as Football=>{
	return sport instanceof Football;
} 

const getSport(sport:Sport)=>{
	if(isFootball(sport)){
sport.goals();
}
else{
	   sport.scores()
}
}


##
6. In typescript, properties can be made immutable , means cannot reassign after it has been constructed with the help of readonly keyword.For example,
class Khelowar{
readonly name: string;
               skill: string;
constructor(name:string,skill:string){
this.name = name;
this.skill = skill;
}
}

const khelowar = new Khelowar(‘Rahul’,’ball khela’);

// cannot assign to ‘name’ because it is a ‘readonly’ property
Khelowar.name = ‘gulti khela’;

So here, we cannot reassign name property as it has been declared readonly.


##
7. In typescript, a union type allows a variable to have multiple types.So, a variable can be of any type which are specified.For example,

let value = number | string;
value = 91;
console.log(value) // 91
value = ‘ninty one’;
console.log(value) // ninety one

