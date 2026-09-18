import type { JSX } from "react"
import Confetti from "react-confetti"

type Props = {
    isGameWon: boolean
}

export default function ConfettiContainer({ isGameWon } : Props) : JSX.Element | null{
    if (!isGameWon) {
        return null
    }
    else {
        return (
            <Confetti
                recycle={false}
                numberOfPieces={1000}
            />
        )
    }

}

/* Another way of typing this -> import Confetti from "react-confetti"

// Type the entire object inline right after the destructuring closing brace
export default function ConfettiContainer({ isGameWon }: { isGameWon: boolean }): JSX.Element | null {
    if (!isGameWon) return null;

    return (
        <Confetti
            recycle={false}
            numberOfPieces={1000}
        />
    )
}
 */