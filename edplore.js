document.addEventListener('DOMContentLoaded', function() {
const myimage = document.getElementById('myimage');
const imageinput = document.getElementById('imageinput');

   
nextimagebutton.addEventListener('click', function() {
    if (imagechosen) {
        currentindex = (currentindex + 1) % svgimages.length;
        myimage.src = svgimages[currentindex];
    }
});

myimage.addEventListener('click', function() {
    if (imageChosen) {
        currentindex = (currentindex + 1) % svgimages.length;
        myimage.src = svgimages[currentindex];
    }
});

imageinput.addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        myimage.src = event.target.result;
        imagechosen = true; 
    }

    reader.readAsDataURL(file);
    });
});
 const nextimagebutton = document.querySelector('.button1');
   