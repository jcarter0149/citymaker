const searchButton = document.getElementById('searchButton')

// const searchClick = () => {
    searchButton.addEventListener('click', function(){
        const searchInputYear =  document.getElementById('searchInput').value
        return cityDomBuilder(searchInputYear)
    })
