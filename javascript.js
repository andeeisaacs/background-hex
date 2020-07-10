var color = "#eb4034"


//Function that takes in the color variable as an argument and randomizes each hexidecimal index positions.
    //there are SIX positions in the hexidecimal color code, made up of numbers 0-9 and letters a-f

const changeColor = () => {
    //split the string into an array.
    let newArr = color.split("")
    let newColor = ["#"]
    //iterate through the length of the array.
    for(i = 1; i<newArr.length; i++){
        //randomize the index value between a integer or a letter
        newArr[i] = Math.floor(Math.random() * 15)
        //if below 9, just return value of the integer
        if(newArr[i] <= 9) {
            newColor.push(newArr[i])
            //If its greater than 9, set a letter value
        } else if(newArr[i] === 10){
            newColor.push("a")       
        } else if(newArr[i] === 11){
            newColor.push("b")
        } else if(newArr[i] === 12){
            newColor.push("c")
        } else if(newArr[i] === 13){
            newColor.push("d")
        } else if(newArr[i] === 14){
            newColor.push("e")
        } else {
            newColor.push("f")
        }
    }
    //Join the values back together into a string and re-assign color
    //return string to color variable.
    color = newColor.join("").toUpperCase()
    return changeHTML(color)
}


//Replace the tag selector with color variable with an onclick.
const changeHTML = (color) => {
    console.log(color)
    //select the div id and the style tag selector of the background color
    document.getElementById('colorbox').style.backgroundColor = color;
    //select the h1 element span and replace the string with the color variable value. 
    document.getElementById('hexcolor').innerHTML = color;

}

// changeColor()



