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
    launch_date_unix: { type: GraphQLString },
    rocket: { type: RocketType },
    static_fire_date_unix: { type: GraphQLString }
  })
});

const TimeType = new GraphQLObjectType({
  name: 'Time',
  fields: () => ({
    ship_id: { type: GraphQLString },
  })
});

const SiteType = new GraphQLObjectType({
  name: "Site",
  fields: () => ({
    site_id: { type: GraphQLString },
    site_name: { type: GraphQLString },
    site_name_long: { type: GraphQLString }
  })
});

const FailType = new GraphQLObjectType({
  name: "Fail",
  fields: () => ({
    time: { type: GraphQLInt },
    reason: { type: GraphQLString }
  })
});

const CoreType = new GraphQLObjectType({
  name: "Core",
  fields: () => ({
    core_serial: { type: GraphQLString },
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

const ShipType = new GraphQLObjectType({
  name: 'Ship',
  fields: () => ({
    ship_id: { type: GraphQLString },
    ship_name: { type: GraphQLString },
    weight_lbs: { type: GraphQLInt },
    weight_kg: { type: GraphQLInt },
    home_port: { type: GraphQLString }
  })
});

const DragonType = new GraphQLObjectType({
  name: 'Dragon',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    crew_capacity: { type: GraphQLInt }
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
        id: { type: GraphQLString }
      },
      resolve(parent: any, args: any) {
        return axios.get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
          .then((res: { data: any; }) => res.data);
      }
    },
    sites: {
      type: new GraphQLList(SiteType),
      resolve(parent: any, args: any) {
        return axios.get('https://api.spacexdata.com/v3/launches')
          .then((res: { data: any; }) =>  res.data);
      }
    },
    site: {
      type: SiteType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parent: any, args: any) {
        return axios.get(`https://api.spacexdata.com/v3/launches/${args.id}`)
          .then((res: { data: any; }) => res.data);
      }
    },
    ships: {
      type: new GraphQLList(ShipType),
      resolve(parent: any, args: any) {
        return axios.get('https://api.spacexdata.com/v3/ships')
          .then((res: { data: any; }) =>  res.data);
      }
    },
    ship: {
      type: ShipType,
      args: {
        ship_id: { type: GraphQLString }
      },
      resolve(parent: any, args: any) {
        return axios.get(`https://api.spacexdata.com/v3/ships/${args.ship_id}`)
          .then((res: { data: any; }) => res.data);
      }
    },
    dragons: {
      type: new GraphQLList(DragonType),
      resolve(parent: any, args: any) {
        return axios.get('https://api.spacexdata.com/v3/dragons')
          .then((res: { data: any; }) =>  res.data);
      }
    },
    dragon: {
      type: DragonType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent: any, args: any) {
        return axios.get(`https://api.spacexdata.com/v3/dragons${args.id}`)
          .then((res: { data: any; }) => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});