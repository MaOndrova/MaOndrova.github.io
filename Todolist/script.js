$(document).ready(function () {
  reload();
  reloadColor();
});

function reload() {
  number = 0;
  arrayTasks = JSON.parse(localStorage.getItem('arrayTasks')) || [];
  arrayTasks.forEach(addinglist);
}

function addinglist(item) {
  $(".list").append("<li class='task' id=todo" + number + ">" + item + " " + "</li>");
  $("#todo" + number).append("<button class='button-erase' id=" + number + ">✔</button>");
  number++;
}

function reloadColor() {
  color = JSON.parse(localStorage.getItem('color-box'));
  if (color !== '') {
    document.getElementById('main').style.backgroundColor = color;
    document.getElementById('todocolor').value = color;
  }
}

function clear() {
  $('.list li').each(function () {
    $(this).remove();
  });
}

function saveDataToLocalStorage(data) {
  arrayTasks = JSON.parse(localStorage.getItem('arrayTasks')) || [];
  arrayTasks.push(data);
  localStorage.setItem('arrayTasks', JSON.stringify(arrayTasks));
}


$("form").submit(function (event) {
  event.preventDefault();
  let note = $("#inputTask").val();
  saveDataToLocalStorage(note);
  addinglist(note);
  $('input[name=checkListItem').val('');
});

function removeItem(id) {
  arrayTasks = JSON.parse(localStorage.getItem('arrayTasks')) || [];

  if (id > -1) {
    arrayTasks.splice(id, 1);
  }

  localStorage.setItem('arrayTasks', JSON.stringify(arrayTasks));
  clear();
  reload();
}

$('.container-list').on('click', '.button-erase', (event) => {
  var row = event.target.id;
  removeItem(row);
  $(" li #todo" + row).remove();
});

$("#pallet").click(function (event) {
  $("#todocolor").click();
});

document.getElementById('todocolor').addEventListener('change', function () {
  let color = this.value;
  localStorage.setItem('color-box', JSON.stringify(color));
  document.getElementById('main').style.backgroundColor = color;
});

$(".btn_bubble").on('click', function () {
  $('.bubble1, .bubble2, .bubble3, .bubble4, .bubble5, .bubble6').toggle('stop');
});


