function VideoReview ({ videoId }) {
  return (
    <div>
      <iframe 
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?controls=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="
          accelerometer; 
          autoplay; 
          clipboard-write; 
          encrypted-media; 
          gyroscope; 
          picture-in-picture
        " 
        allowFullScreen
      />
    </div>
  )
}

export default VideoReview