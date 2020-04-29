import React from 'react';
import { View, Image , TouchableOpacity,Text,Linking } from 'react-native';
import styles from './style';
import logoImg from '../../assets/logo.png'
import {Feather} from '@expo/vector-icons';
import {useNavigation}  from  '@react-navigation/native';
import * as MailComposer from  'expo-mail-composer';

export default  function Detail (){
    const navegation = useNavigation();
    const message = 'Olá, Apad , estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de R$120,00'
    function navegationBack (){
        navegation.goBack ()
    }
    
    function sendWhatsapp (){
        Linking.openURL(`whatsapp://send?phone=559198230-0528text=${message}`);

        
    }
    return (
        <View style={styles.container } >
            <View style={styles.header}>
               <Image source={logoImg} />
               <TouchableOpacity onPress = {navegationBack}>
                  <Feather name ='arrow-left' size={28} color={"#E02041"}/>
                </TouchableOpacity>
            </View>
               <View style ={styles.incident}>
               <Text style ={[styles.incidentProperty, {marginTop:0 }]}>ONG:</Text>
                <Text style ={styles.incidentValue}>APAD</Text>
                    
                <Text style ={styles.incidentProperty}>Caso:</Text>
                <Text style ={styles.incidentValue}>Cadelinha atropelada </Text>
    
                <Text style ={styles.incidentProperty}>Valor:</Text>
                <Text style ={styles.incidentValue}>R$150,00</Text>
           
              </View>
            <View style ={styles.contactBox}>
                <Text style ={styles.heroTitle}>Salve o dia </Text>
                <Text style ={styles.heroTitle}>Seja o herói desse caso. </Text>
        

                <Text style ={styles.heroDescription}>Entre em contato </Text>
                <View style ={styles.actions}>
                   <TouchableOpacity style ={styles.action} onPress = {sendWhatsapp}>
                        <Text style ={styles.actionText}> Whatsapp </Text>
                    </TouchableOpacity>    
                    <TouchableOpacity style ={styles.action} onPress = {()=>{}}>
                        <Text style ={styles.actionText}> Email </Text>
                    </TouchableOpacity>   
                </View>
            </View>
        </View>


    );

}