const ProgressBar = ({ width }) => {
  return (
    <div>
      <div className="container">
        {width >= 0 && width <= 100 ? (
          <div className="innerContainer" style={{ width: `${width}%` }}>
            {width}%
          </div>
        ) : (
          alert("please enter value less than 100")
        )}
      </div>
    </div>
  )
}

export default ProgressBar
