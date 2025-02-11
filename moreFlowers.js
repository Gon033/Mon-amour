document.addEventListener('DOMContentLoaded', function () {
    const bouqueteContainer = document.getElementById('bouquet-container');

    function createFlower(x, y) {
        const flower = document.createElement('div');
        flower.classList.add('flower');

        for(let i = 0; i < 4; i++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');

            if (i== 0) petal.style.top = '-20px';
            if (i== 1) petal.style.left = '20px';
            if (i== 2) petal.style.top = '20px';
            if (i== 3) petal.style.left = '-20px';

            flower.appendChild(petal);
        }

        const center = document.createElement('div');
        center.classList.add('center');
        flower.appendChild(center);

        flower.style.left = `${x}px`;
        flower.style.top = `${y}px`;

        bouqueteContainer.appendChild(flower);
    }

    function createBouquet(numFlowers) {
        const radius = 100;
        const centerX = bouqueteContainer.offsetWidth / 2;
        const centerY = bouqueteContainer.offsetHeight / 2;

        for (let i = 0; i < numFlowers; i++) {
            const angle = (2 * Math.PI * i) / numFlowers;
            const x = centerX + radius * Math.cos(angle) - 15;
            const y = centerY + radius * Math.sin(angle) -15;
            createFlower(x , y);
        }
    }

    createBouquet(8);
});