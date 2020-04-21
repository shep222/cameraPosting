$(document).ready(function() {

    $('body').on('click', '.deleteIconImg', function() {
        let answer = confirm('Are you sure?')
        if (answer) {
            $(this).parent().remove()
            imgValue = $(this).parent().find('.takenPic').attr('src');
            position = picArray.indexOf(imgValue)
            picArray.splice(position, 1)
        }
    })

    var canvas = document.getElementById('canvas');
    var input = document.getElementById('input');

    function picToBlob() {
        canvas.renderImage(input.files[0]);
        var pic = document.getElementById('canvas').toDataURL();
        picArray.push(pic)
        var lastPicture = picArray.length - 1;
        imgSrc = picArray[lastPicture];
        $('.pictureContainer').append($(`<div class="picDiv" ><img class="takenPic" src="${imgSrc}" alt="">
    <img  class="deleteIconImg" src="./images/deleteIcon.png"> </div>`))
    }

    HTMLCanvasElement.prototype.renderImage = function(blob) {
        var ctx = this.getContext('2d');
        var img = new Image();

        img.onload = function() {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        }

        img.src = URL.createObjectURL(blob);
    };

    input.addEventListener('change', picToBlob, false);


})
