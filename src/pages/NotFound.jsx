// Easter egg
// Used Geoff Graham's CSS Trick tutorial to generate this page
// For more info https://css-tricks.com/snippets/css/star-wars-crawl-text/

import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  // Redirect after 15 seconds
  setTimeout(() => {
    navigate("/");
  }, 15500);

  return (
    <div>
      <div className="fade" />
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>404</p>
            <h1>Not Found</h1>
          </div>
          <p>
            The page you requested is not found. I know this must be very
            frustrating.
          </p>
          <br />
          <p>Perhaps a problem occured. We will never know.</p>
          <br />
          <p>
            However, please do not worry. The Galactic Empire issued you a one
            way ticket to home.
          </p>
          <br />
          <p>Goodbye!</p>
        </div>
      </section>
      <style jsx="true">
        {`
          body {
            width: 100%;
            height: 100%;
            background: #000;
            overflow: hidden;
          }

          .fade {
            position: relative;
            width: 100%;
            min-height: 60vh;
            top: -25px;
            background-image: linear-gradient(0deg, transparent, black 75%);
            z-index: 1;
          }

          .star-wars {
            display: flex;
            justify-content: center;
            position: relative;
            height: 800px;
            color: #feda4a;
            font-family: "Pathway Gothic One", sans-serif;
            font-size: 500%;
            font-weight: 600;
            letter-spacing: 6px;
            line-height: 150%;
            perspective: 400px;
            text-align: justify;
          }

          .crawl {
            position: relative;
            top: 9999px;
            transform-origin: 50% 100%;
            animation: crawl 60s linear;
          }

          .crawl > .title {
            font-size: 90%;
            text-align: center;
          }

          .crawl > .title h1 {
            margin: 0 0 100px;
            text-transform: uppercase;
          }

          @keyframes crawl {
            0% {
              top: 0;
              transform: rotateX(20deg) translateZ(0);
            }
            100% {
              top: -6000px;
              transform: rotateX(25deg) translateZ(-2500px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default NotFound;
