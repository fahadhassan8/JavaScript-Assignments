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

let text = document.getElementById('text');
let changeText = document.getElementById('change-text');
let fullText = `Dolorum consequatur est vel!
Cumque dolore similique aliquid, libero quasi itaque delectus, eaque repudiandae neque tempora magni? Fugiat atque cum dolores amet placeat. Consequuntur obcaecati nobis ut quos corporis molestias et quidem qui quae?
Error qui optio debitis eligendi harum corrupti velit incidunt exercitationem, est ad nihil quod cumque aut amet iure hic laudantium quis magni ullam et sunt perferendis numquam repudiandae modi? Quidem.
Laudantium, enim temporibus! Delectus voluptatem mollitia voluptate libero veritatis eius cumque in, unde dolorem quaerat explicabo accusamus iste doloremque labore sapiente cupiditate, quos beatae voluptates facilis. Praesentium impedit tempora repudiandae?
eligendi harum corrupti velit incidunt exercitationem, est ad nihil quod cumque aut amet iure hic laudantium quis magni ullam et sunt perferendis numquam repudiandae modi? Quidem.
Laudantium, enim temporibus! Delectus voluptatem mollitia voluptate libero veritatis eius cumque in, unde dolorem quaerat explicabo accusamus iste doloremque labore sapiente cupiditate, quos beatae voluptates facilis. Praesentium impedit tempora repudiandae
eligendi harum corrupti velit incidunt exercitationem, est ad nihil quod cumque aut amet iure hic laudantium quis magni ullam et sunt perferendis numquam repudiandae modi? Quidem.
Laudantium, enim temporibus! Delectus voluptatem mollitia voluptate libero veritatis eius cumque in, unde dolorem quaerat explicabo accusamus iste doloremque labore sapiente cupiditate, quos beatae voluptates facilis. Praesentium impedit tempora repudiandae
`
let lessText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id nobis minus harum maxime hic inventore tenetur fuga eaque nisi? Repudiandae accusamus illo impedit explicabo dignissimos eveniet natus, aspernatur quis fugiat.
Ducimus hic sapiente doloremque molestiae distinctio fuga laborum consectetur, voluptates tempore amet nostrum? Qui quam voluptas temporibus commodi architecto quia cum dolor sit, eos quo consequuntur.`
function see_more(event){
    event.preventDefault()
    if(changeText.innerHTML === 'See More'){
        changeText.innerText = "See Less"
        text.innerHTML = fullText
    }
    else{
        text.innerHTML = lessText
        changeText.innerHTML = "See More";
    }
}
changeText.addEventListener('click', see_more)