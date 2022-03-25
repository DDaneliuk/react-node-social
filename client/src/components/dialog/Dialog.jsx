import React from "react"
import style from './Dialog.module.scss'

const Dialog = (props) => {
    debugger
    return (
        <div className={style.dialogContainer}>
            <div>{props.dialogs.map((d) => (
                <div className={style.userTab}>
                    <p key={d.id}>{d.name}</p>
                </div>))}
            </div>
        </div>

    )
}

export default Dialog;
