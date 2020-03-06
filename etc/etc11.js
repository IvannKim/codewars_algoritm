const getLuckyNumber = (n, settingNumber) => {
  const luckyFour = 4;
  const luckySeven = 7;
  let luckyNumber;

  if (settingNumber > n) {
    return -1;
  }
  luckyNumber = settingNumber;
  luckyNumber = Math.max(
    getLuckyNumber(n, settingNumber * 10 + luckyFour),
    luckyNumber
  );
  luckyNumber = Math.max(
    getLuckyNumber(n, settingNumber * 10 + luckySeven),
    luckyNumber
  );

  return luckyNumber;
};

console.log(getLuckyNumber(4747, 0));
console.log(getLuckyNumber(74, 0));
console.log(getLuckyNumber(123, 0));
