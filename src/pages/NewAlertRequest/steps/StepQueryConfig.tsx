import { FIELDS, QUERY_OPERATORS } from "../../../data"
import "./css/StepQueryConfig.css"

type FormData = {
    alertTitle: string
    team: string
    index: string
    field: string
    operator: string
    value: string
}

type StepQueryConfigProps = {
    formData: FormData
    setFormData: React.Dispatch<React.SetStateAction<FormData>>
    step: number
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export default function StepQueryConfig({
    formData,
    setFormData,
    step,
    setStep
}: StepQueryConfigProps) {

    function generateQuery() {
        if (!formData.field || !formData.operator) {
            return ""
        }

        return `${formData.field} ${formData.operator} ${formData.value}`
    }

    const sortedFields = [...FIELDS].sort((a, b) => a.localeCompare(b))
    const sortedOperators = [...QUERY_OPERATORS].sort((a, b) => a.localeCompare(b))

    return (
        <div className="request-wrapper">
            <div className="request-card">

                <div className="card-header">
                    <span>Condition</span>
                    <span className="step-text">Step {step} of 4</span>
                </div>

                <div className="card-body step-query">

                    <div className="form-group step-query">
                        <span>
                            Define the conditions that should trigger this alert. All conditions are joined with AND.
                        </span>

                        <div className="form-row step-query">

                            {/* FIELD */}
                            <select
                                value={formData.field}
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        field: e.target.value
                                    }))
                                }
                            >
                                {sortedFields.map((field) => (
                                    <option key={field} value={field}>
                                        {field}
                                    </option>
                                ))}
                            </select>

                            {/* OPERATOR */}
                            <select
                                value={formData.operator}
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        operator: e.target.value
                                    }))
                                }
                            >
                                {sortedOperators.map((operator) => (
                                    <option key={operator} value={operator}>
                                        {operator}
                                    </option>
                                ))}
                            </select>

                            {/* VALUE */}
                            <input
                                type="text"
                                placeholder="value"
                                value={formData.value}
                                onChange={(e) =>
                                    setFormData(prev => ({
                                        ...prev,
                                        value: e.target.value
                                    }))
                                }
                            />

                        </div>
                    </div>

                    {/* QUERY PREVIEW */}
                    <div className="form-row">
                        <div className="form-group">
                            <span>Generated Query Preview</span>

                            <input
                                className={`preview step-query ${formData.value ? "active" : ""}`}
                                value={generateQuery()}
                                placeholder="Query will appear here"
                                readOnly
                            />
                        </div>
                    </div>

                </div>

                <div className="card-footer">

                    <button
                        className="btn-dark step-query"
                        onClick={() => setStep(prev => Math.max(prev - 1, 1))}
                    >
                        Back
                    </button>

                    <button
                        className="btn-primary"
                        disabled={!formData.value}
                        onClick={() => setStep(prev => Math.min(prev + 1, 4))}
                    >
                        Next
                    </button>

                </div>

            </div>
        </div>
    )
}