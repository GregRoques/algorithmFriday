function repeatedString(s, n) {
   let remainder = n % s.length;
   let dividedNumber = Math.floor(n / s.length);
   let initialStringACount = 0;
   let aCountRemainder = 0;

   for(let i = 0; i < s.length; i++){
       if(s[i] === "a"){
           initialStringACount++;
       }
   }

   for(let i = 0; i < remainder; i++){
       if(s[i] === "a"){
           aCountRemainder++;
       }
   }

   let totalACount = (initialStringACount * dividedNumber) + aCountRemainder;
   console.log(totalACount);
}