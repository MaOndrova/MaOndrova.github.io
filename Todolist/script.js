let number = 0;

$(document).ready(function(){
 //localStorage.removeItem("pole");
  document.getElementById('date').valueAsDate = new Date();
  reload();
  reloadColor();
});

function reload(){
  number = 0;
  pole = JSON.parse(localStorage.getItem('pole')) || [];
  pole.forEach(addinglist);
}


function addinglist(item) {
  $(".list").append("<li class='task' id=todo"+number+">"+item+" "+"</li>");
  $("#todo"+number).append("<button class='button-erase' id="+number+"></button>");
  number++;
} 

function reloadColor(){
  color =  JSON.parse(localStorage.getItem('color-box'));
  if (color != ''){
    document.getElementById('main').style.backgroundColor = color;
    document.getElementById('todocolor').value = color;
  }
}

function clear(){
  $('.list li').each(function() {
  $(this).remove();
  }); 
}

function saveDataToLocalStorage(data)
{
  pole = JSON.parse(localStorage.getItem('pole')) || [];
  pole.push(data);
  localStorage.setItem('pole', JSON.stringify(pole));
}


$("#btn").on("click", () => { 
  let note = $("#inputTask").val();
  let date = $("#date").val()   
  saveDataToLocalStorage(date + " " + note);
  addinglist(date + " " + note);
});

function removeItem(id){
  pole = JSON.parse(localStorage.getItem('pole')) || [];

  if (id > -1) {
    pole.splice(id, 1);
  }
  console.table(pole);
  localStorage.setItem('pole', JSON.stringify(pole));
  clear();
  reload();
}

$('.container-list').on('click', '.button-erase', (event) => {
  var row = event.target.id;
  removeItem(row);
  $(" li #todo"+row).remove();  
});

// Changing background color
document.getElementById('todocolor').addEventListener('change', function(){
  let color = this.value;
  localStorage.setItem('color-box', JSON.stringify(color));
  document.getElementById('main').style.backgroundColor = color;
});

//Shutdown bubling
$(".btn_buble").on('click', function(){
  $('.buble1, .buble2').toggleClass(' bubbling12');
  $('.buble3, .buble4').toggleClass(' bubbling34');
  $('.buble5, .buble6').toggleClass(' bubbling56');
});
