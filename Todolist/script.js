
let count = 1;
$("#tlacitko").on("click", () => {
    count++;
    let komentar = $("#ukol").val();
    $("ol").append("<li class='task' id=todo"+count+">"+komentar+"</li>");
    // $("#todo"+count).append("<img src='bin.png' width=30>");
    // $("#todo"+count).append("<img src='select.png' width=30 class='button-erase' id='button"+count+"'>");
    $("#todo"+count).append("<button class='button-erase' id='button"+count+"'>Done</button>");
  });

  $('.container-list').on('click', '.button-erase', (event) => {
  var radek = event.target.id;
  console.log(radek);
  $("#"+radek).closest('.task').remove();
  $("#"+radek).remove();

});