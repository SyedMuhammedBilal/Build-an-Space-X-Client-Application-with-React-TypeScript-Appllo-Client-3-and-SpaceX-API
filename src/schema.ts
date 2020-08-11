const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql');
const axios = require('axios');

const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_site: { type: SiteType },
    launch_success: { type: GraphQLBoolean },
    launch_failure_details: { type: FailType },
    rocket: { type: RocketType },
  })
});

const SiteType = new GraphQLObjectType({
  name: "Site",
  fields: () => ({
    site_id: { type: GraphQLString },
    site_name: { type: GraphQLString },
  })
});

const FailType = new GraphQLObjectType({
  name: "Fail",
  fields: () => ({
    time: { type: GraphQLInt },
    reason: { type: GraphQLString }
  })
});

const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent: any, args: any) {
        return axios.get('https://api.spacexdata.com/v3/launches')
          .then((res: { data: any; }) =>  res.data);
      }
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt }
      },
      resolve(parent: any, args: { flight_number: any; }) {
        return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
          .then((res: { data: any; }) => res.data);
      }
    },
    rockets: {
      type: new GraphQLList(RocketType),
      resolve(parent: any, args: any) {
        return axios.get('https://api.spacexdata.com/v3/rockets')
          .then((res: { data: any; }) =>  res.data);
      }
    },
    rocket: {
      type: RocketType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parent: any, args: any) {
        return axios.get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
          .then((res: { data: any; }) => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});