const loadPhone = async (searchPhone = '13', isShowAll) => { //searchPhone='13' default value
    /*  1. "when we set random api link, it will show all values."
        2. Like this: "https://openapi.programming-hero.com/api/phones?search=iphone"
        3. but, when put template `${searchText}`, that time it'll not display any value.
        4. inside the curly bracket, we will give parenthesis.
        5. stop calling the loadPhone function, when we press the search button.
    */
    toggleLoadingSpinner(true);
    try {
        const res = await fetch(
            `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
        );
        const data = await res.json();
        const phones = data.data;
        // console.log(phones);

        //clear the phone container before handling the response
        const phoneContainer = document.getElementById('phone-container');
        phoneContainer.textContent = '';

        if (phones.length === 0) {
            toggleErrorMessage(true);
        } else {
            toggleErrorMessage(false);
            displayPhones(phones, isShowAll);
        }
    }
    catch (error) {
        console.error("Error fetching phones:", error);
        toggleErrorMessage(true);
    } finally {
        toggleLoadingSpinner(false);
    }
};

const displayPhones = (phones, isShowAll) => {
    // console.log(phones);
    //..........step1: where we will display the div,.........
    const phoneContainer = document.getElementById('phone-container');
    //.........clear phone container cards before adding new cards........
    phoneContainer.textContent = '';

    //..........display show all button if there are more than 12 button.......
    const showAllContainer = document.getElementById('show-all-container');
    if (phones.length > 12 & !isShowAll) {
        showAllContainer.classList.remove('hidden');
    } else {
        showAllContainer.classList.add('hidden');
    }
    // console.log('isShowAll', isShowAll);
    //..............display only first 12 phones if not show All................
    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }

    phones.forEach((phone) => {
        // console.log(phone);
        // ...........step2: Create a div dynamically........
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
        // .........step3: set inner html..............
        phoneCard.innerHTML = `
            <figure>
                <img src="${phone.image}"
                    alt="Shoes" />
            </figure>
                <div class="card-body">
                    <h2 class="card-title">"${phone.phone_name}"</h2>
                    <p>"${phone.slug}"</p>
                    <div class="card-actions justify-center">
                        <button onclick="handleShowDetails('${phone.slug}')" class="btn bg-violet-800 text-white text-transform: uppercase">Show Details</button>
                    </div>
                </div>
        `;
        // step4: append child
        phoneContainer.appendChild(phoneCard);
    });

    //............hidden loading spinner after loading the data............
    toggleLoadingSpinner(false);
    toggleErrorMessage(false);
}

//..................handleShowDetails button....................
const handleShowDetails = async (id) => {
    // console.log(id);
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;
    showPhoneDetails(phone);
}

//.................show phone details...................
const showPhoneDetails = (phone) => {
    console.log(phone);
    const phoneName = document.getElementById('show-detail-phone-name');
    phoneName.innerText = phone.name;

    const showDetailContainer = document.getElementById('show-detail-container');
    showDetailContainer.innerHTML = `
        <img src='${phone.image}'>
        <p><span>Storage: </span>${phone.mainFeatures?.storage}</p>
        <p><span>Display Size: </span>${phone.mainFeatures?.displaySize}</p>
        <p><span>Memory: </span>${phone.mainFeatures?.memory}</p>
    `;
    //show the modal
    show_details_modal.showModal();
}

//..............handle search button through onclick..............
/*
const handleSearch = (isShowAll)=>{
    toggleLoadingSpinner(true);
    // toggleErrorMessage(true);
    // console.log('click button');
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhone(searchText, isShowAll);
}
*/
const handleSearch = (isShowAll) => {
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value.trim();
    // toggleLoadingSpinner(true);

    if (!searchText) {
        toggleErrorMessage(true);
        // toggleLoadingSpinner(false);
        return;
    }
    loadPhone(searchText, isShowAll);
}
/*
we can also handle button through id setup.
const handleSearch = document.getElementById("btn").addEventListener('click', function(){
    console.log('hello');
});
*/

//.........................handle search recap..................
const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    // loadingSpinner.classList.remove('hidden');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden');
    } else {
        loadingSpinner.classList.add('hidden');
    }
}

//.........................handle search key if not valid..................
const toggleErrorMessage = (isError) => {
    const validKey = document.getElementById('not-valid-key');
    if (isError) {
        validKey.textContent = 'Please input a valid key.';
        validKey.classList.remove('hidden');
    } else {
        validKey.textContent = '';
        validKey.classList.add('hidden');
    }
}


// handle show all
const handleShowAll = () => {
    handleSearch(true);
}

/*call function
    loadPhone();
*/
// loadPhone();