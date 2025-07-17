import { useNavigate } from "react-router";

function Esc(){
    const navigate = useNavigate();

    function handleEsc(){
        navigate('/')
    }
    return(
        <div className="esc">
            <button onClick={handleEsc}>Home</button>
        </div>
    )
}
export default Esc;