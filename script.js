let order = document.querySelector('.orders');




function AddOrder(){
    div = document.createElement('div');
    div.className = `section`;
    
    div.id = generateId();

    p2 =document.createElement('p');
    
    b2 = document.createElement('b');
    b2.textContent = `Sushi roll`

    p = document.createElement('p');
    br = document.createElement('b')
    br.textContent = `$140.00`
    
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
    var orderName = document.getElementById('input-order-name').value;
    var orderPrice = document.getElementById('input-order-price').value;

    console.log(`${orderName} and ${orderPrice}`)
}