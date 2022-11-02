//for hotel registration
//all objects must use {}
var test = {
    hotelname : "Marriot",
    room : 300,
    booked : 120,
    display : function (){
        return this.hotelname;
    },
    displayRooms : function (){
        return this.room;
    },
    displayBooked : function (){
        return this.booked
    }
};
$(function(){
    $('#submit').click(reservation)
});
function reservation(){
    var guest = {
        name : $('#name').val(),
        numberOfGuests : $('#num').val(),
        checkinTime : $('#checkin').val(),
        checkOutTime : $('#checkout').val(),
        room : $('#room').val()
    }
    console.log(guest);
}
$('#submit').click(reservation);