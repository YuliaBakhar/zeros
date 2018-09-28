module.exports = function getZerosCount(number) {
  // your implementation
  let i = 0;
  let zerosCount  = 0;
  let fivesExponent = 0; 
  
  while (fivesExponent < number){
    i++;
    fivesExponent = Math.pow(5, i);
    zerosCount += Math.floor(number / fivesExponent);
  }
  return zerosCount;  
}
