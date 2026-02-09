import React from "react";
import type { User } from "../types/Users";

interface Props {
  users: User[];
  onDelete: (id: number) => void;
}

const UserList = ({ users, onDelete }: Props) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button
                  className="btn btn-outline-danger btn-sm"
                  aria-label="Delete user"
                  onClick={() => onDelete(user.id!)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
