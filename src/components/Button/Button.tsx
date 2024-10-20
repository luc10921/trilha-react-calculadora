import './Button.css'

interface ButtonProps {
    label: string;
    onClick?: () => void;
}
export const Button = ({label, onClick}: ButtonProps) => {

    return (
        <button className="button" onClick={onClick} >
            {label}
        </button>
    )
}