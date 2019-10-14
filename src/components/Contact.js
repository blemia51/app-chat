import React from 'react';
import './Contact.css'

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            online: false,
        };
    }
    render() {
    return (
        <div className='Contact'>
            <img className = 'avatar' src={this.props.avatar} alt='' />
            <div className='name' >
                <p className ='name'>{this.props.name}</p>
                <div onClick = {event => {
                            const newOnline = !this.state.online;
                            this.setState({ online: newOnline });
              }
                }className='status'>
                    <div className={this.state.online?
                    'status-online':
                    'status-offline'}>
                    <span className='status-text'>{this.state.online?'Online':'Offline'}
                    
              
                    </span></div>
                </div>
            </div>
        </div>
    )
}
}






export default Contact;
