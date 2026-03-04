import type { User } from "../types/user";

interface Props {
    users: User[];
}

export default function UserTable({ users }: Props) {
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.team}</p>
                    <p>{user.is_admin ? "Admin" : "User"}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}