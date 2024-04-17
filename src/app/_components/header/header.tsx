
import React from 'react'
import AuthButton from '../auth-button/auth-button'
import SignOutButton from '../sign-out-button/sign-out-button'

const Header = () => {
    return (
        <header className='bg-base-50'>
            <div className='container mx-auto flex justify-between items-center p-4' >
                <h2>این بخش هدر سابت می باشد</h2>
                <div className='flex gap-4'>
                    <AuthButton />
                    <SignOutButton />
                </div>
            </div>
        </header>
    )
}

export default Header