import { useLocation } from 'react-router-dom';

export default function LerUrl() {
    const localizacao = useLocation();
    return localizacao.pathname;
}

export { LerUrl };