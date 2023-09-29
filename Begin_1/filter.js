const arr = [1,2,3,4,5,6,7,8,9]

const filteredArray = arr.filter( (val) => {
    return val > 5} )

//console.log(filteredArray);

const books = [
    {
      book_name: "The Great Gatsby",
      genre: "Fiction",
      year: 1925
    },
    {
      book_name: "To Kill a Mockingbird",
      genre: "Fiction",
      year: 1960
    },
    {
      book_name: "1984",
      genre: "Dystopian",
      year: 1949
    },
    {
      book_name: "Pride and Prejudice",
      genre: "Classic",
      year: 1813
    },
    {
      book_name: "The Hobbit",
      genre: "Fantasy",
      year: 1937
    },
    {
      book_name: "Harry Potter and the Sorcerer's Stone",
      genre: "Fantasy",
      year: 1997
    },
    {
      book_name: "The Catcher in the Rye",
      genre: "Fiction",
      year: 1951
    },
    {
      book_name: "The Lord of the Rings",
      genre: "Fantasy",
      year: 1954
    },
    {
      book_name: "War and Peace",
      genre: "Historical Fiction",
      year: 1869
    },
    {
      book_name: "Brave New World",
      genre: "Dystopian",
      year: 1932
    }
  ];
  
const newBooks = books.filter( (it) => it.genre == 'Fiction' && it.year >1950 )

console.log(newBooks);


const a = [1,2,4,5,6,7]
const newarr = a.map( (val) => val +10)
console.log( newarr);