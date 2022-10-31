/*try JQuery*/
//$(document).ready...
$(function(){
$('a').each(function(){
    $(this).css('text-decoration','line-through');
    $(this).attr('href','https://www.usca.edu');    
});
$('img').each(function(){
    $(this).prepend(attr('src','./img/'));
})


});