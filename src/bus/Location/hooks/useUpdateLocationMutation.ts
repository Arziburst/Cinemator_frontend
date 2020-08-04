// Core
import { useMutation } from '@apollo/react-hooks';

// GraphQL
import UpdateLocationSchema from '../schemas/updateLocation.graphql';

// Types
import { UpdateLocation, UpdateLocationVariables } from '../types';

export const useUpdateLocationMutation = () => {
    return useMutation<UpdateLocation, UpdateLocationVariables>(UpdateLocationSchema);
};
