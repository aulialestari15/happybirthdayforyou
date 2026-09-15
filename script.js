function nextPage(current, next) {

    document.getElementById(current).classList.add("hidden");

    document.getElementById(next).classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function goHome() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    location.reload();
}

function nextPage(currentPage, nextPage) {
    document.getElementById(currentPage).classList.add("hidden");
    document.getElementById(nextPage).classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showSecret() {
    const secret = document.getElementById("secretMessage");

    if (secret.style.display === "block") {
        secret.style.display = "none";
    } else {
        secret.style.display = "block";
    }
}


function goHome() {
    location.reload();
}


function nextPage(currentPage, nextPage) {
    const current = document.getElementById(currentPage);
    const next = document.getElementById(nextPage);

    if (current && next) {
        current.classList.add("hidden");
        next.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}