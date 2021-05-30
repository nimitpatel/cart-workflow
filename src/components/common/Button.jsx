import { useContext } from "react"
import Theme from "../../contexts"

export const Button = ({ label, onClick }) => {
    const { theme } = useContext(Theme)
    
    return (
        <button className={theme} onClick={() => onClick()} >{label}</button>
    )
}