/* a) Write a constructor for the class Movie, which takes a String 
representing the title of the movie, a String representing the studio,
and a String representing the rating as its arguments, and sets the
respective class properties to these values.*/

class movie_a {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

}

let movie_1 = new movie_a("IronMan", "Marvel","UG");


/* b) The constructor for the class Movie will set the class property 
rating to "PG" as default when no rating is provided.*/

class movie_b {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating || "PG";
  }
  displayMovieInfo() {
    console.log(`Movie Info - B`);
    console.log(`----------`);
    console.log(`Title: ${this.title}`);
    console.log(`studio: ${this.studio}`);
    console.log(`rating: ${this.rating}`);
  }
}

let movie_2 = new movie_b("IronMan", "Marvel",);
movie_2.displayMovieInfo();
console.log(`
`);

/*c) Write a method getPG, which takes an array of base type Movie as 
its argument, and returns a new array of only those movies in the input
 array with a rating of "PG". You may assume the input array is full of
  Movie instances. The returned array need not be full.*/





















  
/* d) Write a piece of code that creates an instance of the class Movie
 with the title “Casino Royale”, the studio “Eon Productions”, and the 
 rating “PG­13” */

 class movie_d {
   constructor(title, studio, rating) {
     this.title = title;
     this.studio = studio;
     this.rating = rating;
   }
   displayMovieInfo() {
     console.log(`Movie Info - D`);
     console.log(`----------`);
     console.log(`Title: ${this.title}`);
     console.log(`studio: ${this.studio}`);
     console.log(`rating: ${this.rating}`);
   }
   getPG() {
     let movie = [];
     if (this.rating == "PG") {
       movie.push(this.title);
     }
     return movie;
   }
 }

 let movie_4 = new movie_d("Casino Royale", "Eon Productions", "PG­13");
movie_4.displayMovieInfo();


  
  
