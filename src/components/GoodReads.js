import React from 'react';
import './../styles/GoodReads.css';
import goodimage from "./../assets/images/month1.jpeg";

function GoodReads() {
  return (
    <section className="good-reads">
      <div className="date-top">20/05</div>
      <h2>GOOD <br /> READS</h2>
      <img
        src = {goodimage}
        alt="Reading person"
        className="good-reads-image"
      />
    </section>
  );
}

export default GoodReads;