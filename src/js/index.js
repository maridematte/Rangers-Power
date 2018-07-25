var jsonFilme1 = undefined;
   var jsonFilme2 = undefined;
   var jsonFilme3 = undefined;
   var jsonFilme4 = undefined;
   var jsonFilme5 = undefined;
   var jsonFilme6 = undefined;

   function readJSON(){
   	  jsonFilme1 = '{"adult":false,"backdrop_path":"/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg","belongs_to_collection":null,"budget":63000000,"genres":[{"id":18,"name":"Drama"}],"homepage":"http://www.foxmovies.com/movies/fight-club","id":550,"imdb_id":"tt0137523","original_language":"en","original_title":"Fight Club","overview":"A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground fightclubs forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.","popularity":31.684,"poster_path":"/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg"}';
   	  objetoFilme1 = JSON.parse(jsonFilme1);
   }
  
   // var json = '{"adult":false,"backdrop_path":"/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg","belongs_to_collection":null,"budget":63000000,"genres":[{"id":18,"name":"Drama"}],"homepage":"http://www.foxmovies.com/movies/fight-club","id":550,"imdb_id":"tt0137523","original_language":"en","original_title":"Fight Club","overview":"A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground fightclubs forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.","popularity":31.684,"poster_path":"/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg"}';
    var object = JSON.parse(json);
    console.log(object);

		// function changeFunc() {
		// var selectBox = document.getElementById("testeSelect");
		// var selectedValue = selectBox.options[selectBox.selectedIndex].value;
		// document.getElementById('testeP').innerHTML = selectedValue;
		// }


	var titulo = document.getElementById('filmeTitulo');
	titulo.innerHTML = object.original_title;
