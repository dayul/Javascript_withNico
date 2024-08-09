const quotes = [
    {
        quote: "I am able to do all things through him who gives me strength.",
        author: "Philippians 4:13"
    },
    {
        quote: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
        author: "John 3:16"
    },
    {
        quote: "We make our own plans, but the LORD decides where we will go.",
        author: "Proverbs 16:9"
    },
    {
        quote: "Yet to all who did received him, to those who believed his name, he gave the right to become children of God.",
        author: "John 1:12"
    },
    {
        quote: "Do not afraid, for I am with you.",
        author: "Isaiah 41:10"
    },
    {
        quote: "Love your neighbor as yourself.",
        author: "Mark 12:31"
    },
    {
        quote: "The Lord is my shepherd, I lack nothing.",
        author: "Psalm 23:1"   
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math module
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;