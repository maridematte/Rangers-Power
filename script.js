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
  // criar as views pelo id aqui.
	var titulo = document.getElementById('title');
	var sinopse = document.getElementById('sinopse');
	var genre = document.getElementById('genre');
	var imagem = document.getElementById('header');
	titulo.innerHTML = object.titulo;
	sinopse.innerHTML = object.sinopse;
	genre.innerHTML = object.genre;
	imagem.innerHTML =object.header;
}

var objetoQueTemOqueQueremos = createFunctionalObject(filme1);
populateView(objetoQueTemOqueQueremos);

  //  var filmeA_JSON = '{"adult":false,"backdrop_path":"fightclub.jpg","belongs_to_collection":null,"budget":63000000,"genres":[{"id":18,"name":"Drama"}],"homepage":"http://www.foxmovies.com/movies/fight-club","id":550,"imdb_id":"tt0137523","original_language":"en","original_title":"Fight Club","overview":"A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground fightclubs forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.","popularity":31.684,"poster_path":"/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg"}';
  //  var filme1 = parseJSON(filmeA_JSON);
  //  var objetoFuncional = {
  //  	titulo: undefined,
  //  	sinopse: undefined,
  //  	genre: undefined,
  //  	header: undefined

  //  };


  //  function parseJSON(json) {
  //  		return JSON.parse(json);
  //  }

  //  function createFunctionalObject(filme){
   	
  //  		// filme é o objeto que tem todos os dados do JSON.
  //  		objetoFuncional.titulo = filme.original_title;
  //  		objetoFuncional.sinopse = filme.overview;
  //  		objetoFuncional.genre = filme.genres[0].name;
  //  		objetoFuncional.header = filme.backdrop_path;

  //  		console.log(objetoFuncional.genre);
  //  		// continuar fazendo para todos os dados que a tela precisa.

  //  		return objetoFuncional;
  //  	}
  	
 





  	
  //  // var json = '{"adult":false,"backdrop_path":"/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg","belongs_to_collection":null,"budget":63000000,"genres":[{"id":18,"name":"Drama"}],"homepage":"http://www.foxmovies.com/movies/fight-club","id":550,"imdb_id":"tt0137523","original_language":"en","original_title":"Fight Club","overview":"A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground fightclubs forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.","popularity":31.684,"poster_path":"/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg"}';
  //   // var object = JSON.parse(json);
  //   // console.log(object);

		// // function changeFunc() {
		// // var selectBox = document.getElementById("testeSelect");
		// // var selectedValue = selectBox.options[selectBox.selectedIndex].value;
		// // document.getElementById('testeP').innerHTML = selectedValue;
		// // // }




 
