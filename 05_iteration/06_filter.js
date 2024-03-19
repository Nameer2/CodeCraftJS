//---------------- using filter

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let number = num.filter((item) => item > 4)//if we use scope we have to write return keyword
console.log(number);
//filter is used instead of for each because for each dont return value easily

// -------------------- using foreach

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newnums = []
mynum.forEach((num) => {
    if (num > 4) {
        newnums.push(num)
    }
})
console.log(newnums);


// ----------------- example of filter --------------------

const arrayOfBooks = [
    { title: 'Rich Dad Poor Dad', genre: 'Finance', edition: 2006 },
    { title: 'Mughal-e-Azam', genre: 'History', edition: 2024 },
    { title: 'How to learn ', genre: 'Education', edition: 2016 }]
let book = arrayOfBooks.filter((bk) => bk.title === 'Mughal-e-Azam')
book = arrayOfBooks.filter((bk) => bk.edition === 2024 && bk.title === 'Mughal-e-Azam')
console.log(book);