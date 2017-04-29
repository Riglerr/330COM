import React, { Component, PropTypes } from 'react';
import {
    DrawerLayoutAndroid,
    Navigator,
    BackAndroid
} from 'react-native';

import DrawerMenu from './DrawerMenu'
import Toolbar from './Toolbar'
import SearchView from '../views/SearchView'
import RecommendView from '../views/RecommendView'
import DetailsView from '../views/DetailsView'

class Drawer extends Component {
    constructor(props) {
        super(props)

        this._renderNavigationView = this._renderNavigationView.bind(this);
        this._setDrawerOpen = this._setDrawerOpen.bind(this);
        this._setDrawerClosed = this._setDrawerClosed.bind(this);
        this._renderScene = this._renderScene.bind(this);
        this._selectDrawerItem = this._selectDrawerItem.bind(this);
        this._getRouteByIndex = this._getRouteByIndex.bind(this);
        this._setToolbarTitle = this._setToolbarTitle.bind(this);
        this._openDetailsView = this._openDetailsView.bind(this);

        this.state = {
            toolbarTitle: 'Search',
            routes: [
                {
                    title: 'SearchView',
                    text: 'Search',
                    index: 0,
                    component: SearchView,
                    componentProps: {
                        movieListItemPress: this._openDetailsView,
                    },
                    menu: true,
                    initial: true
                },
                {
                    title: 'RecommendView',
                    text: 'Recommend',
                    index: 1,
                    component: RecommendView,
                    componentProps: {
                        onItemPress: this._changeScene,
                    },
                    menu: true,
                    initial: false
                },
                {
                    title: 'DetailsView',
                    index: 2,
                    component: DetailsView,
                    componentProps: {
                        movie: null
                    },
                    menu: false,
                    initial: false,
                    text: null
                }
            ]
        }
    }
    componentDidMount() {
        let navigator = this._navigator
        BackAndroid.addEventListener("hardwareBackPress", () => {
            navigator.pop()
            return true
        })

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.toolbarTitle != this.state.toolbarTitle) {
            return true
        }
        return false
    }
    _renderNavigationView() {
        return (
            <DrawerMenu 
                    menuItems={this.state.routes.filter((e) => e.menu === true)} 
                    onItemPress={this._selectDrawerItem}
            />
        )
    }
    _setDrawerOpen() {
        this.refs['DRAWER'].openDrawer();
    }

    _setDrawerClosed() {
        this.refs['DRAWER'].closeDrawer()
    }

    _renderScene(route, navigator) {
        return(
            <route.component {...route.componentProps} />
        )
    }

    _setToolbarTitle(newTitle) {
        this.setState({
            toolbarTitle: newTitle
        });
    }

    _openDetailsView(rowData) {
        let route = this.state.routes[2]
        route.componentProps.movie = rowData

        this._setToolbarTitle(route.text)
        this._navigator.push(route)
        this._setDrawerClosed()
    }

    _selectDrawerItem(targetIndex) {
        let route = this._getRouteByIndex(targetIndex)
        this._setToolbarTitle(route.text)
        this._navigator.replace(route)
        this._setDrawerClosed()
    }

    _getRouteByIndex(index) {
        return this.state.routes.find((e, i) => e.index == index)
    }
    
    render() {
        return (
            <DrawerLayoutAndroid
                drawerWidth={300} 
                style={{flex: 1, }}
                drawerPosition={DrawerLayoutAndroid.positions.Left} 
                renderNavigationView = {this._renderNavigationView}
                ref={'DRAWER'}
            >
                <Toolbar onIconPress={this._setDrawerOpen} title={this.state.toolbarTitle}/>
                <Navigator 
                    initialRoute={this.state.routes[0]}
                    renderScene={this._renderScene}
                    ref={(ref) => this._navigator = ref}
               />
            </DrawerLayoutAndroid>
        );
    }
}

Drawer.propTypes = {
    routes: PropTypes.array
}

export default Drawer;