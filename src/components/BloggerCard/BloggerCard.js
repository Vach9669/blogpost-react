import React from 'react';
import {Card} from 'react-bootstrap';

function BloggerCard({ bloggers }) {
	 

	return (
		<div>
			{bloggers.map(blogger => {
				return ( 
					<Card style={{ width: '18rem',margin:'1rem' }}>
					<Card.Body>
						<Card.Title>{blogger.lastname}</Card.Title>					  
					</Card.Body>
				  </Card>
						)
						})}
		</div>
	)
}

export default BloggerCard;