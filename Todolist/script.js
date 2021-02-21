$(document).ready(function () {
  reload();
  reloadColor();
});

function reload() {
  number = 0;
  arrayTasks = JSON.parse(localStorage.getItem('arrayTasks')) || [];
  arrayTasks.forEach(addingList);
}

function reloadColor() {
  color = JSON.parse(localStorage.getItem('colorBox'));
  if (color !== '') {
    document.getElementById('main').style.backgroundColor = color;
    document.getElementById('todoColor').value = color;
  }
}

function addingList(item) {
  $(".list").append("<li class='task' id=todo" + number + ">" + item + " " + "</li>");
  $("#todo" + number).append("<button class='buttonErase' id=" + number + ">✔</button>");
  number++;
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
  addingList(note);
  $('input[name=checkListItem').val('');
});

function clear() {
  $('.list li').each(function () {
    $(this).remove();
  });
}

function removeItem(id) {
  arrayTasks = JSON.parse(localStorage.getItem('arrayTasks')) || [];

  if (id > -1) {
    arrayTasks.splice(id, 1);
  }

  localStorage.setItem('arrayTasks', JSON.stringify(arrayTasks));
  clear();
  reload();
}

$('.containerList').on('click', '.buttonErase', (event) => {
  var row = event.target.id;
  removeItem(row);
  $("li #todo" + row).remove();
});

$("#pallet").click(function (event) {
  $("#todoColor").click();
});

document.getElementById('todoColor').addEventListener('change', function () {
  let color = this.value;
  localStorage.setItem('colorBox', JSON.stringify(color));
  document.getElementById('main').style.backgroundColor = color;
});

$(".btnBubble").on('click', function () {
  $('.bubble1, .bubble2, .bubble3, .bubble4, .bubble5, .bubble6').toggle('stop');
});


