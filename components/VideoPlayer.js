import ReactPlayer from 'react-player'


function VideoPlayer({ url }) {
  return (
    <div className="playerWrapper">
      <ReactPlayer
        className="reactPlayer"
        url={url}
        width="100%"
      />
    </div>
  )
}

export default VideoPlayer
