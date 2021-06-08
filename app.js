// const number = document.querySelector('input[type = number]').value;
const getQuote = document.querySelector('.get-quote');
let singleQuote = document.querySelector('.single-quote');
let authorQuote = document.querySelector('.author-quote');

async function getData(){
    
    let random = Math.floor(Math.random() * 70) + 1;
    console.log(random);
    const bbad_url = `https://breakingbadapi.com/api/quotes`;

    const response = await fetch(bbad_url);
    const data = await response.json();
    console.log(data.length);
    const {quote, author} = data[random];


    console.log(quote);
    console.log(author);

    singleQuote.innerHTML = `<p>${quote}</p>`
    authorQuote.innerHTML = `<p>${author}</p>`
}

getData();

getQuote.addEventListener('click', getData)
