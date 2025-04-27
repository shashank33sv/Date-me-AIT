import { differenceInYears, format, formatDistance } from 'date-fns';
import { FieldValues, Path, UseFormSetError } from 'react-hook-form';
import { ZodIssue } from 'zod';

export function calculateAge(dob: Date) {
    return differenceInYears(new Date(), dob);
}

export function handleFormServerErrors<TFieldValues extends FieldValues>(
    errorResponse: { error: string | ZodIssue[] },
    setError: UseFormSetError<TFieldValues>
) {
    if (Array.isArray(errorResponse.error)) {
        errorResponse.error.forEach((e) => {
            const fieldName = e.path.join('.') as Path<TFieldValues>
            setError(fieldName, { message: e.message })
        })
    } else {
        setError('root.serverError', { message: errorResponse.error });
    }
}

export function formatShortDateTime(date: Date) {
    return format(date, 'dd MMM yy h:mm:a')
}

export function truncateString(text?: string | null, num = 50) {
    if (!text) return null;
    if (text.length <= num) {
        return text;
    }
    return text.slice(0, num) + '...';
}

export function createChatId(a: string, b: string) {
    const clean = (str: string) => str.replace(/[^a-zA-Z0-9_-]/g, '-');
    const [first, second] = a > b ? [b, a] : [a, b];
    return `${clean(first)}-${clean(second)}`;
}

export function timeAgo(date: string) {
    return formatDistance(new Date(date), new Date()) + ' ago';
}