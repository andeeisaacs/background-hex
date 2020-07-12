var color = "#eb4034"


//Function that takes in the color variable as an argument and randomizes each hexidecimal index positions.
    //there are SIX positions in the hexidecimal color code, made up of numbers 0-9 and letters a-f

const changeColor = () => {
    //split the string into an array.
    let newArr = color.split("")
    let newColor = ["#"]
    //iterate through the length of the array.

        newArr.map(value => {
            value = Math.floor(Math.random() * 15)
            //if below 9, just return value of the integer
            if(value <= 9) {
                newColor.push(value)
                //If its greater than 9, set a letter value
            } else if(value === 10){
                newColor.push("a")       
            } else if(value === 11){
                newColor.push("b")
            } else if(value === 12){
                newColor.push("c")
            } else if(value === 13){
                newColor.push("d")
            } else if(value === 14){
                newColor.push("e")
            } else {
                newColor.push("f")
            }
        })

    // for(i = 1; i<newArr.length; i++){
    //     //randomize the index value between a integer or a letter
    // }
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




