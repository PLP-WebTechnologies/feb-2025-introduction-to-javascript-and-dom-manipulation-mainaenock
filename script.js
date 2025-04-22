
const list = JSON.parse(localStorage.getItem('item')) || [];
function collectData() {
    const itemInput = document.querySelector('.item-input').value;
    if(itemInput === ""){
        alert('Add Item')
        return;
    }
    list.push(itemInput)
    localStorage.setItem('item', JSON.stringify(list))
    displayData()
}

function displayData() {
    let htmlList ="<h3 class='list-heading'>Shopping list</h3>";

    list.forEach((item, i) => {
        const html =`
        <p class="items-container">
            <span>${item}</span>
            <button onclick="bought(${i})" class="bought-btn">buy</button>
            <button onclick="del(${i})" class="delete-btn">Delete</button>
        </p>
        `
        htmlList += html
    })
    document.querySelector('.items').innerHTML = htmlList;
}

function handleKeyDown(event) {
    if (event.key === "Enter") {
        add()
    }
}
function del(index) {
    list.splice(index, 1)
    localStorage.setItem('item', JSON.stringify(list))
    displayData()
}

function bought(index) {
    const buttons = document.querySelectorAll('.bought-btn');
    buttons[index].style.backgroundColor = "green"
    buttons[index].style.border = "none"
    buttons[index].style.color = "white"
    buttons[index].innerText = "Bought"
    buttons[index].style.width = "70px"

    buttons[index].disabled = true;


}

function add() {
    collectData()
    document.querySelector('.item-input').value = "";


}
displayData()