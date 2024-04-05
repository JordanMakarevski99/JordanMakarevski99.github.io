$(document).ready(function () {
  var movies = [
    {
      title: "The Dark Knight",
      year: 2008,
      description:
        "A crime thriller directed by Christopher Nolan, featuring Batman's battle against the Joker.",
      genre: "Action",
    },
    {
      title: "Inception",
      year: 2010,
      description:
        "A science fiction action film directed by Christopher Nolan, exploring the concept of dream infiltration.",
      genre: "Action",
    },
    {
      title: "The Hangover",
      year: 2009,
      description:
        "A comedy film directed by Todd Phillips, following a group of friends' misadventures during a bachelor party.",
      genre: "Comedy",
    },
    {
      title: "Passages",
      year: 2023,
      description:
        "Elevated by a remarkable Franz Rogowski performance, Passages adds another smart, deeply humanistic film to director/co-writer Ira Sachs' estimable filmography.",
      genre: "Romance",
    },
    {
      title: "Past Lives",
      year: 2023,
      description:
        "A remarkable debut for writer-director Celine Song, Past Lives uses the bonds between its sensitively sketched central characters to support trenchant observations on the human condition.",
      genre: "Romance",
    },
    {
      title: "Superbad",
      year: 2007,
      description:
        "A coming-of-age teen comedy film directed by Greg Mottola, following two high school friends' wild night out.",
      genre: "Comedy",
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      description:
        "A drama film directed by Frank Darabont, following the story of a banker who is wrongly convicted of murder and his experiences in Shawshank State Penitentiary.",
      genre: "Drama",
    },
    {
      title: "Forrest Gump",
      year: 1994,
      description:
        "A comedy-drama film directed by Robert Zemeckis, depicting the life of a simple-minded but kind-hearted man who witnesses and influences several defining historical events in the 20th century United States.",
      genre: "Drama",
    },
    {
      title: "Avatar",
      year: 2009,
      description:
        "A science fiction film directed by James Cameron, set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system.",
      genre: "Action",
    },
    {
      title: "The Matrix",
      year: 1999,
      description:
        "A science fiction action film directed by the Wachowskis, depicting a dystopian future in which humanity is unknowingly trapped inside a simulated reality created by intelligent machines.",
      genre: "Action",
    },
    {
      title: "Pulp Fiction",
      year: 1994,
      description:
        "A crime film directed by Quentin Tarantino, intertwining multiple storylines involving crime, violence, and dark humor.",
      genre: "Drama",
    },
    {
      title: "Inglourious Basterds",
      year: 2009,
      description:
        "A war film directed by Quentin Tarantino, set during World War II, in which a group of Jewish-American soldiers known as 'The Basterds' are chosen to spread fear throughout the Third Reich by scalping and brutally killing Nazis.",
      genre: "Action",
    },
    {
      title: "The Godfather",
      year: 1972,
      description:
        "A crime film directed by Francis Ford Coppola, following the story of the powerful Italian-American crime family of Don Vito Corleone.",
      genre: "Drama",
    },
    {
      title: "Goodfellas",
      year: 1990,
      description:
        "A crime film directed by Martin Scorsese, based on the true story of Henry Hill, a mobster associated with the Lucchese crime family.",
      genre: "Drama",
    },
    {
      title: "Die Hard",
      year: 1988,
      description:
        "An action film directed by John McTiernan, featuring Bruce Willis as New York City Police Department officer John McClane, who battles a group of terrorists led by Hans Gruber.",
      genre: "Action",
    },
    {
      title: "Jaws",
      year: 1975,
      description:
        "A thriller film directed by Steven Spielberg, depicting a giant man-eating great white shark that attacks beachgoers on Amity Island.",
      genre: "Horror",
    },
    {
      title: "The Shining",
      year: 1980,
      description:
        "A psychological horror film directed by Stanley Kubrick, based on Stephen King's novel, featuring Jack Nicholson as a writer who becomes caretaker of an isolated hotel, and his descent into madness.",
      genre: "Horror",
    },
    {
      title: "Jurassic Park",
      year: 1993,
      description:
        "A science fiction adventure film directed by Steven Spielberg, based on Michael Crichton's novel, featuring genetically cloned dinosaurs causing havoc at a theme park.",
      genre: "Adventure",
    },
    {
      title: "Indiana Jones and the Raiders of the Lost Ark",
      year: 1981,
      description:
        "An action-adventure film directed by Steven Spielberg, featuring archaeologist Indiana Jones as he races against Nazis to find the Ark of the Covenant.",
      genre: "Adventure",
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      description:
        "A fantasy adventure film directed by Peter Jackson, based on J.R.R. Tolkien's novel, following a young hobbit named Frodo Baggins who embarks on a quest to destroy the One Ring.",
      genre: "Adventure",
    },
    {
      title: "Toy Story",
      year: 1995,
      description:
        "An animated comedy film directed by John Lasseter, featuring the toys of a boy named Andy who come to life when humans aren't present.",
      genre: "Animation",
    },
    {
      title: "Finding Nemo",
      year: 2003,
      description:
        "An animated adventure film directed by Andrew Stanton, following the journey of a clownfish named Marlin as he searches for his abducted son Nemo.",
      genre: "Animation",
    },
    {
      title: "The Hangover Part II",
      year: 2011,
      description:
        "A comedy film directed by Todd Phillips, following the misadventures of the Wolfpack as they travel to Thailand for Stu's wedding.",
      genre: "Comedy",
    },
    {
      title: "Dumb and Dumber",
      year: 1994,
      description:
        "A comedy film directed by Peter Farrelly, following the cross-country adventures of two dumb but well-meaning friends.",
      genre: "Comedy",
    },
    {
      title: "Anchorman: The Legend of Ron Burgundy",
      year: 2004,
      description:
        "A comedy film directed by Adam McKay, following the misadventures of a clueless yet charismatic news anchor and his team.",
      genre: "Comedy",
    },
    {
      title: "The Grand Budapest Hotel",
      year: 2014,
      description:
        "A comedy-drama film directed by Wes Anderson, revolving around the adventures of a legendary concierge at a famous European hotel.",
      genre: "Comedy",
    },
    {
      title: "Monty Python and the Holy Grail",
      year: 1975,
      description:
        "A comedy film directed by Terry Gilliam and Terry Jones, following King Arthur and his knights' absurd quest for the Holy Grail.",
      genre: "Comedy",
    },
    {
      title: "Schindler's List",
      year: 1993,
      description:
        "A historical drama film directed by Steven Spielberg, depicting the story of Oskar Schindler, a German businessman who saved the lives of more than a thousand Polish-Jewish refugees during the Holocaust.",
      genre: "Drama",
    },
    {
      title: "The Pursuit of Happyness",
      year: 2006,
      description:
        "A biographical drama film directed by Gabriele Muccino, based on the true story of Chris Gardner, a homeless salesman who struggles to create a better life for himself and his son.",
      genre: "Drama",
    },
    {
      title: "A Beautiful Mind",
      year: 2001,
      description:
        "A biographical drama film directed by Ron Howard, based on the life of John Nash, a Nobel Laureate in Economics, and his struggles with schizophrenia.",
      genre: "Drama",
    },
    {
      title: "The Social Network",
      year: 2010,
      description:
        "A biographical drama film directed by David Fincher, depicting the founding of Facebook and the legal battles that followed.",
      genre: "Drama",
    },
    {
      title: "The Conjuring",
      year: 2013,
      description:
        "A supernatural horror film directed by James Wan, inspired by the real-life experiences of paranormal investigators Ed and Lorraine Warren, focusing on a haunted farmhouse.",
      genre: "Horror",
    },
    {
      title: "Hereditary",
      year: 2018,
      description:
        "A psychological horror film directed by Ari Aster, following a family haunted after the death of their secretive grandmother.",
      genre: "Horror",
    },
    {
      title: "Get Out",
      year: 2017,
      description:
        "A psychological horror thriller film written and directed by Jordan Peele, following a black man who uncovers a disturbing secret when he visits his white girlfriend's family estate.",
      genre: "Horror",
    },
    {
      title: "How To Blow Up a Pipeline",
      year: 2023,
      description:
        "An explosive adaptation of Andreas Malm's treatise, How to Blow Up a Pipeline delivers a high-stakes eco-thriller ignited by riveting and complex antiheroes.",
      genre: "Thriller",
    },
    {
      title: "The Killer",
      year: 2023,
      description:
        "The Killer finds director David Fincher on firm footing with a stylish and engaging thriller that proves a perfect match for leading man Michael Fassbender.",
      genre: "Thriller",
    },
    {
      title: "Parasite",
      year: 2019,
      description:
        "A dark comedy thriller film directed by Bong Joon-ho, following the members of a poor family who scheme to become employed by a wealthy family.",
      genre: "Thriller",
    },
    {
      title: "Zodiac",
      year: 2007,
      description:
        "A mystery thriller film directed by David Fincher, based on the true story of the Zodiac Killer who terrorized the San Francisco Bay Area in the late 1960s and early 1970s.",
      genre: "Thriller",
    },
    {
      title: "Prisoners",
      year: 2013,
      description:
        "A psychological thriller film directed by Denis Villeneuve, following a father who takes matters into his own hands after his daughter and her friend go missing.",
      genre: "Thriller",
    },
    {
      title: "Shutter Island",
      year: 2010,
      description:
        "A psychological thriller film directed by Martin Scorsese, following a U.S. Marshal investigating the disappearance of a murderess who escaped from a hospital for the criminally insane.",
      genre: "Thriller",
    },
    {
      title: "Blade Runner",
      year: 1982,
      description:
        "A neo-noir science fiction film directed by Ridley Scott, based on the 1968 novel 'Do Androids Dream of Electric Sheep?' by Philip K. Dick.",
      genre: "Science Fiction",
    },
    {
      title: "The Matrix",
      year: 1999,
      description:
        "A science fiction action film directed by the Wachowskis, depicting a dystopian future in which humanity is unknowingly trapped inside a simulated reality created by intelligent machines.",
      genre: "Science Fiction",
    },
    {
      title: "Inception",
      year: 2010,
      description:
        "A science fiction action film directed by Christopher Nolan, exploring the concept of dream infiltration.",
      genre: "Science Fiction",
    },
    {
      title: "Interstellar",
      year: 2014,
      description:
        "A science fiction film directed by Christopher Nolan, depicting a team of astronauts who travel through a wormhole in search of a new habitable planet.",
      genre: "Science Fiction",
    },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
      description:
        "A space opera film written and directed by George Lucas, set in a galaxy far, far away and following the Rebel Alliance's fight against the evil Galactic Empire.",
      genre: "Science Fiction",
    },
    {
      title: "2001: A Space Odyssey",
      year: 1968,
      description:
        "A science fiction film directed by Stanley Kubrick, based on Arthur C. Clarke's short story 'The Sentinel'. It deals with themes of existentialism, human evolution, technology, artificial intelligence, and extraterrestrial life.",
      genre: "Science Fiction",
    },
  ];
  displayMovies("All");
  // I am saving the movies to the local storage, so that when a user adds a new movie and refreshes the page, the new movie is still available.
  function saveMoviesToStorage() {
    localStorage.setItem("movies", JSON.stringify(movies));
  }

  if (!localStorage.getItem("movies")) {
    saveMoviesToStorage();
  }
  movies = localStorage.getItem("movies")
    ? JSON.parse(localStorage.getItem("movies"))
    : [];

  // I used dummyjson api for the quotes because the one you sent me didn't work. They have some server issues.
  function addQuote() {
    $.ajax({
      url: "https://dummyjson.com/quotes/random",
      success: function (data) {
        $("#quote").text(data.quote);
        $("#author").text(data.author);
      },
    });
  }
  // I am using addQuote() here to display a quote initially when loading the page.
  addQuote();

  // I created a button which allows the user to generate a new quote if they choose to do so.
  $("#newQuoteBtn").on("click", function () {
    addQuote();
  });

  function displayMovies(genre) {
    $("#moviesContainer").empty();
    if (genre === "All") {
      $.each(movies, function (index, movie) {
        displayMovie(movie);
      });
    } else {
      $.each(movies, function (index, movie) {
        if (movie.genre === genre) {
          displayMovie(movie);
        }
      });
    }
  }
  // This function is to display the details of the selected movie.
  function displayMovieDetails(movie) {
    $("#movieModalTitle").text(movie.title);
    $("#movieModalBody").html(
      "<p><strong>Year:</strong> " +
        movie.year +
        "</p>" +
        "<p><strong>Description:</strong> " +
        movie.description +
        "</p>" +
        "<p><strong>Genre:</strong> " +
        movie.genre +
        "</p>"
    );
    $("#movieModal").modal("show");
  }
  // This function is to display a movie, creating a card for each movie in the array.
  function displayMovie(movie) {
    var poster =
      '<div class="col-lg-4  align-items-stretch mt-5" role="button">' +
      '<div class="card h-100" >' +
      '<div class="card-body bg-light">' +
      '<h5 class="card-title text-center">' +
      movie.title +
      "</h5>" +
      '<p class="card-text "><strong>Release Date:</strong> ' +
      movie.year +
      "</p>" +
      '<p class="card-text"><strong>Description:</strong> ' +
      movie.description +
      "</p>" +
      '<p class="card-text"><strong>Genre:</strong> ' +
      movie.genre +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>";
    var $poster = $(poster);
    $poster.data("movie", movie);
    $poster.on("click", function () {
      displayMovieDetails($(this).data("movie"));
    });
    $("#moviesContainer").append($poster);
  }
  displayMovies("All");

  // Here I am filtering the movies based on the genre selected.
  $(".filter").click(function () {
    var genre = $(this).data("genre");
    displayMovies(genre);
  });

  // By submitting the movie form, I add the newly added movie to the movies array.
  $("#addMovieForm").submit(function (event) {
    event.preventDefault();

    var title = $("#title").val();
    var year = $("#releaseDate").val().split("-")[0];
    var description = $("#description").val();
    var genre = $("#genre").val();

    if (!validateInputs(title, description, genre)) {
      return;
    }

    var newMovie = {
      title: title,
      year: year,
      description: description,
      genre: genre,
    };

    movies.push(newMovie);
    saveMoviesToStorage();
    displayMovies("All");

    $("#title").val("");
    $("#releaseDate").val("");
    $("#description").val("");
    $("#genre").val("");

    $("#addMovieModal").modal("hide");
  });

  function validateInputs(title, description, genre) {
    var isValid = true;

    if (title.trim() === "" || title.length > 250) {
      $("#titleError").removeClass("d-none");
      isValid = false;
    } else {
      $("#titleError").addClass("d-none");
    }

    if (description.trim() === "" || description.length > 500) {
      $("#descriptionError").removeClass("d-none");
      isValid = false;
    } else {
      $("#descriptionError").addClass("d-none");
    }

    if (genre === null) {
      $("#genreError").removeClass("d-none");
      isValid = false;
    } else {
      $("#genreError").addClass("d-none");
    }

    return isValid;
  }
});
