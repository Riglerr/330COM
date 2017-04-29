import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    View,
    Text,
    Image
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 60,
        padding: 20
    },
    selected: {
        backgroundColor: '#fff',
    },
    innerContainer: {
        flexDirection: 'row',
        flex: 1
    }
})

class DrawerMenuItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let containerStyle = this.props.data.selected ?
            {...styles.container, ...styles.selected} :
            styles.container
        return (
            <TouchableHighlight
                style={containerStyle}
                onPress={this.props.onPress.bind(null, this.props.data.index)}>
                <View style={styles.innerContainer}>
                    <Image source={{uri: 'ic_send_black_24dp.png'}} style={{width: 40, height: 40}} />
                <Text>{this.props.data.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

DrawerMenuItem.propTypes = {
    data: PropTypes.object,
    onPress: PropTypes.func.isRequired
}

export default DrawerMenuItem;