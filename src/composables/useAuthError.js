export function useAuthError(firebaseErrorCode) {
    const parseError = (firebaseErrorCode) => {
        switch (firebaseErrorCode) {
            case 'auth/invalid-email':
                return 'Invalid email'
            case 'auth/email-already-in-use':
                return 'This email is already registered'
            case 'auth/user-not-found':
                return 'No account with that email was found'
            case 'auth/wrong-password':
                return 'Incorrect password'
            case 'auth/invalid-credential':
                return 'Email or password was incorrect'
            default:
                return 'Authentication error'
        }
    }

    return {parseError}
}