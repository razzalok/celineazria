import React, { FC, startTransition, useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Button from '../../../components/bootstrap/Button';
import useDarkMode from '../../../hooks/useDarkMode';
import Spinner from '../../../components/bootstrap/Spinner';
import Alert from '../../../components/bootstrap/Alert';
import * as Yup from 'yup';


const Signup = () => {
	const { darkModeStatus } = useDarkMode();

	const navigate = useNavigate();
	const handleOnClick = useCallback(() => navigate('/modals-step-form'), [navigate]);
	// const handleOnClickNotValues = useCallback(() => navigate('/auth-pages/sign-up'), [navigate]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	
	  const validateEmail = (value:string) => {
		let error;
		if (!emailRegex.test(value)) {
		  error = 'Invalid email address';
		}
		return error;
	  };

	  const validationSchema = Yup.object().shape({
		newUserEmail: Yup.string()
		  .required('Email is required')
		  .test('email', 'Invalid email address', (value) => !validateEmail(value)),
	  });

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			newUserEmail: '',
			newUserName: '',
			newUserSurname: '',
			newUserPassword: '',
		},
		validationSchema,
		validate: (values) => {
			const errors: {
				newUserEmail?: string;
				newUserName?: string;
				newUserSurname?: string;
				newUserPassword?: string;
			} = {};
			if (!values.newUserEmail) {
				errors.newUserEmail = 'Required';
			}

			if (!values.newUserName) {
				errors.newUserName = 'Required';
			}
			if (!values.newUserSurname) {
				errors.newUserSurname = 'Required';
			}
			if (!values.newUserPassword) {
				errors.newUserPassword = 'Required';
			}

			return errors;
		},
		validateOnChange: false,

		onSubmit:  (values) => {
			setIsLoading(true);
			if ( values.newUserEmail) {
					startTransition( () => {
					localStorage.setItem('user', JSON.stringify(values));
			});
			setIsLoading(false);
			// handleOnClick();
			navigate('/modals-step-form')
			}
		},
	});

	return (
		<>
			<div className='col-12'>
				<FormGroup id='signup-email' isFloating label='Your email'>
					<Input
						type='email'
						name='newUserEmail'
						onChange={formik.handleChange}
						value={formik.values.newUserEmail}
						isValid={formik.isValid}
						isTouched={formik.touched.newUserEmail}
						invalidFeedback={formik.errors.newUserEmail}
						onBlur={formik.handleBlur}
						onFocus={() => {
							formik.setErrors({});
						}}
					/>
				</FormGroup>
			</div>
			<div className='col-12'>
				<FormGroup id='signup-name' isFloating label='Your name'>
					<Input
						type='text'
						name='newUserName'
						onChange={formik.handleChange}
						value={formik.values.newUserName}
						isValid={formik.isValid}
						isTouched={formik.touched.newUserName}
						invalidFeedback={formik.errors.newUserName}
						onBlur={formik.handleBlur}
						onFocus={() => {
							formik.setErrors({});
						}}
					/>
				</FormGroup>
			</div>
			<div className='col-12'>
				<FormGroup id='signup-surname' isFloating label='Your surname'>
					<Input
						type='text'
						name='newUserSurname'
						onChange={formik.handleChange}
						value={formik.values.newUserSurname}
						isValid={formik.isValid}
						isTouched={formik.touched.newUserSurname}
						invalidFeedback={formik.errors.newUserSurname}
						onBlur={formik.handleBlur}
						onFocus={() => {
							formik.setErrors({});
						}}
					/>
				</FormGroup>
			</div>
			<div className='col-12'>
				<FormGroup id='signup-password' isFloating label='Password'>
					<Input
						type='password'
						name='newUserPassword'
						onChange={formik.handleChange}
						value={formik.values.newUserPassword}
						isValid={formik.isValid}
						isTouched={formik.touched.newUserPassword}
						invalidFeedback={formik.errors.newUserPassword}
						onBlur={formik.handleBlur}
						onFocus={() => {
							formik.setErrors({});
						}}
					/>
				</FormGroup>
			</div>
			<div className='col-12'>
				<Button color='warning' className='w-100 py-3' onClick={formik.handleSubmit}>
					{isLoading && <Spinner isSmall inButton isGrow />}
					Sign Up
				</Button>
			</div>
		</>
	);
};

export default Signup;
