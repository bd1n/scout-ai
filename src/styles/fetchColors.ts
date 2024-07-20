const nflPrimaryColors: { [key: string]: string } = {
    ARI: "#97233F", // Arizona Cardinals
    ATL: "#A71930", // Atlanta Falcons
    BAL: "#241773", // Baltimore Ravens
    BUF: "#00338D", // Buffalo Bills
    CAR: "#0085CA", // Carolina Panthers
    CHI: "#0B162A", // Chicago Bears
    CIN: "#FB4F14", // Cincinnati Bengals
    CLE: "#311D00", // Cleveland Browns
    DAL: "#003594", // Dallas Cowboys
    DEN: "#FB4F14", // Denver Broncos
    DET: "#0076B6", // Detroit Lions
    GB: "#203731", // Green Bay Packers
    HOU: "#03202F", // Houston Texans
    IND: "#002C5F", // Indianapolis Colts
    JAX: "#006778", // Jacksonville Jaguars
    KC: "#E31837", // Kansas City Chiefs
    LV: "#000000", // Las Vegas Raiders
    LAC: "#002A5E", // Los Angeles Chargers
    LAR: "#003594", // Los Angeles Rams
    MIA: "#008E97", // Miami Dolphins
    MIN: "#4F2683", // Minnesota Vikings
    NE: "#002244", // New England Patriots
    NO: "#D3BC8D", // New Orleans Saints
    NYG: "#0B2265", // New York Giants
    NYJ: "#125740", // New York Jets
    PHI: "#004C54", // Philadelphia Eagles
    PIT: "#101820", // Pittsburgh Steelers
    SF: "#AA0000", // San Francisco 49ers
    SEA: "#002244", // Seattle Seahawks
    TB: "#D50A0A", // Tampa Bay Buccaneers
    TEN: "#0C2340", // Tennessee Titans
    WSH: "#773141", // Washington Commanders
};

const nflSecondaryColors: { [key: string]: string } = {
    ARI: "#000000", // Arizona Cardinals
    ATL: "#000000", // Atlanta Falcons
    BAL: "#9E7C0C", // Baltimore Ravens
    BUF: "#C60C30", // Buffalo Bills
    CAR: "#101820", // Carolina Panthers
    CHI: "#C83803", // Chicago Bears
    CIN: "#000000", // Cincinnati Bengals
    CLE: "#FF3C00", // Cleveland Browns
    DAL: "#041E42", // Dallas Cowboys
    DEN: "#002244", // Denver Broncos
    DET: "#B0B7BC", // Detroit Lions
    GB: "#FFB612", // Green Bay Packers
    HOU: "#A71930", // Houston Texans
    IND: "#A5ACAF", // Indianapolis Colts
    JAX: "#9F792C", // Jacksonville Jaguars
    KC: "#FFB81C", // Kansas City Chiefs
    LV: "#A5ACAF", // Las Vegas Raiders
    LAC: "#FFC20E", // Los Angeles Chargers
    LAR: "#FFD100", // Los Angeles Rams
    MIA: "#FC4C02", // Miami Dolphins
    MIN: "#FFC62F", // Minnesota Vikings
    NE: "#C60C30", // New England Patriots
    NO: "#101820", // New Orleans Saints
    NYG: "#A71930", // New York Giants
    NYJ: "#000000", // New York Jets
    PHI: "#A5ACAF", // Philadelphia Eagles
    PIT: "#FFB612", // Pittsburgh Steelers
    SF: "#B3995D", // San Francisco 49ers
    SEA: "#69BE28", // Seattle Seahawks
    TB: "#FF7900", // Tampa Bay Buccaneers
    TEN: "#4B92DB", // Tennessee Titans
    WSH: "#FFB612", // Washington Commanders
};


export function fetchMainColor(abv: string){
    return(nflPrimaryColors[abv])
}

export function fetchSecondaryColor(abv: string){
    return(nflSecondaryColors[abv])
}