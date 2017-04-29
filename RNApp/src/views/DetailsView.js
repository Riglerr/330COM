import React, { Component, PropTypes } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    image: {
        height: 160,
        width: 100
    },
    topContainer: {
        flexDirection: 'row',
        flex: 0.7
    },
    topTextContainer: {
        flexDirection: 'column'
    },
    bottomContainer: {
        flex: 1
    }
    
})

class DetailsView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                   
                    <View style={styles.topTextContainer}>
                        <Text>{this.props.movie.overview}</Text>
                        <Text>{this.props.movie.vote_average} / 10</Text>
                        <Text>{this.props.movie.release_date}</Text>    
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <Text>{this.props.movie.overview}</Text>
                </View>
            </View>
        );
    }
}

DetailsView.PropTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        release_date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })
}

export default DetailsView;