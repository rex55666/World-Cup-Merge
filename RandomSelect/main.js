$(document).ready(function() {
    $("input").click(function()
    {
        var number0fListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*number0fListItem);
        
        $("H1").text($("#choices li").eq(randomChildNumber).text());
                     });
});