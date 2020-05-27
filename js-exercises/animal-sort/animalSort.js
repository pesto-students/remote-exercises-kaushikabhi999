const animalSort = animals => animals.sort((animal1, animal2) => (
  animal1.numberOfLegs - animal2.numberOfLegs || (animal1.name > animal2.name ? 1 : -1)
));

export { animalSort };
