import React, { useState } from 'react';

import { useFormik } from 'formik';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import Popovers from '../../../components/bootstrap/Popovers';
import Modal, {
	ModalTitle,
	ModalBody,
	ModalFooter,
	ModalHeader,
} from '../../../components/bootstrap/Modal';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';

const ModalsStepForm: React.FC = () => {
	const savedValue = localStorage.getItem('user');
	const parsedValue = savedValue ? JSON.parse(savedValue) : null;

	// Access the properties of the parsed object
	const newUserEmail = parsedValue?.newUserEmail;
	const newUserName = parsedValue?.newUserName;
	const newUserPassword = parsedValue?.newUserPassword;
	const newUserSurname = parsedValue?.newUserSurname;

	const [isOpen, setIsOpen] = useState(true);
	const [isOpenModal, setIsOpenModal] = useState(true);

	// Formik uses
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			newUserEmail: '',
			newUserteliphone: '',
			newUserConformation: '',
			newUserPassword: '',
		},
		validate: (values) => {
			const errors: {
				newUserEmail?: string;
				newUserteliphone?: string;
				newUserConformation?: string;
				newUserPassword?: string;
			} = {};
			if (!values.newUserEmail) {
				errors.newUserEmail = 'Required';
			}

			if (!values.newUserteliphone) {
				errors.newUserteliphone = 'Required';
			}
			if (!values.newUserConformation) {
				errors.newUserConformation = 'Required';
			}
			if (!values.newUserPassword) {
				errors.newUserPassword = 'Required';
			}

			return errors;
		},
		validateOnChange: false,
		onSubmit: (values) => {},
	});

	return (
		<Page className='w-100 mt-10'>
			<Modal isOpen setIsOpen={setIsOpen} id='sdmsk12' className='modal '>
				<ModalBody>
					<div className='text-center h1  fw-bold'>MA OSSIM</div>
					<div className='text-center h1  fw-bold'>Hi {newUserName}</div>
					<div className='col-12'>
						<FormGroup id='signup-email' isFloating label='EMAIL'>
							<Input type='email' name='newUserName' value={newUserEmail} />
						</FormGroup>
					</div>
					<div className='col-12 mt-2'>
						
							<Input
								type='tel'
								name='newUserteliphone'
								value={formik.values.newUserteliphone}
							/> <p>I agree to the </p>
						
					</div>
					<div className='col-12 mt-2'>
						<FormGroup id='signup-email' isFloating label='TELEPHONE'>
							<input
								type='checkbox'
								name='newUserConformation'
								value={formik.values.newUserConformation}
							/>
						</FormGroup>
					</div>

					<div className='text-center h1 mb-5'>START YOUR FREE TRAIL</div>
					<div className='text-center h1 mb-5'>
						Try all the features -{' '}
						<span className='text-danger'>No credit card required??</span>
					</div>

					{/* <div>
			<p>Email: {newUserEmail}</p>
			<p>Name: {newUserName}</p>
			<p>Password: {newUserPassword}</p>
			<p>Surname: {newUserSurname}</p>
		</div> */}
				</ModalBody>
				<ModalFooter>
					<p>Hello</p>
				</ModalFooter>
			</Modal>
		</Page>
	);
};

export default ModalsStepForm;
