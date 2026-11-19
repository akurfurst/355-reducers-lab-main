import { PHOTOS } from "../photos.js";

function PhotoStrip({ current, dispatch }) {
  return (
    <nav className="strip">
      {PHOTOS.map((photo) => (
        <button
          key={photo.id}
          type="button"
          className={photo.id === current ? "thumb thumb-on" : "thumb"}
          onClick={() => dispatch({ type: "photo_chosen", photo: photo.id })}
        >
          <img src={photo.src} alt="" />
          <span>{photo.title}</span>
        </button>
      ))}
    </nav>
  );
}

export default PhotoStrip;
