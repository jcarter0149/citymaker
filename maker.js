const cityBodyRef = document.querySelector("#cityBody")

const cityDomBuilder = (yearFilter) => {

    let row = document.createElement("div")
    row.className = "cityRow"

    
    cityDatabase.cities.forEach(
        (currentCity, i) => {


            if(i !== 0 && row.childNodes.length % 3 === 0) {
               cityBodyRef.appendChild(row)
               row = document.createElement("div")
               row.className = "cityRow"
            }
           
            if (!yearFilter || yearFilter === currentCity.year) {

                const citySection = document.createElement("div")
                citySection.className = "borderedcity"
                //This take the space out of my continent so it will work as a class
                citySection.classList.add(
                    currentCity.continent.replace(
                        " ", "" 
                    )
                )
            

                const cityName = document.createElement("h2")
                cityName.className = "cityname"
                cityName.textContent = currentCity.name 
                citySection.appendChild(cityName)

                const cityImg = document.createElement("img")
                cityImg.className = "cityimg"
                cityImg.src = currentCity.image
                citySection.appendChild(cityImg)

                const cityYear = document.createElement("p")
                cityYear.className = "cityyear"
                cityYear.textContent = currentCity.year
                citySection.appendChild(cityYear)

                const cityTopFive = document.createElement("p")
                cityTopFive.className = "citytopfive"
                cityTopFive.textContent = currentCity.topFive 
                citySection.appendChild(cityTopFive)

                //this will make the row even if it only has one element(not element but you know what i mean..thing?) in it
                row.appendChild(citySection)
            }
        }

    )

    cityBodyRef.appendChild(row)
}

        
    

cityDomBuilder()