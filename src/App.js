import React from "react";
import ResumeLayout from "./app/resume/resumeLayout";
import "./App.scss";

function App() {
  return (
    
    <React.Fragment>
      
      <button type="button" className="btn btn-primary">Primary</button>
                    <button type="button" className="btn btn-secondary">Secondary</button>
                    <button type="button" className="btn btn-success">Success</button>
                    <button type="button" className="btn btn-danger">Danger</button>
                    <button type="button" className="btn btn-warning">Warning</button>
                    <button type="button" className="btn btn-info">Info</button>
                    <button type="button" className="btn btn-light">Light</button>
                    <button type="button" className="btn btn-custom-color">custom-color</button>

                    <button type="button" className="btn btn-link">Link</button>
      {/* <ResumeLayout /> */}
    </React.Fragment>
  );
}

export default App;
