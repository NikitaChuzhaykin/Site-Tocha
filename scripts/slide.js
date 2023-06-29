let sliderCardOne = document.querySelector("#sliderCardOne");
let sliderCardItemsOne = Array.from(sliderCardOne.children);
let sliderDotsOne = document.querySelector("#sliderDotsOne");
let sliderDotsItemsOne = Array.from(sliderDotsOne.children);

let sliderCardTwo = document.querySelector("#sliderCardTwo");
let sliderCardItemsTwo = Array.from(sliderCardTwo.children);
let sliderDotsTwo = document.querySelector("#sliderDotsTwo");
let sliderDotsItemsTwo = Array.from(sliderDotsTwo.children);

let sliderCardThree = document.querySelector("#sliderCardThree");
let sliderCardItemsThree = Array.from(sliderCardThree.children);
let sliderDotsThree = document.querySelector("#sliderDotsThree");
let sliderDotsItemsThree = Array.from(sliderDotsThree.children);

slider(sliderCardOne, sliderCardItemsOne, sliderDotsOne, sliderDotsItemsOne)
slider(sliderCardTwo, sliderCardItemsTwo, sliderDotsTwo, sliderDotsItemsTwo)
slider(sliderCardThree, sliderCardItemsThree, sliderDotsThree, sliderDotsItemsThree)

function slider(sliderCard, sliderCardItems, sliderDots, sliderDotsItems) {
    const mediaQueryMax = window.matchMedia('(max-width:1134px)')
    const mediaQueryMin = window.matchMedia('(min-width:1134px)')

    function handleTabletChangeMax(event) {
        if (event.matches) {
            sliderCardItems.forEach(function (slider, index) {
                sliderDotsItems.forEach(function (dots, indexTwo) {
                    slider.classList.remove("pe")
                    dots.classList.remove("dn")
                    slider.dataset.index = index;
                    dots.dataset.indexTwo = indexTwo;
                    sliderDotsItems[0].setAttribute("data-active", "")

                    if (index > 0) {
                        slider.classList.add("sliderCardActive");
                    }

                    if (indexTwo < 1) {
                        dots.classList.add("dotsActive")
                    }

                    slider.addEventListener("click", function () {
                        slider.classList.add("sliderCardActive");
                        dots.classList.remove("dotsActive");

                        if (index + 1 === sliderCardItems.length) {
                            nextSliderIndex = 0;
                            nextDotsIndex = 0
                        } else {
                            nextSliderIndex = index + 1;
                            nextDotsIndex = +index + 1
                        }

                        let nextSlider = sliderCard.querySelector(`[data-index="${nextSliderIndex}"]`);
                        nextSlider.classList.remove("sliderCardActive");

                        let nextDots = sliderDots.querySelector(`[data-index-two="${nextDotsIndex}"]`);
                        nextDots.classList.add("dotsActive")
                    })
                })
            })

            sliderCardItems.forEach(function (slider, index) {
                sliderDotsItems.forEach(function (dots, indexTwo) {
                    dots.addEventListener("click", function () {
                        let activeDots = sliderDots.querySelector("[data-active]");
                        let dotsActive = sliderDots.querySelector(".dotsActive")
                        dotsActive.classList.remove("dotsActive");
                        activeDots.classList.remove("dotsActive");
                        activeDots.removeAttribute("data-active");
                        slider.classList.add("sliderCardActive");

                        if (indexTwo - 1 === sliderDotsItems.length) {
                            nextDotsIndex = 0
                            nextSliderIndex = 0
                        } else {
                            nextDotsIndex = indexTwo
                            nextSliderIndex = indexTwo
                        }

                        let nextSlider = sliderCard.querySelector(`[data-index="${nextSliderIndex}"]`);
                        nextSlider.classList.remove("sliderCardActive");

                        let nextDots = sliderDots.querySelector(`[data-index-two="${nextDotsIndex}"]`);
                        nextDots.classList.add("dotsActive")
                        nextDots.setAttribute("data-active", "")

                    })
                })
            })
        }
    }

    function handleTabletChangeMin(event) {
        if (event.matches) {
            sliderCardItems.forEach(function (slider, index) {
                slider.dataset.index = index;
                if (index >= 0) {
                    slider.classList.remove("sliderCardActive")
                    slider.classList.add("pe")
                }
            })
            sliderDotsItems.forEach(function (dots, index) {
                dots.classList.add("dn")
            })
        }
    }



    mediaQueryMax.addListener(handleTabletChangeMax)
    handleTabletChangeMax(mediaQueryMax)

    mediaQueryMin.addListener(handleTabletChangeMin)
    handleTabletChangeMin(mediaQueryMin)

}