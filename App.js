import React, {useState} from 'react';
import * as Font from 'expo-font'
import AppLoading from "expo-app-loading";

import MainLayout from "./src/components/MainLayout";
import TodoState from "./src/context/todo/todoState";
import ScreenState from "./src/context/screen/screenState";

const loadApplication = async () => {
    await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    })
}

const App = () => {
    const [isReady, setIsReady] = useState(false)

    if (!isReady) {
        return <AppLoading
            startAsync={loadApplication}
            onError={err => console.log(err)}
            onFinish={() => setIsReady(true)}
        />
    }

    return (
        <ScreenState>
            <TodoState>
                <MainLayout/>
            </TodoState>
        </ScreenState>
    )
}


export default App
