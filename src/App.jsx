import { useState } from "react";
import { Tweet } from "./Tweet";

const defaultTweet = [
  {
    id: 0,
    name: "Ravishankar",
    content: "La vie est un bouquet de violettes",
    like: 1233,
  },
  {
    id: 1,
    name: "Papadillek",
    content:
      "Columbia, Harvard, USC, University of Texas at Austin and others are getting swarmed by protesters.",
    like: 7433,
  },
  {
    id: 2,
    name: "Kaouchette75",
    content:
      "Columbia, Harvard, USC, University of Texas at Austin and others are getting swarmed by protesters.",
    like: 22,
  },
  {
    id: 3,
    name: "Papaouté",
    content:
      "Columbia, Harvard, USC, University of Texas at Austin and others are getting swarmed by protesters.",
    like: 1,
  },
];

function App() {
  // J'apelle les données du tableau entre ()
  const [tweets, setTweets] = useState(defaultTweet);

  // DELETE FUNCTION ******
  const onDelete = (tweetId) => {
    setTweets((current) => current.filter((tweet) => tweet.id !== tweetId));
  };

  // APPELER LES TWEETS ****
  // const liste = tweets.map qui est une fonction qui va aller sur chaque élément et qui retourne ce qu'on met entre ()

  return (
    <div>
      <h1>TataGram</h1>
      <form>
        <h4>New tweet</h4>
        <input type='text' name='name' />
        <input type='contente' name='content' />
      </form>
      <div className='tweet-container'>
        {tweets.map((tweet) => {
          // chaque élément du tableau tweets est transformé en un composant Tweet avec les données appropriées.
          return (
            // Ajouet une key Each child in a list should have a unique "key" prop.
            <Tweet
              id={tweet.id}
              key={tweet.id}
              name={tweet.name}
              content={tweet.content}
              like={tweet.like}
              onDelete={(id) => {
                onDelete(id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
