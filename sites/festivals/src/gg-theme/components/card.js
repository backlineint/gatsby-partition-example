import React from 'react';
import { Link } from "gatsby";

// This is an example of component shadowing. This overrides the card component
// in the gg-theme package and adds a salmon background color to the card.

const Card = ({ id, path, title }) => {
  return (
    <div class="px-20 py-10 bg-blue-100" key={id}>
        <div class="bg-red-200 p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-2 text-gray-800"><Link to={path}>{title}</Link></h2>
          <p class="text-gray-700"><Link class="text-blue-500" to={path}>See More &gt;</Link></p>
        </div>
      </div>
  );
}

export default Card;