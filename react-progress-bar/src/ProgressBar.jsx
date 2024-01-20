const ProgressBar = ({ width }) => {
  return (
    <div>
      <div className="container">
        <div className="innerContainer" style={{ width: `${width}%` }}>
          {width}%
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
