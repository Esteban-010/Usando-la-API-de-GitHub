const btn = document.getElementById("btn")
const name = document.getElementById("name")
const content = document.getElementById("content")

/*
const ejecutar = async () => {
    const response = await fetch(
        "https://api.github.com/repos/Esteban-010/Usando-la-API-de-Marvel"
        )
    console.log(response)
    if(response.status == 200){
        const response2 = await response.json()
        console.log(response2)
    }
}
*/

const drawRepos = repos => {
    if(repos.length != 0){
        const ul = document.createElement("ul")

        repos.forEach(repo => {
            if(repo.description == null){
                repo.description = "Sin descripción..."
            }
    
            const hmtl = `
                <li><a href="${repo.html_url}">${repo.name}</a>
                    <h4>Descripción:</h4>
                    <p>${repo.description}</p>
                </li>
            `
            ul.insertAdjacentHTML("beforeend", hmtl)
    
        })
        content.appendChild(ul);
    }
    else{
        content.textContent = "Sin repositorios."
    }

}

const showRepos = async user => {
    const response = await fetch(
        `https://api.github.com/users/${user}/repos`
        )
    console.log(response)
    if(response.status == 200){
        const response2 = await response.json()
        console.log(response2)
        drawRepos(response2)
        
    }
    else{
        console.log("Ocurrió un error.")
    }
}


btn.addEventListener("click", () => {
    const user = {
    name: name.value
    }

    showRepos(user.name)
})