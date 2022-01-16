import { BallTriangle } from "react-loader-spinner";
export default function Spinner() {
  return (
  <div style={{height: "100vh",}}>
    <div style={{marginTop: "40vh", marginLeft: "45vw"}}>
    <BallTriangle color="#000" height={80} width={80} style={{margin: "auto"}}/>
    </div>
  </div>
  )
}

