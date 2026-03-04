import { useState } from "react"
import { USERS as INITIAL_USERS } from "../data"
import { TEAMS as INITIAL_TEAMS } from "../data"
import "./Users.css"
import "./Overview.css"
import { StatCard } from "../components/StatCard"

export default function Overview() {
    const [users, setUsers] = useState(INITIAL_USERS)
    const [teams, setTeams] = useState(INITIAL_TEAMS)

    return (
        <div className="stats-row">
            <StatCard
                label="TOTAL USERS"
                value={users.length} />
            <StatCard
                label="ADMIN USERS"
                value={users.filter(u => u.is_admin = true).length} />
            <StatCard
                label="TOTAL TEAMS"
                value={teams.length} />
            <StatCard
                label="PENDING APROVALS"
                value={0} />
        </div>
    )
}