import React, { useState } from 'react'
export default function About() {
  const [mystyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: "black",
    border: "1px solid white"

  })
  const [btntext, setBtnText] = useState("enable dark mode")
  const toggleStyle = () => {
    if (mystyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setBtnText("enable Dark mode")
    }
    else {
      setMyStyle({
        color: 'white',
        backgroundColor: "black",
        border: "2px solid white"

      })
      setBtnText("enable Light mode")
    }
  }
  return (
    <div className='container' style={mystyle}>
      <div className="accordion" style={mystyle} id="accordionExample">
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle} >
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={mystyle} aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" style={mystyle} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" style={mystyle} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <button>Enable dark mode</button> */}
      <div className="container my-3"  >
        {/* <div className="container "> */}
        <button onClick={toggleStyle} type="button" className="btn btn-primary" >{btntext}</button>
      </div>
    </div>
  )
}

