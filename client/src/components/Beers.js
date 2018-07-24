import React, { Component } from 'react';
import { Header, Segment, Divider, Grid, Image } from 'semantic-ui-react';
import ReactMarkDown from 'react-markdown';
import axios from 'axios';
import dpsLogo from '../images/dpsLogo.svg';

class Beers extends Component {
  state = { assignmentMarkdown: '' };

  componentDidMount() {
    axios.get('/api/all_beers')
    .then( res => this.setState({ Beers: res.all }) )
  };

  render() {
    return(
      <Segment basic>
        <Segment basic textAlign='center'>
          <Image style={styles.centered} size='tiny' src={dpsLogo} alt='DevPoint Studios Logo' />
          <Header as='h1' style={styles.header}>DevPoint Studios React Assessment</Header>
        </Segment>
            <Segment inverted>
              <Header
                as='h1'
                textAlign='center'
                style={styles.header}>
                  List of Beers
              </Header>
              <Divider />
              <ReactMarkDown source={this.state.assignmentMarkdown} />
            </Segment>
        </Segment>
    );
  }
};

const styles = {
  iframe: {
    width: '100%',
    height: '100vh'
  },
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#2ecc40'
  }
}

export default Beers;
