const apiURL = 'https://jsonplaceholder.typicode.com/users';

async  function consumoAPI(){
    try {
        const resultsDiv = document.getElementById('results');

        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const users = await response.json();
        datos = "";
        users.forEach(element => {
            datos = datos + `ID =${element.id} USERNAME=${element.name} <input type="button" value="Eliminar"><br>`;
        });
        resultsDiv.innerHTML = datos;        
    } catch (error) {
        console.error('Hubo un error:', error);
    }
}

