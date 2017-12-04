import React, { Component } from 'react';
import { Box, Text } from 'react-desktop';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, width, height } = this.props;

    return(
      <Box label={ label } width={ width } height={ height } >
        <Text>Hello World!</Text>
      </Box>
    )
  }
}

export default Main;