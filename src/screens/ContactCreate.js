import React, { Component } from 'react';
import { Container, Form, Item, Input, Content, Button, Text } from 'native-base';
import { connect } from 'react-redux';

import { createContact } from '../publics/redux/actions/contacts';

class ContactCreate extends Component {

  constructor(props) {
    super(props);
    this.item = null;
    if (props.navigation.state.params && props.navigation.state.params.item) {
      this.item = props.navigation.state.params.item;
    }
    this.state = {
      inputName: this.item && this.item.name ? this.item.name : '',
      inputCost: this.item && this.item.cost ? this.item.cost.toString() : ''
    }
  }

  handleSubmit = () => {
    this.props.dispatch(createContact({
      name: this.state.inputName,
      cost: this.state.inputCost
    }))
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input autoFocus placeholder="Name" value={this.state.inputName} onChangeText={(value) => this.setState({inputName: value})}/>
            </Item>
            <Item last>
              <Input placeholder="Cost" value={this.state.inputCost} onChangeText={(value) => this.setState({inputCost: value})} />
            </Item>
          </Form>
          <Button block style={{backgroundColor: '#000'}} onPress={this.handleSubmit}>
            <Text>{this.item && this.item.name ? 'Update' : 'Add'}</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default connect()(ContactCreate)