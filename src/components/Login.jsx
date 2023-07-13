import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


var Global = {
	playlistLimit: 50,
	songLimit: 100,
	access_token: "",
	refresh_token: "",
	redirect_uri : "http://10.0.0.22:5173/callback",
	client_id : "64363b6b951c47569e40229d762d1d1a",
	client_secret : "02fd8ea2fd79434ab03cd453a913aaa1",
	scopes : "user-read-private user-read-email playlist-read-private"
}

const spoty_url = `https://accounts.spotify.com/authorize?client_id=${Global.client_id}&response_type=code&redirect_uri=${Global.redirect_uri}&scope=${Global.scopes}`;

function Login() {
    
    const location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {

        const urlParams = new URLSearchParams(location.search)
        const spotyCode = urlParams.get("code");
        if (spotyCode) {
            autenticateUser(spotyCode)
        }
    })

    const autenticateUser = (spotyCode) => {
        try {
            console.log(spotyCode)
            const searchParams = new URLSearchParams({
                code: spotyCode,
                grant_type: "authorization_code",
                redirect_uri: Global.redirect_uri,
                client_id: Global.client_id,
                client_secret: Global.client_secret,
            });

            axios.post("https://accounts.spotify.com/api/token", searchParams).then(res => {
                localStorage.setItem('access_token', res.data.access_token);
                localStorage.setItem('refresh_token', res.data.refresh_token);
                navigate("/options");
            })
        } catch (error) {
            console.log(error);
        }
    }

    function login() {
        window.location.replace(spoty_url);
    };

  return (
    <>
    <div>
            <div id="login">
                <h3 className="subtitle">
                    Visualiza toda la información de tu perfil de Spotify
                </h3>
                <button onClick={login} id="btnLogin" >
                    INICIAR SESION
                </button>
            </div>
        </div>
    </>
  )
}

export default Login