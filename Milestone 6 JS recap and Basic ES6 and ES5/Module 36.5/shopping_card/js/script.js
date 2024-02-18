// Function to add a product to the shopping cart
const addProduct = () => {
    // Retrieve HTML elements for product name and quantity
    const productField = document.getElementById("product-name");
    const quantityField = document.getElementById("product-quantity");

    // Get product name and quantity values from input fields
    const product = productField.value;
    const quantity = quantityField.value;

    // Clear the input fields for the next entry
    productField.value = "";
    quantityField.value = "";

    // Display the product on the UI (if desired)
    // Uncomment the following line to enable this functionality
    // displayProduct(product, quantity);

    // Save the product and quantity to local storage
    saveProductToLocalStorage(product, quantity);
};

// Function to display a product on the UI
const displayProduct = (product, quantity) => {
    // Retrieve the container element for displaying products
    const displayUI = document.getElementById("product-container");

    // Create a new list item element
    const li = document.createElement("li");

    // Set the list item text to "product: quantity" format
    li.innerText = `${product}: ${quantity}`;

    // Append the list item to the container element
    displayUI.appendChild(li);
};

// Function to retrieve the shopping cart from local storage
const getStoreShoppingCart = () => {
    // Initialize an empty cart object
    let cart = {};

    // Retrieve the "cart" data from local storage (if it exists)
    const storeCart = localStorage.getItem("cart");

    // If there's data in local storage, parse it into a JavaScript object
    if (storeCart) {
        try {
            cart = JSON.parse(storeCart);
        } catch (error) {
            console.error("Error parsing cart data from local storage:", error);
        }
    }

    // Return the retrieved cart object
    return cart;
};

// Function to save a product and quantity to local storage
const saveProductToLocalStorage = (product, quantity) => {
    // Fetch the existing cart from local storage or create an empty one
    const cart = getStoreShoppingCart();

    // Add the new product and quantity to the cart object
    cart[product] = quantity;

    // Convert the cart object to a JSON string for storage
    const cartStringified = JSON.stringify(cart);

    // Store the JSON string in local storage under the "cart" key
    localStorage.setItem("cart", cartStringified);

    // Log the stored cart data for debugging (optional)
    console.log("Saved cart:", cartStringified);
};

// Function to display all products from local storage
const displayProductFromLocalStorage = () => {
    // Get the saved cart object
    const savedCart = getStoreShoppingCart();

    // Log the retrieved cart data for debugging (optional)
    console.log("Retrieved cart:", savedCart);

    // Iterate through each product in the cart
    for (const product in savedCart) {
        // Get the quantity for the current product
        const quantity = savedCart[product];

        // Display the product and quantity on the UI
        displayProduct(product, quantity);
    }
};

// Call the function to display products from local storage on startup
displayProductFromLocalStorage();
