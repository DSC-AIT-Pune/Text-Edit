import { Link } from "react-router-dom";

export default function Socialhandles(props) {
  return (
    <div className={`mx-4 bg-${props.mode === "dark" ? "dark" : "white"}`}>
      <h2 className="text-center my-4">Visit our Social Media Handle</h2>
      <div className="d-flex">
        <div class="mx-2 px-2 card" style={{ width: "18rem;" }}>
          <div class="card-body">
            <h5 class="card-title">Insta DM</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="d-flex justify-content-between">
              <Link href="https://www.instagram.com">
                <i
                  className="fa fa-instagram"
                  style={{ textDecoration: "none", fontSize: "25px" }}
                ></i>
              </Link>
              <small>
                <b>Instagram</b>
              </small>
            </div>
          </div>
        </div>
        <div class="mx-2 px-2 card" style={{ width: "18rem;" }}>
          <div class="card-body">
            <h5 class="card-title">Facebook Handle</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="d-flex justify-content-between">
              <Link
                href="https://www.facebook.com"
                class="fa fa-facebook"
                style={{ textDecoration: "none", fontSize: "20px" }}
              ></Link>
              <small>
                <b>Facebook</b>
              </small>
            </div>
          </div>
        </div>
        <div class="mx-2 px-2 card" style={{ width: "18rem;" }}>
          <div class="card-body">
            <h5 class="card-title">Tweet In</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="d-flex justify-content-between">
              <Link
                href="https://www.twitter.com"
                class="fa fa-twitter"
                style={{ textDecoration: "none", fontSize: "25px" }}
              ></Link>
              <small>
                <b>Twitter</b>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
