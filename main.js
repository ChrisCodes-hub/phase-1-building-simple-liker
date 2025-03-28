// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeBtn = document.querySelectorAll('.like-glyph')
const modal =document.getElementById('modal')

likeBtn.forEach(button=>{
  button.addEventListener('click',()=>{
  mimicServerCall()

  .then(()=>{
    if(button.textContent ===EMPTY_HEART){
      button.textContent = FULL_HEART;
      button.classList.add('activated-heart');
    }
    else{
      button.textContent = EMPTY_HEART;
      button.classList.remove('activated-heart');
    }
  })
    .catch(error => {
      modal.classList.remove('hidden');
      document.getElementById('modal-message').textContent = error;
      
    setTimeout(() => {
      modal.classList.add('hidden');
    },3000);
     
  });
});
});
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 3000);
  });
}
