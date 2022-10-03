import React from 'react'

function Alert(props) {
    // this complete capitalize fuction just to make first word capital , merely you can ignore this and focus on the main code 
    const capitalalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1); 
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalalize(props.alert.type)}</strong> :{props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    )
}

export default Alert

