import React, { } from 'react';
import CommonModal from '../views/CustomModals/CommonModal'
import ReactDOM from 'react-dom';

/**
 * 
 * @param {*this is message content} msg 
 */
function showSuccessMsg(msg){
    closeModal();
    ReactDOM.render(<CommonModal modal={false}
                isOpen={true}
                modalType="info"
                modalContent={msg}
                modalHeader="Success"
                noLabel="Close"
                yesFunc="null"
                noFunc="null"
            />
        , document.getElementById('modalDiv'));

}
function showErrorMsg(msg){
    closeModal();
    ReactDOM.render(<CommonModal modal={false}
                isOpen={true}
                modalType="danger"
                modalContent={msg}
                modalHeader="Error"
                noLabel="Close"
                yesFunc="null"
                noFunc="null"
            />
        , document.getElementById('modalDiv'));

}

function closeModal() {
    ReactDOM.unmountComponentAtNode(document.getElementById('modalDiv'));
}

export const showModal = {
    showSuccessMsg,
    showErrorMsg,
    closeModal
}