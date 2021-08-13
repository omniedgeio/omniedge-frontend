import ReactPlayer from 'react-player'

function VideoPlayer({ url }) {
  return (
    <div className="playerWrapper">
      <ReactPlayer
        className="reactPlayer"
        url={url}
        width="80%"
        height="80%"
      />
    </div>
  )
}

export default VideoPlayer
