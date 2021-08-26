import ReactPlayer from 'react-player'


function VideoPlayer({ url }) {
  return (
    <div className="playerWrapper">
      <ReactPlayer
        className="reactPlayer"
        url={url}
        width="auto"
      />
    </div>
  )
}

export default VideoPlayer
