import { flattenError } from "zod"

export const createValidator = (schema) => {
   
   
    const validator = (data, partial) => {
        let result 
        if (partial) {
            result = schema.partial(partial).safeParse(data)
        } else {
            result = schema.safeParse(data)
        }
        const { success, error, data: validatedData } = result
        if (!success) {
            return {
                success: false,
                error: flattenError(error).fieldErrors
            }
        }
        return {
            success: true,
            data: validatedData
        }
    }


    
    return validator
}