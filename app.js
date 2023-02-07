const form = document.querySelector("form");
const input = form.querySelector("input");

form.addEventListener("submit", i => {
    i.preventDefault();
    if (input.value.length >= 3) {
        form.submit();
    } else {
        alert("You have not filled in the field or you have done it incorrectly");
    }
})



function menuOnClick() {
    document.querySelectorAll(".hamburger__bar").classList.add("active");
}