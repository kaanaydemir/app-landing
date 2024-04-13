import React, {useEffect} from 'react';

function Home(props) {
  useEffect(() => {
    document.title = "tuwenti.com";
  }, []);
  return (
    <div></div>
  );
}

export default Home;