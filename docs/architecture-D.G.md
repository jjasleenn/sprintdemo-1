## What does this hook/service/repository do?

1. useAssignments Hook
It loads assignments with the component mounting, and offers add, delete and complete assignment functionality. It works out the state following each service operation

2. AssignmentService
The AssignmentService has assignment business logic. It retrieves assignments, generates assignment objects with IDs generated, switches the completion status and also deletes assignments.

3. AssignmentRepository
The AssignmentRepository is tasked with access and storage of data. It fetches, adds, modifies and cleanses assignments of the test data store.
## How did you decide what logic to include in that implementation, and how does that correctly separate solution concerns?

1. useAssignments Hook
It only takes care of presentation logic and no business rules or direct storage of data are found. This makes certain that there is separation of UI and business logic.

2. The business rules that are contained in the service layer are:

Generating unique IDs

Toggling completion logic

Organising new objects of assignment.

3. The repository is involved in data storage and retrieval. It is not filled with business logic or UI logic. This simplifies the way a future replacement of test data with an actual API or backend can be made.

## Where is this implementation made use of in the project and how?

1. useAssignments is a component that can be found in AssignmentList, AddAssignment, and Dashboard components to display assignment data and take actions.

2. AssignmentService, which is invoked in the hook useAssignments, is an operation invoked to interact with the repository.

3. Assigned is Assignment Repository that is used within Assignmentservice. The components of hook and UI do not directly access the repository.