var photoIndex = 0;

// used to navigate the image gallery
function nextPhoto(direction) {
    photoIndex += direction;
    var photo = document.getElementsByClassName("photo");

    // check which image to show
    if (photoIndex < 0)
        photoIndex = (photo.length - 1);
    photoIndex = photoIndex % photo.length;

    // display one image base on input and hide others
    for (i = 0; i < photo.length; i++) {
        photo[i].style.display = "none";
    }
    photo[photoIndex].style.display = "block";
}
