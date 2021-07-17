

$(document).ready(function(){
    $.get("https://smileschool-api.hbtn.info/xml/quotes", (data)=>{
        console.log(data);
        jqueryXML = $(data);
        quotes = jqueryXML.find("quote");
        titles = jqueryXML.find("title");
    });
});
