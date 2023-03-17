import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import logo from './assets/spacex-logo.png';

import * as API from './services/launches';
import LaunchItem from './components/LaunchItem';
import { Center, Heading, Image } from '@chakra-ui/react';

function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    // API.getAllLaunches()
    API.takeLaunches().then(setLaunches);
    // .then(data=>setLaunches(data))
  }, []);

  return (
    <>
      <Center>
        <img alt={'spacex_logo'} src={logo} width={400} />
      </Center>
      <Center>
        <Heading as='h1' size='lg' m={4} align='center' color='#005288'>
          <i> Launch Missions</i>
        </Heading>
      </Center>
      <section>
        <Center>
          <ul>
            {launches.map((item, indx) => {
              return (
                //see the difference in syntax, both works well
                //  <LaunchItem item={item}  key={item.flight_number}/>

                <LaunchItem {...item} key={item.flight_number} />
              );
            })}
          </ul>
        </Center>
      </section>
    </>
  );
}
export default App;
