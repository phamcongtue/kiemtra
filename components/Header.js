import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
} from "react-native";
import React from "react";

const Header = () => {
    return (
        <View>
            <ImageBackground
                source={require("../assets/images/imgFlowers1.png")}
                style={{ width: 412, height: 435, borderRadius: 30 }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 50,
                        marginHorizontal: 15,
                        justifyContent: "space-between",
                    }}
                >
                    <TouchableOpacity>
                        <Image
                            source={require("../assets/icons/iconBack.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require("../assets/icons/iconShare.png")}
                        />
                    </TouchableOpacity>
                </View>
                <View></View>
            </ImageBackground>
        </View>
    );
};

export default Header;