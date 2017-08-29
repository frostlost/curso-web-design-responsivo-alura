(function() {

    function select(element) {

        return document.querySelector(element);
    }

    var searchField = select('#campo-busca');
    var searchButton = select('#search-button');

    searchButton.addEventListener('click', function(event) {

        event.preventDefault();

        searchField.value === '' ? console.log('vazio') : console.log('preenchido');
    });

})();
