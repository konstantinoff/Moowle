const TITLE_AMOUNT = 1;
const WRITERS_AMOUNT = 1;
const AGE_LIMIT_AMOUNT = 1;
const DIRECTOR_AMOUNT = 1;
const COUNTRIES_AMOUNT = 1;
const ACTORS_AMOUNT = 3;
const GENRE_AMOUNT = 3;
const YEARS_RANGE = -50;
const postersArray = [`accused`, `blackmail`, `blue-blazes`, `fuga-da-new-york`, `moonrise`, `three-friends`];
const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`.split(`. `);
const getRandomArrayElements = (array, elementsAmount) => Array.from(array).sort(() => 0.5 - Math.random()).slice(0, elementsAmount);
const getRandomTimestamp = () => new Date(Date.now() + 1 + Math.floor(Math.random() * YEARS_RANGE) * 12 * 30 * 24 * 60 * 60 * 1000);
const getRandomMark = () => (Math.random() * 10).toFixed(1);
const getRandomFilmRange = () => Math.floor(Math.random() * 180) + 60;


const task = () => ({
  title: getRandomArrayElements([
    `Побег из Шоушенка`,
    `Зеленая миля`,
    `Форрест Гамп`,
    `Список Шиндлера`,
    `1+1`,
    `Леон`,
    `Начало`,
    `Король Лев`,
    `Бойцовский клуб`,
    `Иван Васильевич меняет профессию`,
    `Жизнь прекрасна`,
  ], TITLE_AMOUNT),
  writers: getRandomArrayElements([
    `Mable	Reyes`,
    `Mack	Summers`,
    `Gary	Obrien`,
    `Jackie	Pierce`,
    `Cecil	Maxwell`,
    `Stuart	Paul`,
    `Lula	Ross`,
    `Minnie	Sutton`,
    `Nicolas	Williams`,
    `Evelyn	Morgan`,
  ], WRITERS_AMOUNT),
  director: getRandomArrayElements([
    `Jo	Scott`,
    `Dianna	Terry`,
    `Lee	Lawrence`,
    `Erick	Hayes`,
    `Jordan	Wallace`,
    `Marjorie	Murphy`,
    `Ashley	Hodges`,
    `Andy	Simpson`,
    `Holly	Sparks`,
    `Ann	Fletcher`,
  ], DIRECTOR_AMOUNT),
  actors: getRandomArrayElements([
    `Irma	Mcgee`,
    `Darla	Gregory`,
    `Marion	Flowers`,
    `Darren	Phelps`,
    `James	Sharp`,
    `Virgil	Ball`,
    `Jamie	Ford`,
    `Ed	Watts`,
    `Doreen	Watkins`,
    `Lyle	Lucas`,
  ], ACTORS_AMOUNT),
  country: getRandomArrayElements([
    `USA`,
    `England`,
    `China`,
    `Russia`,
    `Australia`,
  ], COUNTRIES_AMOUNT),
  filmDescription: getRandomArrayElements(description, 3),
  filmRange: getRandomFilmRange(),
  filmMark: getRandomMark(),
  filmDate: getRandomTimestamp(),
  genre: getRandomArrayElements(new Set([
    `Action`,
    `Adventure`,
    `Comedies`,
    `Crime`,
    `Dramas`,
    `Epics`]), GENRE_AMOUNT),
  poster: `images/posters/${getRandomArrayElements(postersArray, 1)}.jpg`,
  ageLimit: getRandomArrayElements(new Set([
    3,
    12,
    16,
    18,
    21,
    62]), AGE_LIMIT_AMOUNT),
  userRating: 5,
  userComments: [[1553020868907, `privet`]],
});


export default task();
