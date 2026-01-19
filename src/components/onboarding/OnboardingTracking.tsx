import { BlurView } from 'expo-blur';
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../constants/colors';
import { Smirky } from '../../constants/step2Smirky';


export default function Step2({navigation}){
    const [selectedCondition, setSelectedCondition] = useState([]);
    function toggleConditionBox(index){
        if(selectedCondition.includes(index)){
            //if the user selects the condition that was already selected before remove the condition box from the array
            setSelectedCondition(selectedCondition.filter(i=>i!==index))
        }else{
            //if the user selects new goal then add the goal box to the selectedGoals array
            setSelectedCondition([...selectedCondition,index]);
        }
    }

    function ConditionBox({ index, text}) {
        const isSelected = selectedCondition.includes(index);
        let content;
        if (isSelected) {
            content = (
            <View style={[ {flex:1,width:'100%', backgroundColor: "rgba(44, 36, 63, 1)"}]}>
                <View style={[styles.blur,{backgroundColor:'transparent'}]}>
                    <Text style={[styles.conditionText, { color: "white" }]}>{text}</Text>
                </View>
            </View>
        );
    } else {
        content = (
            <BlurView intensity={30} tint="light" style={styles.blur}>
                <Text style={styles.conditionText}>{text}</Text>
            </BlurView>
        );
    }

  return <TouchableOpacity onPress={() => toggleConditionBox(index)} style={styles.conditionBox}>{content}</TouchableOpacity>;
}

    return(
        <LinearGradient colors={Colors.primaryGradient} style={styles.box}>
            <View style={styles.textContainer}>
                <Text style= {styles.header} > Any conditions we should consider? </Text>
                <View style={styles.choiceContainer}>
                    <View style={styles.wrapper}><Text style={styles.choice}> &#10003;  {selectedCondition.length}/9 chosen items</Text></View>
                    
                    <Image source={Smirky} style={styles.logo} resizeMode='cover'/>
                    
                </View>
                
                <View style = {styles.conditionContainer}>
                    
                    <ConditionBox index={1}  text={"PCOS"}/>
                    <ConditionBox index={2} text={"Endometriosis"}/>
                    <ConditionBox index={3} text={"Neurodivergence"}/>
                    <ConditionBox index={4} text={"IBS"}/>
                    <ConditionBox index={5} text={"Menopause"}/>
                    <ConditionBox index={6} text={"PMDD"}/>
                </View>
                <Text style={styles.otherConditions} >Other conditions</Text>
            
                
                <View style = {styles.conditionContainerII}>
                    <ConditionBox index={7} text={"Thyroid issue"}/>
                    <ConditionBox index={8} text={"Anxiety and Depression"}/>
                    <ConditionBox index={9} text={"Migraines"}/>
                </View>

                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('Step2')}>
                                 <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
                

            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    textContainer:{
        position:'absolute', 
        top:25, 
        width:'100%', 
        alignItems:'center',
        zIndex:10,
    },
    header: {
        width:'100%',
        fontFamily:'Poppins', 
        fontWeight:'500', 
        fontSize:35,
        color:'#000',
        textAlign:'left',
        marginLeft:50
    },
    
    box: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width:200, 
        height:200,
     },
    choice:{
        fontFamily:'Poppins', 
        fontWeight:'500', 
        color:'#000',
        fontSize:16,
        textAlign:'center',
    },
    choiceContainer:{
        flexDirection:'row',
        justifyContent:'space-between', 
        alignItems:'center',
        width:'90%', 
        marginBottom:40
    },
    wrapper:{ 
        width:160, 
        height:30, 
        borderRadius:50,
        borderColor:'#000',
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderWidth:1,
        alignContent:'center',
        justifyContent:'center',
        marginLeft:8,
        marginBottom:150
    },

    conditionContainer:{
        width:'90%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginTop: -105, 
        zIndex:5

    },
    conditionContainerII:{
        width:'180%',
        alignItems:'center',
        

    },
    
    conditionBox:{
        width: '50%',              
        height: 50,
        borderRadius: 46,
        overflow:'hidden',
        borderWidth: 1,
        borderColor:'#B2BEB5',
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        
        
        

    },
    blur:{
        flex:1, 
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(255,255,255,0.22)',
    },
    conditionText:{
        fontFamily:'Poppins', 
        fontWeight:'500', 
        color:'#000',
        fontSize:15,
        paddingTop:10,
        
    },
    button:{
        position:'absolute',
        bottom:-90,
        width:'90%',
        height:'6%',
        backgroundColor:'rgba(135, 89, 239, 0.6)',
        opacity:10,
        alignItems:'center',
        borderRadius:25,
        alignSelf:'center',
        paddingVertical:5,
        paddingHorizontal:15,
        zIndex:10,
        
    },
    buttonText:{color:'#FFFFFF',fontSize:20},
    icon:{
        marginBottom:4,
    }, 
    otherConditions:{
        fontSize:18
    }
   
})

