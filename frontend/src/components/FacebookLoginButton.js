import React from 'react';

const FacebookLoginButton = ({ setUserData }) => {
  const appId = process.env.REACT_APP_FACEBOOK_APP_ID;

  const handleFacebookLogin = () => {
    window.FB.init({
      appId: appId,
      cookie: true,
      xfbml: true,
      version: 'v17.0',
      status: true
    });

    window.FB.login((response) => {
      if (response.status === 'connected') {
        window.FB.api('/me', { 
          fields: 'name,email,picture'
        }, (userData) => {
          setUserData({
            name: userData.name || 'Anonymous',
            id: userData.id,
            image: userData.picture?.data?.url || ''
          });
        });
      } else {
        console.error('Facebook login failed:', response);
      }
    }, {
      scope: 'public_profile,email',
      auth_type: 'rerequest'
    });
  };

  return (
    <div className="social-login-buttons">
      <button className="facebook-button" onClick={handleFacebookLogin}>
        Connect with Facebook
      </button>
    </div>
  );
};

export default FacebookLoginButton;
