# DeltaSigma

1. Clone the repository
   git clone <repository-url>
   cd react-crud-users

2. Install dependencies
   npm install

3. Start the mock API (JSON Server)
   npx json-server --watch db.json --port 3000

4. Start the application
   npm run dev

**Add the new field configuration in**
src/components/UserForm/formConfig.ts

{
  name: "dob",
  label: "Date of Birth",
  type: "date",
  required: false
}


Add validation rules (if needed) in
src/components/UserForm/formSchema.ts
