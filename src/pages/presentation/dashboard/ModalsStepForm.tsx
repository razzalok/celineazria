import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Page from '../../../layout/Page/Page';
import Modal, {
	ModalBody,
	ModalFooter,
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
	onSubmit: (_values) => {},
});

// Steps forms
	const [isOpen, setIsOpen] = useState(true);
	const [isOpenModal, setIsOpenModal] = useState(true);
	const steps = ['Step 1', 'Step 2', 'Step 3','Step 4','Step 5','Step 6','Step 7',];
	const [currentStep, setCurrentStep] = useState(0);
	const navigate = useNavigate();

	const nextStep = () => {
		setCurrentStep(currentStep + 1);
	  };
	
	  const previousStep = () => {
		setCurrentStep(currentStep - 1);
	  };
	  const closeModal = () => {
		setIsOpenModal(false);
		navigate('/')
	  };
	

	return (
		<Page className='w-100 mt-10'>
			<Modal isOpen setIsOpen={setIsOpen} id='sdmsk12' className='modal content: {width: "400px",height: "300px",margin: "auto"}'>
				<ModalBody>
					<div className='text-center h1  fw-bold'>MA OSSIM</div>
					{(steps[currentStep]==='Step 1')?(<div>
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
					</div>):(steps[currentStep]==='Step 2')?(<div>{steps[currentStep]}</div>):(steps[currentStep]==='Step 3')?(<div>{steps[currentStep]}</div>):(steps[currentStep]==='Step 4')?(<div>{steps[currentStep]}</div>):(steps[currentStep]==='Step 5')?(<div>{steps[currentStep]}</div>):(steps[currentStep]==='Step 6')?(<div>{steps[currentStep]}</div>):(<div>{steps[currentStep]}</div>)}
					
					{/* <div>
			<p>Email: {newUserEmail}</p>
			<p>Name: {newUserName}</p>
			<p>Password: {newUserPassword}</p>
			<p>Surname: {newUserSurname}</p>
		</div> */}
				</ModalBody>
				<ModalFooter>
				<h2>{steps[currentStep]}</h2>
        <p>Step {currentStep + 1} content goes here.</p>

        <div>
          {currentStep > 0 && (
            <button onClick={previousStep}>Previous</button>
          )}
          {currentStep < steps.length - 1 && (
            <button onClick={nextStep}>Next</button>
          )}
          {currentStep === steps.length - 1 && (
            <button onClick={closeModal}>Submit</button>
          )}
        </div>

				</ModalFooter>
			</Modal>
		</Page>
	);
};

export default ModalsStepForm;
