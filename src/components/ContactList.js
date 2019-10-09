import React from 'react';
import Contact from './Contact.js';
import './ContactList.css'

const user =[
{
	name:'Tamara Stanley',
	avatar:'https://randomuser.me/api/portraits/women/17.jpg',
	online :true
}
,
{
	name:'Bonie Ramos ',
	avatar:'https://randomuser.me/api/portraits/women/60.jpg'
},
{
	name:'Flen Ducan',
	avatar:'https://randomuser.me/api/portraits/men/40.jpg',
	online : true
},
{
	name:'Vivan Ryan',
	avatar:'https://randomuser.me/api/portraits/women/31.jpg'
},
{
	name:'Leah Peterson',
	avatar:'https://randomuser.me/api/portraits/women/91.jpg'
}

]

const ContactList = () => (
	
	<ul>
	{user.map(user =>(
		<li className = 'ContactList'>{[Contact(user)]}</li> ))}

	</ul>
	
	);

	export default ContactList;