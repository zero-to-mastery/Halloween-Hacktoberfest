var movieList = [
    {
    "movieName" : "The Nightmare Before Christmas",
    "imageURL" : "https://wallpapercave.com/wp/4DnMAS4.png",
    "movieUrl" : "https://www.imdb.com/title/tt0107688/",
    },
    {
    "movieName" : "Corpse Bride",
    "imageURL" : "https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/corpsehed.jpg?itok=0cnYDZLJ&resize=1100x1100",
    "movieUrl" : "https://www.imdb.com/title/tt0121164/",
    },
    {
    "movieName" : "Moster House",
    "imageURL" : "http://www.asset1.net/tv/pictures/movie/monster-house-2006/Monster-House-01-1.jpg",
    "movieUrl" : "https://www.imdb.com/title/tt0385880/",
    },

    {
    "movieName" : "Paranorman",
    "imageURL" : "https://i.vimeocdn.com/video/676138487_1920x1080.jpg?r=pad",
    "movieUrl" : "https://www.imdb.com/title/tt1623288",
    },
    {
    "movieName" : "Casper",
    "imageURL" : "https://i.ytimg.com/vi/ai9DTupH2r0/maxresdefault.jpg",
    "movieUrl" : "https://www.imdb.com/title/tt0112642/",
    },
    {
    "movieName" : "Coraline",
    "imageURL" : "http://cdn-static.denofgeek.com/sites/denofgeek/files/8/01//coraline-main.jpg",
    "movieUrl" : "https://www.imdb.com/title/tt0327597/",
    },
    {
    "movieName" : "Haunted Mansion",
    "imageURL" : "https://resizing.flixster.com/Jq0fHDenDeKgJ7FRJB01E3WYtfQ=/3000x1937/v1.bjszOTEwMzY7ajsxNzgyNDsxMjAwOzMwMDA7MTkzNw",
    "movieUrl" : "https://www.imdb.com/title/tt3875444/",
    },
    {
    "movieName" : "Hocus Pocus",
    "imageURL" : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hocus-pocus-1538085764.jpg",
    "movieUrl" : "https://www.imdb.com/title/tt0107120/",
    },
    {
    "movieName" : "Dawn of the Dead (2004)",
    "imageURL" : "http://bloodygoodhorror.com/bgh/files/promos/DOD%20Big.jpg",
    "movieUrl" : "https://www.imdb.com/title/tt0363547/",
    },
    {
    "movieName" : "I Know What You Did Last Summer",
    "imageURL" : "http://digitalspyuk.cdnds.net/17/32/1600x800/landscape-1502465209-i-know-what-you-did-last-summer.jpg",
    "movieUrl" : "https://www.imdb.com/title/tt0119345/",
    },
    {
    "movieName" : "Interview with the Vampire",
    "imageURL" : "http://media3.s-nbcnews.com/i/streams/2014/March/140310/2D274905334475-ss-100112-Tom-Cruise-1994-interview.jpg",
    "movieUrl" : "https://www.imdb.com/title/tt0110148/",
    },
    {
    "movieName" : "Scream",
    "imageURL" : "https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/scream-header.png?itok=TGb3gk_m&resize=1100x1100",
    "movieUrl" : "https://www.imdb.com/title/tt0117571/",
    },
    {
    "movieName" : "The Shining",
    "imageURL" : "https://static.gamespot.com/uploads/original/1578/15789737/3345293-theshining.jpg",
    "movieUrl" : "https://www.imdb.com/title/tt0081505/",
    },
    {
    "movieName" : "Trick or Treat",
    "imageURL" : "https://www.legendary.com/wp-content/uploads/2015/10/News_TRTDOTD_desktop_1600x900.jpg",
    "movieUrl" : "https://www.imdb.com/title/tt0862856/",
    },
    {
    "movieName" : "Halloween",
    "imageURL" : "http://morbidlybeautiful.com/wp-content/uploads/2017/02/MMH.jpg",
    "movieUrl" : "https://www.imdb.com/title/tt1502407/",
    },
    {
    "movieName" : "The Addams Family",
    "imageURL" : "https://www.syfy.com/sites/syfy/files/2017/12/addamsfamilyvalues-header.jpg",
    "movieUrl" : "https://www.imdb.com/title/tt0101272/",
    },
    {
    "movieName" : "Beetlejuice",
    "imageURL" : "http://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2012/07/beetlejuice_1280x720.jpg",
    "movieUrl" : "https://www.imdb.com/title/tt0094721/",
    },
];


  // Get random seconds
  var randMin = 3000;
  var randMax = 9000;
  var randNo = Math.floor(Math.random() * (+randMax - +randMin)) + +randMin;
  // Loop through the movies array and change text
  var counter = 0;
  var elem = document.getElementById("randomMovie");
  function change(){
      //elem.innerHTML = movieList[counter].movieName; 
      var addCard = "";
        var movieListName = movieList[counter].movieName;
        var movieImgUrl = movieList[counter].imageURL;
        var movieUrl = movieList[counter].movieUrl;
        addCard += '<div class="card-deck"><div class="card" style="width: 90%;">'
        addCard += '<img class="card-img-top" src="' + movieImgUrl + '" alt="name">'
        addCard += '<div class="card-img-overlay"><h4 class="card-title cardMovieTitle"><a href="' + movieUrl + '" target="_blank">' + movieListName + '</a></h4></div></div></div></div>'
        elem.innerHTML = addCard;

      counter++;
      if (counter >= movieList.length){
          counter = 0;
      }
  }
  // Randomly stop on a list item from the movies array
  function stopShuffle(){
      var numberOfMovies = movieList.length;
      var randMinMov = 1;
      var randMaxMov = numberOfMovies;
      var randNoMov = Math.floor(Math.random() * (+randMaxMov - +randMinMov)) + +randMinMov;
     // elem.innerHTML = movieList[randNoMov].movieName;

      var addCard = "";
        var movieListName = movieList[randNoMov].movieName;
        var movieImgUrl = movieList[randNoMov].imageURL;
        var movieUrl = movieList[randNoMov].movieUrl;
        addCard += '<div class="card-deck"><div class="card" style="width: 90%;">'
        addCard += '<img class="card-img-top" src="' + movieImgUrl + '" alt="name">'
        addCard += '<div class="card-img-overlay"><h4 class="card-title cardMovieTitle"><a href="' + movieUrl + '" target="_blank">' + movieListName + '</a></h4></div></div></div></div>'
        elem.innerHTML = addCard;
  }
  // Set an interval and timeout
  stopText = elem.innerHTML = "";
  var tmer = setInterval(() => change(), 500);
  setTimeout(() => { clearInterval(tmer); stopShuffle();},randNo);
  // Loading cirle
  var loadingCircle = document.getElementById("loadCircle");
  var pumpkinImage = document.getElementById("imagePumpkin");
  setTimeout(function(){
      loadingCircle.style.display = "none";
      pumpkinImage.style.display = "block";
  }, randNo);
  
   // Loop through the movies array and display to list
  var addCard = "";
  for (var i = 0; i < movieList.length; i++){
    var movieListName = movieList[i].movieName;
    var movieImgUrl = movieList[i].imageURL;
    var movieUrl = movieList[i].movieUrl;
    addCard += '<div class="card-deck"><div class="card" style="width: 90%;">'
    addCard += '<img class="card-img-top" src="' + movieImgUrl + '" alt="name">'
    addCard += '<div class="card-img-overlay"><h4 class="card-title cardMovieTitle"><a href="' + movieUrl + '" target="_blank">' + movieListName + '</a></h4></div></div></div></div>'
    movieCards.innerHTML = addCard;
  }
  