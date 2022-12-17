
function loadjscssfile(filename, filetype) {
    if (filetype=="js") { 
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css") { 
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
};

function appendAssets() {
    if (window.innerWidth <= 767) {
        console.log("small")
        loadjscssfile("src/small.css", "css"); 
    }
    else if (window.innerWidth <= 1299 && window.innerWidth >= 768) {
        console.log('fdg')
        loadjscssfile("src/medium.css", "css"); 
    }
    else if (window.innerWidth >= 1300) {
        console.log('big file')
        loadjscssfile("src/index.css", "css"); 
    }
};


appendAssets();