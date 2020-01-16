const React = require("react");

countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]

for (i = 0; i < countries.length; i++) {
    var newOption1 = document.createElement("option");
    // if (countries[i].localeCompare("Congo (Congo-Brazzaville)") == 0){
    //     newOption1.setAttribute("value", "Congo");
    // }
    // else {
    //     newOption1.setAttribute("value", countries[i]);
    // }
    newOption1.innerHTML = countries[i];
    document.getElementById("countries1select").appendChild(newOption1);

    var newOption2 = document.createElement("option");
    newOption2.setAttribute("value", countries[i]);
    newOption2.innerHTML = countries[i];
    document.getElementById("countries2select").appendChild(newOption2);
}

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", onSubmitClick);

function getInputs() {
    const firstCountry = document.getElementById("countries1select").value
    const secondCountry = document.getElementById("countries2select").value

    return {
        firstCountry: firstCountry,
        secondCountry: secondCountry,
    }
}

function onSubmitClick() {
    console.log(getInputs())
}

function AppendP() {
    var breakingNewsContainer = document.getElementById("BreakingNews");

    breakingNewsContainer.parentNode.removeChild(breakingNewsContainer);

    var list = document.getElementsByTagName("body")[0];

    var newBreakingNews = document.createElement("div");
    newBreakingNews.setAttribute('id', "BreakingNews");
    list.appendChild(newBreakingNews);

    breakingNewsContainer = document.getElementById("BreakingNews");

    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=f03e83ddffd14a66b934ee401f346663')
        .then((resp) => {
            return resp.json();
        })
        .then((myJson) => {
            var articles = myJson.articles;

            for (i = 0; i < articles.length; i++) {
                var box = document.createElement("p");
                var rightBox = document.createElement("div");
                var leftBox = document.createElement("div");

                box.setAttribute("class", "font");
                rightBox.setAttribute("class", "images");
                leftBox.setAttribute("class", "text");

                var link = document.createElement("a");
                link.setAttribute("target", "_blank");
                link.setAttribute("id", "para");

                var descrip = document.createElement("p");

                var image = document.createElement("img");

                link.innerHTML = articles[i].title;
                link.setAttribute("href", articles[i].url)
                descrip.innerHTML = articles[i].description

                image.setAttribute("src", articles[i].urlToImage);
                image.setAttribute("alt", "pic");
                image.setAttribute("width", 120);

                rightBox.appendChild(image);
                leftBox.appendChild(link);
                leftBox.appendChild(descrip);

                box.appendChild(rightBox);
                box.appendChild(leftBox);

                breakingNewsContainer.appendChild(box);
            }
        });
}

function Go() {
    var newsContainer = document.getElementById("News");
    var breakingNewsContainer = document.getElementById("BreakingNews");

    newsContainer.parentNode.removeChild(newsContainer);

    var list = document.getElementsByTagName("body")[0];

    var newElement = document.createElement("div");
    newElement.setAttribute('id', "News");
    list.appendChild(newElement);

    var newBreakingNews = document.createElement("div");
    newBreakingNews.setAttribute('id', "BreakingNews");
    list.appendChild(newBreakingNews);

    newsContainer = document.getElementById("News");

    let country1 = encodeURIComponent(getInputs().firstCountry)
    let country2 = encodeURIComponent(getInputs().secondCountry)
    let date = encodeURIComponent("2020-01-13")

    let requestUrl1 = `https://newsapi.org/v2/everything?q=${country1}+${country2}&from=${date}&sortBy=popularity&apiKey=f03e83ddffd14a66b934ee401f346663`
    fetch(requestUrl1)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {

            console.log(myJson);
            var articles1 = myJson.articles;

            for (i = articles1.length - 1; i >= 0; i--) {
                var box = document.createElement("div");
                var rightBox = document.createElement("div");
                var leftBox = document.createElement("div");

                box.setAttribute("class", "font");
                rightBox.setAttribute("class", "images");
                leftBox.setAttribute("class", "text");

                var link = document.createElement("a");
                link.setAttribute("target", "_blank");
                link.setAttribute("id", "para");

                var descrip = document.createElement("p");

                var image = document.createElement("img");

                link.innerHTML = articles1[i].title;
                link.setAttribute("href", articles1[i].url);
                descrip.innerHTML = articles1[i].description;

                image.setAttribute("src", articles1[i].urlToImage);
                image.setAttribute("alt", "pic");
                image.setAttribute("width", 120);

                rightBox.appendChild(image);
                leftBox.appendChild(link);
                leftBox.appendChild(descrip);

                box.appendChild(rightBox);
                box.appendChild(leftBox);

                newsContainer.appendChild(box);
            }
        });
}