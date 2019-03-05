// click event for gray button
$('#grayButton').on('click', switchGray);

// click event for white button

$('#whiteButton').on('click',switchWhite);




function switchGray() {
    // change background to gray
    $('body').css('background-color','gray');
    // change font to white
    $('h1,p').css('color','white');
}

function switchWhite() {
    // change background to white
      $('body').css('background-color','white');
    // change font to black
    $('h1,p').css('color','black');
}
