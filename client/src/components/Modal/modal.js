import React from "react";

const Modal = () => {
    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal-header">
                    <h3>Modal Header</h3>
                    <button className="modal-close-btn">
                        <span role="img" aria-label="close">
                            &#x2715;
                        </span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Modal Body</p>
                </div>
                <div className="modal-footer">
                    <button className="modal-close-btn">Close</button>
                </div>
            </div>
        </div>
    );
}
export default Modal;
