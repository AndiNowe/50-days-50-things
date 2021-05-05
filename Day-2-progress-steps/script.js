const progress = document.getElementById('progress');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
//brings all the elements with a class cercle in a Node list, similar to an array. 
const circles = document.querySelectorAll('.circle');


let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    //will show 1,2,3,4,... when clicking the button
    //console.log(currentActive);

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    //it will not go up further than the number of steps
    //console.log(currentActive)

    update();
})

previous.addEventListener('click', () => {
    currentActive--;

    //will show 4,3,2,1... when clicking the button
    //console.log(currentActive);

    if (currentActive < 1) {
        currentActive = 1;
    }

    //it will not go down less than 1
    //console.log(currentActive)

    update();
})


function update() {
    circles.forEach((circle, index) => {

        if(index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');

    //we need this to be percentages to change the progress width property
    //console.log(actives.length / circles.length);
    //so we can do (actives.length / circles.length) * 100;

    //we have to concatenate the '%' for the css to understand
    progress.style.width = ((actives.length -1) / (circles.length -1)) * 100 + '%';

    if(currentActive === 1) {
        previous.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        previous.disabled = false;
        next.disabled = false;
    }
}