import React from 'react'
import ReactQuil from 'react-quill'
import debounce from '../helpers'
import BorderColorIcon from '@material-ui/icons/BorderColor'
import {withStyles} from '@material-ui/core/styles'
import styles from './styles'

class SideBarComponent extends React.Component{
constructor(){
    super();
}

    render(){
        return(<div>Hello from SideBar Component</div>)
    }
}
export default withStyles(styles)(SideBarComponent);