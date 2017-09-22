import React, {Component} from 'react'
import {Text, TextInput, View} from 'react-native'
import {compose, graphql} from 'react-apollo'

import gql from 'graphql-tag'

const showQuery = gql`
  {
    shows {
      id
      title
    }
  }
`

const addShow = gql`
  mutation addShow($title: String!){
    addShow(title: $title) {
      title
    }
  }
`

class App extends Component {
  state={
    text: ''
  }

  addShowToList = () => {
    const {mutate, data: refetch} = this.props
    mutate({variables: {title: this.state.text}})
    refetch()
  }

  render() {
    const {data, mutate} = this.props

    if (data.loading) {
      return <View />
    }

    return (
      <View style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>

        <TextInput
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={this.addShowToList}
          value={this.state.text}
          style={{backgroundColor: '#E7EBF1', height: 40, width: '100%'}}
        />

        {data.shows.map(show => (
          <View key={show.id}>
            <Text>{show.title}</Text>
          </View>

        ))}
      </View>
    )
  }}

  const enhance = compose(
    graphql(showQuery),
    graphql(addShow)
  )

export default enhance(App)
