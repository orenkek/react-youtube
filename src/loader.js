import { func } from 'prop-types'
import React from 'react'

function Loader(){
    return (
        <div><div className="lds-dual-ring" style = {{display: 'flex', justifyContent: 'center', margin: '.5rem'}}/></div>
    )
}

export default Loader