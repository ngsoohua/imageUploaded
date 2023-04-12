const imageInput = document.querySelector("#imageUpload");
//const display = document.querySelector("#display");
var imageUploaded = "";


imageInput.addEventListener("change", ()=>{
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        imageUploaded=  reader.result;
        document.querySelector("#display").style.backgroundImage = `url(${imageUploaded})`;

    });
    //reader.readAsDataURL(this.files[0]);
    reader.readAsDataURL(imageInput.files[0]);


});