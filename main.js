const btn = document.querySelector('.btn');
const contantMain = document.querySelector('.contant-main');
const contantSort = document.querySelector('.contant-main-sorte');
const imgLink     = document.querySelector('.imgLink');
const msgSorte    = document.querySelector('.msg-sorte');


// Lista de mensagens de sorte
const mensagensSorte = [
    "Acredite em si mesmo e tudo será possível.",
    "A sorte favorece a mente preparada.",
    "Seja a mudança que você deseja ver no mundo.",
    "Você é mais forte do que pensa e será mais feliz do que imagina.",
    "A persistência é o caminho do êxito.",
    "Acredite nos seus sonhos e eles se tornarão realidade.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Sua vida só melhora quando você faz.",
    "Cada dia é uma nova oportunidade para ser melhor.",
    "A vida é feita de escolhas; faça escolhas que te fazem feliz.",
  ];

  // Função para escolher aleatoriamente uma mensagem de sorte
function escolherMensagemAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * mensagensSorte.length);
    return mensagensSorte[indiceAleatorio];
  }
  

imgLink.addEventListener('click', function(){
   contantMain.style.display = 'none';
   contantSort.style.display = 'block';
   const mensagemAleatoria = escolherMensagemAleatoria();
  msgSorte.textContent = mensagemAleatoria;

})



btn.addEventListener('click', function(){
   contantMain.style.display = 'block';
   contantSort.style.display = 'none';



})