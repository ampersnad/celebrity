$(document).ready(function() {
  $("form#datingParameters").submit(function(event) {
    var age = $("select#age").val();
    var gender = $("select#gender").val();
    var color = $("select#color").val();
    var animal = $("select#animal").val();

    if (age === 'first' && gender === 'female') {
      //var quote = (100 - age) * 3;

      // if (gender === 'male' && age < 26) {
      //   quote += 50;
      // }
      var superhero = Spiderman
      $('#superheroName').text(superhero);
      $("#superheroDate").show();
    }

      //$("#rate").empty().append(quote);

    // } else {
    //   alert('Please enter your age.');
    // }



    event.preventDefault();
  });
});
