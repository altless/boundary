const container = document.querySelector('.container');
const poem = document.querySelectorAll('.container p');
const spans = container.querySelectorAll('span');
console.log(spans);

container.addEventListener('click',function(){
    addAni();
});

function addAni () {
    for (let i=0; i < spans.length; i++) {
        spans[i].classList.remove('animaiting');
    }
    for (let i=0; i < 5; i++) {
        let num = parseInt(Math.random()*(spans.length));
    spans[num].classList.add('animaiting');
    };
    console.log(spans.length);
}
