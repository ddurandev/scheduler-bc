// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  var timeblock = document.querySelectorAll(".time-block")
  var JQtimeblock = $(".time-block")
  var currentHour = dayjs().format("HH")
  JQtimeblock.each(function () {
    if ($(this).attr("id").split("-")[1] < currentHour){
      $(this).addClass("past")
    }
    if ($(this).attr("id").split("-")[1] == currentHour){
      $(this).addClass("present")
    }
    if ($(this).attr("id").split("-")[1] > currentHour){
      $(this).addClass("future")
    }
  })
  for (let i = 0; i < timeblock.length; i++) {
    // console.log(JQtimeblock[i])
    // var hour = timeblock[i].id
    // console.log(hour.splice(0, 5))
    // timeblock[i].classList.add("future")
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  $(".saveBtn").on("click", function () {
    localStorage.setItem($(this).parent("div").attr("id"), $(this).siblings("textarea").val())
  });
  var textareas = document.querySelectorAll(".description")
  for (let i = 0; i < textareas.length; i++) {
    let hour = i + 9
    textareas[i].value = localStorage.getItem("hour-" + hour)

  };
  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("MM/DD/YYYY"))
});
