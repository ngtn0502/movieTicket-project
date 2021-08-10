import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { useHistory } from 'react-router';
import ProfileContent from '../components/ProfilePage.component/ProfileContent.js';
import user from '../../../assets/img/user.png';
import { getUserProfileAction } from '../../redux/actions/authAction.js';
import { FlexVCenter } from '../../utils/mixin';
import ProfileTransaction from '../components/ProfilePage.component/ProfileTransaction.js';
import { loadingVariants, loadingVariants3 } from '../../utils/constants.js';
import ProfileUpdate from '../components/ProfilePage.component/ProfileUpdate.js';
import Loading from '../components/Loading';
import { CLOSE_MODAL } from '../../redux/actions/constantsAction.js';
import AlertModal from '../components/AlertModal.js';
import ScrollToTop from '../components/ScrollToTop.js';

function ProfilePage({ className }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isContinue, setIsContinue] = useState(false);
  const [isProfileUpdate, setIsProfileUpdate] = useState(false);
  const { userProfile, isLoading } = useSelector((state) => state.authReducer);
  const { isModalShow, message, goTo, type, message2 } = useSelector(
    (state) => state.uiReducer.modal
  );
  const closeModalHandler = () => {
    dispatch({ type: CLOSE_MODAL });
    // goTo depend on what modal appear for
    if (goTo) {
      history.push(goTo);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getUserProfileAction());
  }, [dispatch]);
  return (
    <Wrapper className={`page-95 ${className}`} id="profile">
      <motion.div
        variants={loadingVariants}
        initial="hidden"
        animate="visible"
        key={isLoading}
      >
        {' '}
        <AnimatePresence>
          {isModalShow && (
            <div>
              {/* eslint-disable */}
              <div className='backdrop' onClick={closeModalHandler} />
              {/* eslint-enable */}

              <AlertModal
                message={message}
                goTo={goTo}
                type={type}
                message2={message2}
              />
            </div>
          )}
        </AnimatePresence>
        {isLoading && <Loading />}
        {!isLoading && (
          <main className="profile section-middle">
            {/* <ProfileNavigation /> */}
            <ScrollToTop to="/profile#profile" />
            <h1>Hi, {userProfile.hoTen}</h1>
            <img
              src={user}
              alt="userPicture"
              className="profile__picture"
            />{' '}
            <div className="profile__update">
              <button
                type="button"
                className="btn2"
                onClick={() => {
                  setIsProfileUpdate((state) => !state);
                }}
              >
                {isProfileUpdate ? 'Go Back' : 'Update/Change your profile'}
              </button>
            </div>
            <AnimatePresence>
              <motion.div
                variants={loadingVariants3}
                initial="hidden"
                animate="visible"
                exit={{
                  x: -200,
                  opacity: 0,
                  transition: {
                    duration: 0.8,
                  },
                }}
                key={isProfileUpdate}
              >
                {isProfileUpdate && (
                  <div className="profile__main">
                    <ProfileUpdate />
                  </div>
                )}{' '}
              </motion.div>{' '}
            </AnimatePresence>
            {!isProfileUpdate && (
              <div className="profile__main">
                <ProfileContent userProfile={userProfile} />
                <hr />
                <div id="transaction" />
                <ProfileTransaction
                  thongTinDatVe={userProfile.thongTinDatVe?.slice(0, 2)}
                />{' '}
                <AnimatePresence>
                  <motion.div
                    variants={loadingVariants3}
                    initial="hidden"
                    animate="visible"
                    exit={{ x: 200, opacity: 0 }}
                    key={isContinue}
                  >
                    {isContinue && (
                      <ProfileTransaction
                        thongTinDatVe={userProfile.thongTinDatVe?.slice(2)}
                      />
                    )}{' '}
                  </motion.div>{' '}
                </AnimatePresence>
                {userProfile.thongTinDatVe?.length > 2 && (
                  <div className="profile__update profile__readMore">
                    <button
                      type="button"
                      className="btn2"
                      onClick={() => {
                        setIsContinue((state) => !state);
                      }}
                    >
                      {isContinue ? 'Thu Gọn' : 'More history purchase...'}
                    </button>
                  </div>
                )}
              </div>
            )}
          </main>
        )}
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
    .profile__readMore {
      margin: 2rem auto;
    }
  }
  hr {
    border-top: 3px solid var(--color-gray-800);
    padding: 0.5rem 0;
  }

  @media screen and (min-width: 768px) {
    padding: 5rem 0 0;
    .profile__main {
      margin: 0 10rem;
    }
  }
`;
