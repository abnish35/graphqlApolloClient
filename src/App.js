import React from 'react';
import './App.css';
import { useQuery, gql } from '@apollo/client';


// gql - to parse the graphQL Query;

const ALL_DATA = gql`
query LaunchDetails($launchId: ID!) {
  launch(id: $launchId) {
    site
    rocket {
      type
    }
    ...LaunchTile
  }
}`

function App() {
  const { loading, error, data }= useQuery(ALL_DATA)
  console.log(data)
  if(loading) return <p>Loading ....</p>
  if(error) return <p>Whoops .. something is missing</p>
  return (
    <>  
      <h2>SpaceX Images</h2>
      {/* {data.flicker.original.map((imageData, id)=>(
        <p></p>
      ))} */}
    </>
  );
}

export default App;
