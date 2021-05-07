import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Icon(props) {
  switch (props.icon) {
    case 'facebook':
      return <FacebookIcon style={{ color: props.color }} />;
    case 'twitter':
      return <TwitterIcon style={{ color: props.color }} />;
    case 'instagram':
      return <InstagramIcon style={{ color: props.color }} />;
    case 'youtube':
      return <YouTubeIcon style={{ color: props.color }} />;
    case 'up':
      return <ArrowDropUpIcon style={{ color: 'hsl(163, 72%, 41%)' }} />;
    case 'down':
      return <ArrowDropDownIcon style={{ color: 'hsl(356, 69%, 56%)' }} />;
    default:
      return null;
  }
}

export default Icon;
