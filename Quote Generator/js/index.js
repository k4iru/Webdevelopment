$(document).ready(function() {
  function getNewQuote(){
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      
      success: function(apiResponse) {
        quote = apiResponse.quoteText.trim();
        author = apiResponse.quoteAuthor;
        link = apiResponse.quoteLink;
        if (author == ''){
          author = "Anonymous";
        }
        $('#quote-text').html(quote);
        $('#author').html(author);
        $('#tweet').attr('href', 'https://twitter.com/home?status="'+encodeURIComponent(quote)+'" - '+encodeURIComponent(author));
        $('#facebook').attr('href', 'https://www.facebook.com/sharer.php?u='+encodeURIComponent(link))
      }
    })
  }
  getNewQuote();
  
  $('#new-quote').click(function() {
    getNewQuote();
  })
});