import React, { Component } from 'react';
import {
    Navigator
} from 'react-native';

import SearchView from './SearchView'
import RecommendView from './RecommendView'
import DetailsView from './DetailsView'

const routes = [ 
    {
        title: 'SearchView',
        text: 'Search',
        index: 0,
        component: SearchView,
        menu: true,
        initial: true
    },
    {
        title: 'RecommendView',
        text: 'Recomment',
        index: 1,
        component: RecommendView,
        menu: true,
        initial: false``
    },
    {
        title: 'DetailsView',
        index: 2,
        component: DetailsView,
        menu: false,
        initial: false,
        text: null
    }
]

class DrawerView extends Component {
   constructor(props) {
       super(props)

       this.state = {
            routes: routes
       }
   }
   render() {
       return (
           <Drawer routes={this.state.routes} >
               
           </Drawer>
       )
   }
}

export default DrawerView;