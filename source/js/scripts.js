





/*const modal = document.querySelector(".modal");
const buttonFeedback = document.querySelector(".find-us-button");
const closeFeedback = document.querySelector(".close-feedback");
const feedbackName = modal.querySelector(".feedback-name");
const modalFeedbackBlock = modal.querySelector(".modal-feedback");
const feedbackEmail = modal.querySelector(".feedback-email");
const modalFeedbackForm = modalFeedbackBlock.querySelector("form");
const feedbackNameStorage = localStorage.getItem("feedbackName");
let isLocalStorage = true;
let storage = "";


window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27) {
    if(modal.classList.contains("modal-show")){
      evt.preventDefault();
      modal.classList.remove("modal-show");
      modalFeedbackBlock.classList.remove("modal-feedback-error");
    }
  }
})

try{
  storage = localStorage.getItem("feedbackName");
} catch(err){
  isLocalStorage = false;
}

buttonFeedback.addEventListener("click", function(evt){
  evt.preventDefault();
  modal.classList.add("modal-show");
  if (feedbackNameStorage) {
    feedbackName.value = feedbackNameStorage;
    feedbackEmail.focus();
  } else{
      feedbackName.focus();
    }
})

closeFeedback.addEventListener("click", function(evt){
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modalFeedbackBlock.classList.remove("modal-feedback-error");
})

modalFeedbackForm.addEventListener("submit", function(evt){
  evt.preventDefault();
  if (!feedbackName.value || !feedbackEmail.value){
        modalFeedbackBlock.classList.remove("modal-feedback-error");
        modalFeedbackBlock.offsetWidth = modalFeedbackBlock.offsetWidth;
        modalFeedbackBlock.classList.add("modal-feedback-error");


    console.log("Введите логин и пароль");
  } else{
      if(isLocalStorage){
        localStorage.setItem("feedbackName", feedbackName.value)
      }
    }
})



const siteWrapper = document.querySelector(".site-wrapper");
const sliderItemOne = document.querySelector(".slider-item-1");
const sliderItemTwo = document.querySelector(".slider-item-2");
const sliderItemThree = document.querySelector(".slider-item-3");
const controlOne = document.querySelector(".control-one");
const controlTwo = document.querySelector(".control-two");
const controlThree = document.querySelector(".control-three");

controlOne.addEventListener("click", function(evt){
evt.preventDefault();
siteWrapper.classList.remove("site-wrapper-2");
siteWrapper.classList.remove("site-wrapper-3");
siteWrapper.classList.add("site-wrapper-1");
sliderItemOne.classList.add("slide-current");
sliderItemTwo.classList.remove("slide-current");
sliderItemThree.classList.remove("slide-current");
controlOne.classList.add("current");
controlTwo.classList.remove("current");
controlThree.classList.remove("current");
})

controlTwo.addEventListener("click", function(evt){
evt.preventDefault();
siteWrapper.classList.add("site-wrapper-2");
siteWrapper.classList.remove("site-wrapper-3");
siteWrapper.classList.remove("site-wrapper-1");
sliderItemOne.classList.remove("slide-current");
sliderItemTwo.classList.add("slide-current");
sliderItemThree.classList.remove("slide-current");
controlOne.classList.remove("current");
controlTwo.classList.add("current");
controlThree.classList.remove("current");
})

controlThree.addEventListener("click", function(evt){
evt.preventDefault();
siteWrapper.classList.remove("site-wrapper-2");
siteWrapper.classList.add("site-wrapper-3");
siteWrapper.classList.remove("site-wrapper-1");
sliderItemOne.classList.remove("slide-current");
sliderItemTwo.classList.remove("slide-current");
sliderItemThree.classList.add("slide-current");
controlOne.classList.remove("current");
controlTwo.classList.remove("current");
controlThree.classList.add("current");
})
