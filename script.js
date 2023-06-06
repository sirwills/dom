function adjustQuantity(itemId, amount) {
    var quantityElement = document.getElementById(itemId + '-quantity');
    var currentQuantity = parseInt(quantityElement.textContent);
    var newQuantity = currentQuantity + amount;
  
    if (newQuantity >= 0) {
      quantityElement.textContent = newQuantity;
      updateTotalPrice();
    }
}
  
function deleteItem(itemId) {
    var itemElement = document.querySelector('#' + itemId);
    itemElement.parentNode.removeChild(itemElement);
    updateTotalPrice();
}

function toggleLike(button) {
    button.classList.toggle("liked");
    var likeText = button.querySelector(".like-text");
    if (button.classList.contains("liked")) {
      likeText.textContent = "Liked";
    } else {
      likeText.textContent = "Like";
    }
}
  
  
function updateTotalPrice() {
    var itemElements = document.querySelectorAll('.item');
    var totalPrice = 0;
  
    itemElements.forEach(function(itemElement) {
      var quantity = parseInt(itemElement.querySelector('.details span').textContent);
      var price = parseFloat(itemElement.querySelector('.details p').textContent.substr(1));
      totalPrice += quantity * price;
    });
  
    document.getElementById('total-price').textContent = totalPrice.toFixed(0);
}
  
  
