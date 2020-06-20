
$("#currentDay").text(moment().format(" dddd, MMMM Do YYYY"));
var currentTime = moment().format("ha");
console.log(currentTime);

var nine = $("textarea#9am").attr("data-text");
console.log(nine);
var ten = $("textarea#10am").attr("data-text");
console.log(ten);
var eleven = $("textarea#11am").attr("data-text");
var noon = $("textarea#12pm").attr("data-text");
var one = $("textarea#1pm").attr("data-text");
var two = $("textarea#2pm").attr("data-text");
var three = $("textarea#3pm").attr("data-text");
var four = $("textarea#4pm").attr("data-text");
var five = $("textarea#5pm").attr("data-text");
var six = $("textarea#6pm").attr("data-text");


var textArea = [nine, ten, eleven, noon, one, two, three, four, five, six];

if (currentTime === nine) {
    console.log("present")
} if (currentTime > nine) {
    console.log("future")
} else {
    console.log("past");
    $("#9am").addClass("past");
}
if (currentTime === ten) {
    console.log("present")
} if (currentTime > ten) {
    console.log("future")
} else {
    console.log("past");
    $("#10am").addClass("past");
}

// I also tried to do and if else statement for every situation but was no sucuessful. 


console.log(textArea);

var blockHour = []

var time = $(".time-block.col-2").val();
console.log(time);



// $(".saveBtn1").on("click", function () {
//     alert("this button has been pushed");
//     var input = $("textarea").val();
//     console.log(input);
//     localStorage.setItem("data", input);
//     console.log($(this).prev())
// });

$(".saveBtn").on("click", function () {
    alert("this button has been pushed");
    var input = $("textarea").val();
    console.log(input);
    localStorage.setItem($("saveBtn").prev(), input);
    console.log($(this).prev())

});

// // I tried to create an onclick for every button but
// it didn't work . i also tried to use the .prev() but 
// was not succesful doing that either 

// $(".saveBtn3").on("click", function () {
//     alert("this button has been pushed");
//     var input = $("textarea").val();
//     console.log(input);
//     localStorage.setItem("data", input);
// });
// $(".saveBtn4").on("click", function () {
//     alert("this button has been pushed");
//     var input = $("textarea").val();
//     console.log(input);
//     localStorage.setItem("data", input);
// });
// $(".saveBtn5").on("click", function () {
//     alert("this button has been pushed");
//     var input = $("textarea").val();
//     console.log(input);
//     localStorage.setItem("data", input);
// });
// $(".saveBtn6").on("click", function () {
//     alert("this button has been pushed");
//     var input = $("textarea").val();
//     console.log(input);
//     localStorage.setItem("data", input);
// });
// $(".saveBtn7").on("click", function () {
//     alert("this button has been pushed");
//     var input = $("textarea").val();
//     console.log(input);
//     localStorage.setItem("data", input);
// });
// $(".saveBtn8").on("click", function () {
//     alert("this button has been pushed");
//     var input = $("textarea").val();
//     console.log(input);
//     localStorage.setItem("data", input);
// });
// $(".saveBtn9").on("click", function () {
//     alert("this button has been pushed");
//     var input = $("textarea").val();
//     console.log(input);
//     localStorage.setItem("data", input);
// });
// $(".saveBtn10").on("click", function () {
//     alert("this button has been pushed");
//     var input = $("textarea").val();
//     console.log(input);
//     localStorage.setItem("data", input);
// });












// if($(".time-block").attr("id") === currentTime){
//     console.log(currentTime);
//    $(".present").attr(textarea);
// }




// // finish adding id to text area 
// // set up click event on buttons 
// // get id from text area and get value usiing the .val

// // inside this button console.log($(this).prev())

// // .val to get text and .attr to get id 


// // local storage to save using Id 
// // first key and then value which is whatever we pulled out of text area 


// // create function pulling these values of local storage and pulling on page


