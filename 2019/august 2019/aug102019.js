stringOfAnArray = input =>{
    const S = input.split('\n')[0].split('=')[1]
    const T = input.split('\n')[1].split('=')[1].split(" ")
    
    T.map(string=>{
        S.includes(string) ? console.log(true) : console.log(false)
    })
}

const input = `S=abcbdefcd
T=ab abc def cd abcd`
stringOfAnArray(input)