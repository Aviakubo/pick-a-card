const promise = $.ajax({
    url: 'https://deckofcardsapi.com/api/deck/new/'
})

promise.then(
    (data) => {
        console.log(data);
    },
    (error) => {
        console.log('bad request: ', error);
    }
);