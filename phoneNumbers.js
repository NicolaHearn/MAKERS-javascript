const checkLength = (num) => {
  if (num.length == 10) {
    return true;
  } else {
    return false;
  }
}

array = [
  '1763687364',
  '4763687363',
  '7867867862',
  'AAAA#####AAAA#87@768767382672',
  '4763687363',
  '4763687363'
];

const phoneNumbers = array.filter(checkLength);
console.log(phoneNumbers);