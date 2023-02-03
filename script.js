const btnPesquisar = document.querySelector('.pesquisarUser');
const inputPesquisar = document.querySelector('.inputPesquisar');
const dados = document.querySelector('.dados');
const infoPessoais = document.querySelector('.infoPessoais');
const locations = document.querySelector('.locations');
const twit = document.querySelector('.twit');
const websites = document.querySelector('.websites');
const companies = document.querySelector('.companies');

btnPesquisar.addEventListener('click', () => {
    const user = `https://api.github.com/users/${inputPesquisar.value}`;
    fetch(user)
        .then(response => response.json())
        .then(data => {
            const { avatar_url, name, bio, html_url } = data;
            const div = document.querySelector('.perfil');
            div.innerHTML = `
                <img class="imgPerfil" src="${avatar_url}" alt="Foto de Perfil">
                <div class="infos">
                <h1 class="nomePerfil" >${name}</h1>
                <p class="bioPerfil" >${bio}</p>
                <a class="linkVerPerfil" href="${html_url}" target="_blank">Ver Perfil</a>
                </div>
            `;


            dados.innerHTML = `
                <div>
                    <p class="repos">Repos</p>
                    <p class="valorRepos">${data.public_repos}</p>
                </div>
                <div>
                    <p class="repos">Followers</p>
                    <p class="valorRepos">${data.followers}</p>
                </div>
                <div>
                    <p class="repos">Following</p>
                    <p class="valorRepos">${data.following}</p>
                </div>

        `;

        locations.innerHTML =
        data.location === "" || data.location === null
          ? "No Location"
          : data.location;
      twit.innerHTML =
        data.twitter_username === "" || data.twitter_username === null
          ? "No Twitter"
          : data.twitter_username;
      websites.innerHTML =
        data.blog === "" || data.blog === null ? "No Website" : data.blog;
      companies.innerHTML =
        data.company === "" || data.company === null
          ? "No Company"
          : data.company;
              

        }
        
    );



});

const dark = document.querySelector(".checkbox");
    const body = document.querySelector("body");

    dark.onclick = function () {
      body.classList.toggle("Mudardark");
    };



        
        








