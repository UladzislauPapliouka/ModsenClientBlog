import React from 'react';
import ContentContainer from '@containers/ContentContainer';
import Header from '@components/Header';
import Button from '@components/Button';
import Typography from '@components/Typography';

const HomePage = (): JSX.Element => (
  <ContentContainer>
    <Header>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <Button variant="secondary">
        <Typography variant="head4">Video about us</Typography>
      </Button>
    </Header>
  </ContentContainer>
);
export default HomePage;
