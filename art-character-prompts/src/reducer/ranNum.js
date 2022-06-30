let char;
const ranNum = (num) => {
    let number = Math.round(Math.random() * num)
    if(number !== char) {
      return char = number
     } else { 
      number = Math.round(Math.random() * num)
    }
    if(number !== char) return char = number
    if(number === char) number = Math.round(Math.random() * num)

    return char;
  }

  export default ranNum;