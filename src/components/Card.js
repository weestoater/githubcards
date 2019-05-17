import React from "react";

class Card extends React.Component {
  render() {
    const profile = this.props;
    let _noOfRepos = profile.repos_url.length;

    return (
      <div className="col-sm-3">
        <div className="card" key={profile.id}>
          <img src={profile.avatar_url} alt="" />
          <div className="info">
            <div className="name">{profile.name}</div>
            <div className="company">{profile.company}</div>
            <div className="repos">No. of Repos: {_noOfRepos}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
