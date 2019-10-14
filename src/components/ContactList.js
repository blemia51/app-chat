import React from 'react';
import Contact from './Contact.js';
import './ContactList.css'

const user =[
{
	name:'Tamara Stanley',
	avatar:'https://randomuser.me/api/portraits/women/17.jpg',
	online: true
}
,
{
	name:'Bonie Ramos ',
	avatar:'https://randomuser.me/api/portraits/women/60.jpg',
	online: true
},
{
	name:'Flen Ducan',
	avatar:'https://randomuser.me/api/portraits/men/40.jpg',
	online: true
	
},
{
	name:'Vivan Ryan',
	avatar:'https://randomuser.me/api/portraits/women/31.jpg',
	online: true
},
{
	name:'Leah Peterson',
	avatar:'https://randomuser.me/api/portraits/women/91.jpg',
	online: true
}

]



	const ContactList = () => (
		
		  user.map(user => (
			
			<Contact {...user} />
			
			 
			  
	
		  )
		  )
	)
		
	

	export default ContactList;