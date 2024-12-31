import "./DownloadCVButton.css";

const DownloadCVButton = () => {
  return (
    <div className="download-button-container">
      <a
        href="/assets/images/VanderStraeten-Witze-cv.pdf" // Path to your CV file in the public folder
        download="Witze_Van_der_Straeten_CV.pdf" // Suggested download name
        className="download-button"
      >
        Download My CV
      </a>
    </div>
  );
};

export default DownloadCVButton;
