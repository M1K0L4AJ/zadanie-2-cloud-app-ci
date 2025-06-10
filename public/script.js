const cities = {
    PL: ["Warszawa", "Kraków", "Wrocław", "Poznań", "Gdańsk"],
    DE: ["Berlin", "Monachium", "Hamburg", "Frankfurt", "Kolonia"],
    GB: ["Londyn", "Manchester", "Liverpool", "Edynburg", "Bristol"],
    FR: ["Paryż", "Marsylia", "Lyon", "Tuluza", "Nicea"],
    IT: ["Rzym", "Mediolan", "Neapol", "Florencja", "Wenecja"]
};

const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('city');

// Funkcja aktualizująca miasta w zależności od kraju
function updateCities() {
    const selectedCountry = countrySelect.value;
    citySelect.innerHTML = ''; // czyści miasta

    cities[selectedCountry].forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });
}

// Ustaw domyślne miasta przy pierwszym załadowaniu strony
updateCities();

// Aktualizacja miasta po zmianie kraju
countrySelect.addEventListener('change', updateCities);

// Pobieranie pogody
document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const country = countrySelect.value;
    const city = citySelect.value;
    const apiKey = 'b395d06779397de3578e661fc8fb5898';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric&lang=pl`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = `
                Miasto: ${data.name}<br>
                Temperatura: ${data.main.temp} °C<br>
                Pogoda: ${data.weather[0].description}
            `;
        })
        .catch(() => {
            document.getElementById('result').innerText = 'Błąd pobierania danych.';
        });
});
