const checkboxes = document.querySelectorAll(' input[type="checkbox"]');
const checkBox = document.getElementById("checkBox-one");
const counter = document.getElementById('counter');

const increasingLine = document.getElementById("increasing-line");
const increasingP = document.getElementById("increasing-p");


// Increasing Your progress:-

const countData = document.getElementById("count-data");

function updateCountData() {
    const checkedData = document.querySelectorAll('input[type="checkbox"]:checked').length;
    countData.textContent = `${checkedData}/10`;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateCountData);
});

// 


// 1st button k liye

function updateCounter() {

    increasingLine.classList.add("inc-line");
    const checkedCount = document.querySelectorAll(' input[type="checkbox"]:checked').length;
    counter.textContent = `${checkedCount} /3`;


    increasingP.textContent = `${checkedCount * 10}% complete`;

    increasingLine.style.width = `${checkedCount * 10}%`;

}

checkboxes.forEach(checkBox => {
    checkBox.addEventListener('change', updateCounter);

});

// 

// one down-area:-

document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.getElementById("down-arrow");
    const downArea = document.getElementById("down-area");
    // const arrowDiv = document.getElementById("arrow");

    // downArea.style.display ="none";

    function toggleDownAreaOne() {

        if (arrow.src.includes("down-arrow.png")) {
            arrow.src = "icon/up-arrow.png";
            downArea.classList.add('hidden');
        } else {
            arrow.src = "icon/down-arrow.png";
            downArea.classList.remove('hidden');
        }
    }
    arrow.addEventListener('click', toggleDownAreaOne);
    // arrowDiv.addEventListener('click', toggleDownArea);
});

// 2nd button k liye

const checkboxesTwo = document.querySelectorAll('input[type="checkbox"]');
const checkBoxTwo = document.getElementById("checkBox-two");
const counterTwo = document.getElementById("counter-two");
const downArrowTwo = document.getElementById("down-arrow-two");

function updateCounterTwo() {

    const checkedCountTwo = document.querySelectorAll('input[type="checkbox"]:checked').length;
    counterTwo.textContent = `${checkedCountTwo} /3`;

    // increasingLine.classList.add("inc-line");
    // increasingP.textContent = `${checkedCountTwo * 10}% complete`;
    // increasingLine.style.width = `${checkedCountTwo * 10}%`;
}

checkboxesTwo.forEach(checkBoxTwo => {
    checkBoxTwo.addEventListener('change', updateCounterTwo);
});

//

// Two down-area:-

document.addEventListener('DOMContentLoaded', () => {
    const arrowTwo = document.getElementById("down-arrow-two");
    const downAreaTwo = document.getElementById("down-area-two");

    function toggleDownAreaTwo() {

        if (arrowTwo.src.includes("down-arrow.png")) {
            arrowTwo.src = "icon/up-arrow.png";
            downAreaTwo.classList.add('hidden');
        } else {
            arrowTwo.src = "icon/down-arrow.png";
            downAreaTwo.classList.remove('hidden');
        }
    }
    arrowTwo.addEventListener('click', toggleDownAreaTwo);

});

// 

// 3rd button k liye

const checkboxesThree = document.querySelectorAll('input[type="checkbox"]');
const checkBoxThree = document.getElementById("checkBox-three");
const counterThree = document.getElementById("counter-three");
const downArrowThree = document.getElementById("down-arrow-three");

function updateCounterThree() {

    const checkedCountThree = document.querySelectorAll('input[type="checkbox"]:checked').length;
    counterThree.textContent = `${checkedCountThree} /3`;

    // increasingLine.classList.add("inc-line");

    // increasingP.textContent = `${checkedCountThree * 10}% complete`;
    // increasingLine.style.width = `${checkedCountThree * 10}%`;
}

checkboxesThree.forEach(checkBoxThree => {
    checkBoxThree.addEventListener('change', updateCounterThree);
});
// 


// Three down-area:-

document.addEventListener('DOMContentLoaded', () => {
    const arrowThree = document.getElementById("down-arrow-three");
    const downAreaThree = document.getElementById("down-area-three");

    function toggleDownAreaThree() {

        if (arrowThree.src.includes("down-arrow.png")) {
            arrowThree.src = "icon/up-arrow.png";
            downAreaThree.classList.add('hidden');
        } else {
            arrowThree.src = "icon/down-arrow.png";
            downAreaThree.classList.remove('hidden');
        }
    }
    arrowThree.addEventListener('click', toggleDownAreaThree);
    // arrowDiv.addEventListener('click', toggleDownArea);
});

//


// 4rd button k liye

const checkboxesFourth = document.querySelectorAll('input[type="checkbox"]');
const counterFourth = document.getElementById("counter-fourth");
const downArrowFourth = document.getElementById("down-arrow-fourth");

function updateCounterFourth() {

    const checkedCountFourth = document.querySelectorAll('input[type="checkbox"]:checked').length;
    counterFourth.textContent = `${checkedCountFourth} /3`;

    // increasingLine.classList.add("inc-line");
    // increasingP.textContent = `${checkedCountFourth * 10}% complete`;
    // increasingLine.style.width = `${checkedCountFourth * 10}%`;
}

checkboxesFourth.forEach(checkboxesFourth => {
    checkboxesFourth.addEventListener('change', updateCounterFourth);
});

//

// Fourth down-area:-

document.addEventListener('DOMContentLoaded', () => {
    const arrowFourth = document.getElementById("down-arrow-fourth");
    const downAreaFourth = document.getElementById("down-area-fourth");

    function toggleDownAreaFourth() {

        if (arrowFourth.src.includes("down-arrow.png")) {
            arrowFourth.src = "icon/up-arrow.png";
            downAreaFourth.classList.add('hidden');
        } else {
            arrowFourth.src = "icon/down-arrow.png";
            downAreaFourth.classList.remove('hidden');
        }
    }
    arrowFourth.addEventListener('click', toggleDownAreaFourth);
    // arrowDiv.addEventListener('click', toggleDownArea);
});

// 


