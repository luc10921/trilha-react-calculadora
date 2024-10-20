import './Input.css'

interface InputProps {
    value: string
}
export const Input = ({value}) => {
    return (
        <div className="input">
            <input disabled value={value}/>
        </div>
    )
}
