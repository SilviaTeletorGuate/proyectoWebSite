const botonAceptarCookies = document.getElementById("btn-aceptar-cookies");
const avisoDeCookies = document.getElementById("aviso-cookies");
const fondoAvisoCookies = document.getElementById("fondo-aviso-cookies");

if(!localStorage.getItem(`cookiesAceptadas`)){
avisoDeCookies.classList.add(`activo`);
fondoAvisoCookies.classList.add(`activo`);
};

botonAceptarCookies.addEventListener(`click`, () => {
    avisoDeCookies.classList.remove(`activo`);
    fondoAvisoCookies.classList.remove(`activo`);

    localStorage.setItem(`cookiesAceptadas`, true);

});
