$(".btn").click(function () {
    $(".container").toggleClass("dark-theme")
    $(".btn").toggleClass("dark-btn")
    if ($(".container").hasClass("dark-theme")) {
        $(".text").text("Dark  Mode")
        $("i").attr("class", "ion-ios-moon")
    }
    else{
        $(".text").text("Light Mode")
        $("i").attr("class", "ion-ios-sunny")
    }
})