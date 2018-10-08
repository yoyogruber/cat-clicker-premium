// global variables for DOM manipulation
var catsName = document.getElementById("catName");
var catsImage = document.getElementById("catImg");
var clicksText = document.getElementById("clickText");
var clicksNum = document.getElementById("clickNum");
 

//Object Constructor
function Cat(name, image) {
  this.name = name;
  this.image = image;
  this.numOfClicks = 0;
}

// Method added to object prototype
Cat.prototype.addClick = function() {
  this.numOfClicks++;
};


///////////////////////////////// First Cat ///////////////////////////////////////////////////////||||

$("#cat1").click(function() {
  var cat1 = new Cat("Mini",
    "pic/cat1.jpg"
  );

  clicksNum.innerHTML = cat1.numOfClicks;
  
  var clicker = document.getElementById("catImg");

  $("#placeHolderText").css("display", "none");
  $("#clicks-section").addClass("well");
  $("#catName").addClass("well");
  
  catsName.innerHTML = cat1.name;
  catsImage.src = cat1.image;
  clicksText.innerHTML = "Clicks:";
 clicksNum.innerHTML = 0;
  
  clicker.onclick = function() {
  cat1.addClick();
  clicksNum.innerHTML = cat1.numOfClicks;

}


});


///////////////////////////////// Second Cat ///////////////////////////////////////////////////////||||

$("#cat2").click(function() {
  var cat2 = new Cat(
    "Lion",
    "pic/cat2.jpg"
  );
  

  //console.log(cat2.name);

  var clicker = document.getElementById("catImg");

  $("#placeHolderText").css("display", "none");
  $("#clicks-section").addClass("well");
  $("#catName").addClass("well");
  
  catsName.innerHTML = cat2.name;
  catsImage.src = cat2.image;
  clicksText.innerHTML = "Clicks:";
  //clicksNum.innerHTML = numOfClicks;
  clicksNum.innerHTML = 0;
  
  clicker.onclick = function() {
  cat2.addClick();
  clicksNum.innerHTML = cat2.numOfClicks;
}

});

///////////////////////////////// Third Cat ///////////////////////////////////////////////////////||||

$("#cat3").click(function() {
  var cat3 = new Cat(
    "Synthia",
    "https://pbs.twimg.com/media/DSAS1uAWkAENbFI.jpg"
  );

    var clicker = document.getElementById("catImg");

  $("#placeHolderText").css("display", "none");
  $("#clicks-section").addClass("well");
  $("#catName").addClass("well");
  
  catsName.innerHTML = cat3.name;
  catsImage.src = cat3.image;
  clicksText.innerHTML = "Clicks:";
  clicksNum.innerHTML = 0;
  
  clicker.onclick = function() {
  cat3.addClick();
  clicksNum.innerHTML = cat3.numOfClicks;
}
  
});

///////////////////////////////// Fourth Cat ///////////////////////////////////////////////////////||||

$("#cat4").click(function() {
  var cat4 = new Cat(
    "entspannte Katze",
    "http://1.bp.blogspot.com/-0qbVQct5v2k/UF8ytUujtrI/AAAAAAAADZo/J-Q7A-BqgQk/s1600/1305842915-cute-cats-animals-kittens-wallpaper.jpeg"
  );

  var clicker = document.getElementById("catImg");

  $("#placeHolderText").css("display", "none");
  $("#clicks-section").addClass("well");
  $("#catName").addClass("well");
  
  catsName.innerHTML = cat4.name;
  catsImage.src = cat4.image;
  clicksText.innerHTML = "Clicks:";
  clicksNum.innerHTML = 0;
  
  clicker.onclick = function() {
  cat4.addClick();
  clicksNum.innerHTML = cat4.numOfClicks;
}
  
});

///////////////////////////////// Fifth Cat ///////////////////////////////////////////////////////||||

$("#cat5").click(function() {
  var cat5 = new Cat(
    "Garfield",
    "http://fr.web.img6.acsta.net/r_1280_720/medias/nmedia/18/35/23/61/18382564.jpg"
  );

  var clicker = document.getElementById("catImg");

  $("#placeHolderText").css("display", "none");
  $("#clicks-section").addClass("well");
  $("#catName").addClass("well");
  
  catsName.innerHTML = cat5.name;
  catsImage.src = cat5.image;
  clicksText.innerHTML = "Clicks:";
  clicksNum.innerHTML = 0;
  
  clicker.onclick = function() {
  cat5.addClick();
  clicksNum.innerHTML = cat5.numOfClicks;
}
   
  
});

