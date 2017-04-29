import React, { Component, PropTypes } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Image
} from 'react-native'

import MovieApi from '../api'
import MovieList from '../components/movieList'

class SearchView extends Component {
    constructor(props) {
        super(props)

        this.onSearch = this.onSearch.bind(this);

        this.state = {
            searchText: '',
            dataSource: []
        }
    }
    async onSearch() {
        let res = await MovieApi.searchByName(this.state.searchText)
        this.setState({dataSource: res});
    }   

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchBarContainer}>
                    <TextInput 
                        style={styles.searchTextInput}
                        onChangeText={(searchText) => this.setState({searchText})}
                        value={this.state.searchText}
                        onSubmitEditing={this.onSearch}
                    />
                    <Image />
                </View>
                <View style={styles.listContainer}>
                    <MovieList onItemPress={this.props.movieListItemPress} dataSource={this.state.dataSource}/>
                </View>
            </View>
        );
    }
}

MovieList.propTypes = {
    movieListItemPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    searchBarContainer: {
        flexDirection: 'row',
    },
    listContainer: {
    },
    searchTextInput: {
        flex: 0.7
    },
    searchTextIcon: {
        flex: 0.3
    }
})

export default SearchView;