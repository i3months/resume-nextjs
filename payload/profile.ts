import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faBlogger, faBloggerB } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sample_tux.png';

const profile: IProfile.Payload = {

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '정준모',
    small: '(13months)',
  },
  contact: [
    {
      title: 'waysoleward01@naver.com',
      link: 'mailto:waysoleward01@naver.com',
      icon: faEnvelope,
    },
    {
      title: '010-9947-1018',
      icon: faPhone      
    },
    {
      link: 'https://github.com/i3months',
      icon: faGithub,
    },
    {
      link: 'https://13months.tistory.com',
      icon: faBloggerB,
    },
  ],
  // notice: {
  //   title:
  //     "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
  //   icon: faBell,
  // },
};

export default profile;
