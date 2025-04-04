import { UserContext } from "./contexts/UseContext";
import { useContext } from "react";
import { useEffect } from "react";


export const BotaoColorido = () => {
    const { active, setActive } = useContext(UserContext);

    const corBtns = [
        { cor: "Azul" },
        { cor: "Vermelho" },
        { cor: "Amarelo" },
        { cor: "Verde" }
    ];

    useEffect(() => {
        console.log(corBtns);
    })


    return (
        <div className="activate">
            {corBtns.map((btn, index) => (

                <div key={index}>
                    <input type="checkbox" name="check" id="check" checked={active} />
                    <button className={`btn ${btn.cor}`} onClick={() => setActive(!active)}>Botão {btn.cor} </button>
                </div>
            ))}
        </div>
    );
};

