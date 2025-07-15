function calculateTriangleArea() {
    //get triangle base and height value
    const TriangleBaseInput = document.getElementById('triangle-base');
    const TriangleHeightInput = document.getElementById('triangle-height');
    const baseText = TriangleBaseInput.value.trim();
    const heightText = TriangleHeightInput.value.trim();
    const base = parseFloat(baseText);
    const height = parseFloat(heightText);
    //calculate triangle area
    const result = 0.5 * base * height;
    console.log(result);

    //display triangle are
    const area = document.getElementById('triangle-area');
    area.innerText = result;
}

function calculateRectangleArea(){
    //get triangle base and height value
    const rectangleBaseInput = document.getElementById('rectangle-base');
    const rectangleHeightInput = document.getElementById('rectangle-height');
    const baseText = rectangleBaseInput.value.trim();
    const heightText = rectangleHeightInput.value.trim();
    const base = parseFloat(baseText);
    const height = parseFloat(heightText);
    //calculate triangle area
    const result = base * height;
    console.log(result);

    //display triangle are
    const area = document.getElementById('rectangle-area');
    area.innerText = result;
}