// - Creiamo un array il cui contenuto sono i dati forniti di ogni membro racchiusi in uno oggetto

// - Creare un layout con una card di ogni singolo membro
// - Trasformare le stringhe delle foto in immagini effettive

const datiMembri = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        linkImg: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        linkImg: 'angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        linkImg: 'walter-gordon-office-manager.jpg',
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        linkImg: 'angela-lopez-social-media-manager.jpg',
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        linkImg: 'scott-estrada-developer.jpg',
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        linkImg: 'barbara-ramos-graphic-designer.jpg',
    },

]

// - Stampare con un ciclo for in i dati di ogni membro(compresa la strigna della foto)


const containerDOMElement = document.querySelector('.container');

for (let i = 0; i < datiMembri.length; i++) {

    const membroCorrente = datiMembri[i]

    console.log(membroCorrente.nome, membroCorrente.ruolo, membroCorrente.linkImg)

    containerDOMElement.innerHTML += `<div class="card">
    <img src="./img/${membroCorrente.linkImg}"> 
    <p class="name">${membroCorrente.nome}</p> 
    <p class="role">${membroCorrente.ruolo}</p> 
    </div>`

}
