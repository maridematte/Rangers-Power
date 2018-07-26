$(document).ready(function () {
  var movieList;
  var databasePosterPath = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"
  var genreID;
  var pageNumber = 1;
  $("#telaInicial").click(function () {
    $(this).attr("hidden", true)
    $.ajax({url: "https://api.themoviedb.org/3/discover/movie?api_key=1c1d6b1d6b9f5e82d00ccef480214766&language=pt-BR&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1",
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
                poster: movieRaw.poster_path ? databasePosterPath + movieRaw.poster_path : 'https://cdn.browshot.com/static/images/not-found.png'
           }
           movie.genres = getGenreName(movie.genres);
           movieList.push(movie)
         }
        var table = buildTable(movieList);
        $("#dinamicTable").html(table)
       }
     }
    );
  });
  $("#requestGenre").click(function (event) {
    event.preventDefault();
    $("#telaInicial").attr("hidden", true)
    genreID = $("#sel1").val();
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
                poster: movieRaw.poster_path ? databasePosterPath + movieRaw.poster_path : 'https://cdn.browshot.com/static/images/not-found.png'
           }
           movie.genres = getGenreName(movie.genres);
           movieList.push(movie)
         }
        var table = buildTable(movieList);
        $("#dinamicTable").html(table)
       }
     }
    );
  })
  $("#dinamicTable").on("click", "tr[data-id]", function () {
    var id = $(this).attr("data-id");
    var movieArray = movieList.filter(function (item) {
      return id == item.id
    })
    var movie = movieArray[0]
    $("#myModalLabel").text(movie.title);
    $("#imgModal").attr("src", movie.poster);
    $("#genero").text(movie.genres);
    $("#sinopse").text(movie.overview);
  })
  //functions
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
  function buildTable(movieList) {
    table = $("<table class='table list'></table>");
    thead = document.createElement("thead");
    table.append(thead);
    a = Object.keys(movieList[0]);
  //cria o thead
    for (var i = 0; i < a.length; i++) {
        th = document.createElement("th");
        th.innerText = a[i];
        thead.appendChild(th);
    }
    //cria o tbody
    tbody = document.createElement("tbody")
        for (var i = 0; i < movieList.length; i++) {
            tr = document.createElement("tr");
          tr.setAttribute("data-id",movieList[i].id);
          tr.setAttribute("data-toggle","modal");
          tr.setAttribute( "data-target","#fullHeightModalLeft")
                for (var j = 0; j <= 1; j++) {
                    td = document.createElement("td");
              $("table tr td")
                    if (j == 0) {
                        td.innerText = movieList[i].title
                    } else if (j == 1) {
                var imgTag = $("<img onError='this.style.display = \"none\"' src='"+ movieList[i].poster +"'>")
                        td.appendChild(imgTag[0]);
                    }
                    tr.appendChild(td)
                }
          tbody.appendChild(tr);
        }
    table.html(tbody)
     return table
  }
})
