// task 1
// На терминала клиента трябва да въведе серийния номер на своята карта. Това е цяло число което има скрито значение. Серийния номер съдържа по 6 цифри, по принцип, но на някой клиенти са дадени различни номера. Ако номера съдържа повече от 2 цифри клиента е от тип EARLY_ADOPTER ако клиентския номер съдържа повече от 6 цифри то клиента е LAGGER ако съдържа 6 цифри значи е NORMAL.

var CustomerNumber = 123456;
// min 100000
// max 999999
var isCardNumberGreaterThan100000 = (CustomerNumber >= 100000);
var isCardNumberLowerThan999999 = (CustomerNumber <= 999999);

isCustomerNumber6Digit = isCardNumberGreaterThan100000
                         && 
                         isCardNumberLowerThan999999;

// optimised code version
var isCustomerNormal =  (CustomerNumber >= 100000) 
                        && 
                        (CustomerNumber <= 999999);

var isCustomerEarlyAdopter =    (CustomerNumber > 99)
                                &&
                                (CustomerNumber < 1000000);

var isCustomerLagger = CustomerNumber > 999999;