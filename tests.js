/* var app = {
    box: null,
    init: function() {
        app.createBoxes();
    },
    createBoxes: function() {
        for (var i = 0; i < 9; i++) {
            var box = document.createElement('div');
            box.setAttribute('class', 'box');
            var root = document.getElementById('root');
            root.appendChild(box);
        }
        boxx = document.getElementsByClassName('box');
        for (let i = 0; i < boxx.length; i++) {
            boxx[i].addEventListener('click', app.changeColor);
        }
    },
    changeColor: function(evt) {
        evt.target.style.backgroundColor = 'red';
    }
}

document.addEventListener('DOMContentLoaded', app.init); */

/* var app = {
    init: function() {
        app.createHTML();
    },
    createHTML: function() {
        var root = document.getElementById('root');
        var question = document.createElement('h1');
        question.innerHTML = "Aimez-vous le JS ?";
        root.appendChild(question);

        for (let i = 1; i < 3; i++) {
            var button = document.createElement('button');
            button.classList.add([i]);
            root.appendChild(button);
        }

        nb1 = 0;
        nb2 = 0;
        buttons = document.getElementsByTagName('button');
        button1 = buttons[0];
        button1.innerHTML = "Oui (" + nb1 + ")";
        button2 = buttons[1];
        button2.innerHTML = "Non (" + nb2 + ")";

        button1.addEventListener('click', function() { nb1 + 1; });
        button2.addEventListener('click', function() { nb2 + 1; });
    },
}

document.addEventListener('DOMContentLoaded', app.init); */


/* var cptYes = 0;
var cptNo = 0;

// On cible les 2 boutons
var btnYes = document.getElementById('btnYes');
var btnNo = document.getElementById('btnNo');

// On crée les évènements
btnYes.addEventListener('click', function() {

  cptYes++;
  // btnYes.innerHTML = 'Oui (' + cptYes + ')';
  btnYes.textContent = 'Oui (' + cptYes + ')';
  // btnYes.value = 'Oui (' + cptYes + ')';
});

btnNo.addEventListener('click', function() {

  cptNo++;
  // btnNo.innerHTML = 'Non (' + cptNo + ')';
  btnNo.textContent = 'Non (' + cptNo + ')';
  // btnNo.value = 'Non (' + cptNo + ')';
}); */

/*
// On cible ce dont on a besoin
var field = document.getElementById('item');
var btn = document.getElementById('btn');
var listItems = document.getElementById('list');

// On gère l'évènement
btn.addEventListener('click', function() {

  // On récupère la valeur du champs de saisi
  var text = field.value;

  // On ajoute le texte dans la liste
  var li = document.createElement('li');
  li.textContent = text;
  listItems.appendChild( li );

  // On vide le champs de saisi
  field.value = '';
}) */