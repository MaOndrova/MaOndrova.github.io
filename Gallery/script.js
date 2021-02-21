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
  $('#containerThumbnails').append(`<div class="box box${index}" data-index="${index}"><img src="${item.photo}" width="65" height="65" data-index="${index}"> <div class="titleThumbnail">${item.title}</div></div>`);
});

let loadPhoto = (photoNumber) => {
  let newPhoto = $('#photo').attr('src', imagesData[photoNumber].photo);
  newPhoto.hide();
  newPhoto.fadeIn(800); 
  $('#photoTitle').text(imagesData[photoNumber].title);
  $('#photoDescription').text(imagesData[photoNumber].description);
  $(".box" + currentPhoto).css('transform','scale(1.2)');
};

loadPhoto(currentPhoto);

$('#rightArrow').click(() => {
  $(".box" + currentPhoto).css('transform','scale(1)');
  currentPhoto++;
  if (currentPhoto > (imagesData.length - 1)) {
    currentPhoto = 0;
  }
  loadPhoto(currentPhoto);

  $(".box" + currentPhoto).css('transform','scale(1.2)');
});

$('#leftArrow').click(() => {
  $(".box" + currentPhoto).css('transform','scale(1)');

  currentPhoto--;
  if (currentPhoto < 0) {
    currentPhoto = imagesData.length - 1;
  }
  loadPhoto(currentPhoto);

  $(".box" + currentPhoto).css('transform','scale(1.2)');
});

$('.box').click((event) => {
  $(".box" + currentPhoto).css('transform','scale(1)');
  let indexClicked = $(event.target).attr('data-index');
  currentPhoto = parseInt(indexClicked);

  $(".box" + currentPhoto).css('transform','scale(1.2)');
  $('#photo').attr('src', imagesData[currentPhoto].photo);
  $('#photoTitle').text(imagesData[currentPhoto].title);
  $('#photoDescription').text(imagesData[currentPhoto].description);
  $('.grayContainer').fadeIn();
});

$('.grayContainer').click(() => {
  $('.grayContainer').fadeOut();
});

$(window).resize(function() {
  let imgHeight = $('.foto img').height();
  $('.main').height(imgHeight);
});

$(window).on('load', function(){   
  let imgHeight = $('.foto img').height();
  $('.main').height(imgHeight);
});
