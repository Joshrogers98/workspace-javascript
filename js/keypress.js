//event
/*var messageE = document.getElementById('message');
messageE.addEventListener('keyup',showKey);
*/
$('#message').keyup(showKey);
document.addEventListener('mousemove',showPosition);

function showKey(e){
    console.log(e.key);
    document.getElementById('lastKey').textContent = 'The key is ... ' + e.key;
};
function showPosition(e){
    console.log(e.pageX +','+e.pageY);
    //document.getElementById('position').textContent = 'position: ' + e.pageX + ',' + e.pageY;
    $('#position').text('position: '+e.pageX+','+e.pageY);
};
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "brown";
ctx.fillRect(10, 10, 150, 100);
