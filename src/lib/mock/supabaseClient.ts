import type { MockData } from '$lib/types/supabase';

const mockData: MockData[] = [
	{
		id: 1,
		firstName: 'John',
		lastName: 'Doe',
		email: 'john@test.com',
		phone: '+12764775504'
	}
];

export const mockSupabaseClient = {
	from: (table: string) => ({
		select: async (id: number) => ({
			data: mockData.find((data) => data.id === id),
			error: null
		})
	})
};
