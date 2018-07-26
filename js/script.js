var movieList;
var databasePosterPath = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"
var genreID = 14;
var pageNumber = 1;
//posterpath URLDAIMGAQUI.jpg

$.ajax({url: "https://api.themoviedb.org/3/discover/movie?with_genres=" + genreID + "&page=" + pageNumber + "&language=pt-BR&api_key=1c1d6b1d6b9f5e82d00ccef480214766",
async: false,
success: function(result){
   movieList = []
   for(let i = 0; i < result.results.length; i++) {
       let movieRaw = result.results[i]
       let movie = {
       		id: movieRaw.id,
	        title: movieRaw.title,
	        genres: movieRaw.genre_ids,
	        overview: movieRaw.overview,
	        poster: databasePosterPath + movieRaw.poster_path
       }
       movie.genres = getGenreName(movie.genres);
       movieList.push(movie)
       debugger;
     }
   }
 }
);

function getGenreName(genreIDList) {
 var genreNameList = []
 for(let i = 0; i < genreIDList.length; i++) {
   if (genreIDList[i] == 28) {
     var result = "Ação"
   } else if (genreIDList[i] == 16){
     var result = "Animação"
   } else if (genreIDList[i] == 12){
     var result = "Aventura"
   } else if (genreIDList[i] == 35){
     var result = "Comédia"
   } else if (genreIDList[i] == 99){
     var result = "Documentário"
   } else if (genreIDList[i] == 18){
     var result = "Drama"
   } else if (genreIDList[i] == 10751){
     var result = "Família"
   } else if (genreIDList[i] == 14){
     var result = "Fantasia"
   } else if (genreIDList[i] == 878){
     var result = "Ficção Científica"
   } else if (genreIDList[i] == 10752){
     var result = "Guerra"
   } else if (genreIDList[i] == 36){
     var result = "Histórico"
   } else if (genreIDList[i] == 80){
     var result = "Investigação"
   } else if (genreIDList[i] == 9648){
     var result = "Mistério"
   } else if (genreIDList[i] == 10402){
     var result = "Música"
   } else if (genreIDList[i] == 37){
     var result = "Ocidental"
   } else if (genreIDList[i] == 10749){
     var result = "Romance"
   } else if (genreIDList[i] == 53){
     var result = "Suspense"
   } else if (genreIDList[i] == 10770){
     var result = "Televisão"
   } else if (genreIDList[i] == 27){
     var result = "Terror"
   } else {
     var result = "Nenhum Gênero"
   }
   genreNameList.push(result)
 }
 return genreNameList
}

function populateView(object) {

	var $titulo = $("#title")
	var $sinopse = $("#sinopse")
	var $genre = $("#genre")
	var $imagem = $("#header")
	$titulo.innerHTML = object.titulo;
	$sinopse.innerHTML = object.sinopse;
	$genre.innerHTML = object.genre;
	$imagem.innerHTML = object.header;
}

// populateView();
