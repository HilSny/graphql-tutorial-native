import React, {Component} from 'react'
import {Text, View} from 'react-native'

import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

const showQuery = gql`
  {
    shows {
      id
      title
    }
  }
`


class App extends Component {
  render() {
    const {data} = this.props

    if (data.loading) {
      return <View />
    }

    return (
      <View style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
        {data.shows.map(show => (
          <View key={show.id}>
            <Text>{show.title}</Text>
          </View>

        ))}
      </View>
    )
  }}

export default graphql(showQuery)(App)
