let data1 = {
  photo: 'photo/gc1.jpg',
  title: 'Grand Canyon',
  description: 'Pohled na údolí Grand Canyonu'
};
let data2 = {
  photo: 'photo/a8.jpg',
  title: 'Antelope Canyon',
  description: 'Skalní útvar Lady in wind'
};
let data3 = {
  photo: 'photo/v1.jpg',
  title: 'Dead valley',
  description: 'Pohled na mrtvé údolí nacházející se 85,5 metrů pod úrovní moře'
};
let data4 = {
  photo: 'photo/p5.jpg',
  title: 'Mono Lake',
  description: 'Pohled na slané jezero, nacházející se v Kalifornii'
};
let data5 = {
  photo: 'photo/f3.jpg',
  title: 'Golden Gate',
  description: 'Visutý most spojující San Francisco s Marin County'
};

let currentPhoto = 0;
let imagesData = [data1, data2, data3, data4, data5];

imagesData.forEach((item, index) => {
  $('#container-thumbnails').append(`<div class="box box${index}" data-index="${index}"><img src="${item.photo}" width="65" height="65" data-index="${index}"> <div class="title-thumbnail">${item.title}</div></div>`);
});
let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', imagesData[photoNumber].photo);
  $('#photo-title').text(imagesData[photoNumber].title);
  $('#photo-description').text(imagesData[photoNumber].description);
  $(".box" + currentPhoto).animate({
    opacity: '0.5'
  }, "fast");
}
loadPhoto(currentPhoto);

$('#right-arrow').click(() => {
  $(".box" + currentPhoto).animate({
    opacity: '1'
  }, "fast");
  currentPhoto++;
  if (currentPhoto > (imagesData.length - 1)) {
    currentPhoto = 0;
  }
  loadPhoto(currentPhoto);
  $(".box" + currentPhoto).animate({
    opacity: '0.5'
  }, "fast");
})

$('#left-arrow').click(() => {
  $(".box" + currentPhoto).animate({
    opacity: '1'
  }, "fast");
  currentPhoto--;
  if (currentPhoto < 0) {
    currentPhoto = imagesData.length - 1;
  }
  loadPhoto(currentPhoto);
  $(".box" + currentPhoto).animate({
    opacity: '0.5'
  }, "fast");
})



$('.box').click((event) => {
  $(".box" + currentPhoto).animate({
    opacity: '1'
  }, "fast");
  let indexClicked = $(event.target).attr('data-index');
  currentPhoto = parseInt(indexClicked);
  $(".box" + currentPhoto).animate({
    opacity: '0.5'
  }, "fast");
  $('#photo').attr('src', imagesData[currentPhoto].photo);
  $('#photo-title').text(imagesData[currentPhoto].title);
  $('#photo-description').text(imagesData[currentPhoto].description);
  $('.gray-container').show();
});

$('.gray-container').click(() => {
  $('.gray-container').hide();
});


$( window ).resize(function() {
  let imgHeight = $('.foto img').height();
  $('.main').height(imgHeight);
});

$(window).on('load', function(){   
  let imgHeight = $('.foto img').height();
  $('.main').height(imgHeight);});
