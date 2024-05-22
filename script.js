function readMoreLess(element) {
    var dots = document.getElementById(element.concat("dots"));
    var moreText = document.getElementById(element.concat("more"));
    var btnText = document.getElementById(element.concat("readMoreLessButton"));
    var card = document.getElementById(element);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
      card.style.height = "";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "block";
      card.style.height = "100%";
    }
  }
  function showHidenNavMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }