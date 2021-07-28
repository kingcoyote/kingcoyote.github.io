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

function saveFavorites() {
    
}

function loadFavorites() {

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
            console.log(`Average is: ${average}`);
            invalidWord = average < 4 || average > 6;
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

    document.getElementById("next-name").onclick = ev => {
        newName.innerHTML = generateName();
    };

    document.getElementById("save-name").onclick = ev => {
        favNames.innerHTML += `<li>${newName.innerHTML} | <a class="delete" href="#">Delete</a></li>`;
        saveFavorites();
    };

    $("#favorite-names").on("click", "li a.delete", function(ev) {
        $(this).parents("#favorite-names")[0].remove($(this).parent()[0]);
        saveFavorites();
    });
}

document.onload = initCopperlands();