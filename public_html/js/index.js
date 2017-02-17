/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var listeFleurs = [];
var total = 0;

document.addEventListener('DOMContentLoaded', function() {
    var fleurs = document.getElementsByClassName('fleur');
    for (var i = 0; i < fleurs.length; i++){
        fleurs[i].addEventListener("click", function(event) {
            
            if (event.target.tagName.toLowerCase() === 'div' && event.target.classList.contains("fleur")){          
                if (event.target.classList.contains("fleurSelectionnee"))
                    event.target.classList.remove("fleurSelectionnee");
                else           
                    event.target.classList += " fleurSelectionnee";                    
            }else if (event.target.classList.contains("imagesFleurs")) {
                if (event.target.parentElement.classList.contains("fleurSelectionnee"))
                    event.target.parentElement.classList.remove("fleurSelectionnee");
                else           
                    event.target.parentElement.classList += " fleurSelectionnee"; 
            }
        }, false);
    }
});

function ajouterRose () {
    var p = document.createElement("p");
    total += 1;
    p.textContent = "Roses à 1€";
    listeFleurs.push(p);
    for (var i = 0; i < listeFleurs.length; i++) {
        document.getElementById("div_panier").appendChild(listeFleurs[i]);
    }
    document.getElementById("divRose").classList += " fleurSelectionnee";
    setTotal();
}
function ajouterMargerite () {
    var p = document.createElement("p");
    total += 2;
    p.textContent = "Margerite à 2€";
    listeFleurs.push(p);
    for (var i = 0; i < listeFleurs.length; i++) {
        document.getElementById("div_panier").appendChild(listeFleurs[i]);
    }
    document.getElementById("divMargerite").classList += " fleurSelectionnee";
    setTotal();
}
function ajouterTulipe () {
    var p = document.createElement("p");
    total += 3;
    p.textContent = "Tulipes à 3€";
    listeFleurs.push(p);
    for (var i = 0; i < listeFleurs.length; i++) {
        document.getElementById("div_panier").appendChild(listeFleurs[i]);
    }
    document.getElementById("divTulipe").classList += " fleurSelectionnee";
    setTotal();
}
function ajouterMuguet () {
    var p = document.createElement("p");
    total += 4;
    p.textContent = "Muguets à 4€";
    listeFleurs.push(p);
    for (var i = 0; i < listeFleurs.length; i++) {
        document.getElementById("div_panier").appendChild(listeFleurs[i]);
    }
    document.getElementById("divMuguet").classList += " fleurSelectionnee";
    setTotal();
}

function setTotal(){
    document.getElementById("totalId").innerText = 'Total : ' + total.toString() + ' €';
}