// task 1
// На терминала клиента трябва да въведе серийния номер на своята карта. Това е цяло число което има скрито значение. Серийния номер съдържа по 6 цифри, по принцип, но на някой клиенти са дадени различни номера. Ако номера съдържа повече от 2 цифри клиента е от тип EARLY_ADOPTER ако клиентския номер съдържа повече от 6 цифри то клиента е LAGGER ако съдържа 6 цифри значи е NORMAL.

const EARLY_ADOPTER_COEFFICIENT = 99;
const NORMAL_USER_COEFFICIENT = 100000;
const LAGGER_USER_COEFFICIENT = 999999;



var CustomerNumber = 123456;
// min 100000
// max 999999
var isCardNumberGreaterThan100000 = (CustomerNumber >= NORMAL_USER_COEFFICIENT);
var isCardNumberLowerThan999999 = (CustomerNumber <= LAGGER_USER_COEFFICIENT);

isCustomerNumber6Digit = isCardNumberGreaterThan100000
                         && 
                         isCardNumberLowerThan999999;

// optimised code version
var isCustomerNormal =  (CustomerNumber >= NORMAL_USER_COEFFICIENT) 
                        && 
                        (CustomerNumber <= LAGGER_USER_COEFFICIENT);

var isCustomerEarlyAdopter =    (CustomerNumber > EARLY_ADOPTER_COEFFICIENT)
                                &&
                                (CustomerNumber < NORMAL_USER_COEFFICIENT);

var isCustomerLagger = CustomerNumber > LAGGER_USER_COEFFICIENT;

