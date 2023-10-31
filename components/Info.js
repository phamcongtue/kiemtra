import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Info = () => {
    return (
        <View style={{ marginHorizontal: 25 }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",

                    marginTop: 25,
                }}
            >
                <Text style={styles.title}>Go for a walk and feed the dog</Text>
                <TouchableOpacity style={{ marginTop: 15 }}>
                    <Image source={require("../assets/icons/Icon_Like.png")} />
                </TouchableOpacity>
            </View>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "500",
                    colo: "#313131",
                    marginTop: 10,
                    lineHeight: 27,
                }}
            >
                Leaving for a week, French Bulldog Wilfred needs help feeding
                twice a day and walk from 26 to 30 September. I bought food, it
                will be easy.
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    gap: 5,
                    marginTop: 15,
                    alignItems: "center",
                }}
            >
                <Image source={require("../assets/icons/iconWallet.png")} />
                <Text style={{ fontSize: 18,fontWeight: '600' }}>Reward 34$</Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    gap: 5,
                    marginTop: 15,
                    alignItems: "center",
                }}
            >
                <Image source={require("../assets/icons/iconGeo.png")} />
                <Text style={{ fontSize: 18, fontWeight: '600' }}>3 HERALD</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: "800",
        fontSize: 34,
        color: "#313131",
        width: "72%",
    },
});

export default Info;