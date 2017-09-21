import React, {Component} from 'react'
import {Text, View} from 'react-native'

import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

const showQuery = gql`
  query {
    shows {
      id
      title
    }
  }
`
class App extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
        <Text>Hello world</Text>
      </View>
    )
  }
}

export default graphql(showQuery)(App)
