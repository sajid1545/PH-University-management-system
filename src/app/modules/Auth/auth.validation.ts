import { z } from 'zod';

const loginValidationSchema = z.object({
    body: z.object({
        id: z.string({
            required_error: 'ID is required',
            invalid_type_error: 'ID must be a string',
        }),
        password: z.string({
            required_error: 'Password is required',
            invalid_type_error: 'Password must be a string',
        }),
    }),
});

const changePasswordValidationSchema = z.object({
    body: z.object({
        oldPassword: z.string({
            required_error: 'Old Password is required',
            invalid_type_error: 'Old Password must be a string',
        }),
        newPassword: z.string({
            required_error: 'New Password is required',
            invalid_type_error: 'New Password must be a string',
        }),
    }),
});

export const AuthValidation = {
    loginValidationSchema,
    changePasswordValidationSchema,
};