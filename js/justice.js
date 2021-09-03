
let openButton = document.querySelector('.first-open');
let preContainer = document.querySelector('.pre-container');
let field = document.querySelector('.judge-field');
let poem = document.querySelector('.poem');
let paragraph = poem.querySelectorAll("p");
let right = document.querySelector('.right-balance');
let left = document.querySelector('.left-balance');
let soonseo = 0;
let total = 0;
let rightValue = 0;
let leftValue = 0;
let rightP = document.querySelectorAll('p');
let leftP = document.querySelectorAll('p');
function firstOpen(e) {
	if (e.target.classList.contains('first-open')) {
		preContainer.classList.add('hidden');
	}
};

function addChild(e) {
	if (soonseo < 23) {
		if (total <= 60 && total >= -60) {

			if (e.target.classList.contains('right-balance' &&'right-field')){
				right.appendChild(paragraph[soonseo]);
				total -= 10;
				soonseo += 1;
				rightValue += 1;
			};

			if (e.target.classList.contains('left-balance' && 'left-field')) {
				left.appendChild(paragraph[soonseo]);
				total += 10;
				soonseo += 1;
				leftValue += 1;
			};
			right.style.transform = `translate3d(0, ${-total}px, 0)`;
			left.style.transform = `translate3d(0, ${total}px, 0)`;
			return false;
		} else {
				alert('균형이 깨졌습니다.');
				if (total <= -60){
					total += 10;
					right.removeChild(rightP[rightValue])
					rightValue -= 1;
					soonseo -= 1;
				} else {
					total -= 10;
					left.removeChild(leftP[leftValue])
					leftValue -= 1;
					soonseo -= 1;
				}
				right.style.transform = `translate3d(0, ${-total}px, 0)`;
				left.style.transform = `translate3d(0, ${total}px, 0)`;
				return false;
			}
			console.log(soonseo,total,rightValue,leftValue);
			} 
	else {
		alert("end")
		return false;
	}
}

preContainer.addEventListener('click', firstOpen);
field.addEventListener('click', addChild);