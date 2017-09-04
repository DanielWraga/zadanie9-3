var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
	dinosaur = 'triceratops';
var nameUpperCased = dinosaur.toUpperCase();

var textChanged = text.replace('Velociraptor', (nameUpperCased) );
textChanged.length/2;

console.log(nameUpperCased);
console.log(textChanged); 
console.log(textChanged.length/2);