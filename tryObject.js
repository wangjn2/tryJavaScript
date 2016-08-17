function Movie(title, director, cast) {
    this.title = title;
    this.director = director;
    this.cast = cast;
}

Movie.prototype.play = function() {
    console.log("Title: " + this.title);
    console.log("Director: " + this.director);
    console.log("Cast: " + this.cast);
    console.log("Hi, I'm playing!");
}

var m1 = new Movie("Titanic", "James Cameron", new Array("Leonardo DiCaprio", "etc"));
m1.play();

