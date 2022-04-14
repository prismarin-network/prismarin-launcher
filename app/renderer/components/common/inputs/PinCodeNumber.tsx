import {DetailedHTMLProps, InputHTMLAttributes} from "react";

interface PinCodeNumberProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    focused: boolean
}

const PinCodeNumber = ({focused, ...HTMLElements}: PinCodeNumberProps) => {
    return (
        <input
            className="w-[45px] input"
            type="text"
            maxLength={1}
            ref={input => (focused && input) && input.focus()}
            {...HTMLElements}
        />
    )
}

export default PinCodeNumber
