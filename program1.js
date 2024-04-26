function smallestMissingPositiveInteger(nums) {
  const numSet = new Set(nums);
  let smallestMissing =1;
  while(numSet.has(smallestMissing))
  {
     smallestMissing++;
  }
  return smallestMissing;



  }

  module.exports = smallestMissingPositiveInteger;
