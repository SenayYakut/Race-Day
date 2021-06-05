let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistered = false;

const age  = 25;

if(age > 18 && earlyRegistered) {
  console.log("You will race at 9:30 am");
}else if(age > 18 && !earlyRegistered){
  console.log("You  will race at 11:00am");
}else if(age < 18){
    console.log("You  will race at 12:30am");
}else{
  console.log("See the registration desk");
}