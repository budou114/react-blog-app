import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../firebase"

const Login = () => {
  const loginInWithGoogle = () => {
    // Googleでログイン
    signInWithPopup(auth, provider).then((result) => {

    });
  }

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login