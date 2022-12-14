import styles from './auth.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';

const signInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Please enter your email'),
    password: Yup.string()
        .min(8, 'Your password must contain at least 8 characters')
        .required('Please enter your password'),
});

export const LoginPage = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });
    const navigate = useNavigate();

    const login = () => {
        localStorage.setItem('user', JSON.stringify({ role: 'ADMIN' }));
        navigate('/admin/dashboard');
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
    };
    const onChange = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.login_from}>
            <form className={styles.login} method="POST">
                <h2 className={styles.login_logo}>SHOPPER</h2>
                <h3 className={styles.login_title}>Welcome Back!</h3>
                <p className={styles.login_desc}>Please loging to continue!</p>

                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={signInSchema}
                    onSubmit={(values) => console.log(values)}
                >
                    {({ errors, touched }: any) => (
                        <Form className="mt-5">
                            <div className="grid grid-cols-1 md:grid-cols-3 text-[15px]">
                                <div className="md:col-span-3 mb-6">
                                    <Field
                                        name="email"
                                        placeholder="Email c???a b???n *"
                                        className="text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-[#38cab3] w-full"
                                    />
                                    {errors.email && touched.email ? (
                                        <p className={styles.errorMessage}>{errors.email}</p>
                                    ) : null}
                                </div>
                                <div className="md:col-span-3 mb-6">
                                    <Field
                                        name="password"
                                        placeholder="M???t kh???u *"
                                        className="text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-[#38cab3] w-full"
                                    />
                                    {errors.password && touched.password ? (
                                        <p className={styles.errorMessage}>{errors.password}</p>
                                    ) : null}
                                </div>
                                <div className="col-span-2 flex gap-3 mb-8">
                                    <input
                                        type="checkbox"
                                        id="checkbox1"
                                        className="peer relative appearance-none w-[20px] h-[20px]
                                        border rounded-none focus:outline-none 
                                        bg-[#e5e5e5]
                                        checked:bg-black
                                        after: content-['']
                                        after: left-0
                                        after: top-0
                                        after: bg-no-repeat
                                        after: bg-center
                                        after: bg-[length:16px]
                                        after: bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAoUlEQVRIie3Tqw0CQRQF0A0JBr8bEvrA0gECjcJBUFSAoAZaoAEqYQVNYDAYPgfBJIyDTWYQZK+/500m7xVFmzZNggrznHjtlUVqvMQh4Ef0/xTHoAEe/3mN6lNhiBPWyV8eSmNcQ2mVFI/KU9zxwCwpHiHLANwwSYpH2CZAF4yyrCK2ATwH9LttaTCgg5130h5RGNLFPgseDemhzIK3+UmeJtBAj7yn5iIAAAAASUVORK5CYII=')]
                                        "
                                    />
                                    <div>
                                        <label
                                            htmlFor="checkbox1"
                                            className="text-[#767676] peer-checked:text-[#1f1f1f] cursor-pointer"
                                        >
                                            Ghi nh??? m???t kh???u
                                        </label>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <Link to="/forgotPassword">B???n qu??n m???t kh???u?</Link>
                                </div>
                                <div className="md:col-span-full mb-6 flex justify-center">
                                    <button
                                        onClick={handleSubmit} //t???m th???i
                                        type="submit"
                                        className={styles.submit_btn}
                                        // className="text-white text-sm font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-6 tracking-wide"
                                    >
                                        ????ng nh???p
                                    </button>
                                </div>
                                {/* <div className="md:col-span-full flex justify-center mt-8">
                                    <p>
                                        B???n ch??a c?? t??i kho???n?{' '}
                                        <Link to="/register">
                                            <span className="text-[#38cab3] cursor-pointer hover:underline">
                                                ????ng k??
                                            </span>
                                        </Link>
                                    </p>
                                </div> */}
                            </div>
                        </Form>
                    )}
                </Formik>

                {/* <div className={styles.from_groups}>
                    <div className={styles.from_group}>
                        <label htmlFor="email" className={styles.from_label}>
                            Email:
                        </label>
                        <input
                            id="full_name"
                            name="email"
                            type="email"
                            placeholder="example@gmail.com"
                            className={styles.from_control}
                        />
                    </div>
                    <div className={styles.from_group}>
                        <label htmlFor="password" className={styles.from_label}>
                            Password:
                        </label>
                        <input
                            id="full_name"
                            name="password"
                            type="password"
                            placeholder="Nh???p m???t kh???u"
                            className={styles.from_control}
                        />
                    </div>
                </div>
                <button onClick={login} className={styles.submit_btn}>
                    ????ng nh???p
                </button>
                <div className={clsx(styles.forgotpass, 'mt-9', 'font-bold')}>
                    <Link to="/forgotpassword">Forgot password?</Link>
                </div> */}
            </form>
        </div>
    );
};
