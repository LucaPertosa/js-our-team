// Creare array di oggetti per rappresentare i membri del team:		        
const team = [
    {
        fullName: "Wayne Barnett",
        job: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg",
    },
    {
        fullName: "Angela Caroll",
        job: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg",
    },
    {
        fullName: "Walter Gordon",
        job: "Office Manager",
        img: "walter-gordon-office-manager.jpg",
    },
    {
        fullName: "Angela Lopez",
        job: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg",
    },
    {
        fullName: "Scott Estrada",
        job: "Developer",
        img: "scott-estrada-developer.jpg",
    },
    {
        fullName: "Barbara Ramos",
        job: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg",
    },
];
console.log(team);
// Prelevo il div dove posizionare la card:
const myRow = document.querySelector(".row")
console.log(myRow);

// Creo ciclo for per stampare in console le informazioni di ogni membro del team
for (let i = 0; i < team.length; i++) {
    console.log(`Il membro ${i+1} si chiama:` + " " + team[i].fullName);
    console.log(`Il membro ${i+1} si occupa di:` + " " + team[i].job);
    console.log(`Foto membro ${i+1}:` + " " + team[i].img);
    // Genero la card e la inserisco nella row esistente in html
    const card = generateCard(team[i].fullName, team[i].job, team[i].img)
    myRow.append(card)
}



// FUNCTIONS
// Creo funzione per creare dinamicamente le col dei singoli membri:
function generateCard(name, job, text) {
    const newCard = document.createElement("div");
    newCard.classList.add("col-12");
    newCard.innerHTML = 
    `
    <div class="card">
        <div class="card-body">
            <p class="card-text">${name}</p>
            <p class="card-text">${job}</p>
            <p class="card-text">${text}</p>
        </div>
    </div>
    `;
    return newCard;
};

console.log(generateCard().innerHTML);