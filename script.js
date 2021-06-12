window.onload = function maFonction() {
    document.getElementById("elementAChanger").innerHTML = "Tu n'as positionné ta souris sur ancun Item.";

    changerItemUn.addEventListener("mouseover", function (event) {
        document.getElementById("elementAChanger").innerHTML =
            "Tu as positionné ta souris sur Item 1.";
    }, false);

    changerItemUn.addEventListener("mouseout", function (event) {
        document.getElementById("elementAChanger").innerHTML = "Tu as enlevé ta souris de Item 1.";
    }, false);

    changerItemDeux.addEventListener("mouseover", function (event) {
        document.getElementById("elementAChanger").innerHTML =
            "Tu as positionné ta souris sur Item 2.";
    }, false);

    changerItemDeux.addEventListener("mouseout", function (event) {
        document.getElementById("elementAChanger").innerHTML = "Tu as enlevé ta souris de Item 2.";
    }, false);

    changerItemTrois.addEventListener("mouseover", function (event) {
        document.getElementById("elementAChanger").innerHTML =
            "Tu as positionné ta souris sur Item 3.";
    }, false);

    changerItemTrois.addEventListener("mouseout", function (event) {
        document.getElementById("elementAChanger").innerHTML = "Tu as enlevé ta souris de Item 3.";
    }, false);
}