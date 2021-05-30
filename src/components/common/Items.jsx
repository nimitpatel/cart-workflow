export const Items = ({ isCheckbox = false, onChange, item, checked }) => (
    <>
        {isCheckbox && (
        <input
            type="checkbox"
            name={item}
            id={item}
            value={item}
            checked={checked.includes(item)}
            onChange={({ target }) => onChange(target)}
        />
        )}
        <label htmlFor={item}>{item}</label>
    </>
)