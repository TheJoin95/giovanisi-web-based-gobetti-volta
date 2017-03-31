function leggiAddendi() {
  var addendi   = [];
  var addendo_1 = $( "#addendo1" ).val();
  var addendo_2 = $( "#addendo2" ).val();
  console.log( "addendo1: " + addendo_1 );
  console.log( "addendo2: " + addendo_2 );

  addendi[ 0 ] = parseFloat( addendo_1 );
  addendi[ 1 ] = parseFloat( addendo_2 );

  return addendi;
}

function esegui_somma() {
  var addendi   = leggiAddendi(); // array
  var risultato = addendi[ 0 ] + addendi[ 1 ];
  if ( isNaN( risultato ) ) {
    // se è NaN
    alert( "OMG! ERRORE!" );
  } else {
    // altrimenti
    visualizza_operazione( addendi[ 0 ], addendi[ 1 ], "+", risultato );
  }
}

function esegui_sottrazione() {
  var addendi   = leggiAddendi(); // array
  var risultato = addendi[ 0 ] - addendi[ 1 ];
  if ( isNaN( risultato ) ) {
    // se è NaN
    alert( "OMG! ERRORE!" );
  } else {
    // altrimenti
    visualizza_operazione( addendi[ 0 ], addendi[ 1 ], "-", risultato );
  }
}

function esegui_divisione() {
  var addendi   = leggiAddendi(); // array
  var risultato = addendi[ 0 ] / addendi[ 1 ];
  if ( isNaN( risultato ) ) {
    // se è NaN
    alert( "OMG! ERRORE!" );
  } else {
    // altrimenti
    visualizza_operazione( addendi[ 0 ], addendi[ 1 ], "/", risultato );
  }
}

function esegui_moltiplicazione() {
  var addendi   = leggiAddendi(); // array
  var risultato = addendi[ 0 ] * addendi[ 1 ];
  if ( isNaN( risultato ) ) {
    // se è NaN
    alert( "OMG! ERRORE!" );
  } else {
    // altrimenti
    visualizza_operazione( addendi[ 0 ], addendi[ 1 ], "*", risultato );
  }
}

function visualizza_operazione( addendo1, addendo2, operatore, risultato ) {
  var operazione_testuale = addendo1 + " " + operatore + " " + addendo2;
  operazione_testuale     = operazione_testuale + " = " + risultato;
  $( "#operazione_testuale" ).text( operazione_testuale );
}