const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => displayDog(data));
}

const displayDog = (dogList) => {
    const main = document.getElementById('main');
    // 1. lets take first 10 data form 172 data set. first declare a variable and through slice we can call first 10 data as follows: if we want to call from 10-20 then dogList.slice(10,20);
    const first10Data = dogList.slice(0, 100);
    
    // 2. now to get element from array of 10 items we will run a for of loop, where variable name is dog: here of s/b dogList but we have created a variable for first 10 dog data (first10Data);
    for (const dog of first10Data) {
        // 3. now we will create a div under main div: this new div s/b under the for loop so it will display multiple object data.

        // console.log(dog);
        const div = document.createElement("div");

        // 6. now we will display the names as column and add a class in js:

        div.classList = "col-lg-4 g-4";

        // 4. now we will show the data inside the div that we created in line 12 under the main id div as follows under a h2 tag: dynamic display of object is variable.name .
        div.innerHTML = `
        <img width="300px" height="200px" src=${dog.image.url} class="">

        <h3>${dog.name}</h3>
        <h5>Origin: ${dog.origin}</h5>
        <p>Weight: ${dog.weight.imperial}</p>
        <button>More Info</button>

        `
        // 5. now under main ID tag we will append a child-the new div
        main.appendChild(div);
        
    }
}
