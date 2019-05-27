import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class Main extends Component{

    detailsView = ()=>{
        this.props.navigation.navigate('Details', {dados:{nome:'Ricardo', idade:27}});
    }

    render(){
        return(
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
            }}>
                <Text>Main</Text>
                <Text>-{this.props.counter}-</Text>
                <TouchableOpacity
                    onPress={this.detailsView}>
                    <Text>Proxima</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state){
  return{
    counter: state.counter,
  }
}

export default connect(mapStateToProps) (Main);
