import React from 'react';
import { TextInput,KeyboardAvoidingView, ScrollView,TouchableOpacity, Image, StyleSheet, Text, View, StatusBar, KeyboardAvoidingViewBase } from "react-native";
import Icon from 'react-native-vector-icons';
const Signup = ({navigation}) => {
    return ( 
        <KeyboardAvoidingView behavior='position'>
        <View style={styles.main}>
            
            <StatusBar 
            backgroundColor='#1F83C5' 
            />
            <View style={styles.logosection}> 
            <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
            </View>
            <View style={styles.signinsection}> 
           
            <View style={styles.signininnersection}>
                <View style={{flex:1}}>
                    <Icon name='mail' />
                <Text style={styles.txtsignin}>SignUp</Text>
                <Text style={styles.label}>Username</Text>
                <TextInput  style={styles.inputtext}/>
                
                <Text style={styles.label}>Email</Text>
                <TextInput  style={styles.inputtext}/>
                <Text style={styles.label}>Password</Text>
                <TextInput  keyboardType='visible-password' style={styles.inputtext} />
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput  keyboardType='visible-password' style={styles.inputtext} />
                
                <Text style={styles.password}>Forgot Password</Text>
                <View style={styles.tchsignin}>
                   <TouchableOpacity style={styles.tchinnersignin}>
                    <Text style={{color:'white',textAlign:'center',fontFamily:'OpenSans-Bold',fontSize:16}}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>   
                </View>
                <View >
            <Text style={styles.dontacc} onPress={()=> navigation.navigate('signin')}>Already have an account? <Text style={{fontFamily:'OpenSans-SemiBold', fontSize:12,}}>Sign In</Text></Text>
            </View>
            </View>
            
            </View>
        </View>
        </KeyboardAvoidingView>
        
     );
}
 
export default Signup;

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#1F83C5'
    },
    logosection:{
        flex:0.2,
        justifyContent:'center',
        alignItems:'center'
    },
    signinsection:{
        flex:0.8,
        backgroundColor:'white',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
    },
    signininnersection:{
        flex:1,
        margin:'10%',
    },
    logo:{
    alignSelf:'center',
    width:'30%',
    height:'80%'
    },
    txtsignin:{
        fontSize:24,
        fontFamily:'OpenSans-Bold',
        textAlign:'center',
        color:'#1D2226'
    },
    label:{
        color:'#1D2226',
        opacity:0.5,
        fontFamily:'OpenSans-Regular',
        marginTop:'9%'
    },
    inputtext:{
        borderBottomWidth:1,
        borderBottomColor:'#707070',
        height:'10%',
        color:'#1D2226',
        fontFamily:'OpenSans-Bold'
    },
    password:{
        color:'#1F83C5',
        textAlign:'right',
        marginTop:'3%'
    },
    tchsignin:{
        alignItems:'center',
        justifyContent:'center',
        
        
    },
    tchinnersignin:{
        borderRadius:50,
        backgroundColor:'#1F83C5',
        height:'35%',
        width:'70%',
        justifyContent:'center',

    },
    dontacc:{
        fontFamily:'OpenSans-Regular', 
        fontSize:12,
        textAlign:'center',
        color:'#1A1A1A',
        
    }
})
