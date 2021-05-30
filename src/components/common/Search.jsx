import { Button } from "./Button"

export const Search = ({ setSearch, onClick }) => (
        <div className="search">
            <input 
                type="text" 
                name="search" 
                placeholder="Enter product name here" 
                onChange={({ target: { value } }) => setSearch(value)}
            />
            <Button label="Search" onClick={() => onClick()} />
        </div>
    ) 