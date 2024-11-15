/*KESHAV KUMAR*/

/*document.addEventListener("DOMContentLoaded", function() {
    const offers = [document.getElementById('ang1'), document.getElementById('ang2')];
    let currentOffer = 0;
    const offerInterval = 5000; // Change interval time here (milliseconds)

    function toggleOffers() {
        offers[currentOffer].style.display = 'none';
        currentOffer = (currentOffer + 1) % offers.length;
        offers[currentOffer].style.display = 'block';
    }

    setInterval(toggleOffers, offerInterval);


    offers[currentOffer].style.display = 'block';
});

document.getElementById("load").addEventListener('click',addf);
function addf(){
document.getElementById("none").style.display='block';
}*/




document.addEventListener("DOMContentLoaded", function() {
    const offers = [document.getElementById('infomid1'), document.getElementById('infomid2')];
    let currentOffer = 0;
    const offerInterval = 5000; // Change interval time here (milliseconds)

    function toggleOffers() {
        offers[currentOffer].style.display = 'none';
        currentOffer = (currentOffer + 1) % offers.length;
        offers[currentOffer].style.display = 'block';
    }

    setInterval(toggleOffers, offerInterval);


    offers[currentOffer].style.display = 'block';
});

