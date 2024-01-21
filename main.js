
function openModal(val){
    let mdl = document.getElementById('modal');
    let img = document.getElementById('image');
    img.src = "./imgs/" + val + ".jpg";
    mdl.classList.add('display-on');
}
function closeModal(){
    let mdl = document.getElementById('modal');
    mdl.classList.remove('display-on');
}