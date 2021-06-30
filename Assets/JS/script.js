window.onload = function () {
    
    
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var word ;              // Selected word
  var guess ;             // Guess
  var guesses = [ ];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct guesses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("lives");
  
  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
   // Create guesses ul
   result = function () {
    wordHolder = document.getElementById('secret');
    correct = document.createElement('ul');

    for (let i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
        showLives.innerHTML = "Game Over";
        document.getElementById("sad").style.visibility = "visible";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
        document.getElementById("lol").style.visibility = "visible";
      }
    }
  }
   
  // OnClick Function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
          
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
        
      } else {
        comments();
      }
    }
  }
  
    
  // Play
  play = function () {
     let countries =[
        "afghanistan","albania","algeria","american samoa","andorra","angola","anguilla","antarctica","antigua and barbuda","argentina","armenia",
        "aruba","australia","austria","azerbeijan","bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize",
        "benin","bermuda","bhutan","bolivia","bosnia and herzegovina","botswana","brazil","brunei darussalam","bulgaria","burkina faso","burundi","cambodia",
        "cameroon","canada","cape verde","cayman islands","central african republic","chad","chile","china","christmas islands","cocos islands","colombia","comoros","democratic republic of the congo",
        "republic of congo","cook islands","costa rica","côte d'ivoire","croatia","cuba","cyprus","czech republic","denmark","djibouti","dominica","dominican republic",
        "east timor","ecuador","egypt","el salvador","equatorial guinea","eritrea","estonie","ethiopia","falkland islands","faroe islands","fiji","finland","france","french guiana","franch polynesia","french southern territories","gabon", "gambia", "georgia", "germany","ghana",
        "gibraltar","greece","greenland","grenada","guadelupe","guam","guatemala", "guinea", "guinea-bissau","guyana","haiti","holy see","honduras", "hong kong", "hungary", "iceland", "india","indonesia","iran","iraq", "ireland", "israel", "italy", "ivory coast", "jamaica", "japan","jordan",


    ] //words to guess


   
    word = countries[Math.floor(Math.random() * countries.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 5;
    counter = 0;
    space = 0;
    result();
    comments();
    
    
  }

  play();
  
  

   // Reset

  document.getElementById('again').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    document.getElementById("sad").style.visibility = "hidden";
    document.getElementById("lol").style.visibility = "hidden";
   
    play();
  }
      
}
function exit() {
    window.close();
} //exit game