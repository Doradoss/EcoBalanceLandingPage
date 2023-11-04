const services = document.querySelector("#informacion");
const portafolio = document.querySelector("#aliados");

/*Menu Servicios*/
services.addEventListener("click", (s) =>{
    s.preventDefault();

    const sectionS = document.querySelector(".informacion");
    sectionS.scrollIntoView({behavior:"smooth"});
})

/*Menu Portafolio*/
portafolio.addEventListener("click", (p) =>{
    p.preventDefault();

    const sectionP = document.querySelector(".aliados");
    sectionP.scrollIntoView({behavior:"smooth"});
})