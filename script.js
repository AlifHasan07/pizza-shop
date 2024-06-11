document.getElementById('pizza-order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pizzaCount = document.getElementById('pizza-count').value;
    const pizzaSize = document.getElementById('pizza-size').value;

    let toppings = [];
    document.querySelectorAll('input[name="topping"]:checked').forEach(function(topping) {
        toppings.push(topping.value);
    });

    const confirmationMessage = `Thank you, ${name}! Your order of ${pizzaCount} ${pizzaSize} pizza(s) with ${toppings.join(', ')} has been placed. Confirmation sent to ${email}.`;
    
    document.getElementById('confirmation-message').textContent = confirmationMessage;
    document.getElementById('order-confirmation').style.display = 'block';
});
