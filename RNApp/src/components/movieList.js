import React, { Component, PropTypes } from 'react';
import {
    View,
    StyleSheet,
    ListView,
    Text
} from 'react-native'

import MovieListItem from './movieListItem'
import MovieApi from '../api'

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        flexDirection: 'column'
    }
})

class MovieList extends Component {
    constructor(props) {
        super(props);

        this._renderSeparator = this._renderSeparator.bind(this);
        this._renderRow = this._renderRow.bind(this);
        this._onPress = this._onPress.bind(this);

        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
                .cloneWithRows({})
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.dataSource != nextProps.dataSource) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource)
            });
        }
    }

    componentDidMount() {
        
    }

    _renderSeparator(sectionID, rowID, adjacentRowHighlighted) { 
        return ( 
            <View key={`${sectionID}-${rowID}`} 
                style={{ 
                    height: adjacentRowHighlighted ? 4 : 1, 
                    backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC', 
                }}
            /> 
        ); 
    }
    
    _onPress(rowData) {
        this.props.onItemPress(rowData)
    }

    _renderRow(rowData) {
        return <MovieListItem data={rowData} onPress={() => this.props.onItemPress(rowData)}/>
    }

    render() {
        return ( 
        <ListView dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            renderSeparator={this._renderSeparator} /> 
         );
    }
}

MovieList.propTypes = {
    onItemPress: PropTypes.func.isRequired,
    dataSource: PropTypes.array
};

export default MovieList;