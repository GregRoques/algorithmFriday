const isPasswordValid = password => {
    let passDouble = false
    let passIncrease = null
  
    const passArray = (password.toString()).split('').map(n => Number.parseInt(n))
    let previousNumber
    passArray.forEach(num => {
      if (previousNumber !== undefined) {
        if (previousNumber === num && passDouble === false) {
          passDouble = true
        }
        if (previousNumber <= num && passIncrease !== false) {
          passIncrease = true
        } else {
          passIncrease = false
        }
      }
      previousNumber = num
    })
    if(passDouble === true && passIncrease === true){
      return true
    } else {
      return false
    }
  }
  
  const findPassword1 = (start, end) =>{
  
      const workingPasswords =[];
      let currPass = start;
      while( currPass < end){
        if (isPasswordValid(currPass)) {
          workingPasswords.push(currPass)
        }
        currPass++
      }
      console.log(workingPasswords.length)
  }
  
  findPassword1(145852, 616942)
  