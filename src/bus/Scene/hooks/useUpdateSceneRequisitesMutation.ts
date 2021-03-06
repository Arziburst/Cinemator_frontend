// Core
import { useMutation } from '@apollo/client';

// GraphQL
import UpdateSceneRequisitesSchema from '../schemas/updateSceneRequisites.graphql';

// Types
import { UpdateSceneRequisites, UpdateSceneRequisitesVariables } from '../types';

export const useUpdateSceneRequisitesMutation = () => {
    return useMutation<UpdateSceneRequisites, UpdateSceneRequisitesVariables>(UpdateSceneRequisitesSchema);
};
