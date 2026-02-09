import { toast } from "react-toastify";
import { useUsers } from "../Hooks/useUsers";
import { createUser, deleteUser } from "../api/UserApi";
import type { User } from "../types/Users";
import UserList from "../Components/UserList";
import UserForm from "../Components/UserForm/UserForm";


const UsersPage = () => {
  const { users, loading, error, fetchUsers } = useUsers();

  const handleCreate = async (data: User) => {
    try {
      await createUser(data);
      toast.success("User created successfully");
      fetchUsers();
    } catch {
      toast.error("Failed to create user");
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await deleteUser(id);
      toast.success("User deleted");
      fetchUsers();
    } catch {
      toast.error("Failed to delete user");
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title mb-4 text-center">
                User Management
              </h4>
              <UserForm onSubmit={handleCreate} />
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body">
              {loading && (
                <div className="text-center my-3">
                  <div
                    className="spinner-border"
                    role="status"
                    aria-hidden="true"
                  />
                  <p className="mt-2">Loading users…</p>
                </div>
              )}

              {error && (
                <p className="text-danger text-center">{error}</p>
              )}

              {!loading && users.length === 0 && (
                <p className="text-muted text-center">
                  No users added yet.
                </p>
              )}

              {!loading && users.length > 0 && (
                <UserList users={users} onDelete={handleDelete} />
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UsersPage;
