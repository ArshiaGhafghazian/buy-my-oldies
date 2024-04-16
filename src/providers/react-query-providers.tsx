"use client"

import { queryClient } from "@/libs/react-query"
import { QueryClientProvider } from "@tanstack/react-query"

const QueryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryProvider