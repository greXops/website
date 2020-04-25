import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./styles.module.css";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "var(--ifm-modal-overlay-color)",
  },
  content: {
    position: "absolute",
    top: "6.5rem",
    left: "2rem",
    right: "2rem",
    bottom: "2rem",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    padding: "0px",
    width: "80vw",
    height: "80vh",
    margin: "auto",
    backgroundColor: "#1f201c",
    WebkitBoxShadow: "0px 0px 10px 5px rgba(0,0,0,0.75)",
    MozBoxShadow: "0px 0px 10px 5px rgba(0,0,0,0.75)",
    boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.75)",
    border: "none",
    borderRadius: "10px",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#__docusaurus");

function FeedModal(props) {
  const modal = props;
  const tag = modal.tag;
  const title = modal.title;
  let subtitle = modal.subtitle;
  const modal_width = modal.modal_width;
  const modal_height = modal.modal_height;
  const modal_frameborder = modal.modal_frameborder;
  const modal_tabindex = modal.modal_tabindex;
  const inoreader_link = modal.inoreader_link;
  /* 
  https://www.inoreader.com/stream/user/1004980206/tag/DevOps/view/html?cs=m&t=Baris%20Gece&l=https://www.barisgece.com/img/white_devops_big.svg&n=10&w=855&fs=12&lw=36&lh=36&c=0xfff&lc=0x3b70b6&bc=0x1f201c&dc=0xe3a208
  Decoded inoreader_link
  https://www.inoreader.com/stream/user/1004980206/tag/DevOps/view/html?cs=m&t=Baris Gece&l=https://www.barisgece.com/img/white_devops_big.svg&n=10&w=855&fs=12&lw=36&lh=36&c=0xfff&lc=0x3b70b6&bc=0x1f201c&dc=0xe3a208
  */

  const cta = "View More";

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#fff";
  }

  const closeModal = () => setIsOpen(false);

  return (
    <div style={{ marginTop: "15px" }}>
      <div className={styles.container}>
        {tag && (
          <div className={styles.tag_container}>
            <span>{tag}</span>
          </div>
        )}
        {(title || subtitle) && (
          <div className={styles.title_box}>
            <span>
              {title && <span className={styles.title}>{title}</span>}
              {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
            </span>
            {cta && (
              <span className={styles.cta} onClick={openModal}>
                <span className={styles.cta_text}>{cta}</span>
              </span>
            )}
          </div>
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={true}
        //className={styles.ReactModal__Content}
        //overlayClassName={styles.Overlay}
        parentSelector={() => document.getElementById("__docusaurus")}
      >
        <div
          className={styles.title_box}
          style={{ padding: "0px 20px 20px 20px" }}
        >
          <span>
            {title && (
              <span
                ref={(_subtitle) => (subtitle = _subtitle)}
                className={styles.title}
              >
                {title}
              </span>
            )}
          </span>
          {cta && (
            <span className={styles.cta} onClick={closeModal}>
              <span className={styles.cta_text}>Close Modal</span>
            </span>
          )}
        </div>
        <iframe
          width={modal_width}
          height={modal_height}
          src={inoreader_link}
          frameBorder={modal_frameborder}
          tabIndex={modal_tabindex}
          className={styles.inoreader}
        ></iframe>
      </Modal>
    </div>
  );
}
export default FeedModal;
