var splide = new Splide('.Portfolio_Splide', {
    type: "loop",
    perPage: 4,
    autoplay: true,
    pagination: false,
    breakpoints: {
        1000: {
            perPage: 3
        },
        768: {
            perPage: 2
        },
        500: {
            perPage: 1
        },
    }
})

splide.mount()