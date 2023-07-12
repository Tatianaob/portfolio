import React, { useState } from "react";
import Modal from "react-modal";
import "../styles/Home.css";
import Image2 from "../assets/tatiana_colombia.jpeg";
import Image3 from "../assets/tatiana_dancer.jpeg";
import Image4 from "../assets/tatiana_runner.jpeg";

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState("");

  const handleImageClick = (image, caption) => {
    setSelectedImage(image);
    setSelectedCaption(caption);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedCaption("");
    setModalOpen(false);
  };

  return (
    <div className="home">
      <div className="about">
        <h2>Hola, I am Tatiana</h2>
        <div className="prompt">
          <p>
            A software developer student with a passion for learning and
            working in collaborative and diverse spaces
          </p>
          <div className="image-container">
            <img
              src={Image2}
              alt="Tatiana's pic"
              className="my-image"
              onClick={() => handleImageClick(Image2, "Originally from the Encanto Land. I love coffee, spending time with my family and eating arepas")}
            />
            <img
              src={Image3}
              alt="Tatiana's pic"
              className="my-image"
              onClick={() => handleImageClick(Image3, "I am part of a Colombian dance group, performing in cultural events across Washington. Honoring my traditions and culture is of utmost importance.")}
            />
            <img
              src={Image4}
              alt="Tatiana's pic"
              className="my-image"
              onClick={() => handleImageClick(Image4, "Running is my passion, where every stride takes me closer to my goals. I embrace the exhilaration and freedom it brings, pushing my limits one step at a time.")}
            />
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML, CSS, React, MaterialUI, Yarn, NPM, Redux</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Postgres, Flask, RESTful API, NestJS</span>
          </li>
          <li className="item">
            <h2>Programming Languages</h2>
            <span>Python, TypeScript, Java</span>
          </li>
        </ol>
      </div>

      <Modal
        isOpen={modalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Image Modal"
        style={{
          content: {
            maxWidth: "600px", 
            maxHeight: "700px", 
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        {selectedImage && (
          <>
            <img src={selectedImage} alt="Tatiana's pic" className="modal-image" style={{ maxWidth: "100%", maxHeight: "100%" }} />
            <p>{selectedCaption}</p>
          </>
        )}
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
}

export default Home;
