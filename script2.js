

async function getdata(name){

   console.log("Get called" + name)
   const res = await fetch("https://www.omdbapi.com/?apikey=30e89ec0&t="+ name)
   const data = await res.json()
   var actors=data['Actors']
   var movie=data['Title']
   var release=data['Released']
   var plot=data['Plot']
   var director=data['Director']
   var poster=data['Poster']
   var genre=data['Genre']
   var language=data['Language']
   var rating=data['imdbRating'] 
   $('.movie').html("Movie: "+movie);
   $('.director').html("Director: "+director);
   $('.actors').html("Actors: "+actors);
   $('.release').html("Released on: "+release);
   $('.plot').html("Plot: "+plot);
   $('.poster').attr('src',poster)
   $('.genre').html("Genre: "+genre);
   $('.language').html("Language: "+language);
   $('.rating').html("IMDB Rating: "+rating);
}


$('.search-btn').click(() => {

   const name = $('.search-bar').val();
   getdata(name)
})

$('document').ready(getdata("shershaah"))






const arr1=['avengers','batman','avengers','avengers','avengers']
for(i=0 ; i < arr1.length ; i++){
  const movie=new Movie("name", "director", "actors", "release", "plot", "poster", "genre", "language", "rating")
   console.log(movie.getMoviename())
}

/*

  <div class='container'>
        <button class="btn">Add</button>
    </div>
    
    
    const arr = ['a', 'b', 'c', 'd', 'e']
for(i=0 ; i < arr.length ; i++){

   const layout = `

   <h1>${arr[i]}</h1>`

   $('.container').append(layout)
}
*/
