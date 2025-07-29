const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

function fetchUserData() {
    return ('https://api.github.com/users/{username}')
}