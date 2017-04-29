import React, { Component, PropTypes } from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 64
    },
    image: {
        height: 64,
        width: 60,
    },
    textContainer: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 6,
        flexDirection: 'column'
    },
    titleText: {
        fontSize: 14
    },
    releaseDateText: {
        paddingTop:5,
        fontSize: 10
    }
})

class MovieListItem extends Component {
    constructor(props) {
        super(props);

        this._getImageURI = this._getImageURI.bind(this);
    }
    _getImageURI(id) {
        return `https://image.tmdb.org/t/p/w500${id}`
    }
    render() {
        const {
            title, 
            release_date,
            poster_path,
            overview,
            vote_average
        } = this.props.data
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{uri:this._getImageURI(poster_path)}}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>{title}</Text>
                        <Text style={styles.releaseDateText}>{vote_average} / 10</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

MovieListItem.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        release_date: PropTypes.string,
        poster_path: PropTypes.string,
        overview: PropTypes.string,
        vote_average: PropTypes.number
    }),
    onPress: PropTypes.func.isRequired
}

export default MovieListItem;