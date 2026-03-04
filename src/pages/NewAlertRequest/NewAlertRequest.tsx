import { useState } from "react"
import "./NewAlertRequest.css"
import StepBasicInfo from "./steps/StepBasicInfo"
import StepQueryConfig from "./steps/StepQueryConfig"
import { FIELDS, QUERY_OPERATORS } from "../../data"

export default function NewAlertRequest() {
    const [formData, setFormData] = useState({
        alertTitle: "",
        team: "",
        index: "",
        field: FIELDS[0],
        operator: QUERY_OPERATORS[0],
        value: ""
    })
    const [step, setStep] = useState(1)

    return (
        <div>
            {step === 1 &&
                <StepBasicInfo
                    formData={formData}
                    setFormData={setFormData}
                    step={step}
                    setStep={setStep}
                />
            }
            {step === 2 &&
                <StepQueryConfig
                    formData={formData}
                    setFormData={setFormData}
                    step={step}
                    setStep={setStep}
                />
            }
        </div>
    )
}