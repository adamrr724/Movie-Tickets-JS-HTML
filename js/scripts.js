function Movies(nameMovie, timeMovie, age) {
  this.nameMovie = nameMovie;
  this.timeMovie = timeMovie;
  this.age = age;
  this.displayMovie = [];
}

Movies.prototype.fullPrice = function() {

  var price = 10

  if ((this.age <= 18 || this.age > 64)&&(this.timeMovie === "12:00" || this.timeMovie === "3:00")){
    var cheapPrice = (price - 5);
    return "$" + cheapPrice;
   } else if (this.age <= 18 || this.age > 64) {
    var agePrice = (price - 2);
    return "$" + agePrice;
  } else if (this.timeMovie === "12:00" || this.timeMovie === "3:00") {
    var timePrice = (price - 3);
    return "$" + timePrice;
  } else {
    return "$" + price;
  }
}


$(document).ready(function() {


$("form#new-movie").submit(function(event) {
  event.preventDefault();
  var inputMovie = $("select#movie_choices").val();
  var inputTime = $("select#time_movie").val();
  var inputAge = parseInt($("input#age").val());
  var newMovie = new Movies(inputMovie, inputTime, inputAge)
  // newMovie.displayMovie.push(newMovie)

$("ul#price").append("<li><span class='price'>" + newMovie.fullPrice() + "</span></li>");

});


});
