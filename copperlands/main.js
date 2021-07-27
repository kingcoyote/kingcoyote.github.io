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
    const prefixTA = document.getElementById("word-prefix");
    const rootTA = document.getElementById("word-root");
    const suffixTA = document.getElementById("word-suffix");

    const textareas = {
        "prefix": prefixTA,
        "root": rootTA,
        "suffix": suffixTA
    }

    fetchUrl("words.json")
        .then(response => { 
            return JSON.parse(response); 
        })
        .then(words => {
            for (let segment of ["prefix", "root", "suffix"]) {

                for (let category in words[segment]) {
                    words[segment][category].forEach(word => {
                        textareas[segment].innerHTML += `${word}\n`;
                    })
                }
            }
        });
    
    const newName = document.getElementById("new-name");
    const favNames = document.getElementById("favorite-names");
    const prefixCount = document.getElementById("prefix-count");
    const suffixCount = document.getElementById("suffix-count");
    
    function getCount(type) {
        const setting = type === "prefix" ? prefixCount.value : suffixCount.value;

        switch(setting) {
            case "None": return 0;
            case "Few": return getRandomInt(0,2);
            case "Lots": return getRandomInt(2,4);
            default: return 0;
        }
    }

    function generateName() {
        let prefixes = textareas["prefix"].innerHTML.split("\n").filter(word => word.trim() != "");
        let roots = textareas["root"].innerHTML.split("\n").filter(word => word.trim() != "");
        let suffixes = textareas["suffix"].innerHTML.split("\n").filter(word => word.trim() != "");

        let prefixCount = getCount("prefix");
        let suffixCount = getCount("suffix");
    
        let word = getRandomElement(roots);
        if (suffixCount > 0 && Math.random() > 0.75) {
            word = word + "'s";
        }

        for (let i = 0; i < prefixCount; i++) {
            word = `${getRandomElement(prefixes, true)} ${word}`;
        }

        for (let i = 0; i < suffixCount; i++) {
            suffix = getRandomElement(suffixes, true);
            if (suffix.indexOf(":s") > 0) {
                suffix = suffix.replace(":s", "").toLowerCase();
                word = `${word}${suffix}`
            } else {
                word = `${word} ${suffix}`;
            }
        }

        return word;
    }

    document.getElementById("next-name").onclick = ev => {
        newName.innerHTML = generateName();
    };

    document.getElementById("save-name").onclick = ev => {
        favNames.innerHTML += `<li>${newName.innerHTML}</li>`;
    };
}

document.onload = initCopperlands();