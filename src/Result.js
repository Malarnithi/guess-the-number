export default function Result({ secretNum, term }) {
    let result;

    if (term) {
        const termNumber = parseInt(term); // Convert term to a number
        if (termNumber > secretNum) {
            result = 'Higher';
        } else if (termNumber < secretNum) {
            result = 'Lower';
        } else if (termNumber === secretNum) {
            result = 'Wow! You found it';
        } else {
            result = 'Enter valid input';
        }
    }

    return (
        <h3 className="result">You Guessed: {result}</h3>
    );
}
