let number = 0;

$(document).ready(function(){
 //localStorage.removeItem("pole");
  document.getElementById('datum').valueAsDate = new Date();
  reload();
});

function reload(){
  pole = JSON.parse(localStorage.getItem('pole')) || [];
  pole.forEach(myFunction);}


function myFunction(item, index) {
  $(".list").append("<li class='task' id=todo"+index+">"+item+" "+"</li>");
  $("#todo"+index).append("<button class='button-erase' id="+index+"><img src='right-tick.svg' alt='Done' width='17px'></button>");
  number = index;
} 

function clear(){
    $('.list li').each(function() {
    $(this).remove();
  }) 
}

function SaveDataToLocalStorage(data)
{
    pole = JSON.parse(localStorage.getItem('pole')) || [];
    pole.push(data);
    localStorage.setItem('pole', JSON.stringify(pole));
}


$("#tlacitko").on("click", () => {
    number++;
    let komentar = $("#ukol").val();
    let den = $("#datum").val()   
    SaveDataToLocalStorage(den + " " + komentar);
    $(".list").append("<li class='task' id=todo"+number+">"+den+" " +komentar+"</li>");
    $("#todo"+number).append("<button class='button-erase' id="+number+"><img src='right-tick.svg' alt='Done' width='17px'></button>");
  });

  function RemoveItem(id){
    pole = JSON.parse(localStorage.getItem('pole')) || [];
    deletedItem = pole[id];

    if (id > -1) {
      pole.splice(id, 1);
    }
    localStorage.setItem('pole', JSON.stringify(pole));
    clear();
    reload();

  }

  $('.container-list').on('click', '.button-erase', (event) => {
  var radek = event.target.id;
  RemoveItem(radek);
  $(" li #todo"+radek).remove();  
});

// Changing background color
document.getElementById('todocolor').addEventListener('change', function(){
  let color = this.value;
  document.getElementById('main').style.backgroundColor = color;
});

//Shutdown bubling
$(".btn_buble").on('click', function(){
  $('.buble3, .buble4').toggleClass(' bubbling34');
  $('.buble1, .buble2').toggleClass(' bubbling12');
  $('.buble5, .buble6').toggleClass(' bubbling56');
});
