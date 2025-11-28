import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from './AuthLayout'
import './Auth.css'

export default function Register() {
  const [role, setRole] = useState('freelancer')

  return (
    <AuthLayout
      title={`Sign in as ${role === 'client' ? 'Client' : 'Freelancer'}`}
      description={
        role === 'client' ? 'Find experts that fit your scope.' : 'Find work and grow your business.'
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
          Full Name
          <input type="text" placeholder="Full name" required />
        </label>

        <label>
          Email
          <input type="email" placeholder="Email address" required />
        </label>

        <label>
          Password
          <input type="password" placeholder="Create a password" required />
        </label>

        <label>
          Confirm Password
          <input type="password" placeholder="Confirm password" required />
        </label>

        <button className="solid-btn full" type="submit">
          Create Account
        </button>
      </form>

      <p className="auth-switch">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </AuthLayout>
  )
}

