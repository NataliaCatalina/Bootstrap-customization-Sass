var cardType = parseInt(prompt('Enter the type of playing card you want(Club-1, Diamond-2, Heart-3, Spade-4):'));
console.log(cardType);

// if (cardType ==1) {
//   console.log("clubs");
// } else if (cardType ==2) {
//   console.log("diamonds");
// } else if (cardType ==3) {
//   console.log("Heart");
// } else if (cardType == 4) {
//   console.log("Spades");
// } else {
//   alert('Please enter numbers betwen 1 and 4');
// }

var i,j;
var cardArray = ['j','q','k','a']
switch (cardType) {
    case 1: {
      console.log("Clubs");
    $('#playCardHeading').text('Clubs');
    for (i = 2; i <= 10; i++) {
      $('#result').append('<img class="col-3 p-4 img-thumbnail" src="images/' + i + 'c.jpg" alt="Clubs"/>')
    }
    for (j = 0; j < cardArray.length; j++){
      $('#result').append('<img class="col-3 p-4 img-thumbnail" src="images/' + cardArray[j] + 'c.jpg" alt="Clubs"/>')
    }
    break; //break the flow of execution and go out of switch structure
  }
  case 2: {
            console.log("Diamonds");
            $('#playCardHeading').text('Diamonds');
            for (i = 2; i <= 10; i++) {
            $('#result').append('<img class="col-3 p-4 img-thumbnail" src="images/' + i + 'd.jpg" alt="Diamons"/>')
            }
            for (j = 0; j < cardArray.length; j++){
              $('#result').append('<img class="col-3 p-4 img-thumbnail" src="images/' + cardArray[j] + 'd.jpg" alt="Diamons"/>')
            }
            break; //break the flow of execution and go out of switch structure
            }

  case 3: {
            console.log("Hearts");
            $('#playCardHeading').text('Hearts');
            for (i = 2; i <= 10; i++) {
            $('#result').append('<img class="col-3 p-4 img-thumbnail" src="images/' + i + 'h.jpg" alt="Hearts"/>')
            }
            for (j = 0; j < cardArray.length; j++){
              $('#result').append('<img class="col-3 p-4 img-thumbnail" src="images/' + cardArray[j] + 'h.jpg" alt="Hearts"/>')
            }
            break;
          }
  case 4: {
            console.log("Spades");
            $('#playCardHeading').text('Spades');
            for (i = 2; i <= 10; i++) {
            $('#result').append('<img class="col-3 p-4 img-thumbnail" src="images/' + i + 's.jpg" alt="Spades"/>')
            }
            for (j = 0; j < cardArray.length; j++){
              $('#result').append('<img class="col-3 p-4 img-thumbnail" src="images/' + cardArray[j] + 's.jpg" alt="Spades"/>')
            }
            break;
          }
  default: {
            alert('Please enter numbers betwen 1 and 4');
            $('#result').append('<img class=" " src="images/ex1.png" alt=" "/>')
            break;
          }
}
