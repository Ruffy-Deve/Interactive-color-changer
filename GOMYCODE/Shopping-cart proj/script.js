document.addEventListener("DOMContentLoaded", () => {
    const UpdateTotal = () => {
        let total = 0;
        document.querySelectorAll(".card").forEach(card => {
            const priceText = card.querySelector(".unit-price").textContent;
            const unitPrice = parseFloat(priceText);
            const quantity = parseInt(card.querySelector(".quantity").textContent);
            total += unitPrice * quantity;
        });
        document.querySelector(".total").textContent = `${total} $`;
    };

    document.querySelectorAll(".card").forEach(card => {
        const plusBtn = card.querySelector(".fa-plus-circle");
        const minusBtn = card.querySelector(".fa-minus-circle");
        const quantityBtn = card.querySelector(".quantity");
        const deleteBtn = card.querySelector(".fa-trash-alt");
        const likeBtn = card.querySelector(".fa-heart");

        //increase Quantity
        plusBtn.addEventListener("click", () => {
            quantityBtn.textContent = parseInt(quantityBtn.textContent) + 1;
            UpdateTotal();
        });
        
        //Decrease Quantity
        minusBtn.addEventListener("click", () => {
            let qty = parseInt(quantityBtn.textContent);
            if (qty > 0) {
                quantityBtn.textContent = qty - 1;
                UpdateTotal();
            }
        });

        //Delete Product Card
        deleteBtn.addEventListener("click", () => {
            card.remove();
            UpdateTotal();
        });

        //Toggle Like
        likeBtn.addEventListener("click", () => {
            likeBtn.classList.toggle("liked");
        });
    });

    UpdateTotal();
});