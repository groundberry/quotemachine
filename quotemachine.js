var quotes = [
  {
    quote: "Even the smallest person can change the course of the future.",
    source: "Galadriel"
  },
  {
    quote: "There is only one Lord of the Ring, only one who can bend it to his will. And he does not share power.",
    source: "Gandalf"
  },
  {
    quote: "We swears, to serve the master of the Precious. We will swear on… on the Precious!",
    source: "Gollum"
  },
  {
    quote: "All we have to decide is what to do with the time that is given to us.",
    source: "Gandalf"
  },
  {
    quote: "A day may come when the courage of men fails… but it is not this day.",
    source: "Aragorn"
  },
  {
    quote: "Not all those who wander are lost.",
    source: "J.R.R. Tolkien"
  },
  {
    quote: "I wish the ring had never come to me. I wish none of this had happened.",
    source: "Frodo"
  },
  {
    quote: "A wizard is never late, Frodo Baggins. Nor is he early. He arrives precisely when he means to.",
    source: "Gandalf"
  },
  {
    quote: "A Balrog. A demon of the ancient world. This foe is beyond any of you. Run!",
    source: "Gandalf"
  },
  {
    quote: "I know what I must do. It's just... I'm afraid to do it.",
    source: "Frodo"
  },
  {
    quote: "Three days' ride, as the Nazgul flies, and you'd better hope we don't have one of those on our tail.",
    source: "Gandalf"
  },
  {
    quote: "Look to my coming on the first light of the fifth day, at dawn look to the east.",
    source: "Gandalf"
  }
];

var $quoteBody = $("#quote-body");
var $quoteSource = $("#quote-source");
var $quoteRefresh = $("#quote-refresh");
var $quoteTweet = $("#quote-tweet");


var onClick = function() {
  var index = Math.floor(Math.random() * quotes.length );
  var randomQuote = quotes[index];

  $quoteBody.text(randomQuote.quote);
  $quoteSource.text(randomQuote.source);

  var link = 'https://twitter.com/intent/tweet?text=' +
    encodeURIComponent("\"" + randomQuote.quote + "\" (" + randomQuote.source + ")") +
    '&via=blanca_mendi';
  $quoteTweet.attr('href', link);
};

$quoteRefresh.click(onClick);
onClick();
