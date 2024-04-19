//
class Multimedia {
    constructor(url) {
        this._url = url;
    }
    getUrl() {
        return this._url;
    }
    setInicio() {
        console.log("Este método es para realizar un cambio en la URL del video");
    }
}
//
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }
    getId() {
        return this._id;
    }
    playMultimedia() {
        const urlSeries = 'https://www.youtube.com/embed/IwrPKuEB32k';
        const urlPeliculas = 'https://www.youtube.com/embed/qV0ANjlVyCM';
        const urlMusica = 'https://www.youtube.com/embed/0FQ3Ucml458';

        const idSeries = '#series';
        const idPelicula = '#peliculas';
        const idMusica = '#musica';

        modulo.reproducirVideo(this.getUrl(), this.getId());
    }
    // EL ATRIBUTO PARA CONTROLAR START SE INCRUSTA EN LA URL DEL VIDEO (src)
    setInicio(start) {
        //INGRESAR EN SEGUNDOS
        const inicio = `${this.getUrl()}?start=${start}`;
        $(this.getId()).attr('src', inicio);
    }
}
//
const modulo = (() => {

    const funcionPrivada = (url, id) => {
        $(id).attr('src', url);
    };
    const funcionPublica = (url, id) => {
        return funcionPrivada(url, id);
    };
    return {
        reproducirVideo: (url, id) => {
            return funcionPublica(url, id);
        }
    };
})();
//https://developers.google.com/youtube/iframe_api_reference?hl=es
const moduleIngreso = (() => {
    const urlSeries = 'https://www.youtube.com/embed/IwrPKuEB32k';
    const urlPeliculas = 'https://www.youtube.com/embed/qV0ANjlVyCM';
    const urlMusica = 'https://www.youtube.com/embed/0FQ3Ucml458';

    const idSeries = '#series';
    const idPelicula = '#peliculas';
    const idMusica = '#musica';

    const ingresoPeli = new Reproductor(urlPeliculas, idPelicula);
    ingresoPeli.playMultimedia();
    ingresoPeli.setInicio('1480') ;//SEGUNDOS

    const ingresoSerie = new Reproductor(urlSeries, idSeries);
    ingresoSerie.playMultimedia();
    ingresoSerie.setInicio('368') ;//SEGUNDOS

    const ingresoMusica = new Reproductor(urlMusica, idMusica);
    ingresoMusica.playMultimedia();
    ingresoMusica.setInicio('457') ;//SEGUNDOS
})();


