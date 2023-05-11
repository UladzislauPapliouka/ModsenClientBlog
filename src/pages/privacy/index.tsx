import React from 'react';
import Typography from '@components/Typography';
import ContentContainer from '@containers/ContentContainer';
import styles from './privecy.module.scss';

const HomePage = (): JSX.Element => (
  <div>
    <div className={styles.pageHead}>
      <Typography variant="head1">Privacy Policy</Typography>
      <Typography variant="body1">Last Updated on 27th January 2022</Typography>
    </div>
    <ContentContainer className={styles.privacyInfo}>
      <Typography variant="head1">Lorem ipsum dolor sit amet</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
        viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
        Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus
        mauris vitae ultricies leo. Neque egestas congue quisque egestas diam.
        Risus in hendrerit gravida rutrum quisque non. Sit amet nulla facilisi
        morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla
        aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu
        lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce
        ut placerat orci nulla. Neque convallis a cras semper auctor neque vitae
        tempus quam.
      </Typography>
      <Typography variant="head2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
        enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
        adipiscing at in tellus. Sociis natoque penatibus et magnis dis
        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque
        egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
        quisque non. Sit amet nulla facilisi morbi tempus iaculis urna. Lorem
        sed risus ultricies tristique nulla aliquet enim. Volutpat blandit
        aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum
        suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque
        convallis a cras semper auctor neque vitae tempus quam. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
        Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing
        at in tellus. Sociis natoque penatibus et magnis dis parturient montes.
        Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque
        egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet
        nulla facilisi morbi tempus iaculis urna. Lorem sed risus ultricies
        tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat velit.
        Orci eu lobortis elementum nibh. Ipsum suspendisse ultrices gravida
        dictum fusce ut placerat orci nulla. Neque convallis a cras semper
        auctor neque vitae tempus quam.
      </Typography>
    </ContentContainer>
  </div>
);
export default HomePage;