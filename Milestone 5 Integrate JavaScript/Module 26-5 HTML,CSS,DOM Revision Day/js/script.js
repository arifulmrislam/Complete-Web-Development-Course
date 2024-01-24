// ২. যতগুলা ইলিমেন্টে H2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার Lightblue করেদিতে পারো কিনা।

const elementTag = document.querySelectorAll('h2');

for(const allH2 of elementTag){
    allH2.style.color = "lightblue";
}

// ৩. ওই ওয়েবসাইট এ Backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার Tomato করে দিতে পারো কিনা।

const backPack = document.getElementById("backpack");
backPack.style.background = 'tomato';

//৪. Card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা.

const cardName = document.getElementsByClassName('card');
for(const Card of cardName){
    Card.style.borderRadius = '30px'
}

//৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো.

function clickHandle(){
    console.log('clicked');
}

//৬. এইবার নতুন করে সবগুলা Buy Now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা Buy Now বাটনে চাপ দিলে Card টা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 



    const buttonEvents = document.getElementsByClassName("btn");

    for (const buttonEvent of buttonEvents) {
        buttonEvent.addEventListener("click", function (event) {
            const cardToRemove = event.target.closest('.card');
            if(cardToRemove){
                cardToRemove.remove();
            }
    })
}

// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি Submit বাটনটা Disable করে ফেলবে। তারপর কেউ যদি উপরে Input ফিল্ডে যদি একজাক্টলি Email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 



document.getElementById("exampleInputEmail1").addEventListener('keyup',function(event){
    const text = event.target.value;
    console.log(text);

    const submitButton = document.getElementById("btn-sub");
    if(text === 'Email'){
        submitButton.removeAttribute('disabled');
    }else{
        submitButton.setAttribute('disabled', true);
    }
});