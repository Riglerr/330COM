import React, { Component, PropTypes } from 'react';
import {
    Navigator,
    Text
} from 'react-native'

class CustomNavigator extends Component {
    constructor(props) {
        super(props)

        this._renderScene = this._renderScene.bind(this);
        this._getInitialRoute = this._getInitialRoute.bind(this);
        this._getComponentForScene = this._getComponentForScene.bind(this);
        this._getRouteByIndex = this._getRouteByIndex.bind(this);
        this._changeScene = this._changeScene.bind(this);
    }

    _renderScene(route, navigator) {
        return <route.component navigator={navigator} />
    }

    _getComponentForScene(route) {
        let scene = this._getRouteByIndex(route.index)
        return scene.component;
    }
    
    _changeScene(targetIndex) {
        this._navigator.push(this._getRouteByIndex(targetIndex))
    }

    _getRouteByIndex(index) {
        return this.props.routes.filter((e, i) => e.index == index)
    }

    _getInitialRoute() {
        let route = this.props.routes.find((e,i) => e.initial === true)
        return route ? route : this.props.routes[0]
    }
    render() {
        return (
            <Navigator 
                initialRoute={this._getInitialRoute()}
                renderScene={this._renderScene}
                ref={(ref) => this._navigator = ref}
            />
        )
    }
}

CustomNavigator.propTypes = {
    routes: PropTypes.array.isRequired,
}

export default CustomNavigator;