import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../store/slices/contacts";
import { Link } from "react-router-dom";

const ContactItem = (props) => {
  const { avatar, first_name, last_name, email, id } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "5px",
      }}
    >
      <img
        src={avatar}
        alt="avatar"
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          marginRight: "5px",
        }}
      />
      <div>
        <div>Name: {`${first_name} ${last_name}`}</div>
        <div>Email: {email}</div>
        <div>ID: {id}</div>
      </div>
    </div>
  );
};

const Contacts = () => {
  const users = useSelector((state) => state.contacts.userList);
  const dispatch = useDispatch();
  useEffect(() => {
    const init = async () => {
      const res = await dispatch(getUserList()).unwrap();
      console.log(res);
    };
    // init();
  }, []);

  return (
    <div>
      <div>
        <Link to="/">Back</Link>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <ContactItem {...user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
