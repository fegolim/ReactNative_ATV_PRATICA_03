import React from 'react'
import { Button } from 'react-native'

export default Comp => {
    function executar() {
        console.warm('Executando!!!!')
    }

    const BtCol1 = () => {
        return (
            <>
                <Button
                    title="/"
                    onPress={executar}
                />
                <Button
                    title="7"
                    onPress={function () {
                        console.warn('7')
                    }}
                />
                <Button
                    title="4"
                    onPress={() => console.warn("4")
                    }
                />
                <Button
                    title="1"
                    onPress={() => console.warn("4")
                    }
                />
            </> /*Esse é o fragmento, posso colocar vários componentes e distintos dentro dele*/
        )
    }
    /*const BtCol2 = () => {
        return (
            <>
                <Button
                    title="+"
                    onPress={executar}
                />
                <Button
                    title="8"
                    onPress={function () {
                        console.warn('7')
                    }}
                />
                <Button
                    title="5"
                    onPress={() => console.warn("4")
                    }
                />
                <Button
                    title="2"
                    onPress={() => console.warn("4")
                    }
                />
            </>
        )
    }*/
    /*const BtCol3 = () => {
        return (
            <>
                <Button
                    title="*"
                    onPress={executar}
                />
                <Button
                    title="9"
                    onPress={function () {
                        console.warn('7')
                    }}
                />
                <Button
                    title="6"
                    onPress={() => console.warn("4")
                    }
                />
                <Button
                    title="3"
                    onPress={() => console.warn("4")
                    }
                />
            </> 
    }*/
}
