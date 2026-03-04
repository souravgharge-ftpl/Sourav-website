import { TEAMS } from "../../../data"
import { INDEX } from "../../../data"

type StepBasicInfoProps = {
    formData: {
        alertTitle: string
        team: string
        index: string
    }
    setFormData: React.Dispatch<React.SetStateAction<any>>
    step: number
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export default function StepBasicInfo({ formData, setFormData, step, setStep }: StepBasicInfoProps) {

    return (
        <div className="request-wrapper">
            <div className="request-card">

                <div className="card-header">
                    <span>Basic Info</span>
                    <span className="step-text">Step {step} of 4</span>
                </div>

                <div className="card-body">
                    <div className="form-group">
                        <span>ALERT TITLE</span>
                        <input
                            type="text"
                            placeholder="e.g. Exception Alert on Risk-Gauge Prod"
                            value={formData.alertTitle}
                            onChange={(e) =>
                                setFormData({ ...formData, alertTitle: e.target.value })
                            }
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <span>TEAM</span>
                            <select
                                value={formData.team}
                                onChange={(e) =>
                                    setFormData({ ...formData, team: e.target.value })
                                }
                            >
                                <option value="">-- Select Team --</option>
                                {TEAMS.map((team) => (
                                    <option key={team} value={team}>
                                        {team}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <span>INDEX</span>
                            <select
                                value={formData.index}
                                onChange={(e) =>
                                    setFormData({ ...formData, index: e.target.value })
                                }
                            >
                                <option value="">-- Select Index --</option>
                                {INDEX.map((index) => (
                                    <option key={index} value={index}>
                                        {index}
                                    </option>
                                ))}

                            </select>
                        </div>
                    </div>
                </div>

                <div className="card-footer">
                    <button
                        className="btn-primary"
                        // disabled={!formData.alertTitle || !formData.team || !formData.index}
                        onClick={() => setStep(prev => Math.min(prev + 1, 4))}
                    >
                        Next
                    </button>
                </div>

            </div>
        </div>
    )
}