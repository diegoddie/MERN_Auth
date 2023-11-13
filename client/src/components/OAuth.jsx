import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
import {app} from '../firebase.js'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice.js'

const OAuth = () => {
    const dispatch = useDispatch()
    const handleGoogleClick = async() => {
        try{
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)
            const result = await signInWithPopup(auth, provider)
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                })
            })
            const data = await res.json()
            dispatch(signInSuccess(data))
        }catch(err){
            console.log("could not log in with google", err)
        }
    }

    return (
        <button type='button' onClick={handleGoogleClick} className='bg-red-700 rounded-lg text-white p-3 uppercase hover:opacity-95'>Continue with Google</button>
    )
}

export default OAuth