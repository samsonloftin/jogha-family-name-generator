/*
 *
 *
 * 
 * THE MODEL
 */

 const generator = {
    newName: '',

    // This Array will hold the indexes for the new name
    newArrayIndex: [],

    // The next set of arrays store parts of names to be randomized
    name01: ['', '', '','b', 'd', 'r', 'g', 'gr', 'ma', 'm', 'ga', 'mo', 'k', 'l', 't', 's', 'v', 'w', 'z', 'j'],
    name02: ['a', 'ee', 'e', 'i', 'ii', 'o', 'oo', 'y', 'ie'],
    name03: ['', '', '', '', '','r', 'z', 'b', 'k', 'g', 't', 'v', 'in', 'y', 'ry', 'zy', 'sh', 'vh', 'ch', 'l', 'lb', 'lg', 'ng', 'nv', 'nz', 'tk', 'shz', 'tv', 'tz', 'xk', 'xn', 'zk', 'zz', 'zv', 'zq'],
    name04: ['', '', '', '', '', 'b', 'bl', 'g', 'k', 'gr', 'ma', 'm', 'ga', 'mo', 'k', 'l', 't', 's', 'v', 'z', 'bl', 'mo'],
    name05: ['', '', '', '', '', '', '', '', 'k', 'z', 'l', 'ks', 'kle', 'ls', 'nk', 'tez', 'zz', 'x', 'tte', 'nkle', 'ot', 'rd'],
    nameLast01: ['armor', 'bark', 'blade', 'blight', 'blink', 'boom', 'brand', 'chain', 'chaos', 'dawn', 'rocket', 'dust', 'fizzle', 'harm', 'hunter', 'pyro', 'shock', 'smug', 'slag', 'oil', 'gas', 'motor', 'sun', ''],
    nameLast02: ['break', 'belt', 'sword', 'dealer', 'time', 'gold', 'wheel', 'hammer', 'tire', 'cycle', 'ship', 'port', 'son', 'neer', 'ier', 'eer', 'ery', 'shop', 'work', 'mine', 'zeppli', 'wix', 'lowe', 'gaz', 'fogger', 'fuse', 'spark', 'dunk', 'slip', 'zik', 'shot', 'lage', 'zarak', 'breaker', 'skin'],
 }

 /*
 *
 *
 * 
 * THE CONTROLLER
 */

const connector = {

    // Starts Program
    init() {
        viewName.init();
    },

    // Retrieves the current name
    getName() {
        return generator.newName;
    },

    setName(name) {
        generator.newName = name;
    },

    // Randomizes the array index
    randomize(max) {
        return Math.floor(Math.random() * (max - 0) - 1);
    },

    // Pushes the indexes into an array
    pushIndex(item1, item2, item3, item4, item5, item6) {
        return generator.newArrayIndex.push(item1, item2, item3, item4, item5, item6);
    },

    // Catches undefined errors and omits them from the string
    redefine(item1, item2, item3, item4, item5, item6) {
        if (item1 == undefined) {
            item1 = '';
        }
        if (item2 == undefined) {
            item2 = '';
        }
        if (item3 == undefined) {
            item3 = '';
        }
        if (item4 == undefined) {
            item4 = '';
        }
        if (item5 == undefined) {
            item5 = '';
        }
        if (item6 == undefined) {
            item6 = '';
        }
        return [item1, item2, item3, item4, item5, item6];
    },

    // Randomize the Array (http://stackoverflow.com/a/2450976)
    randomizeArray(array) {
        let currentIndex = array.length, tempValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            tempValue = array[randomIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex  = tempValue];
        }
        return array;
    },

    randomizeName() {
        // Randomizes the Arrays setup in the generator
        let indexArray = generator.newArrayIndex,
            name01 = generator.name01,
            name02 = generator.name02,
            name03 = generator.name03,
            // Vowel sounds so name02 is used twice
            name04 = generator.name02,
            name05 = generator.name04,
            name06 = generator.name05,
            nameLast01 = generator.nameLast01,
            nameLast02 = generator.nameLast02,
            random01 = this.randomize(generator.name01.length),
            random02 = this.randomize(generator.name02.length),
            random03 = this.randomize(generator.name03.length),
            // Vowel sounds so name02 is used twice
            random04 = this.randomize(generator.name02.length),
            random05 = this.randomize(generator.name04.length),
            random06 = this.randomize(generator.name05.length),
            randomLast01 = this.randomize(generator.nameLast01.length),
            randomLast02 = this.randomize(generator.nameLast02.length),
            lastNameLength = Math.random() * 3,
            nameLength = Math.random() * 4,
            nameArrayLength = Math.random() * 3,
            name,
            lastName,
            lastNameArray = [];

            generator.newArrayIndex = [];

            /* 
             * Pushes all these random numbers into an Array builder to create the indexes
             * for which the letters will be pulled from
             */
            this.pushIndex(random01, random02, random03, random04, random05, random06);

            // Allows me to check if any of these are undefined and remove them
            let indexArrayAgain = this.redefine(name01[indexArray[0]], name02[indexArray[1]], name03[indexArray[2]], name04[indexArray[3]], name05[indexArray[4]], name06[indexArray[5]]);

        // Puts a name together based on the nameLength variable
        if (nameLength < 3) {
            name = indexArrayAgain[0] + indexArrayAgain[1] + indexArrayAgain[2] + indexArrayAgain[5];
        } else if (nameLength <= 4) {
            name = indexArrayAgain[0] + indexArrayAgain[1] + indexArrayAgain[2] + indexArrayAgain[3] + indexArrayAgain[5];
        } else if (nameLength <= 6) {
            name = indexArrayAgain[0] + indexArrayAgain[1] + indexArrayAgain[2] + indexArrayAgain[3] + indexArrayAgain[4] + indexArrayAgain[5];
        }

        /* 
         * 1) Breaks apart the string into an array
         * 2) Randomly places "jo" into the array
         * 3) Joins everything back into a string
         */
        name = name.split('');
        nameStr = name.splice(nameArrayLength, 0, "jo");
        name = name.join('');

        lastNameArray.push(nameLast01[randomLast01], nameLast02[randomLast02]);
        lastNameStr = lastNameArray.splice(lastNameLength, 0, "jo");
        lastName = lastNameArray.join('');

        let fullName = name + " " + lastName;

        connector.setName(fullName);
        
        // Updates View
        viewName.render();
    }
}

 /*
 *
 *
 * 
 * THE VIEW
 */

 let viewName = {

    init() {
        // Selector for the text container
        this.container = document.querySelector('#container');

        // Selector for the randomize button
        this.randomizeButton = document.querySelector('#randomize');

        // Creates event listener for randomizer
        this.randomizeButton.addEventListener('click', () => {
            connector.randomizeName();
        });

        connector.randomizeName();

        // Updates View
        this.render();
    },

    render() {
        // Returns the new randomized name
        const name = connector.getName();

        this.container.textContent = name;
    }
 }

 /*
 *
 *
 * 
 * START
 */
connector.init();