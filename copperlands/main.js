function fetchUrl(url) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true)

        xhr.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                resolve(this.response);
            } else {
                reject(this.response);
            }
        }
        xhr.onerror = function() { 
            reject("Error loading words")
        };

        xhr.send()
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getRandomElement(array, remove = false) {
    const element = array[getRandomInt(0, array.length)]
    if (remove) {
        array.splice(array.indexOf(element), 1);
    }
    return element;
}

function initCopperlands() {
    const wordsTA = document.getElementById("words");

    fetchUrl("words.json")
        .then(response => { 
            return JSON.parse(response); 
        })
        .then(words => {
            for (let category in words) {
                words[category].forEach(word => {
                    wordsTA.innerHTML += `${word}\n`;
                })
            }
        })
        .then(loadFavorites);
    
    const newName = document.getElementById("new-name");
    const favNames = document.getElementById("favorite-names");
    const wordCount = document.getElementById("word-count");
    
    function getCount() {
        const setting = wordCount.value;

        switch(setting) {
            case "Few": return getRandomInt(1,3);
            case "Some": return getRandomInt(2,5);
            case "Lots": return getRandomInt(3,7);
            default: return 3;
        }
    }

    function generateName() {
        let invalidWord = true;
        let words = [];
        let wordCount = getCount();
        let tries = 0;

        while (invalidWord && tries < 100){
            let allWords = wordsTA.innerHTML.split("\n").filter(word => word.trim() != "");
            words = [];

            for (let i = 0; i < wordCount; i++) {
                words.push(getRandomElement(allWords, true).split(":"))
            }
            words = words.sort((a, b) => a[1].replace("p", "") - b[1].replace("p", ""))
            let average = words.map(word => parseInt(word[1].replace("p", ""))).reduce((a, b) => a + b) / words.length;
            console.log(`Average of ${words.reduce((a, b) => a + b)} is: ${average}`);
            invalidWord = average < 4.5 || average > 6;
            tries++;
        }

        let word = "";

        for (let w in words) {
            if (words.hasOwnProperty(w) === false) continue;
            w = words[w];
            if (w[2] == "s") {
                word = word + w[0].toLowerCase();
            } else {
                word = word + " " + w[0];
            }
        }

        return word;
    }

    function saveFavorites() {
        favorites = JSON.stringify(Array.from(favNames.childNodes).map(node => node.innerHTML.split("|")[0].trim()))
        window.localStorage.setItem("copperlands.favorites", favorites);
    }

    function loadFavorites() {
        favorites = JSON.parse(window.localStorage.getItem("copperlands.favorites")) || [];
        favorites.forEach(name => addToFavorites(name));
    }

    function addToFavorites(name) {
        favNames.innerHTML += `<li>${name} | <a class="delete" href="#">Delete</a></li>`;
    }

    document.getElementById("next-name").onclick = ev => {
        newName.innerHTML = generateName();
    };

    document.getElementById("save-name").onclick = ev => {
        addToFavorites(newName.innerHTML);
        saveFavorites();
    };

    $("#favorite-names").on("click", "a.delete", function(ev) {
        ev.preventDefault();
        $(this).parents("#favorite-names")[0].removeChild($(this).parent()[0]);
        saveFavorites();
    });
}

document.onload = initCopperlands();