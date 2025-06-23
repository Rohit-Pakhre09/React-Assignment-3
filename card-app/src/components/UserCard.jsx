import Title from "./Title";
import { useState } from "react";

function UserCard({ cardInfo }) { 

    const [isFollowing, followingFunc] = useState(false);

    const togglingBtn = () => {
        followingFunc(!isFollowing)
    };

  return (
    <section className="container">
      <Title title={cardInfo.title} />

      <section className="mid-content">
        {/* Image Section */}
        <div className="imageSection">
          <img src={cardInfo.avatar} style={{borderRadius: "50%"}} height={200} alt={cardInfo.name} />
        </div>

        {/* Information Section */}
        <section className="infoSection" style={{width: '250px'}}>
            <h2>{cardInfo.name}</h2>
            <p>{cardInfo.address}</p>

            <section style={{marginTop: '20px', display: 'flex', justifyContent: "space-between"}}>
                <div>
                    <h3>Posts</h3>
                    <p>{cardInfo.posts}</p>
                </div>
                <div>
                    <h3>Followers</h3>
                    <p>{cardInfo.followers}</p>
                </div>
            </section>
        </section>

        {/* Button */}
        <section>
            <button onClick={togglingBtn} style={{padding: "10px", width: '100px', cursor: 'pointer'}}>{isFollowing ? "Following" : "Follow"}</button>
        </section>
      </section>
    </section>
  );
}

export default UserCard;
