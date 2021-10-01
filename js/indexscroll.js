        let yOffset = 0;
        const scrollImg = document.querySelector('.scroll-icon');
        const headcopy = document.querySelector('.headcopy');
        let tempYOffset = 0;
        const endYOffset = window.innerHeight;
        let acc = 0.2;
        let rafId;
        let rafState;
        
        // function goToEnd () {
        //     tempYOffset = (endYOffset - tempYOffset) * acc + tempYOffset;
        //     scrollTo (0, tempYOffset);

        //     console.log('dfds');
        //     rafId = requestAnimationFrame(goToEnd);

        //     if (Math.abs(endYOffset - tempYOffset) < 1) {
        //         cancelAnimationFrame(rafId);
        //         rafState = false;
        //     }
        //     console.log(endYOffset - tempYOffset);
        // }
        

        window.addEventListener('scroll', () => {
            yOffset = window.pageYOffset;
            if (yOffset > 100) {
                scrollImg.classList.add('remove-scroll-icon-ani');
                // headcopy.classList.add('up')
                // if (!rafState) {
				// goToEnd();
				// rafState = true;
			}
            else {
                scrollImg.classList.remove('remove-scroll-icon-ani');
                // headcopy.classList.remove('up')
            }


        });



