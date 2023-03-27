const credits = document.querySelector(".container--photo-credits");
const mobileScreen = 720;

document.addEventListener("resize", () => {
    credits.textContent = "Background Photo by Anna Shvets: https://www.pexels.com/photo/ocean-during-sunset-4014919/";
});