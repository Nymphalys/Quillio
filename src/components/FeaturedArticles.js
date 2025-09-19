import React from 'react';
import './../styles/FeaturedArticles.css';

function FeaturedArticles() {
  // Articles once
  const articles = (
    <>
<article className="article-title-large">
  <div className="tag">Podcasts</div>
  <h3>Introducing story preservation, the movement</h3>
  <h2>‘Pages Crossing’: how live simulation books provide an escape from reality.</h2>
  <p><em>By Jenny Cunningham</em></p>
  <small>21.5.2022</small>
  <button className="read-arrow">→</button>
</article>




      <article className="article-highlight yellow-bg">
        <div className="tag">Blogs</div>
        <div>Rent The Penguin’s New Writers Collaborations Are Here To Refresh Your Summer Bookshelves</div>
        <p><em>By Allison Stewart</em></p>
        <small>20.5.2022</small>
        <button className="read-arrow">→</button>
      </article>
    </>
  );

  return (
    <section className="featured-articles">
      <div className="featured-articles-inner">
        {articles}
        {articles} {/* duplicate once for seamless loop */}
      </div>
    </section>
  );
}

export default FeaturedArticles;
