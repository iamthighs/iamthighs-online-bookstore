// JavaScript code for the bookstore functionality
class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addToCart(book) {
        this.items.push(book);
    }

    getTotalPrice() {
        let total = 0;
        for (const item of this.items) {
            total += item.price;
        }
        return total;
    }
}

const bookstore = {
    books: [
        new Book("The Great Gatsby", "F. Scott Fitzgerald", 15.99),
        new Book("To Kill a Mockingbird", "Harper Lee", 12.99),
        new Book("Everything's Fine", "Cecilia Rabess", 9.99),
        // Add more books here
    ],
    cart: new ShoppingCart(),
};

function displayBooks() {
    // Get the reference to the HTML element where we want to display the books
    const bookListContainer = document.querySelector(".book-list");

    // Clear any previous content
    bookListContainer.innerHTML = "";

    // Loop through each book in the bookstore's collection
    for (const book of bookstore.books) {
        // Create a new HTML element to represent the book
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");

        // Fill in the book details
        const titleElement = document.createElement("h3");
        titleElement.textContent = `Title: ${book.title}`;

        const authorElement = document.createElement("p");
        authorElement.textContent = `Author: ${book.author}`;

        const priceElement = document.createElement("p");
        priceElement.textContent = `Price: $${book.price.toFixed(2)}`;

        // Append the book details to the book element
        bookElement.appendChild(titleElement);
        bookElement.appendChild(authorElement);
        bookElement.appendChild(priceElement);

        // Add an "Add to Cart" button for each book
        const addButton = document.createElement("button");
        addButton.textContent = "Add to Cart";
        addButton.addEventListener("click", () => addToCart(book));
        
        // Append the "Add to Cart" button to the book element
        bookElement.appendChild(addButton);

        // Append the book element to the book list container
        bookListContainer.appendChild(bookElement);
    }
}

function addToCart(book) {
    // Inside this function, you would typically perform the following:
    // 1. Add the provided book to the shopping cart object.
    // 2. Update the shopping cart display to reflect the newly added item.
    // 3. Optionally, recalculate the total price of items in the shopping cart.

    // For example, you might do something like this:

    // 1. Add the book to the shopping cart object
    bookstore.cart.addToCart(book);

    // 2. Update the shopping cart display
    displayShoppingCart();

    // 3. Optionally, recalculate the total price and update the display
    const totalPriceElement = document.querySelector(".total-price");
    totalPriceElement.textContent = `Total: $${bookstore.cart.getTotalPrice().toFixed(2)}`;

    // You can also provide user feedback, such as a confirmation message:
    const confirmationMessage = document.createElement("p");
    confirmationMessage.textContent = `${book.title} has been added to your shopping cart.`;
    confirmationMessage.classList.add("text-success");
    const feedbackContainer = document.querySelector(".feedback");
    feedbackContainer.appendChild(confirmationMessage);
}

function displayShoppingCart() {
    // Get the reference to the HTML element where we want to display the shopping cart
    const cartListContainer = document.querySelector(".shopping-cart ul");

    // Clear any previous content
    cartListContainer.innerHTML = "";

    // Check if the shopping cart is empty
    if (bookstore.cart.items.length === 0) {
        const emptyCartMessage = document.createElement("p");
        emptyCartMessage.textContent = "Your shopping cart is empty.";
        cartListContainer.appendChild(emptyCartMessage);
    } else {
        // Loop through each item in the shopping cart
        for (const item of bookstore.cart.items) {
            // Create a new HTML list item to represent the cart item
            const cartItemElement = document.createElement("li");

            // Display the item's title, author, and price
            cartItemElement.textContent = `${item.title} by ${item.author} - $${item.price.toFixed(2)}`;

            // Append the cart item to the cart list container
            cartListContainer.appendChild(cartItemElement);
        }

        // Display the total price of items in the shopping cart
        const totalPriceElement = document.createElement("p");
        totalPriceElement.textContent = `Total: $${bookstore.cart.getTotalPrice().toFixed(2)}`;
        cartListContainer.appendChild(totalPriceElement);
    }
}


function placeOrder(selectedPaymentMethod) {
    try {
        // Simulate order processing and payment handling based on the selected payment method.
        let paymentStatus;
        switch (selectedPaymentMethod) {
            case "creditCard":
                // Simulate credit card payment processing (you can replace this with actual logic)
                paymentStatus = "Payment with Credit Card was successful.";
                break;
            case "paypal":
                // Simulate PayPal payment processing (you can replace this with actual logic)
                paymentStatus = "Payment with PayPal was successful.";
                break;
            case "bankTransfer":
                // Simulate bank transfer payment processing (you can replace this with actual logic)
                paymentStatus = "Payment with Bank Transfer was successful.";
                break;
            default:
                throw new Error("Invalid payment method selected.");
        }

        // Display a payment status message.
        const paymentStatusMessage = document.createElement("p");
        paymentStatusMessage.textContent = paymentStatus;
        paymentStatusMessage.innerHTML = ""; // Clear previous messages
        // Append the payment status message to the HTML for user feedback.
        const orderStatusContainer = document.querySelector(".order-status");
        orderStatusContainer.innerHTML = ""; // Clear previous messages
        // Append the new payment status message without clearing previous messages
        orderStatusContainer.appendChild(paymentStatusMessage);
        


    } catch (error) {
        // Handle errors that may occur during payment processing.
        // For this simplified example, we'll display an error message to the user.
        const errorMessage = document.createElement("p");
        errorMessage.textContent = `Payment failed: ${error.message}`;

        // Append the error message to the HTML for user feedback.
        const orderStatusContainer = document.querySelector(".order-status");
        orderStatusContainer.innerHTML = ""; // Clear previous messages
        orderStatusContainer.appendChild(errorMessage);

    } finally {
        // The finally block is used for cleanup or finalization tasks.
        // In this case, you can clear the shopping cart or release any allocated resources.
        clearShoppingCart();
    }
}

function getSelectedPaymentMethod() {
    // Get the selected payment method from the form
    const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    
    if (selectedPaymentMethod) {
        // If a payment method is selected, call placeOrder with the selected method
        placeOrder(selectedPaymentMethod.value);
    } else {
        // Handle the case where no payment method is selected
        alert("Please select a payment method.");
    }
}


/**
 * Clears the contents of the shopping cart.
 */
function clearShoppingCart() {
    // Inside this function, you would typically perform the following:
    // 1. Remove all items from the shopping cart object.
    // 2. Update the shopping cart display to reflect the emptied cart.

    // For example, you might do something like this:

    // 1. Remove all items from the shopping cart object
    bookstore.cart.items = [];

    // 2. Update the shopping cart display
    displayShoppingCart();

    // Optionally, provide user feedback to confirm that the cart has been cleared:
    const confirmationMessage = document.createElement("p");
    confirmationMessage.textContent = "Your shopping cart has been cleared.";
    confirmationMessage.classList.add("text-success");
    const feedbackContainer = document.querySelector(".feedback");
    feedbackContainer.appendChild(confirmationMessage);
}


// Call functions to initialize and display the content
displayBooks();
displayShoppingCart();