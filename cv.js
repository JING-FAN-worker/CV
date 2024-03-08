function adjustScale() {
    var scale = window.innerWidth / 1000; 
    document.body.style.transform = 'scale(' + scale + ')';
    document.body.style.transformOrigin = 'top left';
    document.body.style.width = '800px'; 
    document.body.style.height = '100%';
}

window.onresize = adjustScale;
window.onload = adjustScale;
