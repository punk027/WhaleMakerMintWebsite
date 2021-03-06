import React from "react";
import { teams } from "../data/teams";
import styles from "../styles/patterns/nftcollection.module.css";

const Teams = () => {
  const renderTeams = (
    <div className={styles.cardWrapper}>
      {teams.map((data, index) => {
        return (
          <div key={index} className={styles.card}>
            <div className={styles.image}>
              <img src={data.image} alt={data.name} />
            </div>
            <div>
              <p className="text_pri_14">{data.name}</p>
              <p className="text_sec_14" style={{ margin: "1em 0" }}>
                {data.description}
              </p>
              <div className={styles.flex_icons}>
                {data.github_link &&
                  <a href={data.github_link}>
                    <img src="/icons/github.svg" alt="github" />
                  </a>
                }
                {data.twitter_link &&
                  <a href={data.twitter_link}>
                    <img src="/icons/twitter.svg" alt="twiiter" />
                  </a>
                }
                {data.discord_link &&
                  <a href={data.discord_link}>
                    <img src="/icons/discord.svg" alt="discord" />
                  </a>
                }

                {data.linkedin_link &&
                  <a href={data.linkedin_link}>
                    <img src="/icons/linkedin.svg" alt="linkedin" />
                  </a>
                }
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={styles.nftCollection}>
      <center className="text_pri_32">Teams</center>
      {renderTeams}
    </div>
  );
};

export default Teams;
