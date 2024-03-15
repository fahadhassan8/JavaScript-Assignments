// Question 01

function signupForm(event){
    event.preventDefault()

     // Form data ko get karny k liye built in constructor method
     let formData = new FormData(document.getElementById("signup-form"));

     // Form data ko ek object mein store karna hai

     formObject = {}

     for(var key of formData.keys()){
            var value = formData.get(key);
            formObject[key] = value;        
        // ub form ko display krwana hai

        let submittedDataDiv = document.getElementById("submitted-data");
        submittedDataDiv.innerHTML = `<h2>Submitted Data:</h2>`
        for(var key of formData.keys()){
            submittedDataDiv.innerHTML += `<p><strong>${key}:</strong> ${formObject[key]}</p>`
        }
     }
}
// Qustion 02

let text = document.querySelector('.text');
let changeText = document.getElementById('change-text');
let lessText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt sed at dignissimos quisquam rem maiores amet placeat, saepe eligendi ducimus? Vero, sapiente omnis ea libero ducimus eos sequi ut!
Nesciunt labore repudiandae laboriosam quibusdam blanditiis sint voluptas nobis ipsum. Repellat, blanditiis? Assumenda, exercitationem, tenetur reprehenderit sit iste amet, fugit eum a at nemo iure qui veritatis ex. Quae, ipsa.`;
let fullText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt sed at dignissimos quisquam rem maiores amet placeat, saepe eligendi ducimus? Vero, sapiente omnis ea libero ducimus eos sequi ut!
Nesciunt labore repudiandae laboriosam quibusdam blanditiis sint voluptas nobis ipsum. Repellat, blanditiis? Assumenda, exercitationem, tenetur reprehenderit sit iste amet, fugit eum a at nemo iure qui veritatis ex.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt sed at dignissimos quisquam rem maiores amet placeat, saepe eligendi ducimus? Vero, sapiente omnis ea libero ducimus eos sequi ut!
Nesciunt labore repudiandae laboriosam quibusdam blanditiis sint voluptas nobis ipsum. Repellat, blanditiis? Assumenda, exercitationem, tenetur reprehenderit sit iste amet, fugit eum a at nemo iure qui veritatis ex.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt sed at dignissimos quisquam rem maiores amet placeat, saepe eligendi ducimus? Vero, sapiente omnis ea libero ducimus eos sequi ut!
Nesciunt labore repudiandae laboriosam quibusdam blanditiis sint voluptas nobis ipsum. Repellat, blanditiis? Assumenda, exercitationem, tenetur reprehenderit sit iste amet, fugit eum a at nemo iure qui veritatis ex.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt sed at dignissimos quisquam rem maiores amet placeat, saepe eligendi ducimus? Vero, sapiente omnis ea libero ducimus eos sequi ut!
Nesciunt labore repudiandae laboriosam quibusdam blanditiis sint voluptas nobis ipsum. Repellat, blanditiis? Assumenda, exercitationem, tenetur reprehenderit sit iste amet, fugit eum a at nemo iure qui veritatis ex.`;

function see_more(event){
    event.preventDefault()
    if(changeText.innerHTML === "See More"){
        text.innerHTML = fullText;
        changeText.innerText = "See Less";
    }else{
        text.innerHTML = lessText;
        changeText.innerText = "See More"
    }
}
changeText.addEventListener('click',see_more);

function