import { useContext } from "react"
import Theme from "../../contexts"

export const Header = () => {
    const { theme, setTheme } = useContext(Theme)

    return (
        <header>
            <div className="radio">
                <input 
                    type="radio" 
                    name="theme" 
                    id="red" 
                    checked={theme === 'red'}
                    onChange={({ target: { id }}) => setTheme(id)}
                /> Red
                <input 
                    type="radio" 
                    name="theme"
                    id="blue"
                    checked={theme === 'blue'}
                    onChange={({ target: { id }}) => setTheme(id)}
                /> Blue
            </div>
        </header>
    )
}