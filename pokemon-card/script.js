// Seleção dos elementos da página com querySelector
const elNome = document.querySelector("#nome");
const elId = document.querySelector("#id");
const elAltura = document.querySelector("#altura");
const elPeso = document.querySelector("#peso");
const elImagem = document.querySelector("#imagem");

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then(resposta => resposta.json())
  .then(dados => {

    console.log(dados);

    // 1. Inserir o nome do Pokémon (primeira letra maiúscula)
    elNome.textContent = dados.name.charAt(0).toUpperCase() + dados.name.slice(1);

    // 2. Inserir o ID
    elId.textContent = "ID: " + dados.id;

    // 3. Inserir a altura (em decímetros)
    elAltura.textContent = dados.height;

    // 4. Inserir o peso (em hectogramas)
    elPeso.textContent = dados.weight;

    // 5. Inserir a imagem oficial do Pokémon
    elImagem.src = dados.sprites.other["official-artwork"].front_default;
    elImagem.alt = "Imagem de " + dados.name;

  })
  .catch(erro => {
    console.log("Erro ao consultar Pokémon:", erro);
    elNome.textContent = "Erro ao carregar";
  });
