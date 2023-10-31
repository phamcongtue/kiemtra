import { View, Text, Pressable, Image } from "react-native";
import React from "react";

const Cta = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 25,
                marginTop: 70,

            }}
        >
            <Pressable style={{ padding: 20 }}>
                <Image source={require("../assets/icons/chat.png")} />
            </Pressable>
            <Pressable
                style={{
                    padding: 20,
                    backgroundColor: "#A58EFF",
                    justifyContent: "center",
                    width: "80%",
                    alignItems: "center",
                    borderRadius: 10,
                }}
            >
                <Text style={{ color: "#fff", fontWeight: "600" }}>
                    Respond
                </Text>
            </Pressable>
        </View>
    );
};

export default Cta;