import pnlogo from '../assets/pn-logo.png'
export default function Header({batch_name}){

    return (
          <header id="header">
            <img src={pnlogo} alt="PN Logo" />
            <h1>Students results for {batch_name}</h1>
          </header>)
}