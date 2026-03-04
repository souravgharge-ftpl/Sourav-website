import { useState } from "react"
import { USERS as INITIAL_USERS } from "../data"
import { TEAMS } from "../data"
import "./Users.css"
import { StatCard } from "../components/StatCard"


export default function Users({ show }: { show: "all" | "stats" | "table" }) {
    const [users, setUsers] = useState(INITIAL_USERS)
    const [showAddUser, setShowAddUser] = useState(false)
    const [newUser, setNewUser] = useState({ name: "", team: "", email: "", role: "" })

    return (
        <div className="users-container">

            {(show === "stats" || show === "all") && (
                <div className="stats-row">
                    <StatCard label="TOTAL USERS" value={users.length} />
                    <StatCard
                        label="ADMIN USERS"
                        value={users.filter(u => u.is_admin).length}
                    />
                </div>
            )}

            {(show === "table" || show === "all") && (
                <div className="card">
                    <div className="card-header">
                        <span>All Users</span>
                        <button
                            className="btn-primary"
                            onClick={() => {
                                setNewUser({ name: "", team: "", email: "", role: "" })
                                setShowAddUser(true)
                            }}
                        >
                            + Add User
                        </button>
                    </div>

                    <table className="users-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Team</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Is Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(u => (
                                <tr key={u.id}>
                                    <td className="text-white">{u.name}</td>
                                    <td className="text-muted">{u.email}</td>
                                    <td className="text-muted">{u.team}</td>
                                    <td className="text-muted">{u.role}</td>
                                    <td>
                                        <span className={`badge ${u.status}`}>
                                            {u.status}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`badge ${u.is_admin ? "admin" : "user"}`}>
                                            {u.is_admin ? "Admin" : "User"}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {showAddUser && (
                <div
                    className="modal-overlay"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setShowAddUser(false)
                    }}
                >
                    <div className="modal">
                        <h3 className="modal-title">Add New User</h3>

                        <div className="form-grid">
                            <div>
                                <label>NAME</label>
                                <input
                                    type="text"
                                    placeholder="Sourav Gharge"
                                    value={newUser.name}
                                    onChange={e =>
                                        setNewUser({ ...newUser, name: e.target.value })
                                    }
                                />
                            </div>

                            <div>
                                <label>TEAM</label>
                                <select
                                    value={newUser.team}
                                    onChange={(e =>
                                        setNewUser({ ...newUser, team: e.target.value })
                                    )}
                                >
                                    <option value="">Select Team</option>
                                    {TEAMS.map((team) => (
                                        <option key={team} value={team}>
                                            {team}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label>EMAIL</label>
                                <input
                                    type="text"
                                    placeholder="souravg@finfactor.in"
                                    value={newUser.email}
                                    onChange={e =>
                                        setNewUser({ ...newUser, email: e.target.value })
                                    }
                                />
                            </div>

                            <div>
                                <label>ROLE</label>
                                <input
                                    type="text"
                                    placeholder="Engineer"
                                    value={newUser.role}
                                    onChange={e =>
                                        setNewUser({ ...newUser, role: e.target.value })
                                    }
                                />
                            </div>
                        </div>

                        <div className="modal-actions">
                            <button
                                className="btn-secondary"
                                onClick={() => setShowAddUser(false)}
                            >
                                Cancel
                            </button>

                            <button
                                className="btn-dark"
                                onClick={() => {
                                    const newId = users.at(-1)?.id + 1 || 1
                                    setUsers(prev => [
                                        ...prev,
                                        {
                                            id: newId,
                                            name: newUser.name,
                                            email: newUser.email,
                                            team: newUser.team,
                                            role: newUser.role,
                                            status: "active",
                                            is_admin: false
                                        }
                                    ])
                                    setShowAddUser(false)
                                }}
                            >
                                Add User
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}