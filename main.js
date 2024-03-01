
 let divHero = document.querySelector('.hero')

function massDoubles() {
    let cardCount = 9;
    let doubles = [];
  
    for (i = 1; i < cardCount; i++) {
        doubles.push(i, i);
    } return doubles;
}

function MassMixingDoubles(massDoubl) {
 
    massDoubl =  massDoubles();
    let temp = 0;
    
    for (i = 0; i < massDoubl.length; i++) {
        let j = Math.floor(Math.random() * massDoubl.length)
        temp = massDoubl[i];
        massDoubl[i] = massDoubl[j];
        massDoubl[j] = temp;
    } return massDoubl;

}

// let mixingMass = MassMixingDoubles();

//Cоздайте функцию, которая будет создавать карточку с номером из массива произвольных чисел.
//Добавьте событие клика, в котором будут условия и проверки на совпадение карточек.


function randomCard (mixin) {

    mixin = MassMixingDoubles();
    console.log(mixin)

    
    let carId = [];

    for (i = 0; i < mixin.length; i++ ) {
        
        let sceneCard = document.createElement('div');
        sceneCard.classList.add('scene');
        divHero.append(sceneCard);

        let cardWrap = document.createElement('div');
        cardWrap.classList.add('card');
        cardWrap.id = mixin[i];
        sceneCard.append(cardWrap);

        let cardFront = document.createElement('div')
        cardFront.classList.add('card__face', 'card__face--front')
        // cardFront.textContent = 'Open Me';
        cardWrap.append(cardFront);
        let cardBack = document.createElement('div')
        cardBack.classList.add('card__face', 'card__face--back')
        cardBack.textContent = mixin[i];
        cardWrap.append(cardBack);


        cardWrap.addEventListener('click', (e) => {

            cardWrap.classList.toggle('is-flipped');
            setTimeout(function() {
                cardWrap.classList.remove("is-flipped");
                }, 1000); //сложность игры увеличивать скорочть уменьшать

                carId.push(cardWrap.id);
                // console.log(carId)
                
                // for (i = 0; i < carId.length; i++) {
          
                //     if (carId[i] === carId[i+1]) {             ?? ошибка
                //         cardWrap.classList.add('flipped');           
                //        } 
                    
                //     }
        })
        
    }

    // return carId;
}

// let card = randomCard();

randomCard();