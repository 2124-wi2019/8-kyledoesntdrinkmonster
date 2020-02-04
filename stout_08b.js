/* WRITE YOUR SOLUTION BETWEEN THIS LINE */
/*Kyle Stout
  stout_a08b
  INFO 2124WW
  Thoendel
  02-03-2020
*/
const MathUtility = {
    getAreaOfCircle(radius) {
    //Create method getAreaOfCircle and pass radius as parameter
        return (Math.PI * Math.pow(radius, 2));
    //Use math object for PI and to square the parameter and return that value
    },
    //Make sure to include comma 
    getAreaOfSquare(squareSide) {
    //Create method getAreaOfSquare and pass side as parameter
        return(Math.pow(squareSide, 2));
    //Use math object to square the input and return that value
    },
    //again with that pesky comma i definitely did not forget the first time
    getAreaOfTriangle(base, height) {
    //Create method getAreaOfTriangle which accepts parameters base and height
        return (base * height)/2;
    //Do some math and return that value
    }
    //Last method no need for comma
}
//Last curly brace to encompass the object


/* AND THIS LINE */

//Test code
const outMsg = 
`
The area of a circle that is has a radius of 5 units is ${MathUtility.getAreaOfCircle(5)} units.
The area of a square whose side measures 13 units is ${MathUtility.getAreaOfSquare(13)} units.
The area of a triangle with a base of 3 units and height of 2 units is ${MathUtility.getAreaOfTriangle(3, 2)} units.

`
console.log(outMsg);