import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faBloggerB, faEtsy } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import profileImage from '../asset/profile.jpg';

const profile: IProfile.Payload = {
  image: profileImage,
  name: {
    title: '정준모',
    small: '(13months)',
  },
  contact: [
    {
      title: 'jeongjoonmo.dev@gmail.com',
      link: 'mailto:jeongjoonmo.dev@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '-',
      icon: faPhone,
    },
    {
      link: 'https://github.com/i3months',
      icon: faGithub,
    },
    {
      link: 'https://13months.tistory.com',
      icon: faBloggerB,
    },
    {
      title: '(영문 이력서) https://13months.netlify.app/en',
      link: 'https://13months.netlify.app/en',
      icon: faEtsy,
    },
  ],
  // notice: {
  //   title:
  //     "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
  //   icon: faBell,
  // },
};

export default profile;
