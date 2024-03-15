

const form = document.querySelector('.login-box');
const divHero = document.querySelector('.hero');
const button = document.querySelector('.form__link');

function checkmyinput() {

    var input = document.getElementById("input__count").value;
    if (input % 2 == 0 && input <= 16 && input !== '') {
        return input;
    } else alert('Введите четное количество Card до 16');

}

let cardCount = 0;

button.addEventListener('click', (e) => {
    cardCount = checkmyinput();

    if (cardCount % 2 == 0) {
        form.classList.add('none')
        divHero.classList.remove('none');
    }

    function massDoubles() {

        let doubles = [];
        for (i = 1; i <= cardCount / 2; i++) {
            doubles.push(i, i);
        } return doubles;
    }

    function MassMixingDoubles() {

        let massDoubl = massDoubles();
        let temp = 0;

        for (i = 0; i < massDoubl.length; i++) {
            let j = Math.floor(Math.random() * massDoubl.length)
            temp = massDoubl[i];
            massDoubl[i] = massDoubl[j];
            massDoubl[j] = temp;
        } return massDoubl;

    }

    function randomCard() {

        let mixin = MassMixingDoubles();

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

    function rules() {

        let mass = [];

        for (i = 0; i < card.length; i++) {
            if (card[i].classList.contains('is-flipped')) {
                mass.push(card[i])
            }
        }

        if (mass.length == 2) {

            for (i = 0; i < mass.length - 1; i++) {

                let first = mass[i];
                let last = mass[i + 1];

                if (first.lastChild.textContent == last.lastChild.textContent) {
                    setTimeout(function () {
                        first.classList.add('display__none');
                    }, 1000);
                    setTimeout(function () {
                        last.classList.add('display__none');
                    }, 1000);
                }

            }
        }

    }

    card.forEach((item, i) => {

        item.addEventListener('click', (e) => {
            item.classList.add('is-flipped');
            setTimeout(function () {
                item.classList.remove("is-flipped");
            }, 1000);

            rules();
        })

    })

});








