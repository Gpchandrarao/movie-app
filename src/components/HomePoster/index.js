import Header from '../Header'
import './index.css'

const HomePoster = props => {
  const {poster} = props
  const {backdropPath, title, overview} = poster
  return (
    <>
      <div
        className="devices-container"
        alt={title}
        style={{
          backgroundImage: `url(${backdropPath})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          height: '100%',
        }}
      >
        <div>
          <Header />
        </div>
        <div className="home-header-content ">
          <h1 className=" movie-details-name ">{title}</h1>
          <h1 className=" movie-details-description ">{overview}</h1>
          <button className=" movies-details-play-button " type="button">
            Play
          </button>
        </div>
      </div>
    </>
  )
}

export default HomePoster
