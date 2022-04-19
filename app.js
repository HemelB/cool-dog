// 1. grab the button by onclick
const searchButton = () => {

    // 2. grab the search field input by ID. 
    const input = document.getElementById('input-value');
    const inputValue = parseInt(input.value);

    // 4. grab the error showing UI by id
    const error = document.getElementById('error');

    // 3. here valid input is only number, so we will validate the input through if condition below:

    if (isNaN(inputValue) || inputValue=="") {//3.5 isNaN check find the value number or  empty string then
        error.innerText = "*Please Input a Number*"
        // now empty the input after click the search button
        input.value = "";
        main.innerHTML = "";
    }

    else if (inputValue <= 0) {
        error.innerText="*Please Input a Positive Number*"
         // now empty the input after click the search button
        input.value = "";
        main.innerHTML = "";
    }
    else if (inputValue > 52) {
        error.innerText="*Please Input a Number below 52*"
         // now empty the input after click the search button
        input.value = "";
        main.innerHTML = "";
    }
    
    else {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)// here we made the api dynamic by the last code.
        .then(res => res.json())
            .then(data => cardDisplay(data.cards));// cards is the array under the object and we can catch this array cards from here
        // now empty the input after click the search button
        input.value = "";
        error.innerText = "";
        main.innerHTML = "";

    }
 
}


const cardDisplay = (cards) => {
    // console.log(cards);
    // grab the div where we will display the information
    const main = document.getElementById('main');

    for (const card of cards) {
        console.log(card);
    // here we will create virtual div for the cards
        const div = document.createElement('div');

        div.classList.add("col-md-4");
        div.classList.add("mb-2");

        div.innerHTML = `
        <div class="card" style="width: 10rem;">
                <img src="${card.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${card.suit}</h5>
            <p class="card-text">${card.value}</p>
            <button href="#"  class="btn btn-primary">More</button>
            </div>
        </div>
        `
        main.appendChild(div);

}
}
