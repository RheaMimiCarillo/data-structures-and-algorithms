

function sortYear(movies)
{
  /* strategy:
   * use the built-in sort function to with A and B and
      return b - a
      - this will work, because we're just dealing with integers
   */
  return [];
}



function sortTitle(movies)
{
  /*
    strategy:
    look at array and loop through it
    whilst looping, look at the movie's title and see if it has `the ` (with a space) at the very beginning
    if it does, strip it out and make a temporary string

    pass title a and title be into the function that removes the 'the ', if applicable, then pass the into the sort to compare the strings to each other
  */
  return [];
}

// accepts an array of `movies`
// and a movie genre string
function inGenre(movies, genre)
{
  /*
    strategy:
  use `filter` (which returns an array), and filter out all of the movies that match the target genre
  */
  return [];
}

module.exports = {
  sortYear,
  sortTitle,
  inGenre,
};
