const searchNewGame = ()=> {
    const searchBoxGameId = document.getElementById('searchGameId').value;
    if(searchBoxGameId != '')
        window.location.assign('/?id=' + searchBoxGameId);
}