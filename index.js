const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading-style">Congratulations</h1>
    <div className="card-container">
      <img
        className="image-style"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <p className="para-heading">Kiran V</p>
      <p className="para-text">
        Vishnu Institute Of Computer Education and Technology, Bhimavaram
      </p>
      <img
        className="image-style"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
