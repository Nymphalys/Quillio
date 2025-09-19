import React, { useState } from "react";
import "./../styles/PopularSuggestions.css";
import month1 from "./../assets/images/month1.jpeg";
import month2 from "./../assets/images/month2.jpeg";
import month3 from "./../assets/images/month3.jpeg";

// Original months data, without month names
const monthsData = [
  {
    heading: "Say hello to new page turns!",
    books: ["'White Nights,' Fyodor Dostoevsky", "The Crime and Punishment"],
    image: month1,
  },
  {
    heading: "Explore stories that inspire",
    books: ["Book A", "Book B"],
    image: month2,
  },
  {
    heading: "Classics and timeless reads",
    books: ["Book C", "Book D"],
    image: month3,
  },
];

function getLastThreeMonths() {
  const today = new Date();

  return monthsData.map((data, i) => {
    const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
    const month = d.toLocaleString("default", { month: "long", year: "numeric" });
    return { id: i, month, ...data };
  });
}

export default function PopularSuggestions() {
  const [expandedId, setExpandedId] = useState(0);
  const months = getLastThreeMonths();

  const handleToggle = (id) => {
    if (id !== expandedId) setExpandedId(id);
  };

  return (
    <section className="popular-suggestions-wrapper">
      <div className="popular-suggestions-header">
        POPULAR <br />
        SUGGESTIONS
      </div>
      <div className="popular-suggestions-list">
        {months.map(({ id, month, heading, books, image }) => {
          const isExpanded = expandedId === id;
          return (
            <article
              key={id}
              className={`month-card ${isExpanded ? "expanded" : "collapsed"} ${
                id === 0 ? "collapsed-first" : "collapsed-other"
              }`}
              tabIndex={0}
              role="button"
              aria-expanded={isExpanded}
              aria-label={`Book suggestion for ${month}`}
              onClick={() => handleToggle(id)}
              onKeyDown={(e) => e.key === "Enter" && handleToggle(id)}
            >
              {!isExpanded && (
                <>
                  <div
                    className="collapsed-image"
                    style={{ backgroundImage: `url(${image})` }}
                    aria-label={`Image for ${month}`}
                  />
                  <div className="collapsed-month-container">
                    <div className="collapsed-month">{month}</div>
                  </div>
                </>
              )}
              {isExpanded && (
                <div className="expanded-content">
                  <div className="month-image-heading">
                    <div className="expanded-month">{month}</div>
                    <div
                      className="expanded-image"
                      style={{ backgroundImage: `url(${image})` }}
                      aria-label={`Image for ${month}`}
                    />
                    <h3 className="expanded-heading">{heading}</h3>
                  </div>
                  <ul className="book-list">
                    {books.map((book, idx) => (
                      <li key={idx} className="book-item">
                        {book}
                      </li>
                    ))}
                  </ul>
                  <div className="read-now-container">
                    <button className="read-now-btn">Read Now</button>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
