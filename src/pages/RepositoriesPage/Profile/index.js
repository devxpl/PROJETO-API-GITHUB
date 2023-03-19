import React from 'react';
import PropTypes from 'prop-types';
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';
import { Container, Header, Avatar, Login, Name, Data1, Inner } from './styles';

const Profile = ({ user }) => (
  <Container>
    <Header>
      <Avatar src={user.avatar_url} />
      <Login>{user.login}</Login>
      <Name>{user.name}</Name>
    </Header>
    <Inner>
      <Data1>
        <MdGroup size={20} />
        {user.following} &middot; <i>Seguidores</i> &middot; {user.followers}
        &middot; <i>Seguindo</i>
      </Data1>
      {user.company && (
        <Data1>
          <MdWork size={20} />
          {user.company}
        </Data1>
      )}
      {user.location && (
        <Data1>
          <MdLocationCity size={20} />
          {user.location}
        </Data1>
      )}
      {user.blog && (
        <Data1>
          <MdLink size={20} />
          <a href={`\\${user.blog}`}>{user.blog}</a>
        </Data1>
      )}
    </Inner>
  </Container>
);

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    name: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};

export default Profile;
