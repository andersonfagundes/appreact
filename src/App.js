import React from "react";

const App = () => {
  
  const [ativo, setAtivo] = React.useState(false);

  function handleClick(){
    setAtivo(!ativo);
  }

  return (
    <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
  );
  

};

export default App;