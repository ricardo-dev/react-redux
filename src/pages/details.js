import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import {connect} from 'react-redux';
import api from '../api';

class Details extends Component{

    /*componentDidMount(){
        const {nome, idade} = this.props.navigation.state.params.dados;
        ToastAndroid.show(`Nome: ${nome}`, ToastAndroid.SHORT);
    }*/

    goBackView = ()=>{
        //this.props.increaseCounter(obj={nome:'Ricardo', sNome:'Santos'});
        this.props.navigation.goBack();
    }

    getAntFunction = ()=> {
        this.props.getFunction('1');
    }

    getPostFunction = ()=> {
        this.props.postFunction(obj={celular:'62991111111', senha:'12345'})
    }

    render(){
        return(
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
            }}>
                <TouchableOpacity
                   onPress={this.goBackView} >
                    <Text>Voltar</Text>
                </TouchableOpacity>

                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                }}>
                    <TouchableOpacity
                        style={{
                            marginHorizontal:10,
                        }}
                        //onPress={ this.goBackView } >
                        onPress={
                          ()=> this.props.increaseCounter(obj={nome:'Ricardo', sNome:'Santos'})
                          //this.goBackView
                        }>
                        <Text>Incrementar</Text>
                    </TouchableOpacity>
                    <Text>{this.props.counter}</Text>
                    <TouchableOpacity
                        style={{
                            marginHorizontal:10,
                        }}
                        onPress={
                          ()=> this.props.decreaseCounter()
                        }>
                        <Text>Decremento</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity onPress={ 
                        ()=> this.getPostFunction()
                    }>
                        <Text>POST</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={
                        () => this.getAntFunction()
                    }>
                        <Text>GET</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state){
  return {
    counter: state.counter,
  }
}

function mapDispatchToProps(dispatch){
  return {
    increaseCounter: (obj)=> dispatch({type:'INCREASE_COUNTER', payload:obj }),
    decreaseCounter: ()=> dispatch({type:'DECREASE_COUNTER'}),
    getFunction : (id)=> api.get('/api/usuario/usuario-id/'+id).then(response => dispatch({type:'GET', payload:response.data.data})).catch(()=>dispatch({type:'ERROR'})),
    postFunction: (obj) => api.post('/auth/', obj).then(response => dispatch({type:'POST', payload:response.data.data})).catch(()=>dispatch({type:'ERROR'})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Details);
