var photoIndex = 1;

function plusPhoto(n) {
    showPhoto(photoIndex += n);
}

function showPhoto(n) {
    var i;
    var photo = document.getElementsByClassName("photo");
    if (n > photo.length) {
        photoIndex = 1;
    }
    if (n < 1) {
        photoIndex = photo.length;
    }
    for (i = 0; i < photo.length; i++) {
        photo[i].style.display = "none";
    }
    photo[photoIndex - 1].style.display = "block";
}