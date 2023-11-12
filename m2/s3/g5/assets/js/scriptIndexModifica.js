function deleteItem(button) {
    let cardObj = button.closest(".card");
    if (cardObj) {
        cardObj.style.display = "none";
    }
}