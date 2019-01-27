import React from 'react';

import './footer.css'
import Typography from '@material-ui/core/Typography';

const Footer = (isLoggedIn) => (
  <footer>
    {/*  TODO: logo
      <a href="" target="_blank">
      <img src="" />
    </a> */}
    <Typography>
      By <a href="https://github.com/loiclefloch" target="_blank" rel="noopener noreferrer"> Loïc Lefloch</a>
    </Typography>
  </footer>
);

export default Footer;
