const inicio = new Date("2024-02-09T00:00:00");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - inicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("contador").innerHTML =
    `${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

/* 🌸 PÉTALOS 🌸 */

function crearPetalo() {
  const petalo = document.createElement("div");
  petalo.classList.add("petal");

  petalo.style.left = Math.random() * 280 + "px";
  petalo.style.animationDuration = (3 + Math.random() * 5) + "s";

  document.querySelector(".petals").appendChild(petalo);

  setTimeout(() => {
    petalo.remove();
  }, 8000);
}

setInterval(crearPetalo, 350);
