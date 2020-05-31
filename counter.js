import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
class Counter extends React.Component{
   
    render(){
         return(
                <View style={{justifyContent:"center",alignContent:"center",flex:1}}>
                     <View style={{flexDirection:"row",justifyContent:'space-around'}}>
                         <TouchableOpacity onPress={()=>{this.props.increaseCounter()}}>
                            <Text>Increse</Text>
                         </TouchableOpacity>
                         <Text>{this.props.counter}</Text>
                         <TouchableOpacity onPress={()=>{this.props.decreseCounter()}}>
                            <Text>Decrese</Text>
                         </TouchableOpacity>
                     </View>
                </View>
            )
       }
}
function mapStateToProps(state){
    return{
        counter:state.counter
    }
}
function mapDisPatchToProps(dispatch){
    return{
    increaseCounter:()=>{dispatch({type:"INCREASE_COUNT"})},
    decreseCounter:()=>{dispatch({type:"DECREASE_COUNT"})}
    }
}
export default connect(mapStateToProps,mapDisPatchToProps)(Counter);