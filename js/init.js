function headerLoad() {
    document.write(
        "<header>"+
            "<h1>Darts</h1>"+
            "<div>"+
                "<img src='./img/baldart.jpg' id='baldart'>"+
                "<img src='./img/jobbdart.jpg'>"+
            "</div>"+
        "</header>"
    )
}

function navLoad() {
    document.write(
        '<div id="nav">'+
            '<a href="./index.html">DARTS</a>'+
            '<a href="./tortenet.html">Története</a>'+
            '<a href="./jatekok.html">Játékok</a>'+
            '<a href="./versenyszab.pdf" target="_blank">Versenyszabályzat</a>'+
            '<a href="./eszkozok.html">Eszközök</a>'+
        '</div>'
    )
}

function footerLoad() {
    document.write(
        "<footer>"+
            "<a href='https://darts.hu/' target='_blank'>Forrás: Magyar Darts Szövetség honlapja</a>"+
        "</footer>"
    )
}