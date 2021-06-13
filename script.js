console.log('hello');

var submit = document.querySelector('.addItems button');

submit.addEventListener('click',function(){
    console.log('You clicked me......');

    // create new list element
    let newItem = document.createElement('li')

    //get value in input box
    var userValue = document.querySelector('#enterItem').value;
    console.log(userValue);

    // put value in li
    newItem.innerText = userValue;

    // add list tos itemsList
    let itemsList = document.querySelector('.itemsList');
    itemsList.appendChild(newItem);

    document.querySelector('#enterItem').value = '';
});
console.log(submit);

