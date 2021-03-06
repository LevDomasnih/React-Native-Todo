import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import AppText from "./ui/AppText";

const Todo = ({todo, onRemove, onOpen}) => (
    <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => onOpen(todo.id)}
        onLongPress={() => onRemove(todo.id)}
    >
        <View style={styles.todo}>
            <AppText>{todo.title}</AppText>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 5,
        marginBottom: 10
    }
})

export default Todo