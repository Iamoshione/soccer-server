export const resolvers = {
  Query: {
    article: async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=28e79c85a04f4a56b01823666467239e "
        );
        const data = await response.json();
        const result = data.articles;
        return result;
      } catch (error) {
        throw new error("Fetch not successful");
      }
    },
    teamInfo: async (parent, { competition }) => {
      try {
        const response = await fetch(
          `https://api.sportsdata.io/v4/soccer/scores/json/CompetitionDetails/${competition}?key=48e0a108abfa41d99adf4abf9934efcc`
        );
        const data = await response.json();
        return [data];
      } catch (error) {
        throw new error("Leauge does not exist");
      }
    },
    standings_feed:async(parent,{competition})=>{
      try {
        const response = await fetch(`https://api.sportsdata.io/v4/soccer/scores/json/Standings/${competition}/2024?key=48e0a108abfa41d99adf4abf9934efcc`)
        const data = await response.json()
        return data
      } catch (error) {
        throw new error('Fetch has been unsuccessfull')
      }
    },
    playerSeasonStats: async(parent,{competition,year})=>{
      try {
        const response = await fetch(`https://api.sportsdata.io/v4/soccer/stats/json/PlayerSeasonStats/${competition}/${year}?key=48e0a108abfa41d99adf4abf9934efcc`)
        const data = await response.json()
        return data
      } catch (error) {
        throw new error('fetch has been unsuccessfull')
      }
    },
    teamSeasonStats : async(parent,{competition})=>{
      try {
        const response = await fetch(`https://api.sportsdata.io/v4/soccer/scores/json/TeamSeasonStats/${competition}/2024?key=48e0a108abfa41d99adf4abf9934efcc`)
        const data = response.json()
        return data
      } catch (error) {
        throw new error('fetch has been unsuccessfull')
      }
    },
    boxscore : async(parent,{competition,gameid})=>{
      try {
         const response = await fetch(`https://api.sportsdata.io/v4/soccer/stats/json/BoxScore/${competition}/${gameid}?key=48e0a108abfa41d99adf4abf9934efcc`)
         const data = await response.json()
         return data;
      } catch (error) {
        throw new error('fetch has been unsuccesful')
      }
      }
  },

};
