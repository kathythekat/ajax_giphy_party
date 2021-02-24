console.log("Let's get this party started!");


$('form').on('submit', requestGiphy);

async function requestGiphy(e) {
    e.preventDefault();
    let gifInput = $('#gifname').val();
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${gifInput}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    let dataArr = response.data.data;
    let randomNum = Math.floor(Math.random() * (dataArr.length-1));
    let imgUrl = dataArr[randomNum].images.original.url
    $('#gallery').append(`<img src=${imgUrl}></img>`);
}     

$('#remove-button').on('click', () => {
    $('#gallery').empty();
})