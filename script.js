let order = document.querySelector('.orders');




function AddOrder(orderName,orderPrice){
    div = document.createElement('div');
    div.className = `section`;
    
    div.id = generateId();

    p2 =document.createElement('p');
    
    b2 = document.createElement('b');
    b2.textContent = orderName

    p = document.createElement('p');
    br = document.createElement('b')
    br.textContent = orderPrice
    
    p2.append(b2)
    p.append(br);
    div.append(p2)
    div.append(p);
    order.append(div);
    
    blink = document.getElementById(`${this.div.id}`);
    
    setTimeout(() => {
        blink.className = `section`
    }, 150);
    blink.className = `blinker`;
    document.getElementById(`${this.div.id}`).scrollIntoView();

    
}

function generateId(){
    return Math.floor(Math.random()*1000000);
}

// modal
var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementById('close');

btn.onclick = function(){
    modal.style.display = "block";
}
console.log(`${modal.className}`)

span.onclick = function(){
    modal.style.display = "none";
}
console.log(`${span.className}`)
window.onclick = function(event){
    if(event.target == modal ){
        modal.style.display = "none";
    }
}

function AddNewOrder(){
    var orderName = document.querySelector('#input-order-name');
    var orderPrice = document.getElementById('input-order-price');
    
    if(orderName.value.trim() === '' || orderPrice.value.trim() === '' ){
        console.log('cannot enter empty values');
    }
    else{
        AddOrder(orderName.value,orderPrice.value)
        console.log(orderName.value)
        console.log(orderPrice.value)
    }

    orderName.value = ' ';
    orderPrice.value = ' ';
    modal.style.display = 'none'
}