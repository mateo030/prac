const array = [];
const list = document.getElementById('list');

document.getElementById('myButton').addEventListener('click', getValue);

function getValue() {
    const inputField = document.getElementById('myInput');
    const value = inputField.value;

    array.push(value);

    const container = document.createElement('div');
    const node = document.createElement('p');
    const node2 = document.createElement('span');

    container.className = 'container';

    node2.textContent = 'remove';
    node2.className = 'close';

    node.textContent = value;

    list.appendChild(container);
    container.appendChild(node);
    container.appendChild(node2);

    //the onclick event is attached to the newly created node2 element
    node2.onclick = function () {
        const div = this.parentElement;
        div.style.display = 'none';
    }

    inputField.value = '';
}



