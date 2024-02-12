//Data Load from API
const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(
/*      1. "when we set random api link, it will show all values."
        2. Like this: "https://openapi.programming-hero.com/api/phones?search=iphone"
        3. but, when put template `${searchText}`, that time it'll not display any value.
        4. inside the curly bracket, we will give parenthesis.
        5. stop calling the loadPhone function, when we press the search button.
*/
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    );
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll);
}

//Display data to the webpage
const displayPhones = (phones, isShowAll) => {
    // console.log(phones);
    //1. where we want to set our values
    const phoneContainer = document.getElementById("phone-container");
    //clear phone container cards before adding new cards
    phoneContainer.textContent = '';

    //display show all button if there are more than 9 photos
    const showAllContainer = document.getElementById("show-all-container");
    if(phones.length > 9 && !isShowAll){
        showAllContainer.classList.remove('hidden');
    }else{
        showAllContainer.classList.add('hidden');
    }

    //display only first 10 phones if not show all 
    if(!isShowAll){
        phones = phones.slice(0, 9);
    }

//forEach Loop kore data dynamically nie asa ana inject kora.
//forEach er karon hocche, array te onc gulo data asche, amra sudu output gulo UI te dekhabo.
    phones.forEach(phone => {
        // console.log(phone)
        //2. create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w bg-gray-100 p-4 shadow-xl`;
        //3. set inner html 
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}"
        alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <h3 class="card-title">${phone.brand}</h3>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
                <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `;
        //4. append child
        phoneContainer.appendChild(phoneCard);
    });
    toggleLoadingSpinner(false);
}
//
const handleShowDetails = async(id) => {
    // console.log('Show details', id);
    //load single data
    const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
    );
    const data = await res.json();
    const phone = data.data;

    showPhoneDetails(phone);
}

//showPhone Details
const showPhoneDetails = (phone) =>{
    console.log(phone);
    // const phoneName = document.getElementById("show-details-phone-name");
    // phoneName.innerText = phone.name

    const showDetailContainer = document.getElementById("show-detail-container");
    showDetailContainer.innerHTML = `
        <img src="${phone.image}" alt=""/>
        <h3 class="text-lg text-gray-950">${phone.name}</h3>
        <p><span>Storage:</span>${phone.mainFeatures.storage}</p>    
        <p><span>GPS:</span>${phone?.others?.GPS || "No GPS available"}</p>
        <p><span>GPS:</span>${
        phone?.others?.GPS ? phone.others.GPS : "No GPS available"
        }</p>
        <p><span>Slug:</span>${phone?.slug}</p>
    `;
    //show the modal
    show_details_model.showModal();
}

//handle search button through onclick
const handleSearch = (isShowAll) => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    if(isNaN(searchText)){
        alert("Please enter a valid number.");
        // return;
    }
    loadPhone(searchText, isShowAll);
}

//we can also handle button through id setup.
// const handleSearch = document.getElementById("btn").addEventListener('click', function(){
//     console.log('hello');
// });

// another search field
// const handleSearch2 = () => {
//     toggleLoadingSpinner(true);
//     const searchField = document.getElementById("search-field2");
//     const searchText = searchField.value;
//     loadPhone(searchText);
// };

//Add Toggle Loading Spinner
const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById("loading-spinner");
    if(isLoading){
        loadingSpinner.classList.remove("hidden");
    }
    else{
        loadingSpinner.classList.add("hidden");
    }
}

//handle show all
const handleShowAll = () =>{
    handleSearch(true);
}

//calling function
// loadPhone();

