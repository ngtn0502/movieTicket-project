import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import ProfileContent from '../components/ProfilePage.component/ProfileContent.js';
import ProfileNavigation from '../components/ProfilePage.component/ProfileNavigation.js';
import schedule from '../../../assets/img/searchSection/news.png';
import user from '../../../assets/img/user.png';
import { getUserProfileAction } from '../../redux/actions/authAction.js';
import { authReducer } from '../../redux/reducer/authReducer';
import { FlexHCenter, FlexVCenter } from '../../utils/mixin';
import ProfileTransaction from '../components/ProfilePage.component/ProfileTransaction.js';
import { loadingVariants } from '../../utils/constants.js';

function ProfilePage({ className }) {
  const dispatch = useDispatch();
  const { userProfile } = useSelector((state) => state.authReducer);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getUserProfileAction());
  }, []);
  return (
    <Wrapper className={`page-95 ${className}`}>
      <motion.div variants={loadingVariants} initial="hidden" animate="visible">
        <main className="profile section-middle">
          {/* <ProfileNavigation /> */}
          <h1>Hi, {userProfile.hoTen}</h1>
          <img src={user} alt="userPicture" className="profile__picture" />{' '}
          <div className="profile__update">
            <button type="button" className="btn2">
              Update your profile
            </button>
          </div>
          <div className="profile__main">
            <ProfileContent userProfile={userProfile} />
            <ProfileTransaction userProfile={userProfile} />
          </div>
        </main>
      </motion.div>
    </Wrapper>
  );
}

export default ProfilePage;
const Wrapper = styled.section`
  padding: 7rem 0 0;
  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
  }
  .profile {
    .profile__picture {
      margin: 2rem auto 1rem;
      width: 8rem;
      border-radius: 50%;
    }
    .profile__update {
      ${FlexVCenter()}
      .btn2 {
        padding: 1rem;
        font-size: 1rem;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .profile__main {
      margin: 0 10rem;
    }
  }
`;
