var photoIndex = 0;

function nextPhoto(direction) {
    photoIndex += direction;
    var photo = document.getElementsByClassName("photo");
    if (photoIndex < 0)
        photoIndex = (photo.length - 1);
    photoIndex = photoIndex % photo.length;
    for (i = 0; i < photo.length; i++) {
        photo[i].style.display = "none";
    }
    photo[photoIndex].style.display = "block";
}
