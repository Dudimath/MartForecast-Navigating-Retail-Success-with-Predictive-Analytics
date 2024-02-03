function predict() {
    // Fetch values from input fields
    const itemWeight = parseFloat(document.getElementById('itemWeight').value);
    const itemVisibility = parseFloat(document.getElementById('itemVisibility').value);
    const itemMRP = parseFloat(document.getElementById('itemMRP').value);
    const outletYear = parseFloat(document.getElementById('outletYear').value);
    const outletType = document.getElementById('outletType').value;
    const outletLocationType = document.getElementById('outletLocationType').value;
    const itemFatContent = document.getElementById('itemFatContent').value;

    // Validate input (add more validation as needed)

    // Construct the data object to send to the server
    const data = {
        itemWeight,
        itemVisibility,
        itemMRP,
        outletYear,
        outletType,
        outletLocationType,
        itemFatContent,
        // Add more features as needed
    };

    // Make a POST request to the server endpoint
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        // Display the prediction result
        const predictionResult = document.getElementById('prediction-result');
        predictionResult.textContent = `Model Prediction: ${result}`;
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error (e.g., display an error message to the user)
    });
}