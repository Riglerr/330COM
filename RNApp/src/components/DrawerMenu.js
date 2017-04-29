import React, { Component, PropTypes } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native'
import DrawerMenuItem from './DrawerMenuItem'

class DrawerMenu extends Component {
    constructor(props) {
        super(props)

        this._renderMenuItems = this._renderMenuItems.bind(this);
    }
    _renderMenuItems() {
        return this.props.menuItems.map((item, i) => 
            <DrawerMenuItem key={i} data={item} onPress={this.props.onItemPress} />
        )
    }
    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.panel}>
                    <Image source={require("../../icons/ic_launcher.png")}/>
                    <Text style={styles.panelTitle}>
                        Movie App
                    </Text> 
                    <Text style={styles.panelSubTitle}>
                        Made with React-Native
                    </Text> 
                </View>
                <View style={styles.list}>
                   {this._renderMenuItems()}
                </View>
            </View>
        );
    }
}

DrawerMenu.propTypes = {
    menuItems: PropTypes.array,
    onItemPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    panel: {
            height: 160,
            backgroundColor: '#42c5f4',
    },
    panelTitle: {
            marginTop: 10, 
            marginLeft: 10,
            fontSize: 16,
            textAlign: 'left'
    },
    panelSubTitle: {
        marginLeft: 10,
        fontSize: 14,
        textAlign: 'left'
    },   
    list: {
        flex: 1
    }
})
export default DrawerMenu;