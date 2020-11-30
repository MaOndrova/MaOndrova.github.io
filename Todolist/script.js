document.getElementById('datum').valueAsDate = new Date();




let count = 1;
$("#tlacitko").on("click", () => {
    count++;
    let komentar = $("#ukol").val();
    let den = $("#datum").val()

    var obj = {
      text: komentar,
        datum: den,
    }    
    localStorage.setItem("itemname"+count, JSON.stringify(obj)); // Save the obj as string
    var item = JSON.parse(localStorage.getItem("itemname"+count));
    $("ol").append("<li class='task' id=todo"+count+">"+item.datum+" " +item.text+"</li>");
    $("#todo"+count).append("<button class='button-erase' id="+count+">Done</button>");
    console.log(item.datum); 
  });

 
// function createMenuItem(name) {
//   let li = document.createElement('li');
//   li.textContent = name;
//   return li;
// }

// document.getElementById('tlacitko').addEventListener('click', function(){
//   let komentar = document.getElementById("ukol").value;
//   let den = document.getElementById('datum').value;
//   const menu = document.querySelector('#list');
//   menu.appendChild(createMenuItem(den + ' '+ komentar));
// });

  $('.container-list').on('click', '.button-erase', (event) => {
  var radek = event.target.id;
  $("#"+radek).closest('.task').remove();
  $("#"+radek).remove();

});