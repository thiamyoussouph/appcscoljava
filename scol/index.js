const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTkzNzU5NywiZXhwIjoxOTU1NTEzNTk3fQ.lphWuEwmrvZjdwMKBcPQcVm128dt8n_zvg2TJQaCvvo"

const API_URL = "https://zngbuncbrvmfaaqxaton.supabase.co/rest/v1/tof"
tab=[]
console.log(tab);
const sauvegarder=document.getElementById("sauvegarder")
const part=document.getElementById("divecarte")
const boutonajout=document.getElementById("ajouter")
const nom=document.getElementById("nom")
const prenom=document.getElementById("prenom")
const message=document.getElementById("message")
const nouveau=document.getElementById("niveau")
const maquette=document.getElementById("maquette")
const integration=document.getElementById("integration")
const javascripte=document.getElementById("javascript")
const java=document.getElementById("java")
const php=document.getElementById("php")
 console.log(nouveau);

 const inputtitre=document.getElementById("exampleInputEmail1")
  const inpusuget=document.getElementById("message")
  inpusuget.addEventListener("input",(e)=>{
    const maxttext=20
    const contenue=inpusuget.value
    const longeursaisie=contenue.length
    const reste=maxttext-longeursaisie


        const progres=document.getElementById("progression")
      const rest=document.getElementById("reste")

      const para=document.getElementById("contenuesaisi")
      progres.textContent=longeursaisie
      rest.textContent = "il vous reste "+reste
   
       
      
      if(reste<=5){
        para.style.color="yellow"
      }
      if(reste<0){
     para.style.color="red"
     valider.disabled = true
      }
  })



function creercard(apprenant){
   
    const btnsup="btn-sup"+apprenant.id
    const btnmod="btn-mod"+apprenant.id
  part.insertAdjacentHTML('beforebegin', `<div class="card"  id="card"style="  margin-top: 2%; margin-left: 2%; width: 33rem; 
   height: 15rem; background-color: grey;  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);;">
  <div class="row">
  <div class="col-2"><img src="index.png" alt="" srcset=""style="width: 7rem;  height: 7rem";>  <img src="x.svg" alt="" srcset=""></div>
  <div class="col-6 les ">
  <div class="d-flex" style="margin-top:-10%;margin-left:120%;">
  <img id="${btnsup}"src="trash.svg" alt="" srcset="">
  <img id="${btnmod}"src="pencil-square.svg" alt="" srcset=""></div>
      <h2>${apprenant.nom}    ${apprenant.prenom}</h2>
      <p>${apprenant.contenu}</p>
      <h2>${apprenant.niveau}</h2>
       <h2>${apprenant.niveau}</h2>

      
  </div>
</div>

</div>  `);
const carte=document.getElementById("card")
    const idmodifier=btnmod.substring(7,btnmod.length)

    const testemodifier=document.getElementById(btnmod)
    testemodifier.addEventListener("click",(e)=>{
 
      part.insertAdjacentHTML('beforebegin', `<div class="card"  id="card"style="  margin-top: 2%; margin-left: 2%; width: 33rem; 
   height: 15rem; background-color: grey;  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);;">
  <div class="row">
  <div class="col-2"><img src="index.png" alt="" srcset=""style="width: 7rem;  height: 7rem";>  <img src="x.svg" alt="" srcset=""></div>
  <div class="col-6 les ">
  <div class="d-flex" style="margin-top:-10%;margin-left:120%;">
  <img id="${btnsup}"src="trash.svg" alt="" srcset="">
  <img id="${btnmod}"src="pencil-square.svg" alt="" srcset=""></div>
      <h2>${apprenant.nom}    ${apprenant.prenom}</h2>
      <p>${apprenant.contenu}</p>
      <h2>${apprenant.niveau}</h2>
       <h2>${apprenant.niveau}</h2>
  </div>
</div>

</div>  `);
   e.preventDefault()
   
   tab.forEach(apprenant => {
       if(apprenant.id==idmodifier){
  alert("on veux modifier")
           nom.value=apprenant.nom
           prenom.value=apprenant.prenom
           niveau.value=apprenant.niveau
           message.value=apprenant.contenu
           boutonajout.textContent="modifier"
           let index=tab.indexOf(newtab)
           console.log(index);
           tab.splice(index,1)
          
           part.appendChild(card).remove(carte)
           console.log(tab);
       }
   });
   
    })
    const testesuprimer=document.getElementById(btnsup)
 
 testesuprimer.addEventListener("click",(e)=> {
   
        let index=tab.indexOf(newtab)
    console.log(index);
    tab.splice(index,1)
    console.log(tab);
    part.appendChild(card).remove(carte)
    // création de nos ids
console.log(tab);
 })
 
 
    
  const idButtonmodifier = "btn_valider-" + tab.id

   

}

