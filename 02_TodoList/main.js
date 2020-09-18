var btnNew = document.getElementById('btnAdd'); // id로 버튼 생성
btnNew.onclick = function() {    // onclick event - 함수로 이벤트 전달
    addNewItem(document.getElementById('todolist'));
};

function addNewItem(list) {
    var listItem = document.createElement('li');    // li 태그를 생성하는 DOM 조작 이벤트를 listItem에 담음
    listItem.innerText = "Hello";   // 생성된 li 태그 안에 innerText라는 메소드로 문자열 입력 
    list.appendChild(listItem); // appendChild 메소드로 listItem
}

/*
var btnNew = document.getElementById('btnAdd'); // id로 버튼 생성
btnNew.onclick = addNewItem;    // onclick event - 함수로 이벤트 전달

function addNewItem() {
    var listItem = document.createElement('li');    // li 태그를 생성하는 DOM 조작 이벤트를 listItem에 담음
    listItem.innerText = "Hello";   // 생성된 li 태그 안에 innerText라는 메소드로 문자열 입력

    var list = document.getElementById('todolist');
    list.appendChild(listItem); // appendChild 메소드로 listItem
}
*/