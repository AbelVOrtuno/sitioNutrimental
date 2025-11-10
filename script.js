document.addEventListener("DOMContentLoaded",()=> {
    const cards = document.querySelectorAll("article");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },{threshold: 0.1});

    cards.forEach(card => observer.observe(card));
});
// carrito funcional //
let cartCount = 0;
const cartCountElement = document.querySelector("#cart-count");
const addButtons = document.querySelectorAll(".btn-reservar");

addButtons.forEach(btn => {
    btn.addEventListener("click",() => {
        cartCount++;
        cartCountElement.textContent = cartCount;
        console.log('${btn.dataset.product} agregado al carrito');
    });
});
// FAQ desplegable //
/*document.querySelectorAll(".faq-pregunta").forEach(btn => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        answer.classList.toggle("active");
    });
}); */
// Validacion de formulario de contacto //
document.getElementById("formContacto").addEventListener("submit", e => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if(!nombre || !correo || !mensaje) {
        console.log("Por favor completa todos los campos!");
        return;
    }
    console.log("Formulario enviado correctamente");
});

// Validacion de suscripcion //
document.getElementById("formSuscripcion").addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("emailSuscripcion").value.trim();
    if (!email) {
        console.log("Introduce un correo valido");
        return;
    }
    console.log("Suscripcion completada correctamente");
});

// FaQ con flecha animada y efecto de acordeon //

document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('.faq-pregunta');

    console.log('FaQ botones encontrados:', faqButtons.length);

    faqButtons.forEach(btn => {
        btn.addEventListener('click', (e)=> {
            e.preventDefault();

            const respuesta = btn.nextElementSibling;
            const estabaAbierta = respuesta.classList.contains('active');

            document.querySelectorAll('.faq-respuesta').forEach(r => r.classList.remove('active'));
            document.querySelectorAll('.faq-pregunta').forEach(q => q.classList.remove('active'));

            if (!estabaAbierta) {
                respuesta.classList.add('active');
                btn.classList.add('active');
            }

            console.log('Click FaQ:', btn.textContent.trim(), '-> estabaAbierta:' , estabaAbierta);
        })
    })
})


/*document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('.faq-pregunta');

    console.log('FaQ botones encontrados:', faqButtons.length);
}) */
   

   