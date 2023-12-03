const slides = [
{
    image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(slides);

const { createApp } = Vue

  createApp({
    data() {
      return {
        slideTarget: slides,
        sliderIndex: 0
        
      }
    },
    methods: {
        nextSlideFunc() {
            if(this.slideTarget.length === this.sliderIndex + 1){
                const activeSlider = document.querySelector("div.thumb.active");
                const slidersList = document.querySelectorAll("div.thumb");
                activeSlider.classList.remove("active");
                this.sliderIndex = 0;
                slidersList[this.sliderIndex].classList.add("active");
            }
            else {
                const activeSlider = document.querySelector("div.thumb.active");
                const slidersList = document.querySelectorAll("div.thumb");
                activeSlider.classList.remove("active");
                this.sliderIndex += 1;
                slidersList[this.sliderIndex].classList.add("active");
            }
        },
        prevSlideFunc() {
            if(-1 === this.sliderIndex - 1){
                const activeSlider = document.querySelector("div.thumb.active");
                const slidersList = document.querySelectorAll("div.thumb");
                activeSlider.classList.remove("active");
                this.sliderIndex = this.slideTarget.length - 1;
                slidersList[this.sliderIndex].classList.add("active");
            }
            else {
                const activeSlider = document.querySelector("div.thumb.active");
                const slidersList = document.querySelectorAll("div.thumb");
                activeSlider.classList.remove("active");
                this.sliderIndex -= 1;
                slidersList[this.sliderIndex].classList.add("active");
            }
        },
        clickedSlideFunc(event, index) {
            const activeSlider = document.querySelector("div.thumb.active");
            activeSlider.classList.remove("active");
            event.target.closest(".thumb").classList.add("active");
            return this.sliderIndex = index;
        }
    }
  }).mount('#app')