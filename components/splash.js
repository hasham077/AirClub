import { ImageBackground,Image, StyleSheet,  View, StatusBar } from "react-native";

import React, {useEffect,useState} from 'react';
const Splash = ({navigation}) => {

    const [splash, setsplash] = useState(false)
    useEffect(()=>{
        if(!splash){
            setTimeout(()=>{
                navigation.replace('signin')
            },3000);
            setsplash(true);
        }
       
    },[])
    return ( 
        
        <View style={styles.main}>
            <StatusBar hidden={true}/>
            <View>
            <ImageBackground style={styles.background} source={require('../assets/images/background.png')}>
            <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
            </ImageBackground>
            </View>
        </View>
     );
}
 
export default Splash;

const styles = StyleSheet.create({
    main:{
        flex:1,
    },
    background:{
        width:'100%',
        height:'100%',
        justifyContent: "center"
    },
    logo:{
    alignSelf:'center',
   marginBottom:'60%'
    }
})
