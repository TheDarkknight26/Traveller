import React from 'react';
import './Stars.css';

const CustomerReviews = () => {
  return (
    <div className="container">
      <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
        <h4 className="font-cond-l fg-accent lts-md mgb-10">Not Yet Convinced?</h4>
        <h1 className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg">Read Customer Reviews</h1>
      </div>
      <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
        <li>
          <p className="fs-110 font-cond-l">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
          <h5 className="font-cond mgb-5 fg-text-d fs-130">Martha Stewart</h5>
        </li>
        <li>
          <p className="fs-110 font-cond-l">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
          <h5 className="font-cond mgb-5 fg-text-d fs-130">Ariana Menage</h5>
        </li>
        <li>
          <p className="fs-110 font-cond-l">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
          <h5 className="font-cond mgb-5 fg-text-d fs-130">Sean Carter</h5>
        </li>
      </ul>
    </div>
  );
};

export default CustomerReviews;
