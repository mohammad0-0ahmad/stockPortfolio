import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import '../css/AlertBox.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons"

const AlertBox = ({ text, confirmAction, success = '', duration = 10 }) => {
    var div = document.createElement('div');
    div.setAttribute('id', 'AlertBox');
    div.setAttribute('class', success ? 'success' : success === '' ? 'info' : 'fail');
    ReactDOM.render(
        <div>
            <FontAwesomeIcon icon={success ? faCheckCircle : success === '' ? faExclamationCircle : faTimesCircle} id='logo' />
            <h1>{text}</h1>
            <div id='makeDecision'>
                <Button
                    buttonText='Okej'
                    className={success ? 'confirmButton' : success === '' ? 'confirmButton' : 'rejectButton'}
                    handleClick={() => {
                        confirmAction && confirmAction()
                        div.remove()
                    }
                    } />
            </div>
        </div>
        , div);
    document.getElementsByTagName('body')[0].appendChild(div);
    setTimeout(() => {
        div.style.transition = '1s';
        div.style.opacity = 0;
        setTimeout(() => div.remove(), 1000);
    }, (duration - 1) * 1000)
}

export default AlertBox;