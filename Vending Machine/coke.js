var total =0 
var purchase = []

const yN = response =>{
    let answer = response.toLowerCase()
    if(answer === 'y'){
        document.querySelector('.machineBody').innerHTML = `
        <div><b>Click and item below to make a selection</b><div>
        <div class="completeCurrency"><b>Change Remaining: </b> ${(total/100).toFixed(2)}</div><br/>
        <div>
        <div class="money" onclick="purchaseItem('candy')">CANDY(.10)</div>
        <div class="money" onclick="purchaseItem('snack')">SNACK(.50)</div>
        <div class="money" onclick="purchaseItem('nuts')">NUTS(.90)</div>
        <div class="money" onclick="purchaseItem('coke')">Coke(.25)</div>
        <div class="money" onclick="purchaseItem('dietCoke')">Diet Coke(.50)</div>
        <div class="money" onclick="purchaseItem('cookies')">Cookies(1.50)</div>
        </div>
        
        <div class="questionForm">
            <div><b>Click Currency Below to Deposit Change</b></div>
            <div class="money" onclick="vendingMachine('penny')">Penny</div>
            <div class="money" onclick="vendingMachine('nickel')">Nickel</div>
            <div class="money" onclick="vendingMachine('dime')">Dime</div>
            <div class="money" onclick="vendingMachine('quarter')">Quarter</div>
            <div class="money" onclick="vendingMachine('dollar')">Dollar</div>
            <button onclick="complete()">Get Change</button>
        <div>
        <div class="purchases"></div>
        `
    } else if (answer === 'n'){
        document.querySelector('.questionForm').innerHTML = `
           <b>  Maybe next time! </b>
        `
    } else {
        document.querySelector('.consider').innerHTML = `
           <b> Y or N ...there is no ${answer} </b>
        `
    }
}

const vendingMachine = money =>{
        if(money === 'penny'){
            total +=1
        } else if (money === 'nickel'){
            total +=5
        } else if (money === 'dime'){
            total += 10
        } else if (money === 'quarter'){
            total += 25
        } else if( money === 'dollar'){
            total += 100
        }
        total > 500 ? total = 500 : null
        document.querySelector('.completeCurrency').innerHTML = `
        ${total === 500 ? 'Max Total is $5.00' : 'Change Remaining: $' + (total/100).toFixed(2)}
    `
}

const lastPurchase = () =>{
    document.querySelector('.completeCurrency').innerHTML = `<b>Money left: </b>${(total/100).toFixed(2)}`

    document.querySelector('.purchases').innerHTML = `
    <br/>
    <div class="yourRefreshments">Enjoy your${purchase.toString()}.</div>
    `
}

const purchaseItem = yourPurchase =>{
    console.log(yourPurchase, purchase)
    if(yourPurchase === 'candy' && total >= 10){
        total -= 10
        purchase.push(' candy')
        lastPurchase()
    } else if (yourPurchase === 'snack' && total >= 50){
        total -= 50
        purchase.push(' snack')
        lastPurchase()
    } else if (yourPurchase === 'nuts' && total >= 90){
        total -= 90
        purchase.push(' nuts')
        lastPurchase()
    } else if (yourPurchase === 'coke' && total >= 25){
        total -= 25
        purchase.push(' Coke')
        lastPurchase()
    } else if(yourPurchase === 'dietCoke' && total >= 50){
        total -= 50
        purchase.push(' Diet Coke')
        lastPurchase()
    } else if(yourPurchase === 'cookies' && total >= 150){
        total -= 150
        purchase.push(' cookies')
        lastPurchase()
    } else {
        alert('You cannot affor this item. Input more change.')
    }
     
}

const complete = () =>{
    document.querySelector('.machineBody').innerHTML = `
        <div><b> Your remaining change is </b>${(total/100).toFixed(2)}</div>
        <div>
            ${ purchase.length ? 'Enjoy your refreshments.' : 'Enjoy your day.'}
        </div>
    `

}



