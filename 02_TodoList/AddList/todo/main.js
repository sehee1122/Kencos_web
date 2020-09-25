/*
<script language='javscript'>
  function test() {
    alert("button...")
  }
</script>
*/

/*
function send_nodeDB() {
  $("#addbtn").click(function() {
    $.ajax({
      url: '/postTest',
      async: true,  // false: 동기 요청
      type: 'POST', // GET, POST
      data: {
        dueDate: $('#currentDate').val(),
        toDo: $("#classification select").val(),
        toDetails: $("#addtodo input[type=text]").val(),
        toColor: $('#addtodo input[type=color]').val(),
      },
      dataType: 'json',
      success: function(data) {
        alert("POST success");
      },
      error: function(err) {
        alert("POST fail");
      }
    })
  })
}
*/


const { nodes } = require("stylus");

var totalOfItems = 0;

function updateItemStatus() {
  var chId = this.id.replace('cb_', '');
  var itemText = document.getElementById('item_' + chId);

  if(this.checked) {
    itemText.className = 'checked';
  } else {
    itemText.className = '';
  }
}

function renameItem() {
  var newText = prompt("What should this item be renamed to?");
  if(!newText || newText === "" || newText === " ") return false; // blank 방지
  var spanId = this.id.replace('pencilIcon_', '');
  var span = document.getElementById('item_' + spanId);

  span.innerText = newText;
}

var donelist = document.getElementById('donelist');
function moveItem() {
  var listItemId = this.id.replace('li_', '');
  var listItem = document.getElementById('li_' + listItemId);
  var listItemParentId = listItem.parentElement;
  
  if (listItemParentId == donelist) {
    todolist.appendChild(listItem);
    donelist.appendChild(listItem);
  }
}

function deleteItem(donelist) {
  var listItemId = this.id.replace('minuslcon_', '');
  document.getElementById('li_' + listItemId).style.display = "none";
}

function mouseover() {
  
  var pencilIconId = this.id.replace('li_', '');
  var pencilIcon = document.getElementById('pencilIcon_' + pencilIconId);
  var minusIcon = document.getElementById('minusicon_' + pencilIconId);

  pencilIcon.style.visibility = 'visible';
  minusIcon.style.visibility = 'visible';
}

function mouseout() {
  var pencilIconId = this.id.replace('li_', '');
  var pencilIcon = document.getElementById('pencilIcon_' + pencilIconId);
  var minusIcon = document.getElementById('minusIcon_' + pencilIconId);

  pencilIcon.style.visibility = 'hidden';
}

function addNewItem(list, itemText) {
  //totalItems++;

  const date = new Date();
  console.log(date);  // Mon Sep 21 2020 17:57:13 GMT+0900 (한국 표준시)
  //var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconde();
  alert('hi');
  const listItem = document.createElement('li');    // li 태그를 생성하는 DOM 조작 이벤트를 listItem에 담음
  listItem.id = 'li_' + id;
  listItem.ondblclick = moveItem;
  listItem.addEventListener('mouseover', mouseover);
  listItem.addEventListener('mouseout', mouseout);

  const span = document.createElement('span');
  span.id = 'item_' + id;
  span.innerText = itemText;
  
  const pencilIcon = document.createElement('i');
  pencilIcon.className = 'fa fa-pencil';  // Font Awesome library
  pencilIcon.id = 'pencilIcon_' + id;
  pencilIcon.onclick = renameItem;

  const minusIcon = document.createElement('i');
  minusIcon.className = 'fa fa-minus';
  minusIcon.id = 'minusIcon_' + id;
  minusIcon.onclick = deleteItem;

  listItem.appendChild(span);
  listItem.appendChild(minusIcon);
  listItem.appendChild(pencilIcon);
  list.appendChild(listItem);
}

const inputText = document.getElementById('inputText');
inputText.focus();

inputText.onkeyup = function(event) { // 문자 입력 후 이벤트 발생 / onKeyDown: 이벤트 발생 후 문자 입력
//function enterKey() {
  // event which (13) === ENTER key
  if(event.which === 13) {
    var itemText = inputText.value;
      if(itemText === "" || itemText === " ") return false;  // blank 방지
      else {
        addNewItem(document.getElementById('todolist').method = "post", itemText);
        inputText.focus();    // 애플리케이션을 실행시킨 후 바로 실행
        inputText.select();   // 아밴트 코드 안의 포커스를 잡고, 그 영역을 선택
      }
  }
}

// user router
app.get('/index.html', function(req, res) {
  var tdTodo = req.body.todo
  var tdDetails = req.body.details
  var tdColor = req.body.color

  if(tdTodo) {  // tdTodo가 유효하다면
    // SQL문 실행
    connection.query("INSERT INTO TodoList (dueDate, toDo, tdDetails, tdColor, todayDate) VALUES ('"+ dueDate +"', '"+ toDo +"', '"+ tdDetails +"', '"+ tdColor +"', '"+ todayDate +"')",
      function(error, result, fields) {
        if (error) {  // 에러 발생시
          res.send('err: '+ error)
        } else {
          console.log(tdTodo +','+ tdDetails +','+ tdColor)
          res.send('success create Todo: '+ tdTodo +'Details: '+ tdDetails +'Color: '+ tdColor)
        }
      }
    )
  }
})


/* 20.09.21.(Mon) 18:13
리액트, 뷰(SPA) 앵귤러(full framework) 
next.js, nuxt.js (SSR)

express

react  vue
RESTful
JS Unit test jest, mocha
TDD
StyledComponent, css, sass(scss)

const phone = p[0] + p[1] + p[2]

phone = 01011112222

const reg = new RegExp(01[016789]\D?\d{3,4}\D?\d{4})

const result = reg.match(phone)

a('a', 2)
function a(a, b) {
  return a + b;
}

'a2'

jest.test({
  a();
})

jest.test({
  const result = a(1, 2);
  result.match(3)
})

jest.test({
  const result = a(1, 2);
  result.type != number;
})

jest.test({
  
})
*/

/*
  var checkBox = document.createElement('input');
  checkBox.type = 'checkBox';
  checkBox.id = 'cb_' + totalItems;
  checkBox.onlink = updateItemStatus;
document
  listItem.innerText = "itemText";   // 생성된 li 태그 안에 innerText라는 메소드로 문자열 입력 
  list.appendChild(listItem); // appendChild 메소드로 listItem
}
*/

/*
var btnNew = document.getElementById('btnAdd'); // id로 버튼 생성
btnNew.onclick = function() {    // onclick event - 함수로 이벤트 전달
  //addNewItem(document.getElementById('todolist'));
  var inputText = document.getElementById('inputText');
  var itemText = inputText.value;
*/

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