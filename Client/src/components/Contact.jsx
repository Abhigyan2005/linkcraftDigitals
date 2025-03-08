import React, { useEffect } from "react";

function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.id = "calendly";
    if (!document.getElementById("calendly")) {
      document.body.appendChild(script);
    }
  }, []);
  return (
    <>
      <div id="contact" className="parent-container">
        <div>
          <h1>Schedule A Call With Us</h1>
        </div>
      </div>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/linkcraft-digitals/30min"
        data-resize='true'
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </>
  );
}

export default CalendlyWidget;
