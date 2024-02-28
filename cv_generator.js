document.addEventListener('DOMContentLoaded', function() {
    const utbildningSymbol = '\u{1F393}'; // Unicode-symbol för utbildning
    const arbeteSymbol = '\u{1F4BC}'; // Unicode-symbol för arbete

    fetch('cv_data.json') //En HTTP-förfrågan för att hämta CV-data i JSON-format
        .then(response => response.json()) //Konverterar svaret till JSON-format
        .then(data => {
            // UtildningaAR
            const utbildningarContainer = document.querySelector('.educations'); //Hittar det element i DOM som har klassen educations
            if (utbildningarContainer) { //Kontrollerar om utbildningarContainer hittas
                data.utbildningar.forEach(utbildning => { //Itererar igenom varfje utbildning i den hämtade datan
                    //Skapar HTML-sträng för varje utbildning
                    const utbildningHTML =  `
                        <div>
                            <h3>${utbildningSymbol} ${utbildning.namn}</h3>
                            <p>${utbildning.skola}</p>
                            <p>${utbildning.period}</p>
                        </div>
                    `; 
                    utbildningarContainer.insertAdjacentHTML('beforeend', utbildningHTML); // Infogar HTML-strängen i utbildningarContainer
                });
            } else {
                console.error('Kunde inte hitta utbildningarContainer'); //Skriver felmeddelande om utbildningsContainer inte hittas
            }

            // Arbeten
            const arbetslivserfarenheterContainer = document.querySelector('.experiences');
            if (arbetslivserfarenheterContainer) {
                data.arbetslivserfarenheter.forEach(arbetsplats => {
                    const arbetsplatsHTML = `
                        <div>
                            <h3>${arbeteSymbol} ${arbetsplats.arbetsplats}</h3>
                            <p>${arbetsplats.period}</p>
                        </div>
                    `;
                    arbetslivserfarenheterContainer.insertAdjacentHTML('beforeend', arbetsplatsHTML);
                });
            } else {
                console.error('Kunde inte hitta arbetslivserfarenheterContainer');
            }
        })

        .catch(error => console.error('Error fetching CV data:', error));


        const cvImage = document.querySelector('.cv-img'); //Hittar det element i DOM som har klassen 'cv-img'

        cvImage.addEventListener('click', function() { //Lägger till en händelselyssnare för klick på cvImage
            cvImage.src = 'image/easter-1.jpg'; //Ändrar källan till cvImage när det klickas på det
        });
});