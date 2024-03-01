
let divHero = document.querySelector('.hero')

function massDoubles() {
    let cardCount = 9;
    let doubles = [];

    for (i = 1; i < cardCount; i++) {
        doubles.push(i, i);
    } return doubles;
}

function MassMixingDoubles(massDoubl) {

    massDoubl = massDoubles();
    let temp = 0;

    for (i = 0; i < massDoubl.length; i++) {
        let j = Math.floor(Math.random() * massDoubl.length)
        temp = massDoubl[i];
        massDoubl[i] = massDoubl[j];
        massDoubl[j] = temp;
    } return massDoubl;

}

function randomCard(mixin) {

    mixin = MassMixingDoubles();

    let cards = [];

    for (i = 0; i < mixin.length; i++) {

        let sceneCard = document.createElement('div');
        sceneCard.classList.add('scene');
        divHero.append(sceneCard);

        let cardWrap = document.createElement('div');
        cardWrap.classList.add('card');
        cards.push(cardWrap)
        sceneCard.append(cardWrap);

        let cardFront = document.createElement('div')
        cardFront.classList.add('card__face', 'card__face--front')
        cardWrap.append(cardFront);

        let cardBack = document.createElement('div')
        cardBack.classList.add('card__face', 'card__face--back')
        cardBack.textContent = mixin[i];
        cardWrap.append(cardBack);
    } return cards;
}

let card = randomCard();

card.forEach((item, i) => {
  
    item.addEventListener('click', (e) => {

        //  console.log(item.lastChild.textContent)
        item.classList.add('is-flipped');
        setTimeout(function () {
            item.classList.remove("is-flipped");
        }, 1000);
    //   if (item.classList.contains('is-flipped')) {
    //   }
        item.id = [i+1];
        rules ()
    })

 })

function rules () {

    let mass = [];
    for (i = 0; i < card.length; i++) {
       if(card[i].classList.contains('is-flipped'))
       {

        mass.push(card[i])
       }
    }
     if (mass.length > 1) {
     for ( i = 0; i < mass.length;i++) {

        // if(mass[i].lastChild.textContent == mass[i+1].lastChild.textContent) {
        //      mass[i].classList.add('display__none')
        //  mass[i+1].classList.add('display__none')
        //  }
                let first = mass[i];
                let last = mass[i+1];
                if(first.lastChild.textContent === last.lastChild.textContent) {
                    first.classList.add('is-flipped');
                    setTimeout(function () {
                        first.classList.add('display__none');
                    }, 1000);
                    last.classList.add('is-flipped');
                    setTimeout(function () {
                        last.classList.add('display__none');
                    }, 1000);
                }
            console.log('первый текс', first.lastChild.textContent, 'Второй',last.lastChild.textContent)
     }
        }

   
    // console.log(mass)
}

rules ()