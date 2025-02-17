const inputListConfig = [
    {
        type: "text",
        id: "",
        name: "full_name",
        maxLength: "50",
        minLength: "2",
        pattern: "[A-Za-z ]+",
        placeholder: "Full Name",
        required: "true",
        value: "",
        label: "Full Name",
    },
    {
        type: "email",
        id: "",
        name: "email",
        maxLength: "",
        minLength: "",
        pattern: "",
        placeholder: "Email",
        required: "true",
        value: "",
        label: "Email",
    },
    {
        type: "checkbox",
        id: "",
        name: "accept",
        required: "true",
        checked: "",
        value: "accepted",
        label: "Accept Terms and Conditions",
    },
    {
        type: "password",
        id: "",
        name: "password",
        maxLength: "20",
        minLength: "8",
        pattern: "",
        placeholder: "Password",
        required: "true",
        value: "",
        label: "Password",
    },
    {
        type: "date",
        id: "",
        name: "dob",
        max: "2004-12-31",
        min: "1900-01-01",
        placeholder: "",
        required: "true",
        value: "",
        label: "Date of Birth",
    },
    {
        type: "number",
        id: "",
        name: "marks",
        min: "0",
        max: "100",
        placeholder: "Marks",
        required: "true",
        value: "",
        label: "Marks",
    },
    {
        type: "radio",
        id: "",
        name: "gender",
        required: "true",
        checked: "",
        value: "Male",
        label: "Male",
    },
    {
        type: "radio",
        id: "",
        name: "gender",
        required: "true",
        checked: "",
        value: "Female",
        label: "Female",
    },
    {
        type: "select",
        id: "",
        name: "state",
        required: "true",
        value: "delhi",
        label: "State",
        options: [
            { label: "Delhi", value: "delhi" },
            { label: "Mumbai", value: "mumbai" },
            { label: "UP", value: "up" },
        ],
    },
];

export default inputListConfig;