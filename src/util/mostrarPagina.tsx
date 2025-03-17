import Descobrir from '../paginas/descobrir';
//import lerUrl from './lerUrl';

const url = window.location.pathname;
const segmento = url.substring(url.indexOf('/') + 1);
const pagina = url.substring(url.indexOf('/') + 1, url.indexOf('/', url.indexOf('/') + 1));

console.log("Segmento: " + segmento);
console.log("Pagina: " + pagina);

function MostrarPagina() {
    switch (pagina) {
        case '/':
            return <h2>Página Inicial</h2>;
        case 'Descobrir':
            return <Descobrir />;
        case 'produto':
            if(segmento !== ''){
                return <h2>Produto</h2>;
            }
    }
}

export { MostrarPagina };