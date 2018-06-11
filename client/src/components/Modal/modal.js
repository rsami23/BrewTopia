import React, { Component } from "react";

class Modal extends Component {
    state = { 
        show: false 
    };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render(){
        return(
        <div className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <p>Beer successfully added. <br/>
                        Go the Brewery page to view all the Beers!
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.hideModal}>Close</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}


export default Modal;