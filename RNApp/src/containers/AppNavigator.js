import React, { Component } from 'react';
import {
    Navigator
} from 'react-native'

import Drawer from '../components/Drawer'
import SplashView from '../views/SplashView'
import SearchView from '../views/searchView'

class AppNavigator extends Component {
    constructor(props) {
        super(props)

        this._renderScene = this._renderScene.bind(this);
        this._renderDrawerScene = this._renderDrawerScene.bind(this);
        this._renderSplashScreen = this._renderSplashScreen.bind(this);
        this._getComponentForScene = this._getComponentForScene.bind(this);
        this._getRouteByIndex = this._getRouteByIndex.bind(this);
        this._changeScene = this._changeScene.bind(this);
        this.routes = [
            {title: 'Splash', index: 0},
            {title: 'Search', index: 1},
        ]

        // this.menuItems = [
        //     {
        //         title: 'Search',
        //         icon: '', 
        //         index: 0,
        //         targetSceneIndex: 1
        //     },
        //     {
        //         title: 'Recommend',
        //         icon: '', 
        //         index: 1,
        //         targetSceneIndex: 2
        //     }
        // ]
    }

    _renderScene(route, navigator) {
        return route.title == 'splash' ?
            this._renderSplashScreen() :
            this._renderDrawerScene(route, navigator)
    }

    _renderDrawerScene(route, navigator) {
        let scene = this._getComponentForScene(route)
        return (
            <Drawer
                navigator={navigator}
                menuItems={this.menuItems}
                title={route.title}
                onItemPress={this._changeScene}
            >
                {scene}
            </Drawer>
        )
    }

    _renderSplashScreen(navigator) {
        return <SplashView navigator={navigator}/>
    }

    _getComponentForScene(route) {
        switch(route.index) {
            case 1: {
                return <SearchView />
            }
            case 2: {
                return RecommendView
            }
            case 3: {
                return DetailsView
            }
            default: return null
        }
    }
    
    _changeScene(targetIndex) {
        this._navigator.push(this._getRouteByIndex(targetIndex))
    }

    _getRouteByIndex(index) {
        return this.routes.filter((e, i) => e.index == index)
    }
    render() {
        return (
            <Navigator 
                initialRoute={this.routes[1]}
                renderScene={this._renderScene}
                ref={(ref) => this._navigator = ref}
            />
        )
    }
}

export default AppNavigator;