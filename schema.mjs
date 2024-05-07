import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    article: [Articles!]!
    teamInfo(competition: String!): [TeamInfo]!
    standings_feed(competition:String!): [StandingsFeed!]
    playerSeasonStats(competition:String!,year:Int!) :[PlayerStats]!
    teamSeasonStats(competition:String!) :[TeamStats]!
    boxscore(competition:String!,gameid:Int!) :[Boxscore]!
  }
  type TeamStats{
    TeamSeasons:[teamSeasons]!
  }
  type Boxscore{
    MainReferee: mainReferee
   AwayTeamCoach: awayTeamCoach!
     Bookings :[bookings]
   Game : game
   Goals:[goals]
  TeamGames:[teamGames]
   HomeTeamCoach: homeTeamCoach!
   Lineups:[lineUps]
   PlayerGames:[playerGames]
  }
  type playerGames{
    Assists:Float
    Captain:Boolean!
    ShortName:String!
    TeamId:Int!
    Shots:Int 
    Position:String!
    ShotsOnGoal:Float
    Passes:Float
    PassesCompleted:Float
    Interceptions:Float
    GoalkeeperSaves:Float
    Fouls:Float
    Fouled:Float
    Goals:Float 
    YellowCards:Float
    DefenderCleanSheets:Float
    RedCards:Float
    PlayerId:ID!
    Tackles:Float
    TacklesWon:Float
  }
  type lineUps{
    GameId:Float
GameMinute:Float
LineupId:Float
Name:String!
PlayerId:Float
Position:String!
ReplacedPlayerId:Float
ReplacedPlayerName:String
TeamId:Float
Type:String!

  }
  type homeTeamCoach{
    ShortName:String!
    Nationality:String!
  }
  type teamGames{
    Crosses:Float
    DateTime:String
    Day:String
    Fouled:Float
    Fouls:Float
    GameId:Float 
    GoalkeeperCleanSheets:Float
    GoalkeeperGoalsAgainst:Float
    GoalkeeperSaves:Float 
    Goals:Float
    Name:String!
    Opponent:String!
    Passes:Float 
    PassesCompleted:Float
    Possession:Float
    Score:Float 
RedCards:String
Shots:Float
Touches:Float
TeamId:Float
  }
  type goals{
    
Name:String!

GameMinute:Float

TeamId:Int!

  }
  type game{
    Attendance:Float
    
AwayTeamFormation:String!
AwayTeamId:Float!
AwayTeamKey:String
AwayTeamName:String!
AwayTeamScore:Float
DateTime:String
Day:String
GameId:Float
GlobalAwayTeamId:Float 
GlobalGameId:Float
GlobalHomeTeamId:Float

HomeTeamFormation:String!
HomeTeamId:Float 
HomeTeamKey:String!
HomeTeamName:String!
HomeTeamScore:Float

RoundId:Float
  }
  type awayTeamCoach{
    ShortName:String!
    Nationality:String!
  }
  type bookings{
    GameId:Float
    GameMinute:Float
    Name:String!
    PlayerId:Float
    TeamId:Float!
    Type:String!
  }
  type mainReferee{
    FirstName:String
    LastName:String
Nationality:String
ShortName:String
  }
  type teamSeasons{
    Assists: Float
  BlockedShots: Float
  CornersWon: Float
  Crosses: Float
  DefenderCleanSheets: Float
  FantasyPoints: Float
  FantasyPointsDraftKings: Float
  FantasyPointsFanDuel: Float
  FantasyPointsMondogoal: Float
  FantasyPointsYahoo: Float
  Fouled: Float
  Fouls: Float
  Games: Float
  GlobalTeamId: Float
  GoalkeeperCleanSheets: Float
  GoalkeeperGoalsAgainst: Float
  GoalkeeperSaves: Float
  GoalkeeperSingleGoalAgainst: Float
  GoalkeeperWins: Float
  Goals: Float
  Interceptions: Float
  LastManTackle: Float
  Minutes: Float
  Name: String
  Offsides: Float
  OpponentScore: Float
  OwnGoals: Float
  Passes: Float
  PassesCompleted: Float
  PenaltiesConceded: Float
  PenaltiesWon: Float
  PenaltyKickGoals: Float
  PenaltyKickMisses: Float
  PenaltyKickSaves: Float
  Possession: Float
  RedCards: Float
  RoundId: Float
  Score: Float
  Season: Float
  SeasonType: Float
  Shots: Float
  ShotsOnGoal: Float
  StatId: Float
  Tackles: Float
  TacklesWon: Float
  Team: String
  TeamId:Float
  Touches: Float
  Updated: String
  UpdatedUtc: String
  YellowCards: Float
  YellowRedCards: Float

  }
type PlayerStats{
  PlayerSeasons:[playerSeasons]!
}
type playerSeasons {
  TeamId: Float
  Assists:Float
  BlockedShots: Float
  CornersWon: Float
  Crosses: Float
  DefenderCleanSheets: Float
  Fouled: Float
  Fouls: Float
  Games: Float
  GlobalTeamId: Float
  GoalkeeperCleanSheets: Float
  GoalkeeperGoalsAgainst: Float
  GoalkeeperSaves: Float
  GoalkeeperSingleGoalAgainst: Float
  GoalkeeperWins: Float
  Goals: Float
  Interceptions: Float
  LastManTackle: Float
  Minutes: Float
  Name: String
  Offsides: Float
  OpponentScore: Float
  OwnGoals: Float
  Passes: Float
  PassesCompleted: Float
  PenaltiesConceded: Float
  PenaltiesWon: Float
  PenaltyKickGoals: Float
  PenaltyKickMisses: Float
  PenaltyKickSaves: Float
  PlayerId: Float
  Position: String
  PositionCategory: Float
  RedCards: Float
  RoundId:Float
  Score: Float
  Season: Float
  SeasonType: Float
  ShortName: String!
  Shots: Float
  ShotsOnGoal: Float
  Started: Float
  StatId: Float
  Tackles: Float
  TacklesWon: Float
  Team: String
  Touches: Float
  Updated: Float
  UpdatedUtc: Float
  YellowCards: Float
  YellowRedCards: Float
}
  type StandingsFeed {
    Standings: [standings!]!
  }
  type standings{
    Draws:Int!
    Games:Int!
    GlobalTeamID:Int!
    GoalsAgainst:Int!
    GoalsDifferential:Int!   
    GoalsScored:Int!
    Losses:Int!
    Name:String!
    Order:Int!
    Points:Int!
    ShortName:String!
    StandingId:Int!
    TeamId:Int!
    Wins:Int
  }

  type TeamInfo {
    Key:String!
    Name:String!
 Gender:String!
 Teams:[Teams!]!
 Games:[Games!]!
  }
    type Games{
      AwayTeamId:Int!   
      AwayTeamKey:String!
      AwayTeamName:String!
      AwayTeamScore:Int
      DateTime:String
      Day:String
      GameId:Int!
      HomeTeamId:Int!
      HomeTeamKey:String!
      HomeTeamName:String!
      HomeTeamScore:Int
      Season:Int
    }
  type Teams{
    Name:String!
    WikipediaLogoUrl:String
    FullName:String!
    ClubColor1:String
ClubColor2:String
    TeamId:Int!
    Players:[Players!]!
  }
  type Players{
    ShortName:String!
    Position:String
    BirthDate:String
    Height:Int
    Weight:Int
    Nationality:String
    Jersey:Int
    PhotoUrl:String
    PlayerId:Int

  }
   
  type Articles {
    description: String
    publishedAt: String!
    title: String!
    urlToImage: String
  }
`;
