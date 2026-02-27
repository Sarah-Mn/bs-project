import { useMutation } from "@tanstack/react-query"
import { updateProduct } from "./update-product.api";


export const useUpdateProduct = ({id, title}: {id: number, title: string}) => {
    // const queryClient = useQueryClient()

 return useMutation({
        mutationKey: ["updateProduct", id],
        mutationFn: () => updateProduct(id,title),
        
        // onSuccess: () => {
            // Invalidate and refetch
            // queryClient.invalidateQueries({ queryKey: ["products"] });
        // }
    })
}