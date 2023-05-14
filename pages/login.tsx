import { AuthContext } from 'contexts/AuthContext';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form'

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data: any) {
    await signIn(data);
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center">Login</h3>
              <form onSubmit={handleSubmit(handleSignIn)}>
                <div className="mb-3">
                  <label htmlFor="loginInput" className="form-label">Login</label>
                  <input
                    {...register('email')}
                    type="email" 
                    name="email" 
                    className="form-control" 
                    id="loginInput" 
                    placeholder="Digite seu login" />
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">Senha</label>
                  <input 
                    {...register('password')}
                    type="password"
                    name="password"
                    className="form-control" 
                    id="passwordInput" 
                    placeholder="Digite sua senha" />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Entrar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
