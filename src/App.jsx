import './App.css'
import json from "./CertificateResult.json"
function App() {

  console.log(json);

  return (
    <>
      <>
      {json.map((item) => {
        return <div key={item.certificate_name}>{item.certificate_name}</div>; // Make sure certificate_name exists in the JSON
      })}
    </>


    </>
  )
}

export default App
