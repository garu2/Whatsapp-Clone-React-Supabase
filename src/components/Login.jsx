import { supabase } from "../supabaseClient";


const Login = () => {
    const handleLogin = async () => {
        const {error} = await supabase.auth.signInWithOAuth({
            provider: 'google'
        });
        if (error) {
            console.log('Error al iniciar secion', error);
        }
    }

    return (
        <section className="login">
            {/* <button onClick={handleLogout}>Cerrar secion</button> */}
            <button onClick={handleLogin}>Iniciar </button>
        </section>
    );
}
 
export default Login;