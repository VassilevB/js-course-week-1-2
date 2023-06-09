// task 1
// На терминала клиента трябва да въведе серийния номер на своята карта. Това е цяло число което има скрито значение. Серийния номер съдържа по 6 цифри, по принцип, но на някой клиенти са дадени различни номера. Ако номера съдържа повече от 2 цифри клиента е от тип EARLY_ADOPTER ако клиентския номер съдържа повече от 6 цифри то клиента е LAGGER ако съдържа 6 цифри значи е NORMAL.

const EARLY_ADOPTER_COEFFICIENT = 99;
const NORMAL_USER_COEFFICIENT = 100000;
const LAGGER_USER_COEFFICIENT = 999999;
const SECOND_MEAL_ELIGIBILITY_DIGIT = 3;


const CustomerNumber = prompt(`Please, enter your card number`);
// min 100000
// max 999999
const isCardNumberGreaterThan100000 = (CustomerNumber >= NORMAL_USER_COEFFICIENT);
const isCardNumberLowerThan999999 = (CustomerNumber <= LAGGER_USER_COEFFICIENT);

// const isCustomerNumber6Digit = (isCardNumberGreaterThan100000
//                          && 
//                          isCardNumberLowerThan999999);

// optimised code version
const isCustomerNormal =  (CustomerNumber >= NORMAL_USER_COEFFICIENT) 
                        && 
                        (CustomerNumber <= LAGGER_USER_COEFFICIENT);

const isCustomerEarlyAdopter =    (CustomerNumber > EARLY_ADOPTER_COEFFICIENT)
                                &&
                                (CustomerNumber < NORMAL_USER_COEFFICIENT);

const isCustomerLagger = (CustomerNumber > LAGGER_USER_COEFFICIENT);

if (isCustomerNormal) {
    console.log(`This is a normal customer.`);
}
 
if (isCustomerEarlyAdopter) {
    console.log(`The customer is an early adopter.`);
}
 
if (isCustomerLagger) {
    console.log(`This is a lagging customer.`);
}

// arythmetic operators
// +
// -
// *
// /
// & деление с остатък (връща нула или различно от нула; проверка дали число е четно или нечетно като делим на две)

// task 2 // Всички клиенти чиито номера завършват на четно число са VIP клиенти а останалите са обикновени такива. Пример : 105468 четно число клиента е VIP Пример : 115485 нечетно число клиента няма специални правомощия

const isCustomerVIP = ((CustomerNumber % 2) == 0) ;
 console.log(isCustomerVIP);

 // task 3 Ако пред последната цифра на номера на клиента е число по голямо от 3, клиента има право да поръча допълнително второ ястие, в противен случай няма да има такава възможност.

 const isCustomerEligibleForFree2ndMeal = (parseInt((CustomerNumber % 100) / 10)) > SECOND_MEAL_ELIGIBILITY_DIGIT ;
 console.log(isCustomerEligibleForFree2ndMeal) 

 // alternative by Mihail Petrov
 // const getNextToLastDigit = parseInt((CustomerNumber % 100) / 10);
 // const isCustomerEligibleForFree2ndMeal = getNextToLastDigit > SECOND_MEAL_ELIGIBILITY_DIGIT ;

 // task 4
 // Ако клиента е VIP и има право да направи повторна поръчка то това означава че клиента е със специален SUPER VIP статус и това му дава възможност да получи отстъпка от цената на всички артикули които е поръчал.
 const isCustomerSuperVIP = isCustomerVIP && isCustomerEligibleForFree2ndMeal;

 // task 5
 // Да се изведе меню със всички поръчки които клиента може да направи, за да се направи избор за храната е необходимо да се избере, номера на поръчката. В експерименталната програма, в която участват тези продукти е необходимо да няма възможност тяхната стойност да се променя.

console.log(`1. Пица - 2 лв.`);
console.log(`2. Паста  3 лв.`);
console.log(`3. Пържола - 4 лв.`);

const orderId = prompt('Номер на поръчката');

// task 6 След като се въведе номера на продукта клиента получава съобщение, You order и името на артикула, който сте избрали. В зависимост от избрания артикул е необходимо да се извежда и неговата цена.

// условни конструкции с 
// if (orderId == 1) {
//     console.log('Ти поръча пица.');
// }
// if (orderId == 2) {
//     console.log('Ти поръча паста.');
// }
// if (orderId == 3) {
//     console.log('Ти поръча пържола.');
// }
// if (orderId < 1 && orderId > 3) {
//     console.log('Невалидна поръчка - самоунищожавам се.');
//}

// УСЛОВНИ КОНСТРУКЦИИ С else

var priceToPay = 0;

if (orderId == 1){
    console.log('Ти поръча пица.');
    priceToPay = 2;
}
else if (orderId==2) {
    console.log('Ти поръча паста.');
    priceToPay = 3;
}
else if (orderId==3) {
    console.log('Ти поръча пържола.');
    priceToPay = 4;
}
else console.log('Невалидна поръчка - самоунищожавам се.');

// task 8

if (isCustomerVIP) {
    const customerAge = prompt('What is your age?');
    if (customerAge < 18) {
        priceToPay = 0;
    }
    else if (customerAge == 18) {
        priceToPay = priceToPay + 10;
    }
    else if (customerAge <= 35) {
        priceToPay = priceToPay + 5;
    }
    else if (customerAge == 65) {
        priceToPay = priceToPay - 60;
    }
}