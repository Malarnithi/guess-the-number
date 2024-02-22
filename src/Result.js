import React from "react";

export default function Result({secretNum, term}) {
    let result;
    
    if(term){
    if(term>secretNum) {
         result='Higher';
    }
    else if(term<secretNum) {
        result='Lower';
    }
    else if(term==secretNum) {
        result='Wow! You found it';
    }
    else{
        result='Enter valid input';
    }
    } 

    return(
        <h3 className="result">You Guessed: {result}</h3>
    )
}