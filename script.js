/*=========================================================
    PORTAFOLIO PROFESIONAL
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================
        MENÚ RESPONSIVE
    =========================*/

    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav-links");

    if(menu){

        menu.addEventListener("click", ()=>{

            nav.classList.toggle("active");

        });

    }

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            nav.classList.remove("active");

        });

    });

    /*=========================
        HEADER SCROLL
    =========================*/

    const header=document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>70){

            header.classList.add("scroll-header");

        }

        else{

            header.classList.remove("scroll-header");

        }

    });

    /*=========================
        BOTÓN SUBIR
    =========================*/

    const button=document.createElement("button");

    button.className="scroll-top";

    button.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

    document.body.appendChild(button);

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            button.classList.add("show-top");

        }

        else{

            button.classList.remove("show-top");

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /*=========================
        SECCIÓN ACTIVA
    =========================*/

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-150;

            const height=section.offsetHeight;

            if(window.scrollY>=top && window.scrollY<top+height){

                current=section.id;

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active-link");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active-link");

            }

        });

    });

    /*=========================
        ANIMACIÓN DE APARICIÓN
    =========================*/

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    document.querySelectorAll(

        ".about-card,.skill-card,.project-card,.education-card,.knowledge-item"

    ).forEach(el=>observer.observe(el));

    /*=========================
        CONTADORES
    =========================*/

    const counters=document.querySelectorAll(".stat-card h3");

    counters.forEach(counter=>{

        const target=counter.innerText;

        if(target==="24/7") return;

        const number=parseInt(target);

        let start=0;

        const interval=setInterval(()=>{

            start++;

            counter.innerHTML=start+"+";

            if(start>=number){

                counter.innerHTML=target;

                clearInterval(interval);

            }

        },80);

    });

});

/*=========================================================
    EMAILJS
=========================================================*/

(function () {
    emailjs.init({
        publicKey: "cogNgefyWP69gH-Mx",
    });
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("status");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.send("Gmail", "template_hx0fzte", {

            from_name: document.getElementById("from_name").value,

            from_email: document.getElementById("from_email").value,

            message: document.getElementById("message").value

        })

        .then(() => {

            status.innerHTML = "✅ ¡Mensaje enviado correctamente!";

            status.style.color = "#22c55e";

            form.reset();

        })

        .catch((error) => {

            console.error(error);

            status.innerHTML = "❌ Ocurrió un error al enviar el mensaje.";

            status.style.color = "#ef4444";

        });

    });

}