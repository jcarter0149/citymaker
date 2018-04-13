const cityBodyRef = document.querySelector("#cityBody")

const cityDomBuilder = (city) => {

    let row = document.createElement("div")
    row.className = "cityRow"

    cityDatabase.cities.forEach(
        (currentCity, year) => {
        {
               cityBodyRef.appendChild(row)
               row = document.createElement("div")
               row.className = "cityRow"
           }

           const citySection = document.createElement("span")
            citySection.classList = "bordered city"
           

const cityName = document.createElement("h2")
cityName.classList = "city_name"
cityName.textContent = currentCity.name 
citySection.appendChild(cityName)

const cityYear = document.createElement("p")
cityYear.classList = "city_year"
cityYear.textContent = currentCity.year
citySection.appendChild(cityYear)

const cityTopFive = document.createElement("p")
cityTopFive.classList = "city_topfive"
cityTopFive.textContent = currentCity.topFive 
citySection.appendChild(cityTopFive)

row.appendChild(citySection)
            
            }
        )
    }
        
    

cityDomBuilder()