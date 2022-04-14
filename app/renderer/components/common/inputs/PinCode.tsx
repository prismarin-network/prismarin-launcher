import PinCodeNumber from "./PinCodeNumber";
import {useState} from "react";

interface PinCodeProps {
    length?: number
    onComplete: (pin: string) => void;
    disabled?: boolean
}

const PinCode = ({length = 4, onComplete, disabled}: PinCodeProps) => {
    const [currentPin, setCurrentPin] = useState("")

    const updatePin = (value) => {
        if (!value) {
            setCurrentPin(currentPin.slice(0, -1))
            return;
        }
        // Check if pin is the correct length
        if ((currentPin.length + 1) === length) {
            onComplete(currentPin + value)
        }
        setCurrentPin(currentPin + value)
    }

    return (
        <div className="flex justify-center items-center space-x-4 w-full">
            {[...Array(length)].map((x, i) =>
                <PinCodeNumber
                    key={i}
                    disabled={((i +1) < currentPin.length) || (i > currentPin.length) || disabled}
                    focused={i === currentPin.length}
                    onChange={(event => updatePin(event.target.value))}
                />
            )}
        </div>
    )
}

export default PinCode
