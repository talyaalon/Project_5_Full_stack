import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Welcome to your dashboard!</h1>
      <nav className="navbar">
        <ul className="navbarList">
          <li className="navbarItem">
            <Link to="/info" className="navbarButton">
              Info
            </Link>
          </li>
          <li className="navbarItem">
            <Link to="/todos" className="navbarButton">
              Todos
            </Link>
          </li>
          <li className="navbarItem">
            <Link to="/posts" className="navbarButton">
              Posts
            </Link>
          </li>
          <li className="navbarItem">
            <Link to="/albums" className="navbarButton">
              Albums
            </Link>
          </li>
          <li className="navbarItem">
            <Link to="/logout" className="navbarButton">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <p>You can navigate to different sections using the links above.</p>
      </div>
    </div>
  );
};

export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from '../css/Home.css';

// const Home = () => {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Welcome to your dashboard!</h1>
//       <nav className={styles.navbar}>
//         <ul className={styles.navbarList}>
//           <li className={styles.navbarItem}>
//             <Link to="/info" className={styles.navbarLink}>
//               Info
//             </Link>
//           </li>
//           <li className={styles.navbarItem}>
//             <Link to="/todos" className={styles.navbarLink}>
//               Todos
//             </Link>
//           </li>
//           <li className={styles.navbarItem}>
//             <Link to="/posts" className={styles.navbarLink}>
//               Posts
//             </Link>
//           </li>
//           <li className={styles.navbarItem}>
//             <Link to="/albums" className={styles.navbarLink}>
//               Albums
//             </Link>
//           </li>
//           <li className={styles.navbarItem}>
//             <Link to="/logout" className={styles.navbarLink}>
//               Logout
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <div className={styles.content}>
//         <p>You can navigate to different sections using the links above.</p>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from '../css/Home.css';

// function Home(){
//   return (
//     <div className={styles.container}>
//       <nav className={styles.navbar}>
//         <ul className={styles.navbarList}>
//           <li className={styles.navbarItem}>
//             <Link to="/info" className={styles.navbarLink}>
//               Info
//             </Link>
//           </li>
//           <li className={styles.navbarItem}>
//             <Link to="/todos" className={styles.navbarLink}>
//               Todos
//             </Link>
//           </li>
//           <li className={styles.navbarItem}>
//             <Link to="/posts" className={styles.navbarLink}>
//               Posts
//             </Link>
//           </li>
//           <li className={styles.navbarItem}>
//             <Link to="/albums" className={styles.navbarLink}>
//               Albums
//             </Link>
//           </li>
//           <li className={styles.navbarItem}>
//             <Link to="/logout" className={styles.navbarLink}>
//               Logout
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <div className={styles.content}>
//         <h1>Welcome to your dashboard!</h1>
//         <p>You can navigate to different sections using the links above.</p>
//       </div>
//     </div>
//   );
// };

// export default Home;
