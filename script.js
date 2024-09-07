// All Ids 
const counterOne = document.getElementById("counter-one");
const counterTwo = document.getElementById("counter-two");
const counterThree = document.getElementById("counter-three");
const counterFourth = document.getElementById("counter-fourth");
// Select all inputs
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
// 
const countNumber = document.getElementById("count-number");
const countPercentage = document.getElementById("count-percentage");
const increasingLine = document.getElementById("increasing-line");

// update counts, percentage and increasingLine
function updateCounts() {
    let checkedCountFirst = document.querySelectorAll('#first-input-section input[type="checkbox"]:checked').length;
    let checkedCountSecond = document.querySelectorAll('#second-input-section input[type="checkbox"]:checked').length;
    let checkedCountThird = document.querySelectorAll('#third-input-section input[type="checkbox"]:checked').length;
    let checkedCountFourth = document.querySelectorAll('#fourth-input-section input[type="checkbox"]:checked').length;

    increasingLine.classList.add('increase');

    let totalCheckedCount = checkedCountFirst + checkedCountSecond + checkedCountThird + checkedCountFourth;
    let totalCheckboxes = 10; 

    // 
    countNumber.textContent = `${totalCheckedCount} /${totalCheckboxes}`;
    countPercentage.textContent = `${(totalCheckedCount / totalCheckboxes) * 100}% complete`;
    increasingLine.style.width = `${(totalCheckedCount / totalCheckboxes) * 100}%`;

    //
    counterOne.textContent = `${checkedCountFirst} /3`;
    counterTwo.textContent = `${checkedCountSecond} /3`;
    counterThree.textContent = `${checkedCountThird} /3`;
    counterFourth.textContent = `${checkedCountFourth} /1`;


}

// 
checkBoxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateCounts);
});

// Down-area-one
const downAreaOne = document.getElementById("down-area-one");
const oneDayText = document.getElementById("one-day-text");
const arrowOne = document.getElementById("arrow-one");

arrowOne.addEventListener('click', function() {
    if (downAreaOne.style.display === 'block' || downAreaOne.style.display === '') {
        oneDayText.style.color = 'white';
        downAreaOne.style.display = 'none';
        arrowOne.classList.remove('rotate-180');
    } else {
        oneDayText.style.color = "skyblue";
        downAreaOne.style.display = 'block';
        arrowOne.classList.add('rotate-180');
    }
});

// Down-area-two
const downAreaTwo = document.getElementById("down-area-two");
const twoDayText = document.getElementById("two-day-text");
const arrowTwo = document.getElementById("arrow-two");

arrowTwo.addEventListener('click', function() {
    if (downAreaTwo.style.display === 'block' || downAreaTwo.style.display === '') {
        twoDayText.style.color = 'white';
        downAreaTwo.style.display = 'none';
        arrowTwo.classList.remove('rotate-180');
    } else {
        twoDayText.style.color = 'skyblue';
        downAreaTwo.style.display = 'block';
        arrowTwo.classList.add('rotate-180');
    }
});

// Down-area-three
const downAreaThree = document.getElementById("down-area-three");
const threeDayText = document.getElementById("three-day-text");
const arrowThree = document.getElementById("arrow-three");

arrowThree.addEventListener('click', function() {
    if (downAreaThree.style.display === 'block' || downAreaThree.style.display === '') {
        threeDayText.style.color = 'white';
        downAreaThree.style.display = 'none';
        arrowThree.classList.remove('rotate-180');
    } else {
        threeDayText.style.color = 'skyblue';
        downAreaThree.style.display = 'block';
        arrowThree.classList.add('rotate-180');
    }
});

// Down-area-four
const downAreaFour = document.getElementById("down-area-four");
const fourDayText = document.getElementById("four-day-text");
const arrowFour = document.getElementById("arrow-four");

arrowFour.addEventListener('click', function() {
    if (downAreaFour.style.display === 'block' || downAreaFour.style.display === '') {
        fourDayText.style.color = 'white';
        downAreaFour.style.display = 'none';
        arrowFour.classList.remove('rotate-180');
    } else {
        fourDayText.style.color = 'skyblue';
        downAreaFour.style.display = 'block';
        arrowFour.classList.add('rotate-180');
    }

});

