import React from 'react';

const NewseLetter = () => {
  return (
    <section id="newseletter" class="section-p1 section-m1">
    <div class="newstext">
        <h4>sign up for newseletters</h4>
        <p>
            get e-email updates about our latest shop and
            <span>special offers</span>
        </p>
    </div>
    <div class="form">
        <input type="text" placeholder="Your email address" />
        <button class="normal">sign up</button>
    </div>
</section>
  );
};

export default NewseLetter;
