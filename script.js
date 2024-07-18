 const bodyEL = document.querySelector('body');

        bodyEL.addEventListener('mousemove', (e) => {
            const xPos = e.offsetX;
            const yPos = e.offsetY;
            const spanEl = document.createElement('span');

            const size = Math.floor(Math.random()*100);
            bodyEL.appendChild(spanEl);
            
            spanEl.style.width = `${size}px`;
            spanEl.style.height = `${size}px`;
			
            spanEl.style.left = `${xPos}px`;
            spanEl.style.top = `${yPos}px`;
           
            setTimeout(()=> spanEl.remove(), 6000);
        });
