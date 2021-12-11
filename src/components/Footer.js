import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className="bg-primary bg-gradient mt-5">
        <div className="container py-4 text-light">
          <div className="row">
            <div className="col">
              <div className="row">
                <h4 className="mb-3">Address</h4>
                <p className="mb-0">
                  Jl. Yusuf Hasiru, Kotamobagu Sulawesi Utara
                </p>
                <p className="mb-0">+62 821 8819 1052</p>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <h4 className="mb-3">Find Me</h4>
                <a
                  href="https://fachrigobel.github.io/"
                  target="_blank"
                  className="link-light text-decoration-none"
                >
                  My Portfolio
                </a>
                <a
                  href="https://www.instagram.com/fachrigobel/"
                  target="_blank"
                  className="link-light text-decoration-none"
                >
                  Instagram
                </a>
                <a
                  href="https://github.com/fachrigobel"
                  target="_blank"
                  className="link-light text-decoration-none"
                >
                  Github
                </a>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <h4 className="mb-3">Summary Bio</h4>
                <p>
                  Hello, My Name is Fachri Gobel, 23yo and Iam Enthusiast Web
                  Programming. You Can Find Me At North Sulawesi, Kotamobagu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
