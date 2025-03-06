import React, { useEffect } from "react";

function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <h1>Contact</h1>
        </div>
      </div>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/linkcraft-digitals/30min"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </>
  );
}

export default CalendlyWidget;
