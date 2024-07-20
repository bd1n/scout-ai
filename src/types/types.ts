export interface InjuryStatus{
    description: string,
    injDate: string,
    designation: string,
}

interface RushingStats{
    rushYds: number,
    carries: number,
    rushTd: number,
}

interface PassingStats{
    passAttempts: number,
    passTD: number,
    passYds: number,
    int: number,
    passCompletions: number
}

interface ReceivingStats{
    receptions: number,
    recTD: number,
    targets: number,
    recYds: number
}
interface OffensiveStats{
    passingStats: PassingStats,
    rushingStats: RushingStats,
    receivingStats: ReceivingStats
}

export interface PlayerObject{
    playerID: number,
    name: string,
    position: string,
    jerseyNumber: number,
    headshotURL: string,
    gamesPlayed: number
    injuryStatus: InjuryStatus,
    freeAgentStatus: boolean,
    teamAbbreviation: string,
    rushingStats: RushingStats,
    passingStats: PassingStats,
    receivingStats: ReceivingStats
}