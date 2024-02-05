import React from "react";

import { useSiteMetadata } from "@/hooks";

import * as styles from "./Author.module.scss";

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles.author}>
      <p className={styles.bio}>
        <strong>{author.name} 👨🏻‍💻</strong>
        <br />
        {author.bio}
      </p>
    </div>
  );
};

export default Author;
