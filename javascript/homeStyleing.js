var imgTest = ["photos/counter.jpg", "photos/fishcookies2.png", "photos/muffins.jpg", "photos/deserts.jpg", "photos/rolls.jpg"];
var imgBoxTest = ['--ib1width', '--ib2width', '--ib3width', '--ib4width', '--ib5width'];
var imgBoxTest2 = ['--ib1height', '--ib2height', '--ib3height', '--ib4height', '--ib5height'];
var textBoxTest = ['--tb1width', '--tb2width', '--tb3width', '--tb4width', '--tb5width'];
var textBoxTest2 = ['--tb1height', '--tb2height', '--tb3height', '--tb4height', '--tb5height'];
var img = new Image();

window.onload = function(){ //Pulls the dimensions of each photo in the array imgTest to push to css for styling the images
  for(var i = 0; i < imgTest.length ;i++){
    img.src = imgTest[i];
    width = img.width;
    height = 250;
    textBoxWidth = 960 - 4 - width;
    textBoxHeight = 250;

    document.documentElement.style.setProperty(imgBoxTest[i], width + 'px');
    document.documentElement.style.setProperty(imgBoxTest2[i], height + 'px');
    document.documentElement.style.setProperty(textBoxTest[i], textBoxWidth + 'px');
    document.documentElement.style.setProperty(textBoxTest2[i], textBoxHeight + 'px');
  }
}
