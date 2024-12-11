

// function calculationTriangleArea() {
//     const TriangleBaseInput = document.getElementById('triangle-base');
//     const TriangleBaseInputText = TriangleBaseInput.value;
//     const base = parseFloat(TriangleBaseInput);
//     console.log(typeof base);
// }

function calculateTriangleArea() {
    const TriangleBaseInput = document.getElementById('triangle-base');
    const TriangleHeightInput = document.getElementById('triangle-height');
    const baseText = TriangleBaseInput.value.trim();
    const heightText = TriangleHeightInput.value.trim();
    const base = parseFloat(baseText);
    const height = parseFloat(heightText);
    const result = 0.5 * base * height;
    console.log(result);
}