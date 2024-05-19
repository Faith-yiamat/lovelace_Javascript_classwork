
const books =[
   {title:"Born A Crime", author:"Trevor Noah",Year: 2024},
   {title:"The Dark Sunday", author:"Rehema",Year: 2023}
]

function searchBookAuthor(author){
    for(let book of books){
        
    if (book.author === author){
        return `The book title is ${book.title} and it was published in ${book.Year}`
    }
    else{
        return `The book by ${author} does not exist.`
    }
  }
}
console.log(searchBookAuthor("Trevor Noah"));
  