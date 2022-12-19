function you_have_small_monitor(){
    if (window.innerWidth <= 1299 && window.innerWidth >= 768) {
        console.log('yea');
        const l = document.getElementById("deletable");
        const p = document.getElementById("last");
        const g = document.getElementById("third");
        console.log(g);
        l.removeChild(l.lastElementChild);
        p.removeChild(p.lastElementChild);
        g.removeChild(g.lastElementChild);
    }
}
you_have_small_monitor();