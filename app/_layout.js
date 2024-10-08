import { Stack } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = ()=>{
    const fontLoaded = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),

    })

    const onLayoutRootView = useCallback(async()=>{
        if(fontLoaded){
            await SplashScreen.hideAsync();
        }
    },[fontLoaded])
    if(!fontLoaded){return (
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}><ActivityIndicator color="red" size="small"/></View>)
    }
    return(
        <View style={{flex:1}} onLayout={onLayoutRootView} >
             <Stack screenOptions={{headerShown:false}} />
        </View>
       
    )
}

export default Layout;