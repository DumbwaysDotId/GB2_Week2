/**
 * Sample React Native Contacts
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, List, ListItem, Text, Fab, Icon } from 'native-base';

import { incNumber, getContacts } from '../publics/redux/actions/contacts';

type Props = {};
class Contacts extends Component<Props> {

  componentDidMount() {
    // setInterval(() => {
    //   this.props.dispatch(incNumber(this.props.contacts.number + 1))
    // }, 1000)
    this.getData();
  }

  getData = () => {
    this.props.dispatch(getContacts());
  }

  renderItem = ({ item, index }) => (
    <ListItem
      // on LongPress={this.handleDelete(item.id)}
      onPress={() => this.props.navigation.navigate('ContactCreate', { item })}
    >
      <Text>{item.name}</Text>
      <Text> {item.cost}</Text>
    </ListItem>
  )

  _keyExtractor = (item, index) => item.id.toString();

  render() {
    return (
      <Container>
        <List>
          <FlatList
            data={this.props.contacts.data}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderItem}
            refreshing={this.props.contacts.isLoading}
            onRefresh={this.getData}
          />
        </List>
        <Fab
          style={{ backgroundColor: '#000' }}
          onPress={() => this.props.navigation.navigate('ContactCreate')}>
          <Icon name="ios-add" />
        </Fab>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

export default connect(mapStateToProps)(Contacts)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 100,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
