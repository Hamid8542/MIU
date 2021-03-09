exports.countDigits = countDigits;
exports.reverse = reverse;
exports.power = power;
/**
 * 
 * @param {number} number 
 * @returns {number} number
 */
function countDigits(number){

    if (number < 10){
 
     return 1;
    }else{
     return 1 + countDigits(number / 10);
    }
 }
   console.log(countDigits(1234));

   /**
    * 
    * @param {String} str 
    * @returns {String}
    */

   function reverse(str) {
    if (str === "")            // This is the terminal case that will end the recursion
      return "";
    
    else
    
      return reverse(str.substr(1)) + str.charAt(0);
}
    console.log(reverse("hello"));


/**
 * 
 * @param {number} number 
 * @param {number} power 
 * @returns 
 */
    function power(number, pow) {
   
        if (pow === 0) {
            
            return 1;
        }
    
      else {
    
            return number * power(number, pow-1);
      }
    };
    
        console.log(power(4, 4));