boutonajout.addEventListener("click",(e)=>{
    e.preventDefault()
  console.log(boutonajout.textContent);
    const nomaisi=nom.value
    const prenonsaisi=prenom.value
const messages=message.value
const niveau=nouveau.value
const maquetage=maquette.value
const integrations=integration.value
const javascript=javascripte.value
const javas=java.value
const phps=php.value
console.log(niveau);
newtab= {
      id:Date.now(),
        nom:nomaisi,
        prenom:prenonsaisi,   
        contenu:messages,            
        niveau:niveau,
        maquette:maquetage,
        integration:integrations,
        javascripte:javascript,
        java:javas,
        php:phps
    } 
    // fetch(API_URL, {
    //     method: "POST",
    //     headers: {
    //       apikey: API_KEY,
    //       "Content-Type": "application/json",
    //       Prefer: "return=representation",    
    //     },
    //     body: JSON.stringify(newtab),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       ideeCreeAuNiveauAPI = data[0]
    //       //AJOUT DE LA NOUVELLE IDEE AU NIVEAU DE LA PAGE
    //       (ideeCreeAuNiveauAPI)
    //     })
   tab.push(newtab)
  
 creercard(newtab)

prenom.value=""
   message.value=""
   nouveau.value=""
  nom.value=""
maquette.value=""
console.log(maquette.value);
  integration.value=""
javascript.value=""
php.value=""
java.value=""
  

})
// btnmodifier.addEventListener("click",(e)=>{
//     alert("jojo")
// }) 
function suprimercarte(apprenant,creercard){
    // tab.forEach((tab) => {
    //     const cartepositiontableu=tab.indexOf(tab)
    //     tab.id===apprenant.id && tab.splice(cartepositiontableu,1)
        
    // });
   
    // // for(var i=0;i<tab.length;i++){
      
        // if(tab[i]===apprenant.id){
        //     console.log("je suis le tebab de "+tab[i]);
        //     console.log(tab[i]);
        //     tab.splice(tab[i],1)
           
        // }
        let index=tab.indexOf(newtab)
    console.log(index);
    tab.splice(index,1)
    console.log(tab);
    part.appendChild.remove(card)
    // création de nos ids

    // }
alert("on suprime tout")
}
sauvegarder.addEventListener("click",(e)=>{

    // alert("sauderder")
    // fetch(API_URL, {
    //     method: "POST",
    //     headers: {
    //       apikey: API_KEY,
    //       "Content-Type": "application/json",
    //       Prefer: "return=representation",
    //     },
    //     body: JSON.stringify(newtab),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       ideeCreeAuNiveauAPI = data[0]
    //       //AJOUT DE LA NOUVELLE IDEE AU NIVEAU DE LA PAGE
    //       (ideeCreeAuNiveauAPI)
    //     })
    tab.forEach(apprenant =>{
      delete apprenant['id']
        fetch(API_URL, {
            method: "POST",
            headers: {
              apikey: API_KEY,
              "Content-Type": "application/json",
              Prefer: "return=representation",
            },
            body: JSON.stringify(apprenant),
          })
            .then((response) => response.json())
            .then((data) => {
              tof = data[0]
              console.log(tof);
              //AJOUT DE LA NOUVELLE IDEE AU NIVEAU DE LA PAGE
             
            })
        })
       
      
       part.innerText="vos donner on bien etais enregistrer "
})
