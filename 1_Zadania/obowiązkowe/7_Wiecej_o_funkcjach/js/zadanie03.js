sayHi();

function sayHi() {
    console.log('Cześć');
}

sayHi();

sayHello();

const sayHello = function() {
    console.log('Witaj');
}

sayHello();


//w przypadku funkcji sayHi nie ma znaczenia dla dzialania czy wywolamy ja przed czy po definicji, dziala przeniesienie deklaracji na sama gore
// w przypadku wyrazenia funkcyjnego jezeli sprobujemy wywolac je przed definicja otrzymamy blad