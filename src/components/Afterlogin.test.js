import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import ShowData from './AfterLogin'

test('User data is shown correctly', () => {
    const user = {
        username: 'tester',
        name: 'T. Testaaja',
        email: 'tes@ter.net'
    }

    render(<ShowData user={user}/>)

    const username = screen.getByText(`Username: ${user.username}`)
    const name = screen.getByText(`Name: ${user.name}`)
    const email = screen.getByText(`Email: ${user.email}`)
    expect(username).toBeDefined
    expect(name).toBeDefined
    expect(email).toBeDefined
})