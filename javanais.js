// Fonction transformant une phrase de fran�ais � javanais 
function toJavanais(txt) {
  let input = txt;
  const javanais = "av";
  isFirstCharVoyelle = false;
  isLastCharVoyelle = false; // Indique si le caract�re en cours et le pr�c�dent sont des voyelles
  let resultat = '';
  for (let i = 0; i < input.length; i++) {

    isFirstCharVoyelle = isVoyelle(input.charAt(i));

    if (isFirstCharVoyelle && isFirstCharVoyelle != isLastCharVoyelle) {
      resultat += javanais;
    }
    resultat += input.charAt(i);
    isLastCharVoyelle = isFirstCharVoyelle;
  }
  return resultat;
}

// Fonction transformant une phrase de javanais � fran�ais
function tofrench(txt) {
  let input = txt;
  const javanais = "av";
  let resultat = '';
  
  // verifie si premier les deux premiers caracteres sont = "av" 
  if (input[0] == "a" && input[1] == "v") {
    input = input.slice(2);
  }

  for (let i = 0; i < input.length; i++) {
      // verfie si on depasse la taille du mot et que le mot au milieu est diffirent de "av"
      if (i + 3 < input.length && (input.charAt(i + 1) == "a" && input.charAt(i + 2) == "v")) {
        if (isVoyelle(input.charAt(i + 3)) && !isVoyelle(input.charAt(i))) {
          resultat += input.charAt(i) + input.charAt(i + 3);
          i += 3;
          continue;
        }
      }
    resultat += input.charAt(i);
  }
  return resultat;
}

// Fonction v�rifiant si un caract�re est une voyelle
function isVoyelle(character) {
  const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
  if (voyelles.includes(character)) {
    return true;
  }
  return false;
}

// Menu d�marrage
myFunction();
function myFunction() {

  var txt = prompt("Phrase � traduire");
  var instruction = prompt("'fr' ou 'javanais' pour choisir vers quoi traduire");

  if (instruction == "javanais") {
    return toJavanais(txt);
  } else if (instruction == "fr") {
    return tofrench(txt);
  } else {
    return myFunction();
  }

}