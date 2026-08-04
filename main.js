$(window).on("load",function(){
    let slideIndex=$(".slide.active").index();
    const slideLen=$(".slide").length;
    function slideShow(){
        $(".slide").removeClass("active").eq(slideIndex)
        .addClass("active");
       if(slideIndex==slideLen-1){
        slideIndex=0;
       }
       else{
        slideIndex++;
       }
       setTimeout(slideShow,5000);
    }
    slideShow();
})
$(document).ready(function(){
    peopleFilter($(".filter-btn.active").attr("data-target"))
    function peopleFilter(target){
        console.log(target)

    }

})
document.addEventListener("DOMContentLoaded", function() {
    // Set the event date to April 25, 2025
    const eventDate = new Date("2025-04-25T00:00:00").getTime(); // Midnight of April 25, 2025

    function updateTimer() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("days").textContent = days.toString().padStart(2, "0");
            document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
            document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
            document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
        } else {
            document.getElementById("timer").textContent = "The event has started!";
        }
    }

    updateTimer();
    setInterval(updateTimer, 1000); // Update every second
});

