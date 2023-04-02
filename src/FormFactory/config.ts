const regionConfigs = {
  hu: {
    label: "Region 1 Form",
    fields: [
      { name: "field1", label: "Field 1", type: "text", required: true },
      { name: "field2", label: "Field 2", type: "email", required: true },
      { name: "field3", label: "Field 3", type: "checkbox", required: false },
    ],
  },

  us: {
    label: "Region 2 Form",
    fields: [
      { name: "field1", label: "Field 1", type: "text", required: true },
      { name: "field2", label: "Field 2", type: "tel", required: true },
      {
        name: "field3",
        label: "Field 3",
        type: "select",
        options: ["Option 1", "Option 2", "Option 3"],
        required: false,
      },
      { name: "field4", label: "Field 4", type: "textarea", required: false },
    ],
  },
};

export default regionConfigs;
