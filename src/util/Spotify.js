const clientID = "8809c201c5804e11b790c0377bb7739a";
let accessToken = null;
let expiresIn = null;

const spotifyEndpoint = "https://accounts.spotify.com/authorize";
const redirectURI = "localhost:3000";

const Spotify = {
    getAccessToken() {
        if (accessToken) return accessToken;

        const accessTokenMatch = window.location.href.match(/access_token=[^&]*/);
        const expiresInMatch = window.location.href.match(/expires_in=[^&]*/);
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            expiresIn = expiresInMatch[1];
            setTimeout( () => {accessToken = null;}, expiresIn * 1000 );
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            window.location = `${spotifyEndpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scope=playlist-modify-public`;
        }
    },

    search(term) {
        fetch();
    }
}

export {Spotify};