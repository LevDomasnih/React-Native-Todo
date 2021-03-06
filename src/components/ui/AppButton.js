import React from "react";
import {Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";
import AppTextBold from "./AppTextBold";
import theme from "../../theme";

const AppButton = ({children, onPress, style, color= theme.MAIN_COLOR}) => {
    const Wrapper = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity

    return (
        <Wrapper onPress={onPress}  activeOpacity={0.7}>
            <View style={{...styles.button, ...style, backgroundColor: color}}>
                <AppTextBold style={styles.text}>
                    {children}
                </AppTextBold>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#fff"
    }
})

export default AppButton