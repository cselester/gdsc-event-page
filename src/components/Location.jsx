import React from "react";
import "./Location.css";

function Location() {
  return (
    <section className="location" id="location">
      <h2>Event Location</h2>
      <iframe
        title="map"
        src="https://maps.google.com/maps?q=Galgotias%20University&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </section>
  );
}

export default Location;
