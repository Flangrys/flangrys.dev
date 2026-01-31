import {gql} from "@apollo/client";

export const GQL_QUERY_PAGINATED_PROJECTS = gql`
    query ProfessionalProjects {
        project {
            project_link
            project_name
            project_dev_time
            project_tech_stack
            project_description
        }
    }
`;
