const panels = document.querySelectorAll('.panel');

//This query gives us a Node list. Can be iterated
//console.log(panels);

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}