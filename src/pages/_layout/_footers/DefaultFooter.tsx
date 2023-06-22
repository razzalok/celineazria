import React from 'react';
import Footer from '../../../layout/Footer/Footer';
import Popovers from '../../../components/bootstrap/Popovers';

const DefaultFooter = () => {
	return (
		<Footer>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col text-center'>
						<Popovers>
							&copy; All Right Reserved 2023-2024
						</Popovers>
					</div>
				</div>
			</div>
		</Footer>
	);
};

export default DefaultFooter;
