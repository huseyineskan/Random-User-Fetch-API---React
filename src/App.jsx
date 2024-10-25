import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [newUser, setNewUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Gelen veriyi kontrol ediyoruz
        setData(data.results[0]); // İlk kullanıcıyı alıyoruz
      })
      .catch((error) => console.error(error));
  }, [newUser]);

  return (
    <section className="vh-100 user-section">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-10 mb-4 mb-lg-0">
            <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
              {data ? (
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    {data.picture ? (
                      <img
                        src={data.picture.large}
                        alt={data.name.first + " " + data.name.last}
                        className="rounded-circle mb-2 user-picture"
                      />
                    ) : (
                      "Not found"
                    )}
                    <h5>
                      {data.name
                        ? data.name.first + " " + data.name.last
                        : "Not found"}
                    </h5>
                    <p>{data.name.title ? data.name.title : "Not found"}</p>
                    <i className="far fa-edit mb-5" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6 className="d-flex justify-content-between align-items-center">
                        User Information{" "}
                        <button
                          className="get-new-user-btn"
                          onClick={setNewUser}
                        >
                          New User
                        </button>
                      </h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-12 mb-3">
                          <h6>Address</h6>
                          <p className="text-muted">
                            {data.location
                              ? data.location.street.name +
                                ", " +
                                data.location.city +
                                ", " +
                                data.location.state +
                                ", " +
                                data.location.postcode +
                                ", " +
                                data.location.country
                              : "Not found"}
                          </p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">
                            {data.phone ? data.phone : "Not found"}
                          </p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Cell</h6>
                          <p className="text-muted">
                            {data.cell ? data.cell : "Not found"}
                          </p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">
                            {data.email ? data.email : "Not found"}
                          </p>
                        </div>
                      </div>
                      <h6>Login Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Username</h6>
                          <p className="text-muted">
                            {data.login ? data.login.username : "Not found"}
                          </p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Password</h6>
                          <p className="text-muted">
                            {data.login ? data.login.password : "Not found"}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start">
                        <a href="#!">
                          <i className="fab fa-facebook-f fa-lg me-3" />
                        </a>
                        <a href="#!">
                          <i className="fab fa-twitter fa-lg me-3" />
                        </a>
                        <a href="#!">
                          <i className="fab fa-instagram fa-lg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="user-loading">
                  <img src="./src/assets/loading.gif" alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
