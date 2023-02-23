// DarkMode
// let modoOscuro 

// localStorage.getItem("modoOscuro") ? (modoOscuro = JSON.parse(localStorage.getItem("modoOscuro"))) : (localStorage.setItem("modoOscuro", false)), (modoOscuro = JSON.parse(localStorage.getItem("modoOscro")))


// modoOscuro == "true" ? (document.body.classList.add("darkMode")) : (document.body.classList.remove("darkMode"))

// botonDarkMode.addEventListener("click",()=>{
//     document.body.classList.add("darkMode")
//     localStorage.setItem("modoOscuro", true)
// })

// botonLightMode.addEventListener("click",()=>{
//     document.body.classList.remove("darkMode")
//     localStorage.setItem("modoOscuro", false)
// })

// let eliminarModeBtn = document.getElementById("eliminarMode")

// eliminarModeBtn.addEventListener("click",()=> {
// localStorage.removeItem("modoOscuro")
// localStorage.clear()
// })


const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
            function cambiaTema(ev){
                if(ev.target.checked){
                    document.documentElement.setAttribute('tema', 'light');
                } else {
                    document.documentElement.setAttribute('tema', 'dark');
                }
            }
            colorSwitch.addEventListener('change', cambiaTema);