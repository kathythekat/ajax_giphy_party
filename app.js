console.log("Let's get this party started!");


$('form').on('submit', requestGiphy);

async function requestGiphy(e) {
    e.preventDefault();
    let gifInput = $('#gifname').val();
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${gifInput}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    console.log(response.data.data)
   

}      