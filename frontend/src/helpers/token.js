// function to check token validity, parameter controls if only access token is checked or also refresh token
export function isTokenValid(checkRefreshToken) {
  // get access token
  let accessToken = localStorage.getItem('access_token') || '';
  // access token is a JWT token (see jwt.io), therefore it consists of three parts connected by dots. we split them
  const tokenParts = accessToken.split('.');
  // we check if the token really consists of three parts
  if (tokenParts.length === 3) {
    // the token contains the data as json, but base64 encoded. to decode base64, we can use the builtin JS function atob
    // afterwards we parse the JSON
    // (Note: there is also a function btoa which encodes base64, they can easily be confused!)
    const tokenData = JSON.parse(atob(tokenParts[1]));
    // we check the expiration date from the token, if not expired, the token is valid
    if (tokenData.exp >= Date.now()) {
      return true;
    }
  }
  // if we want to check refresh token as well, we do the same thing as for the access token
  if (checkRefreshToken) {
    let accessToken = localStorage.getItem('refresh_token') || '';
    const tokenParts = accessToken.split('.');
    if (tokenParts.length === 3) {
      const tokenData = JSON.parse(atob(tokenParts[1]));
      if (tokenData.exp >= Date.now()) {
        return true;
      }
    }
  }
  // if token is not valid, return false
  return false;
}