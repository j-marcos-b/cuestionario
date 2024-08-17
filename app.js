document.getElementById("btnFront").addEventListener("click", function () {
    document.getElementById("pregunta1").classList.add("hidden");
    document.getElementById("pregunta2").classList.remove("hidden");
  });
  
  document.getElementById("btnBack").addEventListener("click", function () {
    document.getElementById("pregunta1").classList.add("hidden");
    document.getElementById("pregunta3").classList.remove("hidden");
  });
  
  document.getElementById("btnReact").addEventListener("click", function () {
    document.getElementById("pregunta2").classList.add("hidden");
    document.getElementById("pregunta4").classList.remove("hidden");
  });
  
  document.getElementById("btnVue").addEventListener("click", function () {
    document.getElementById("pregunta2").classList.add("hidden");
    document.getElementById("pregunta4").classList.remove("hidden");
  });
  
  document.getElementById("btnCSharp").addEventListener("click", function () {
    document.getElementById("pregunta3").classList.add("hidden");
    document.getElementById("pregunta4").classList.remove("hidden");
  });
  
  document.getElementById("btnJava").addEventListener("click", function () {
    document.getElementById("pregunta3").classList.add("hidden");
    document.getElementById("pregunta4").classList.remove("hidden");
  });
  
  document.getElementById("btnFullStack").addEventListener("click", function () {
    document.getElementById("pregunta4").classList.add("hidden");
    document.getElementById("pregunta5").classList.remove("hidden");
  });
  
  document
    .getElementById("btnEspecialista")
    .addEventListener("click", function () {
      document.getElementById("pregunta4").classList.add("hidden");
      document.getElementById("pregunta5").classList.remove("hidden");
    });
  
  document
    .querySelector("#pregunta5 input")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("pregunta5").classList.add("hidden");
        document.getElementById("pregunta6").classList.remove("hidden");
      }
    });
  
  document
    .querySelector("#pregunta6 input")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("pregunta6").classList.add("hidden");
        document.getElementById("btn-enviar").classList.remove("hidden");
      }
    });
  
  document.querySelector("#enviar").addEventListener("click", function () {
    document.getElementById('btn-enviar').classList.add('hidden');
    document.getElementById('mensajeEnviado').classList.remove('hidden');
  });
  