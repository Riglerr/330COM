import React, { Component, PropTypes } from 'react';
import {
    ToolbarAndroid,
    StyleSheet
} from 'react-native';
var nativeImageSource = require('nativeImageSource');

var styles = StyleSheet.create({ toolbar: { backgroundColor: '#fff', height: 56 }, });
const drawerIcon = require('../../icons/ic_menu_black_24dp.png')
class Toolbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ToolbarAndroid
                title={this.props.title}
                titleColor= '#000'
                navIcon={nativeImageSource({
                    android: 'ic_menu_black_24dp',
                    height: 48,
                    width: 48
                })}
                style = {styles.toolbar}
                onIconClicked={this.props.onIconPress}/>
            );
    }
}

Toolbar.propTypes = {
    title: PropTypes.string,
    onIconPress: PropTypes.func.isRequired
};

export default Toolbar;