import PropTypes from "prop-types";

export function Tweet({ id, name, content, like, onDelete }) {
  const onLike = () => {
    console.log("Like", name);
  };
  return (
    <div className='tweet'>
      <button onClick={() => onDelete(id)} className='delete'>
        ❌
      </button>
      <h3>{name}</h3>
      <p>{content}</p>
      {/* j'appelle un callback après onClick={() => } ( une arrow fonction que je passe en paramètre) */}
      <button onClick={() => onLike()}>{like} 💜</button>
    </div>
  );
}

// Tweet.propTypes = {
//   name: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
//   like: PropTypes.number.isRequired,
// };
