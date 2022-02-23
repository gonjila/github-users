import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

function User({ user }) {
  return (
    <Link href={user.html_url} passHref>
      <a className={styles.userWrapper} target="_blank">
        <Image src={user.avatar_url} alt={user.login} width={40} height={40} />
        <h3>{user.login}</h3>
      </a>
    </Link>
  );
}

export default User;
