

// Note: Utilize the append function to move the cards to the different pre-set named rows. 
// When you click one of the 4 starter cards: the clicked card is moved to the "charcter" section, while the 3 other cards are moved to the "enemies" section.




    var character = {};
    var defender = {};
    var enemy = false;
    var ischaracterselected = false;

   var luke = {
       name: "Luke Skywalker",
       health: 120,
       baseattack: 5,
       attack: 5,
   };

   var obiwan = {
       name: "Obi-Wan Kenobi",
       health: 100,
       baseattack: 7,
       attack: 7,
    };

    var vader = {
        name: "Darth Vader",
        health: 150,
        baseattack: 10,
        attack: 7,
    };

    var maul = {
        name: "Darth maul",
        health: 110,
        baseattack: 10,
        attack: 5,
    };

    function initializeCharacter(chosenCharacter) {
        character.name = chosenCharacter.name;
        character.health = chosenCharacter.health;
        character.baseattack = chosenCharacter.baseattack;
        character.attack = chosenCharacter.attack;
        
      };

    function initializeDefender(chosenDefender) {
        defender.name = chosenDefender.name;
        defender.health = chosenDefender.health;
        defender.baseattack = chosenDefender.baseattack;
        defender.attack = chosenDefender.attack;
      };
    
$(document).ready(function() {


// $("#restart").hide();


var audioElement1 = document.createElement("audio");

audioElement1.setAttribute("src", "http://cd.textfiles.com/maxsounds/WAV/EFEITOS/TANG.WAV");

$("#playsound").click(function(event) {

audioElement1.play();

});    


$("#lukecard").click(function(event) {

    if (ischaracterselected === false) {

        var lukecard = $('#lukecard').detach();
        $("#yourcharacter").append(lukecard);
       
        var obicard = $('#obicard').detach();
         $("#enemies").append(obicard);

         var vadercard = $('#vadercard').detach();
         $("#enemies").append(vadercard);

        var maulcard = $('#maulcard').detach();
         $("#enemies").append(maulcard);

        initializeCharacter(luke);

        ischaracterselected = true;
        return ischaracterselected;

   };

   if ((ischaracterselected === true) && (enemy === false)) {

        var lukecard = $('#lukecard').detach();
        $("#enemy").append(lukecard);

        enemy = true;

        initializeDefender(luke);
   };

});

$("#obicard").click(function(event) {
    
    if (ischaracterselected === false) {

    var obicard= $('#obicard').detach();
    $("#yourcharacter").append(obicard);

    var lukecard = $('#lukecard').detach();
    $("#enemies").append(lukecard);

    var vadercard = $('#vadercard').detach();
    $("#enemies").append(vadercard);

    var maulcard = $('#maulcard').detach();
    $("#enemies").append(maulcard);

    initializeCharacter(obiwan);

    ischaracterselected = true;
    return ischaracterselected;

    }

    if ((ischaracterselected === true) && (enemy === false)) {

        var obicard = $('#obicard').detach();
        $("#enemy").append(obicard);

        enemy = true;

        initializeDefender(obiwan);

   };

});

$("#vadercard").click(function(event) {

    if (ischaracterselected === false) {

    var vadercard= $('#vadercard').detach();
    $("#yourcharacter").append(vadercard);

    var lukecard = $('#lukecard').detach();
    $("#enemies").append(lukecard);

    var obicard = $('#obicard').detach();
    $("#enemies").append(obicard);

    var maulcard = $('#maulcard').detach();
    $("#enemies").append(maulcard);

    initializeCharacter(vader);

    ischaracterselected = true;
    return ischaracterselected;

    }

    if ((ischaracterselected === true) && (enemy === false)) {

        var vadercard = $('#vadercard').detach();
        $("#enemy").append(vadercard);

        enemy = true;

        initializeDefender(vader);

   };

});

$("#maulcard").click(function(event) {

    if (ischaracterselected === false) {

    var maulcard= $('#maulcard').detach();
    $("#yourcharacter").append(maulcard);

    var lukecard = $('#lukecard').detach();
    $("#enemies").append(lukecard);

    var vadercard = $('#vadercard').detach();
    $("#enemies").append(vadercard);

    var obicard = $('#obicard').detach();
    $("#enemies").append(obicard);

    initializeCharacter(maul);
  
    ischaracterselected = true;
    return ischaracterselected;
      
    }

    if ((ischaracterselected === true) && (enemy === false)) {

       var maulcard = $('#maulcard').detach();
        $("#enemy").append(maulcard);

        enemy = true;

        initializeDefender(maul);
    
   };

});


$("#attack").click(function(event) {

    console.log(character);
    console.log(defender);

    if ((enemy === true) && (ischaracterselected === true)) {

            defender.health = defender.health - character.attack;

            $("#attackdmg").html("<p>You attack " + defender.name + " for " + character.attack + " damage.<p>");

            // Update health on defender and display it. 

            if (defender == luke) {

                $("#lukehealth").html(defender.health);

            };

            if (defender == obiwan) {

                $("#obihealth").html(defender.health);

            };

            if (defender == vader) {

                $("#vaderhealth").html(defender.health);

            };

            if (defender == maul) {

                $("#maulhealth").html(defender.health);

            };

            character.attack = character.attack + character.baseattack;

            if (defender.health > 0) {

            character.health = character.health - defender.baseattack;

            $("#defensedmg").html("<p>" + defender.name + " attacked you for " + defender.baseattack + " damage.</p>");

            // Update health on character and display it. 

            if (character == luke) {

                $("#lukehealth").html(character.health);

            };

            if (character == obiwan) {

                $("#obihealth").html(character.health);

            };

            if (character == vader) {

                $("#vaderhealth").html(character.health);

            };

            if (character == maul) {

                $("#maulhealth").html(character.health);

            };
        
            }
            
            // If the health of the card ever reaches or drops below 0, the card is "killed" and removed from selection. 

            if (defender.health < 0) {

                // Hide the defender card! 

                enemy = false;
                return enemy;

                
            }
    }


});

$("#restart").click(function(event) {

    var lukecard= $('#lukecard').detach();
    $("#start").append(lukecard);

    var obicard = $('#obicard').detach();
    $("#start").append(obicard);

    var vadercard = $('#vadercard').detach();
    $("#start").append(vadercard);

    var maulcard = $('#maulcard').detach();
    $("#start").append(maulcard);

    ischaracterselected = false;
    enemy = false;

    return ischaracterselected, enemy; 

});

});


// When you click one of the 3 "enemy" cards: The selected card is moved to the defender section, while the remaining cards remain in the enemies section.


// When you click the "attack" button, your "character" card attacks and deals damage to the "defender" card. Damage is dealt to the health of the card. The
// defender also deals damage back to the "character" card and the health is adjusted. 
// Play a sound whenever the button is clicked that is relative to the star wars franchise. (laser blasts or light-sabers).





// After the card is removed from the "defender" section, the user has an option to choose another "enemy" card to add to the defender section. 

// Once all "enemy" cards are defetaed. The game is won and display an alert to signifty that the game has ended. 
// Bonus: Play the final credits sound of the original star wars. 