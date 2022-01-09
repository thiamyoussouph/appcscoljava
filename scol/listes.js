const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTkzNzU5NywiZXhwIjoxOTU1NTEzNTk3fQ.lphWuEwmrvZjdwMKBcPQcVm128dt8n_zvg2TJQaCvvo"

const API_URL = "https://zngbuncbrvmfaaqxaton.supabase.co/rest/v1/tof"

const affichedetail = document.getElementById("detail")

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
  const detail = "btndetail" + apprenant.id
  const btnsup = "btn-sup" + apprenant.id
  const btnmod = "btn-mod" + apprenant.id
  part.insertAdjacentHTML('beforebegin', `<div class="card" id="card" style="  margin-top: 1%; margin-left:0.1%; width: 70%;
  height:rem; background-color: grey; :focus box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);border-radus:25%;">
      <div class="row">
          <div class="col-2"><img src="index.png" alt="" srcset="" style="width: 5rem;  height: 7em" ;> </div>
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
  const mod = document.getElementById(btnmod)

  mod.addEventListener("click", (e) => {
    
    
      e.stopPropagation()
      const envoimod=document.getElementById("modifier")
      
      envoimod.addEventListener("click",(e)=>{
        alert("on veu modifier" )
        fetch(API_URL+"?id=eq."+apprenant.id, {
          method:"PATCH",
          headers: {
            apikey: API_KEY,
            "Content-Type": "application/json",
            Prefer: "return=representation",
          
          },
          body:JSON.stringify({
            "nom":nom.value,
            "prenom":prenom.value,
            "contenu":message.value,
            "niveau":niveau.value

          })
        })
          .then((response) => response.json())
          .then((tof) => {
            tof.forEach((tof) => {
             location.reload()
            })
          })

      })

    
  
  })
  const sup = document.getElementById(btnsup)
  sup.addEventListener("click", (e) => {
    alert("on veux suprimer")
    fetch(API_URL+"?id=eq."+apprenant.id, {
      method:"DELETE",
      headers: {
        apikey: API_KEY,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      
      },
    })
      .then((response) => response.json())
      .then((tof) => {
        tof.forEach((tof) => {
         location.reload()
        })
      })
  })
  const detal = document.getElementById(detail)
  

  detal.addEventListener("click", (e) => {


    alert("hello")
    affichedetail.insertAdjacentHTML('beforebegin', `<div class="card" id="card" style="  margin-top: 2%; margin-left:0.1%%; width:25; 
  height: rem; background-color: grey;  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);;">
      <div class="row">
          <div class="col-2"><img src="index.png" alt="" srcset="" style="width: 5rem;  height: 5rem" ;> </div>
          <div class="col-6 les ">
              <div class="d-flex" style="margin-top:-10%;margin-left:89%; margin-bottom:17%">
               <span class ="btn"id="delete">X</span>
                  <img id="${btnsup}" src="trash.svg" alt="" srcset="">
                  <img id="${btnmod}" src="pencil-square.svg" alt="" srcset="">
              </div>
              <h2>${apprenant.nom} ${apprenant.prenom}</h2>
              <p>${apprenant.contenu}</p>
              <h2>${apprenant.niveau}</h2>
              <p>maquette</p>
              <div class="progress"style="width: 60%; margin:1%"id="progress1">
    <div class="progress-bar bg-success" role="progressbar" style="width: ${apprenant.maquette}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <p>integration</p>
  <div class="progress" style="width: 60%; margin:1%"id="progress2">
 <div class="progress-bar bg-info" role="progressbar" style="width:${apprenant.integration}%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <p>java</p>
  <div class="progress" style="width:60%; margin:1%">
    <div class="progress-bar bg-warning" role="progressbar" style="width:${apprenant.java}%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <p>php</p>
  <div class="progress"style="width: 60%; margin:1%"id="progress4">
    <div class="progress-bar bg-danger" role="progressbar" style="width:${apprenant.php}%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <p>javascripte</p>
  <div class="progress"style="width: 60%; margin:1%"id="progress5">
    <div class="progress-bar bg-danger" role="progressbar" style="width:${apprenant.javascripte }%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
          </div>
      </div>

 `
    )
    
   console.log(typeof apprenant.niveau);
    
      maquet.style.width=apprenant.maquette
      console.log(maquet);
        // bar.forEach(bar => {
        //   console.log(bar);
        //   bar.style.width="60%"
        //   bar.innerHTML="60%"
        
   

    const deleted = document.getElementById("delete")
    

    deleted.addEventListener("click", (e) => {
      alert("o veux suprimmer ")
      affichedetail.previousSibling.remove(card)
      console.log(affichedetail);
      
      
    })
  })

}


