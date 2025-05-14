export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json }
    | Json[]

export interface Database {
    public: {
        Tables: {
            voters: {
                Row: {
                    lastName: string
                    firstName: string
                    patronymic: string
                    date: Date | ["yyyy-MM-dd"],
                    region: string
                    phone: string
                }
                Insert: {
                    lastName?: string
                    firstName?: string
                    patronymic?: string
                    date?: Date | ["yyyy-MM-dd"]
                    region?: string
                    phone?: string
                }
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}