import React from 'react';
import './../styles/FeaturedArticles.css';

function FeaturedArticles() {
  // Duplicate the articles so scroll loops smoothly
  const articles = (
    <>
      <article className="article-title-large">
        <h2>‘Pages Crossing’: how live simulation books provide an escape from reality.</h2>
        <p><em>By Jenny Cunningham</em></p>
        <small>21.5.2022</small>
        <button className="read-arrow">→</button>
      </article>
      <article className="article-highlight yellow-bg">
        <div className="tag">Blogs</div>
        <h3>Rent The Penguin’s New Writers Collaborations Are Here To Refresh Your Summer Bookshelves</h3>
        <p><em>By Allison Stewart</em></p>
        <small>20.5.2022</small>
        <button className="read-arrow">→</button>
      </article>
      <article className="article-title-small">
        <div className="tag podcast">Podcasts</div>
        <h3>Introducing story preservation, the movement</h3>
      </article>
    </>
  );

  return (
    <section className="featured-articles">
      {/* Inner container animated */}
      <div className="featured-articles-inner">
        {articles}
        {articles} {/* duplicate for seamless scroll */}
      </div>
    </section>
  );
}

export default FeaturedArticles;