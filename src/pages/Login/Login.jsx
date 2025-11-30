import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../Auth'
import './Login.css'

export default function Login() {
  const [role, setRole] = useState('client')

  return (
    <AuthLayout
      title={`Sign in as ${role === 'client' ? 'Client' : 'Freelancer'}`}
      description={
        role === 'client' ? 'Hire top talent for your projects.' : 'Find work and grow your business.'
      }
      tabs={[
        { label: 'Client', value: 'client' },
        { label: 'Freelancer', value: 'freelancer' }
      ]}
      activeTab={role}
      onTabChange={setRole}
    >
      <form className="auth-form">
        <label>
          Email
          <input type="email" placeholder="Email address" required />
        </label>

        <label>
          Password
          <input type="password" placeholder="Enter your password" required />
        </label>

        <div className="form-footer">
          <label className="remember">
            <input type="checkbox" /> Remember me
          </label>
          <button type="button" className="link-button">
            Forgot password?
          </button>
        </div>

        <button className="solid-btn full" type="submit">
          Sign In
        </button>
      </form>

      <p className="auth-switch">
        Don&apos;t have an account? <Link to="/register">Sign up</Link>
      </p>
    </AuthLayout>
  )
}

