// Recebe atributos do html
const userInputText = document.getElementById('input-search')
const button = document.getElementById('button-search')
const deleteText = document.getElementById('delete-text')


//Evento do botão buscar inicia busca
button.addEventListener('click', () => {
    search()
 
});

// Dá visibilidade para o botao de pagar texto caso haja texto no input
userInputText.addEventListener('input',() => {
    if (userInputText.value.trim() !== ""){
        deleteText.style.display="flex"
    }else{
        deleteText.style.display="none"
    }
})


// Inicia busca caso enter seja pressionado
userInputText.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    search();
  }
})


// A funcão que executa a busca
function search(){
// Verifica e o campo não está vazio antes de enviar
    if (userInputText.value.trim() !== ""){
        const query = userInputText.value;
        const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = googleSearchURL;
    }else{
       
        alert('Digite algo no campo de pesquisa')
    }
   
}

// Deleta o texto quando clicado
deleteText.addEventListener('click' , () =>{

    userInputText.value = ''
    deleteText.style.display="none"
} )




// Data
const showDate = document.getElementById('date');

const data = new Date();

const day = String(data.getDate()).padStart(2, '0');
const month = String(data.getMonth() + 1).padStart(2, '0');
const year = data.getFullYear();

const finalDate = `${day}.${month}.${year}`;



showDate.innerHTML = finalDate;
