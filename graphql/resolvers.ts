export const resolvers = {
	Query: {
		links: async (_parents, _args, context) => await context.prisma.link.findMany(),
	},
};
