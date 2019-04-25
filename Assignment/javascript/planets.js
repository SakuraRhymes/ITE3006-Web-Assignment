var photoIndex = 0;

function nextPhoto() {
    photoIndex++;
    var photo = document.getElementsByClassName("photo");
    photoIndex = photoIndex % photo.length;
    for (i = 0; i < photo.length; i++) {
        photo[i].style.display = "none";
    }
    photo[photoIndex].style.display = "block";

}
