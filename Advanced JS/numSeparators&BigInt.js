//Numeric Separator is an _ and makes numbers easier to read

const tomsBankBalanceGBP = 9_007_199_254_740_991_345n;
console.log(tomsBankBalanceGBP);

//bigInt() - big integer
//we can use an n and it is a bigint, also we an use BigInt() to create one.
//bigint cant do math, nor cant be converted into a number
//bigints are useful to use in contexts requiring precise handling of large integers, like cryptography, or databases with large integer identifiers.