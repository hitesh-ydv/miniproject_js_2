window.addEventListener("mousemove", function(details){

var xval = gsap.utils.mapRange(0, window.innerWidth, 100, window.innerWidth-100, details.clientX)

    gsap.to("#rect", {
        left: xval,
        ease: Power4
    })
})