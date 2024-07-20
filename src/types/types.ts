export interface InjuryStatus{
    description: string,
    injuryDate: string,
    designation: string,
}

export interface RushingStats{
    rushAttempts: number,
    rushTouchdowns: number,
    rushYards: number,
}

export interface PassingStats{
    passAttempts: number,
    passCompletions: number,
    passYards: number,
    passTouchdowns: number,
    interceptionsThrown: number
}

export interface OffensiveStats{
    passingStats: PassingStats,
    rushingStats: RushingStats
}

export interface PlayerObject{
    playerID: number,
    name: string,
    position: string,
    jerseyNumber: number,
    headshotURL: string,
    injuryStatus: InjuryStatus,
    freeAgentStatus: boolean,
    teamCityAbbreviation: string,
    offensiveStats: OffensiveStats
}