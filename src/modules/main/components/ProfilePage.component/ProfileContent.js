import React from 'react';
import styled from 'styled-components';

function contentItem(title, content) {
  return (
    <div className="content__item">
      <p className="nameMovie">{title}</p>
      <p className="subNameMovie">{content}</p>
    </div>
  );
}

function ProfileContent({ className, userProfile }) {
  return (
    <Wrapper className={`${className}`}>
      <div className="content__container">
        <div className="content__wrapper">
          {contentItem('Your Name:', userProfile.hoTen)}
          {contentItem('Your Username:', userProfile.taiKhoan)}
          {contentItem('Your Email:', userProfile.email)}
          {contentItem('Your Phone Number:', userProfile.soDT)}
        </div>
      </div>
    </Wrapper>
  );
}

export default ProfileContent;
const Wrapper = styled.div`
  .content__container {
    .content__item {
      display: flex;
      gap: 2rem;
      /* margin-left: 10rem; */
      padding: 0.5rem 0;
      p {
        font-size: 1.25rem;
      }
    }
  }
`;
