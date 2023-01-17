function alteraImg() {
    const html = document.documentElement;
    // removendo e adcionando a classe
    html.classList.toggle('img360');

    // pegar a tag img
    const img = document.querySelector('.trocaImg');
    const img360 = document.querySelector('.botao');

    // substituir a imagem
    if (html.classList.contains('img360')) {
        //se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./img/sofa.png");
    } else {
        //se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./img/sofa.gif");
        
    }

    if (html.classList.contains('img360')) {
        //se tiver light mode, adicionar a imagem light
        img360.setAttribute("src", "./img/botaogif.png");
    } else {
        //se tiver sem light mode, manter a imagem normal
        img360.setAttribute("src", "./img/cancela.png");

    }
}