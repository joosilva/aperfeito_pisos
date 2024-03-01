import { Home } from "../components/body/home/Home";
import { Servicos } from "../components/body/servicos/Servicos";
import { Sobre } from "../components/body/sobre/Sobre";
import { Contato } from "../components/body/contato/Contato";

function Ancoras() {

    return (
        <>
            <div id="home">
                <Home />
            </div>
            <div id="servicos">
                <Servicos />
            </div>
            <div id="sobre">
                <Sobre />
            </div>
            <div id="contato">
                <Contato />
            </div>
        </>
    )

}

export default Ancoras;