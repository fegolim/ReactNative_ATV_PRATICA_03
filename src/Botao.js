import React from 'react'
import { Button } from 'react-native'


const Comp1 = () => {
    return(
        <>
            <Button
                title="/"
                onPress={() => alert('Você teclou a tecla / ')} />
            <Button
                title="7"
                onPress={() => alert('Você teclou a tecla 7 ')} />
            <Button
                title="4"
                onPress={() => alert('Você teclou a tecla 4 ')} />
            <Button
                title="1"
                onPress={() => alert('Você teclou a tecla 1 ')} />
        </>
    )
    
}

const Comp2 = () => {
    return (
        <>        
            <Button
                title="+"
                onPress={() => alert('Você teclou a tecla + ')} />
            <Button
                title="8"
                onPress={() => alert('Você teclou a tecla 8 ')} />
            <Button
                title="5"
                onPress={() => alert('Você teclou a tecla 5 ')} />
            <Button
                title="2"
                onPress={() => alert('Você teclou a tecla 2 ')} />
        </>
    )
    
}

const Comp3 = () => {
    return(
        <>
            <Button
                title="*"
                onPress={() => alert('Você teclou a tecla * ')} />
            <Button
                title="9"
                onPress={() => alert('Você teclou a tecla 9 ')} />
            <Button
                title="6"
                onPress={() => alert('Você teclou a tecla 6 ')} />
            <Button
                title="3"
                onPress={() => alert('Você teclou a tecla 3 ')} />
        </>
    )
    
}

export {Comp1, Comp2, Comp3};