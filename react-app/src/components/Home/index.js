import React from "react";

function Home() {
  return (
    <div>
      <div className="homepage-images">
        <a className="homepage_images_main" href="/menus/curated">
          <img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
        </a>
        <a className="homepage_images_side" href="/menus/curated">
          <img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
        </a>
        <a className="homepage_images_side" href="/menus/curated">
          <img src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg" />
        </a>
      </div>
      <h4>Here's how it works...</h4>
      <p>Welcome to Charkoots!</p>
      <p>
        It's your perfect romantic weekend getaway, and you really want to make it special this time. Candles, check. Luther Vandross, check. You nailed it all but there's one problem; what about food and wine?
        Let us take care of that for you. Charkoots is a place where you can create and customize a delicious charcuterie board with our finest selection of cured meats,
        artisanal cheeses, crackers and more to keep your cravings satisfied. Not only that, we'll take a deeper dive into what you have created, and pair you with the PERFECT wine to complement the experience.
        Too good to be true? I know, and you're welcome!
      </p>
      <p>Click on the button below to start building your very own Charkoot board!</p>
      <button>START YOUR ORDER</button>
    </div>
  );
}

export default Home;
