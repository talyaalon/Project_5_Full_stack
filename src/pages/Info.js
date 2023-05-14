import React from "react";

function Info({ user }) {
  if (!user) {
    return <div></div>;
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Information</h1>
      <div style={styles.details}>
        <p style={styles.field}>
          <strong>ID:</strong> {user.id}
        </p>
        <p style={styles.field}>
          <strong>Name:</strong> {user.name}
        </p>
        <p style={styles.field}>
          <strong>Username:</strong> {user.username}
        </p>
        <p style={styles.field}>
          <strong>Email:</strong> {user.email}
        </p>
        <p style={styles.field}>
          <strong>Address:</strong> {user.address.street}, {user.address.suite},{" "}
          {user.address.city}, {user.address.zipcode}
        </p>
        <p style={styles.field}>
          <strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng:{" "}
          {user.address.geo.lng}
        </p>
        <p style={styles.field}>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p style={styles.field}>
          <strong>Website:</strong> {user.website}
        </p>
        <p style={styles.field}>
          <strong>Company:</strong> {user.company.name},{" "}
          {user.company.catchPhrase}, {user.company.bs}
        </p>
      </div>
    </div>
  );
}

export default Info;

const styles = {
  container: {
    backgroundColor: "#f1f1f1",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    maxWidth: "500px",
    margin: "40px  auto",
    background: "linear-gradient(to bottom, #ffffff, #f1f1f1)",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  },
  field: {
    margin: "10px 0",
    fontSize: "16px",
    lineHeight: "1.4",
    textAlign: "left",
    width: "100%",
  },
};

// const styles = {
//   container: {
//     backgroundColor: '#f1f1f1',
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
//     textAlign: 'center',
//     maxWidth: '500px',
//     margin: '0 auto',
//   },
//   title: {
//     fontSize: '24px',
//     marginBottom: '20px',
//   },
//   details: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   field: {
//     margin: '10px 0',
//     fontSize: '16px',
//     lineHeight: '1.4',
//   },
// };
