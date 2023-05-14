import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Photos() {
  const [photos, setPhotos] = useState([]);
  const [loadedPhotos, setLoadedPhotos] = useState(0);
  const [loadMore, setLoadMore] = useState(false);
  const { albumId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then(response => response.json())
      .then(data => {
        setPhotos(data);
        setLoadedPhotos(10);
        if (data.length > 10) {
          setLoadMore(true);
        }
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }, [albumId]);

  const loadMorePhotos = () => {
    setLoadedPhotos(prevLoadedPhotos => prevLoadedPhotos + 10);
  };

  return (
    <div>
      <h2>Photos</h2>
      <div className="photo-gallery">
        {photos.slice(0, loadedPhotos).map(photo => (
          <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
        ))}
      </div>
      {loadMore && (
        <button onClick={loadMorePhotos}>Load More</button>
      )}
    </div>
  );
}

export default Photos;

