import products from "../products.json";

const d = document;
const gallery =  d.querySelector(".gallery");

export default function cards(){
    products.map(product =>{
        const card = d.createElement("FIGURE");
        card.classList.add("card");
        card.innerHTML = `
            <p class="card__header">${product.name}</p>
            <div class ="card__media">
                <picture>
                    <source srcset="${product.picture}.webp" type="image/webp">
                    <img width="327" height="327" loadin="lazy" src="${product.picture}.jpg">
                </picture>
            </div>
            <div class="card_supporting-text">
                <p>${product.description}</p>
                <p>Uso: ${product.use}</p>
                <p>Precio: $${product.price}</p>
            </div>
        `;

        gallery.appendChild(card);
    })
}