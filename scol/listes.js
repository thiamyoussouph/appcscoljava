const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTkzNzU5NywiZXhwIjoxOTU1NTEzNTk3fQ.lphWuEwmrvZjdwMKBcPQcVm128dt8n_zvg2TJQaCvvo"

const API_URL = "https://zngbuncbrvmfaaqxaton.supabase.co/rest/v1/tof"

const affichedetail=document.getElementById("detail")
console.log(affichedetail);
window.addEventListener("DOMContentLoaded", (event) => {
  //RECUPERATION DES DONNEES VIA API


  fetch(API_URL, {
    headers: {
      apikey: API_KEY,
    },
  })
    .then((response) => response.json())
    .then((tof) => {
      tof.forEach((tof) => {
        creercard(tof)
      })
    })
})

const part = document.getElementById("divecartes")
function creercard(apprenant) {
  const detail="btndetail"+apprenant.id
  const btnsup = "btn-sup" + apprenant.id
  const btnmod = "btn-mod" + apprenant.id
  part.insertAdjacentHTML('beforebegin', `<div class="card" id="card" style="  margin-top: %; margin-left:0.1%; width: 25%; 
  height:rem; background-color: grey;  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);border-radus:252%;">
      <div class="row">
          <div class="col-4"><img src="index.png" alt="" srcset="" style="width: 5rem;  height: 5rem" ;> </div>
          <div class="col-6 les ">
              <div class="d-flex" style="margin-top:20%;margin-left:89%; margin-bottom:17%">
                  <img id="${btnsup}" src="trash.svg" alt="" srcset="">
                  <img id="${btnmod}" src="pencil-square.svg" alt="" srcset="">
              </div>
              <h2>${apprenant.nom} ${apprenant.prenom}</h2>
              <p>${apprenant.contenu}</p>
              <h2>${apprenant.niveau}</h2>
              
              <button class="btn btn-danger" id="${detail}">details</button>
          </div>
      </div>

  </div> `)
  const detal=document.getElementById(detail)
console.log(detal);
detal.addEventListener("click",(e)=>{
 alert("hello")
 affichedetail.insertAdjacentHTML('beforebegin', `<div class="card" id="card" style="  margin-top: 2%; margin-left:0.1%%; width:25; 
  height: rem; background-color: grey;  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);;">
      <div class="row">
          <div class="col-2"><img src="index.png" alt="" srcset="" style="width: 5rem;  height: 5rem" ;> </div>
          <div class="col-6 les ">
              <div class="d-flex" style="margin-top:-20%;margin-left:89%; margin-bottom:17%">
                  <img id="${btnsup}" src="trash.svg" alt="" srcset="">
                  <img id="${btnmod}" src="pencil-square.svg" alt="" srcset="">
              </div>
              <h2>${apprenant.nom} ${apprenant.prenom}</h2>
              <p>${apprenant.contenu}</p>
              <h2>${apprenant.niveau}</h2>
              
              <button class="btn btn-danger" id="${detail}">details</button>
          </div>
      </div>

 `
  )
})
}

