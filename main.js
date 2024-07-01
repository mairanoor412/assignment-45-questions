//   //Task # 2
//   let personalMesg:string = "Zarnab";
//   console.log(`Hello ${personalMesg} would you like to learn some python today?`);
//   //Task # 3
//   let personName:string = "fatima khan";
//   //lower case
//   console.log("lower case:", personName.toLowerCase());
//   //uper case
//   console.log("Uper case:" , personName.toUpperCase());
//   //Title case
//   console.log("Title case:" , personName.replace(/\bw/g,c=> c.toUpperCase()));
//   //Task 4
//   console.log('Albert Einstein once said, "A person who never made a mistake never tried anything new" ');
//   //Task # 5
//   let famousPerson:string = "Albert Einstein"
//   let message:string = '"A person who never made a mistake never tried anything new"'
//   console.log(`${famousPerson} once said, ${message}`);
//   //Task # 6
//   let name:string = "\t\n Maira Naeem \t\n";
//   console.log(name);
//   let stripped:string = name.trim()
//   console.log(stripped);
//   //Task # 7
//   //Addition
//   console.log(4+4);
//   //Subtraction
//   console.log(16-8);
//   //Multiplication
//   console.log(2*4);
//   //Division
//   console.log(16/2);
//   //Task # 9
//   let favouriteNumber:number = 8;
//   console.log(`My favourite number is ${favouriteNumber}`);
//   //Task # 10
//   //  Maira Naeem 
//   //  27/2/2024
//   //This program will run simple code just like Hello world.
//   console.log("Hello world simple program");
//   //Maira Naeem
//   //Date: 27/2/2024
//   //This program will Multiplication
//   console.log(5*2);
//   //Task # 11
//   let names:string[] = ["Barira" , "Zahira" , "Zainab"]
//   for(let i=0; i<names.length; i++){
//      console.log(names[i]);
//   };
//   //Task # 12
//   let names1:string[] = ["Barira" , "Zahira" , "Zainab"]
//   for(let i=0; i<names1.length; i++){
//      console.log(`Hello ${names1[i]} tomorrow is your birthday?`);
//   };
//   //Task # 13
//   let favTransport:string[] = ["car", "Motorcycle", "Bus","Ruksha","swzuki"];
//   for(let i=0; i<favTransport.length; i++){
//      console.log(`I would like to own a ${favTransport[i]}`);
//   };
//   //Task # 14
//   let guestList:string[] = ["laiba", "hani", "zarnab", "saba"];
//   for(let i=0; i<guestList.length; i++){
//      console.log(`Respected Madam , ${guestList[i]} we invited you to dinner tomorrow. \n\n\t\t\t Thankyou\n\t\t`);
//   };
//   //Task # 15
//   let unableToAttend:string = "hani";
//   let newGuest:string = "fatima";
//   guestList[1]=newGuest
//   for(let i=0; i< guestList.length; i++){
//    console.log(`Respected Madam , ${guestList[i]} we invited you to dinner tomorrow. \n\n\t\t\t Thankyou\n\t\t`);
// };
// console.log(`${unableToAttend} can't make it to dinner`);
// //Task # 16
// guestList.unshift("ruksar");
// guestList.splice(3,0,"nida")
// guestList.push("sidra")
// for(let i=0; i<guestList.length; i++){
//    console.log(`Respected Madam , ${guestList[i]} we invited you to dinner tomorrow. \n\n\t\t\t Thankyou\t\t`);
// }
// console.log("Great news! I found a bigger dinner table.\n\n");
// //Task # 17
// console.log("Unfortunately, I can invite only two people for dinner");
// while(guestList.length > 2){
//  let removeGuest = guestList.pop();
//  console.log(`Sorry, ${removeGuest}, I can't invite you to dinner.\n`);
// };
// for(let i=0; i<guestList.length; i++){
//    console.log(`Respected Madam , ${guestList[i]} You are still invited to dinner  tomorrow. \n\n\t\t\t Thankyou\n\t\t`);
// }
// guestList.splice(0 , 2)
// console.log(guestList)
//        //Q18
//        let places:string []=["Makka","Dobai", "islamabad","Norway","China"];
//        console.log("original order ", places);
//        console.log("alphabetical order " , [...places].sort());
//        console.log("original order " , places);
//        console.log("reverse alphabetical order " , [...places].sort().reverse());
//        console.log("original order " , places);
//        places.reverse();
//        console.log("reverse order " , places);
//        places.reverse();
//        console.log("reverse original order " , places);
//        places.sort();
//        console.log("reverse alphabetical order " , places);
//        //Q19
//        let guests:string[]= ["Mehma","Alishba","Raniya", "Ayeza"];
//        console.log(`I am inviting ${guests.length} people to dinner.`);
//        //Q20
//        let languages: string[]= ["English","urdu", "Arabic","Punjabi"];
//        console.log("My Favourite languages " , languages);
//        //Q21
//        let birth: {name: string ; date:number ; month: string ; year: number }=
//        { name: "Mahira Khan" , date:8, month:"December", year:1999 }
//        console.log(`Hello this is ${birth.name} ${birth.date} ${birth.month} ${birth.year} is my birthday. `);
//        //Q22
//        let glosary:string []=["Chicken" , "Tomato" , "Onion" , "Oil", "Potato"];
//        console.log(glosary[5]);
//        console.log(glosary[4]);
//        //Q23
//        let car = 'subaru';
//        console.log("Is car == 'subaru'? I predict True.");
//        console.log( car == 'subaru');
//        console.log("Is car === 'subaru'? I predict True.");
//        console.log( car === 'subaru');
//        console.log("Is car != 'subaru'? I predict False.");
//        console.log( car != 'subaru');
//        console.log("Is car !== 'subaru'? I predict False.");
//        console.log( car !== 'subaru');
//        console.log("Is car > 'subaru'? I predict False.");
//        console.log( car > 'subaru');
//        console.log("Is car < 'subaru'? I predict False.");
//        console.log( car < 'subaru');
//        console.log("Is car >= 'subaru'? I predict True.");
//        console.log( car >= 'subaru');
//        console.log("Is car <= 'subaru'? I predict True.");
//        console.log( car <= 'subaru');
//        console.log("Is car? I predict True.");
//        console.log( car);
//        console.log("Is !car I predict False.");
//        console.log( !car);
//   //  Q24
//   // Equality with string
//    let pet: string = "Dog";
//    console.log("testing equality with string");
//    console.log(pet == "Dog");
//    console.log(pet === "dog");
//    //InEquality with string
//    console.log("Testing inequality with string");
//    console.log(pet != "Dog");
//    console.log(pet != "dog");
//    //lower case function
//    let food = "Pizza";
//    console.log("testing lower case function");
//    console.log(food.toLowerCase() == "pizza");
//    console.log(food.toLowerCase() == "Pizza");
//    //Numerical Tert
//    console.log("Testing with Numerical equality and inequality");
//    console.log(3 > 2);
//    console.log( 8 < 7);
//    console.log ( 8 >= 8);
//    console.log ( 10 <= 9);
//    // "and"  operator
//    console.log("Test using && operator");
//    console.log(true && true);
//    console.log(true && false);
//    console.log(false && true);
//    console.log(false && false);
//    // "or" operator
//    console.log("Test using || operator");
//    console.log(true || false);
//    console.log(false || false);
//    console.log(true || false);
//    console.log(true || true);
//    //Test weather an items is in a array
//    let numbers6: number [] = [1 , 2, 3 , 4];
//    console.log("Is 3 in numbers")
//    console.log(3 in numbers6);
//    //Test weather an items is not in a array
//    console.log("Is 5 not in number");
//    console.log(5! in numbers6);
//        // Q 25
//     let alienColor: string = "green";
//     if(alienColor == "green"){
//         console.log(" You just earned 5 points");
//     }
//     alienColor = "yellow";
//     if(alienColor =="red"){
//     }
//         //Q 26
//     let alienColor2: string = "green";
//     if(alienColor2 == "green"){
//         console.log("You just earned 5 points for shooting the alien.");
//     }
//     else{
//         console.log("You just earned 10 points.");
//     }
//     alienColor2 = "yellow";
//     if(alienColor2 == "green"){
//         console.log(" you just earned 5 points for shooting the alien.")
//     }
//     else{
//         console.log("you just earned 10 points");
//     }
//        // Q27
//     let alienColor3: string = "green";
//     if(alienColor3 == "green"){
//         console.log("You just earned 5 points.");
//     }
//     else if(alienColor3 == "yellow"){
//         console.log("You just earned 10 points.")
//     }
//     else if(alienColor3 == "red"){
//         console.log("you just earned 15 points.");
//     }
//     alienColor3 = "yellow";
//     if(alienColor3 == "green"){
//         console.log("You just earned 5 points.");
//     }
//     else if(alienColor3 == "yellow"){
//         console.log("You just earned 10 points.")
//     }
//     else if(alienColor3 == "red"){
//         console.log("you just earned 15 points.");
//     }     
//     alienColor3 = "red";
//     if(alienColor3 == "green"){
//         console.log("You just earned 5 points.");
//     }
//     else if(alienColor3 == "yellow"){
//         console.log("You just earned 10 points.")
//     }
//     else if(alienColor3 == "red"){
//         console.log("you just earned 15 points.");
//     }
//       //Q28
//     let age: number = 25;
//     if(age < 2){
//         console.log("The person is a baby.");
//     }
//     else if( age < 4){
//         console.log("The person is a toddler")
//     }
//     else if( age < 13){
//         console.log("The person is a kid")
//     }    
//     else if( age < 20){
//         console.log("The person is a teenager")
//     }
//     else if( age < 65){
//         console.log("The person is an adult")
//     } 
//     else {
//         console.log("The person is an elder")
//     }
//     //Q29
//     let favFruit: string[] = ["mango" , "apple" , "bananas"]
//     if(favFruit.includes("mango")){
//         console.log("You really like mango");
//     }
//     if(favFruit.includes("apple")) {
//         console.log("You really like apple"); 
//     }
//     if(favFruit.includes("bananas")) {
//         console.log("You really like bananas"); 
//     }
//     if(favFruit.includes("orange")) {
//         console.log("You really like orange"); 
//     }
//     if(favFruit.includes("kivi")) {
//         console.log("You really like kivi"); 
//     }
//     // Q30
//     let userName: string[] = ["Talha" , "Shahid" , "Admin" , "Zohaib" , "Fariz"]
//     userName.forEach(userName => {
//         if(userName === "Admin"){
//            console.log("Hello Admin would you like to see a status report");
//         }
//         else{
//             console.log(`Hello ${userName} Thankyou for logging in again`);
//         };
//     });
//      //Q31
//     let user_Name: string[] = ["Talha" , "Shahid" , "Admin" , "Zohaib" , "Fariz"]
//     user_Name.forEach(user_Name => {
//         if(user_Name === "Admin"){
//            console.log("Hello Admin would you like to see a status report");
//         }
//         else{
//             console.log(`Hello ${user_Name} Thankyou for logging in again`);
//         };
//     });
//     user_Name = [];
//     if(user_Name.length === 0){
//       console.log("We need to find some users");
//     }
//     else{
//         console.log("Greet user");
//     }
//     // Q32
//     let current_users:string[] = ["Ahmed" , "Zahid" , "Shahid" , "Abu Bakar" , "usman"];
//     let new_users:string[] = ["Abu Bakar" , "Hadi" , "usman" , "talha" , "faiz"];
//     new_users.forEach(newUser => {
//         if(current_users.some(currentUser =>
//             currentUser.toLowerCase() === newUser.toLowerCase())) {
//             console.log(`${newUser} You need to enter a new user name`);
//             }
//             else{
//                 console.log(`${newUser} is available`);
//             }
//       })
//       // Q33
//     let number:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     for(let i =1; i<=9; i++){
//         let number = "th"
//         if(i === 1){ 
//           number = "st"
//         } else if(i == 2){
//          number = "nd"
//         } else if(i == 3){
//             number = "rd"
//         }
//         console.log(`${i}${number}`);
//     }
//     // Q34
//     let pizzaName:string[] =["Tikka" , "Cheese" , "Malai"];
//     for(let i=0; i<pizzaName.length; i++){
//         console.log(`I like ${pizzaName[i]} pizza`);
//     }
//     console.log("I really love pizza");
//     //Q35
//     let animals:string[] = ["dog" , "cat" , "rabbit"]
//     for(let i=0; i<animals.length; i++){
//         console.log(`A ${animals[i]} would make a great pet`);
//     }
//     console.log("Any of these animals would make a great pet");
//     // Q36
//     function makeShirt(size:string, message:string){
//     console.log(`The size of the shirt is ${size} and the message ${message} printed on it`)
//     }
//     makeShirt("medium" , "You can do it" );
//     //Q37 
//     function make_Shirt1(size:string = "large", message:string = "I love TypeScript" ){
//         console.log(`The size of the shirt is ${size} and the message ${message} printed on it`)
//     }
//     make_Shirt1("small" , "life is coding");
//     function make_Shirt2(size:string = "medium", message:string = "I love TypeScript" ){
//         console.log(`The size of the shirt is ${size} and the message ${message} printed on it`)
//     }
//     make_Shirt2("large" , "life is coding")
//     //Q38
//     function describeCity(city:string , country:string= "Pakistan"){
//      console.log(`${city} is in ${country}.`);
//     }
//     describeCity("Karachi" )
//     describeCity("Lahore" )
//     describeCity("Makkah" , "Saudia Arab")
//     //Q39
//     function cityCountry(city:string , country:string){
//     return `${city} , ${country}`;
//     }
//     console.log(cityCountry("Lahore" , "Pakistan"));
//     console.log(cityCountry("Tokyo" , "Japan"));
//     console.log(cityCountry("Paris" , "France"));
//      //Q40
//      function makeAlbum(name:string , title :string , tracks?:number){
//         let musicAlbum = {
//          name , title , tracks
//         }
//        return musicAlbum
//     }
//     console.log(makeAlbum("Artist one" , "The first album"));
//     console.log(makeAlbum("Artist two" , "The second album"));
//     console.log(makeAlbum("Artist three" , "The third album" , 8));
//     // //Q41
//     let magiciansName: string[] = ["Era" , "Alice" , "Crice"];
//     function showMagicians(magiciansName:string[]){
//      magiciansName.forEach(magician => {
//         console.log(magician);
//      })
//     }
//     showMagicians(magiciansName);
//     //Q42
//     function makeGreat(magiciansName:string[]){
//         magiciansName.forEach(magician => {
//             console.log(magician  + " The Great");
//         })
//     }
//     makeGreat(magiciansName)
//     //Q43
//     let magicians: string[] = ["Era" , "Alice" , "Crice"];
//     function make_great(magicians:string[]){
//     let greatMagicians:string[] = [];
//     magicians.forEach(magician =>{
//     greatMagicians.push(`${magicians} The Great`)
//     });
//     return greatMagicians
//     }
//     let greatMagicians = make_great(magicians.slice());
//     console.log("Orininal magicians");
//     showMagicians(magicians)
//     console.log("Great magicians");
//     showMagicians(greatMagicians)
//     //Q44
//     function sandwiches(...items:string[]){
//     console.log(`I order a sandwich ${items.join(", ")}`);
//     }
//     sandwiches("Grilled cheese" , "grilled chicken")
//     sandwiches("Turkey" , "Roast beef" , "Bacon")
//     sandwiches("Club" , "Tuna" , "Reuben" , "French dip")
//Q45
//     function makeCar(manufacture:string, model:string, ...options:any[]) {
//       let car = { manufacture, model };
//       for(let i=0 ; i<options.length ; i++){
//          return car
//       }
//    }
//   // Corrected calls with individual options instead of arrays
//   console.log(makeCar("Toyota", "Corolla", ["colour", "red"], ["Year", 2018]));
//   console.log(makeCar("Sivic", "Fiesta", ["Colour", "black"], ["year", 2024]));
function makeCar(manufacture, model, ...options) {
    let car = { manufacture, model };
    for (let i = 0; i < options.length; i++) {
        let option = options[i];
        let key = option[0];
        let value = option[1];
        car[key] = value;
    }
    return car;
}
// Corrected calls with individual options instead of arrays
console.log(makeCar("Toyota", "Corolla", ["colour", "red"], ["Year", 2018]));
console.log(makeCar("Sivic", "Fiesta", ["Colour", "black"], ["year", 2024]));
export {};
