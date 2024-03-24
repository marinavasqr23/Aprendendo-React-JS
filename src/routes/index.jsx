import { Routes, Route} from 'react-router-dom';
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<p>Pagina Inicial</p>}/>
            <Route path="*" element={<Navigate to ="/pagina-inicial"/>}/> 
            
        </Routes>
    );
}
//linha 6 se o usuario digitar algo errado na url ele volta para a pagina inicial