import { useState } from "react"
import Users from "./pages/Users"
import NewAlertRequest from "./pages/NewAlertRequest/NewAlertRequest"
import Overview from "./pages/Overview"
import Approval from "./pages/Approval"
import "./App.css"


export default function App() {
  const [page, setPage] = useState("new_alert_request")

  const renderPage = () => {
    if (page === "overview") return <Overview />
    if (page === "users") return <Users show="all" />
    if (page === "approvals") return <Approval />
    if (page === "new_alert_request") return <NewAlertRequest />
  }

  const getTitle = () => {
    if (page === "overview") return { title: "Admin Overview", sub: "ADMINISTRATIVE PORTAL" }
    if (page === "users") return { title: "User Management", sub: "MANAGE USERS" }
    if (page === "approvals") return { title: "Approvals", sub: "PENDING REQUESTS" }
    if (page === "new_alert_request") return { title: "Create Alert Request", sub: "USER PORTAL" }
  }

  return (
    <div className="app">

      <div className="sidebar">
        <div className="logo">
          <div className="logo-title">
            <span className="brand">DevOps</span> Opensearch
          </div>
          <div className="logo-sub">CENTRALIZED DASHBOARD</div>
        </div>

        <div className="menu">
          <div className="menu-heading">ADMINISTRATION</div>

          {[
            { id: "overview", label: "Overview" },
            { id: "users", label: "Users" },
            { id: "new_alert_request", label: "New Alert Request" },
            { id: "approvals", label: "Approvals" },
          ].map(item => (
            <div
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`menu-item ${page === item.id ? "active" : ""}`}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <div className="content">
        <div className="topbar">
          <div className="page-title">{getTitle()?.title}</div>
          <div className="page-sub">{getTitle()?.sub}</div>
        </div>

        <div className="page-content">
          {renderPage()}
        </div>
      </div>

    </div>
  )
}