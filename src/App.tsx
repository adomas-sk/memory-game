import React from 'react';
import Cards from './components/cards/Cards';
import { useGetDogImagesQuery } from './services/dog-api';

function App() {
  const { data, error, isLoading } = useGetDogImagesQuery(12);

  if (error) {
    return <div>Error occured loading images</div>;
  }
  if (isLoading || !data) {
    return <div>Loading</div>;
  }
  return <Cards images={data} />;
}

export default App;
