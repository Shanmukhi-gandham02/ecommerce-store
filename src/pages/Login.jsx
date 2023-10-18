import React, {useState} from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'

import '../styles/login.css'
import { auth } from '../firebase.config'
import { toast } from 'react-toastify'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signIn = async(e) => {
    e.preventDefault();
    setLoading(true);

    try {

      const userCredential = await signInWithEmailAndPassword( auth, email, password);

      const user = userCredential.user;

      setLoading(false);
      toast.success('Successfully logged in');
      navigate('/checkout');
      
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  }

  return (
    <section>
      <Container>
      
        <Row>

          {
            loading ? (
              
              <Col lg='12' className='text-center'>
                <h6 className='fw-bold'>Loading...</h6>
              </Col>) : (
                
              <Col lg='6' className='m-auto text-center'>
                <h3 className='fw-bold mb-4 mt-4'>Login</h3>
    
                <Form className='auth__form' onSubmit={signIn}>
                  <FormGroup className='form__group'>
                    <input 
                      type="email" 
                      placeholder='Email'
                      value={email} 
                      onChange={e=> setEmail(e.target.value)} 
                    />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input 
                      type="password" 
                      placeholder='Password'
                      value={password} 
                      onChange={e=> setPassword(e.target.value)} 
                    />
                  </FormGroup>
    
                  <button type='submit' className="buy_btn auth_btn ">Login</button>
                  <p>Don't have an account? 
                    <Link to='/signup'> Create an account</Link>
                  </p>
                </Form>
              </Col>
              )
          }

        </Row>
      </Container>
    </section>
  )
}

export default Login