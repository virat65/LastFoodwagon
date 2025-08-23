return (
  <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
    <div className="row w-100">
      <div className="col-12 col-sm-10 col-md-6 col-lg-4 mx-auto">
        <div className="card p-4 shadow">
          <h2 className="text-center mb-4">Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                name="name"
                value={data.name}
                placeholder="Enter your Name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                name="email"
                value={data.email}
                placeholder="Enter your email"
              />
            </div>

            {data?.userType === "Admin" && (
              <div className="mb-3">
                <label className="form-label">Secret key</label>
                <input
                  onChange={handleChange}
                  type="password"
                  className="form-control"
                  name="secreatekey"
                  placeholder="Enter your secret key"
                />
              </div>
            )}

            <div className="mb-3">
              <label className="form-label me-2">ID Type</label>
              <div>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="userType"
                  value="user"
                  className="me-1"
                />
                <label className="me-3">User</label>

                <input
                  onChange={handleChange}
                  type="radio"
                  name="userType"
                  value="Admin"
                  className="me-1"
                />
                <label>Admin</label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Photo</label>
              <input
                onChange={handleChange}
                type="file"
                className="form-control"
                name="image"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={handleChange}
                type="password"
                className="form-control"
                name="password"
                value={data.password}
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </form>

          <p className="text-center mt-3">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);
