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
        let name01 = generator.name01,
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
            nameArray,

            // A collection of arrays to generate Jo into
            letterArray,
            letterArraySm,
            letterArrayMd,
            letterArrayLg,
            letterArrayXl,

            nameLength = Math.random() * 6,
            joGenerate = Math.random() * 3,

            name,
            lastName,
            lastNameArray = [];

        /* 
         * Pushes all these random numbers into an Array builder to create the indexes
         * for which the letters will be pulled from
         */
        nameArray = [name01[random01], name02[random02], name03[random03], name04[random04], name05[random05], name06[random06]];

        // Allows me to check if any of these are undefined and remove them
        letterArray = nameArray.map(x => {
            if (x == undefined) {
                x = '';
            }
            return x;
        }); 

        letterArrayXl = letterArray.slice(0, 5);
        letterArrayLg = letterArrayXl.slice(0, 4);
        letterArrayMd = letterArrayLg.slice(0, 3);
        letterArraySm = letterArrayMd.slice(0, 2);

        // Puts a name together based on the nameLength variable
        // Also randomly places "jo" into the array
        if (nameLength < 3) {
            name = letterArraySm.splice(joGenerate, 0, "jo");
            name = letterArraySm[0] + letterArraySm[1] + letterArraySm[2]+ letterArray[5]
        } else if (nameLength < 4) {
            name = letterArrayMd.splice(joGenerate, 0, "jo");
            name = letterArrayMd[0] + letterArrayMd[1] + letterArrayMd[2]+ letterArray[5]
        } else if (nameLength >= 4) {
            name = letterArrayLg.splice(joGenerate, 0, "jo");
            name = letterArrayLg[0] + letterArrayLg[1] + letterArrayLg[2] + letterArrayLg[3]  + letterArray[5]
        }

        // Places "jo" randomly into the last name
        lastNameArray.push(nameLast01[randomLast01], nameLast02[randomLast02]);
        lastNameStr = lastNameArray.splice(joGenerate, 0, "jo");
        lastName = lastNameArray.join('');

        let fullName = name + "<br>" + lastName;

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

        this.container.innerHTML = name;
    }
 }

 /*
 *
 *
 * 
 * START
 */
connector.init();